
## First download packages
```
npm install
```

### Configure your Postgre database
database.sql contain important queries to configure your database.
Notes:
- Don't execute the whole file as a script, because you will need to switch to create a database which is not permitted in a script (check: https://www.postgresql.org/message-id/46F78D1E.6050209%40postgresql.org).
- You will create a user called admin to be used by Nodejs to access database. I hope that you don't have a user with this name. If you have, please change its password to 'password' or you can change database credentials in main.js file found in the root directory.


### Run project
```
node main.js
```

Application is now runing on http://localhost:4100/
You can sign in using the following credentials:

Email: omar.e.sharkawy@gmail.com
Password: admin