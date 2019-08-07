--
-- PostgreSQL database dump
--

-- Dumped from database version 10.9 (Ubuntu 10.9-1.pgdg16.04+1)
-- Dumped by pg_dump version 11.4 (Ubuntu 11.4-1.pgdg16.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

-- Create user used by nodejs to access database
CREATE USER admin WITH PASSWORD 'password';

CREATE DATABASE "myDB" OWNER=admin;

-- Connect to database myDB using the following command \c myDB; OR from pgadmin



--
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    "ID" integer NOT NULL,
    email text,
    password text
);


ALTER TABLE public.users OWNER TO admin;

--
-- Name: users uniqueID; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "uniqueID" UNIQUE ("ID");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("ID");


--
-- Name: tour_guides; Type: TABLE; Schema: public; Owner: admin
--
 
CREATE TABLE public.tour_guides (
    name text NOT NULL,
    number text NOT NULL,
    city text NOT NULL,
    fees integer NOT NULL,
    nationality text NOT NULL,
    nationalid text NOT NULL,
    passport_num text NOT NULL,
    license_num text NOT NULL,
    languages text[] NOT NULL,
    admin_id integer REFERENCES public.users("ID"),
    "ID" integer NOT NULL
);


ALTER TABLE public.tour_guides OWNER TO admin;

--
-- Name: tour_guides_ID_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.tour_guides ALTER COLUMN "ID" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."tour_guides_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

-- Add User

INSERT INTO public.users
VALUES
(0,'omar.e.sharkawy@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');




--
-- PostgreSQL database dump complete
--

