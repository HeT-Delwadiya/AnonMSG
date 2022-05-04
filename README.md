# AnonMSG
 An anonymous message sharing platform. 

## Description

A platform built using NEXT JS, and used mongo as database. You can share secret message with seft-destruction option after being read and password protection option is also available. You can set auto destruction time of message also.

## Demo
  * [![Netlify Status](https://api.netlify.com/api/v1/badges/cfeb04a4-5920-4982-af4e-7fc17f21eb30/deploy-status)](https://app.netlify.com/sites/anonmsg/deploys)
  * This application is deployed on Netlify. Please check it out :smile: https://anonmsg.netlify.app/ 

## Install

Some basic Git commands are:

```
$ git clone https://github.com/HeT-Delwadiya/AnonMSG.git
$ cd project
$ npm install
```

## Setup

```
 Create .env.local file that includes:

  * MONGO_URI=mongodb://localhost:27017/anonMsgDB
  * NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
  
 We need to add TTL index also to our db. Run below command:
  * db.anonMsgDB.createIndex({destroyTime:1},{expireAfterSeconds:0})
```


## Simple build for production

```
$ npm run build
```

## Run the application for development

```
$ npm run dev 
```


## Languages & tools

- [Node](https://nodejs.org/en/)

- [Next](https://nextjs.org/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

