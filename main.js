// BACKEND

// Include important packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path');
var serveStatic = require('serve-static');
const jwt = require("jsonwebtoken");

// Create server
const app = express();

// Configure connection to Postgresql DB
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'myDB',
  password: 'password',
  port: 5432,
});

// Confugure middlewares
app.use(cors());
app.use(bodyParser.json());

// App secret to sign JWT
app.set('appSecret', 'appsecret');

// Serve static content (Frontend)
app.use(serveStatic(__dirname + "/dist"));

// Login API
app.post("/login",function(req, res) {
  var email=req.body.email;
  var password=req.body.password;

  // Search for user in database
  pool.query("select * from public.users where email = '"+email+"' and password= '"+password+"'", (error, results) => {
    if (error)
      {res.status(500).json({'message':'Error,plase try again'}); return;}
    
    
    if (results.rowCount==0)
      res.status(403).json({'message':'Wrong credentials'})
    else
    {
      user=results.rows[0];

      const payload = {
        user: user['ID'] , iat: Math.floor(Date.now() / 1000) - 30   
      }
      // Create token
      let token = jwt.sign(payload, app.get("appSecret"), {
        expiresIn: "24h" // Expires in 24 hours
      });
      // Send response back to client
      return res.status(200).json({
        token : token,
        id:user['ID']
      });
    }
  

  }); 
});

// Get all tour guides API
app.get('/getTourGuides',function(req, res) {
    pool.query('select * from public.tour_guides', (error, results) => {
     
        
      if (error!==undefined&&error)
        {res.status(500).json({'message':'Error,plase try again'}); return;}
     
      res.status(200).send(JSON.stringify(results.rows));
  
  }); 
});
 
// Create middleware for protecting routes
app.use(function(req, res, next) {

      // Check header or url parameters or post parameters for token
      let token =req.body.token || req.query.token || req.headers["x-access-token"];

      // Decode token
      if (token) 
      {
        // Verifies secret and checks exp
        jwt.verify(token, app.get("appSecret"), function(err, decoded) {
          if (err) 
          {
            return res.status(401).send({
              success: false,
              message: "Failed to authenticate token."
            });
          } 
          else 
          {
            // If everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
          }
        });
      } 
      else 
      {
        // If there is no token return an error
        return res.status(403).send({
          success: false,
          message: "No token provided."
        });
      }
}); 
  

// ADD Tour guide API
app.post("/addTourGuide",function(req, res) {

  var data=req.body;
  // Create PostgreSql query
  var query="Insert into public.tour_guides values ('"+data.name+"','"+data.number+"','"+data.city+"',"+data.fees.toString()+",'"+
  data.nationality+"','"+data.nationalid+"','"+data.passportnum+"','"+data.licensenum+"','{";
  for (let index = 0; index < data.languages.length-1; index++) {
    const element = data.languages[index];
    query+=(element+",");
  }
  query+=(data.languages[data.languages.length-1]+"}',"+data.id+")");
  console.log(query);

  // Execute query 
  pool.query(query, (error, results) => {

    // If error return 500
    if (error!==undefined && error)
      {res.status(500).json({'message':'Error,plase try again'}); return;}
    
    // results.rowCount is equal to 1 when query succeeds
    if (results.rowCount==1)
      {
        pool.query('select max("ID") from public.tour_guides;', (error2, results2) => {
          if(error2!==undefined&&error2)console.log(error2);   
          res.status(200).json({'message':'Added!!','id':results2.rows[0].max})
        });
      }
    else
    {
     res.status(500).json({'message':'Error,plase try again'})
    }

  });
     
});

// Update tour guide API
app.put("/updateTourGuide/:id",function(req, res) {

    // Create query
    var data=req.body;
    var query='UPDATE public.tour_guides set "name"=\''+data.name+'\',"number"=\''+data.number+'\',"city"=\''+data.city+'\',"fees"='+data.fees.toString()+
    ',"nationality"=\''+data.nationality+'\',"nationalid"=\''+data.nationalid+'\',"passport_num"=\''+data.passportnum+'\',"license_num"=\''+data.licensenum+'\',"languages"=\'{';
    for (let index = 0; index < data.languages.length-1; index++) {
      const element = data.languages[index];
      query+=(element+",");
    }
    query+=(data.languages[data.languages.length-1]+'}\' where "ID"='+req.params.id.toString());
    console.log(query);

    // Execute query
    pool.query(query, (error, results) => {
      if (error!==undefined && error)
        {res.status(500).json({'message':'Error,plase try again'}); return;}
      
        res.status(200).json({'message':'Updated!!'})
  
    });
});

// Get tour guides of a specific admin API
app.get('/getTourGuide/:id',function(req, res) {

    var id=req.params.id;
    pool.query('select * from public.tour_guides where admin_id='+id.toString(), (error, results) => {
     
        
      if (error!==undefined && error)
        {res.status(500).json({'message':'Error,plase try again'}); return;}
     
      res.status(200).send(JSON.stringify(results.rows));
  
    }); 
});

// Delete a tour guide
app.delete('/delTourGuide/:id',function(req, res) {
      var id=req.params.id;
      
      pool.query('delete from public.tour_guides where "ID"='+id.toString(), (error, results) => {
       
        console.log(error);
        if (error!==undefined && error)
          {res.status(500).json({'message':'Error,plase try again'});
        return;}
        
        res.status(200).json({'message':'Deleted!!'});
    
      }); 
  });
 
// App listens on http://localhost:4100/      
const port = process.env.PORT || 4100;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
