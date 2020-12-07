# node-mongo-express-assignment
The repository has been designed by Nazneen Sultana to fullfill the task laid out in the assignment. The repository contains a nodejs application setup on express integrated with mongoDB. The aim of the application is to run the API designed to insert, update, delete and select data from the players database designed in previous assginment.

To set up the project, please clone the repository and then,

**RUN npm install**

This should install all the depending libraries to set up the project Then,

**RUN node app.js**

This should start your node application and the application should be accessible on

**http://localhost:3000**

The application contains a POST API, which updates,insert,delete and search data in the details collection of player database based on the request data.

To connect to access the api use,

**http://localhost:3000/action**

**The request format for inserting data is:**

{ "action":"insert", "data":{ "name":"Yousuf", "wickets":230, "catches":8922, "runs":54535 }, "limit":0 }

**The request format to delete the data is:**

{ "action":"delete", "data":{ "runs":5435 }, "where":{ "name":"Yousuf" }, "limit":5 }

**The request format to update the data is:**

{ "action":"update", "data":{ "runs":5435 }, "where":{ "name":"Yousuf" }, "limit":5 }

**The request format to select the player with max runs is:**

{ "action":"search", "data":{ "runs":"-1" }, "limit":1 }

**The request format to select the player with lowest runs is:**

{ "action":"search", "data":{ "runs":"1" }, "limit":1 }

**The request format to select the top five players with max wickets is:**

{ "action":"search", "data":{ "wickets":"-1" }, "limit":5 }

