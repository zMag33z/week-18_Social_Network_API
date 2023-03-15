# week-18_Social_Network_API

## This is a backend MongoDB database created for a Social Networking API.&nbsp;&nbsp;This includes a personalized friends list.&nbsp;&nbsp;It allows sharing of thoughts and reactions to those thoughts with one another.&nbsp;&nbsp;It also allows any adjustments needed for correction to any data input by the user.<br><br>

### **Table of contents:**

- [Getting Started](#getting)
- [Installations](#installations)
- [Usage](#usage)
- [Resources](#resources)
- [Location](#location)
- [License](#license)

## Getting Started:

![npm version](https://img.shields.io/badge/node-v18.12.1-9cf)<br>First to get started, you will need to have downloaded Node.js.&nbsp;&nbsp;If you haven't, you may go here.&nbsp;&nbsp;[*Node.js downloads*](https://nodejs.org/en/download/)<br><br>![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.17-9cf)<br>Second, you will need to have downloaded MongoDB.&nbsp;&nbsp;If you haven't, you may go here.&nbsp;&nbsp;[*MongoDB Compass downloads*](https://www.mongodb.com/products/compass)<br><br>

![Insomnia](https://img.shields.io/badge/Insomnia-v2022.7.1-9cf)<br>Third, you will need to have downloaded Insomnia.&nbsp;&nbsp;If you haven't, you may go here.&nbsp;&nbsp;[*Insomnia downloads*](https://insomnia.rest/products/insomnia)

## Installations:

![npm version](https://img.shields.io/badge/express-v4.17.1-9cf)&nbsp;&nbsp;![npm version](https://img.shields.io/badge/mongoose-v6.10.1-9cf)
  
First, you'll need to navigate to the correct directory and open it in an 'Integrated Terminal'.<br><br>* This can be done simply by 'right clicking' the package.json file, and selecting 'Open in Integrated Terminal'.<br><br>Next you'll want to type in the command line *Example 1* below.<br>* This will update the package.json file to your local directory path.

*Example 1:*
```shell
npm init -y
```

Next, you will want to type in the command line *Example 2* below.<br>* This will install the neccessary dependancies needed that are defined in the package.json file.

*Example 2:*
```shell
npm install
```

Now you should see a folder *node_modules* and a file *package-lock.json*.<br>* This folder contains the *packets* needed for the application to run and the lock file is the *path directory* for that folder.

### [**Back to top**](#)

## Usage:
  
This database is fresh with no *pre-existing* data, ready for client side document to get, put, post, and delete through fetch requests.  Here we will be demonstrating using insomnia as our fetcher to view and modify this database.

First, while still being in the 'Integrated Terminal' (if not simple right click on the package.json file again and choose 'Integrated Terminal'), type the *CL example* below into the command line.

*CL Example:*
```shell
npm start
```

***If an error occured while connecting, navigate to the config folder and inside the connect.js file change the path '127.0.0.1' to 'localhost'.***

The last statement presented in the console should read, *API server running on port 3001!*.<br>*&nbsp;*You must leave the 'Integrated Terminal' opened.  This is your live connection to your localhost.*<br><br>

### **Now open your Insomnia program.**<br><br>

**View All Users**<br>
At the address bar, select GET, and enter *INS Example 1* below.<br>* This will fetch all users existing in the database.<br>

*INS Example 1:*
```
http://localhost:3001/api/users
```

Now press send.

* In the object preview field you'll see that the output is an empty array.<br>
*INS Output 1:*<br>
![Insomnia screen 1](./assets/screen1.png)<br>

**Create New User**<br>
At the address bar, select 'Post', leaving the path as **api/users**.<br>Enter *INS Object 2* below into the JSON field.<br>* This will create a new user within the database.

*INS Object 2:*
```
{
	"username": "testerONE",
	"email": "testONEemail@mailing.net"
}
```

Now press send.

* Returned within the preview field is the new user with other documents/tables/collections within it.<br>
*INS Output 2:*<br>
![Insomnia screen 2](./assets/screen2.png)
<br>
### **Repeat the post process two to three more times, *changing* the '*username*' and '*email address*'.**
<br>

**View All Newly Created Users**<br>
At the address bar, select 'GET', leaving the path as **api/users**.  Now press send.

* Returned within the preview field is now all users previously created within the database.<br>
*INS Output 2:*<br>
![Insomnia screen 2](./assets/screen2.png)

**Update User Data**<br>
Now to update a user's information.  Copy the first user's id.  At the address bar enter the address in *INS Example 3*, replace user _id (including the greater/less than symbols) with the copied first user's id.  Now change 'Get' to 'Put'.  Then in the JSON field enter *INS Object 3* below.<br>* This will update the user's information.

*INS Example 3:*
```
http://localhost:3001/api/users/<user _id>
```

*INS Object 3:*
```
{
	"username": "testingONEChange",
	"email": "changeONE.email@mailing.net"
}

```
Now press send.

* Returned within the preview field is our user's update information.<br>
*INS Output 3:*<br>
![Insomnia screen 3](./assets/screen3.png)

**Add Friend to Friend List**<br>
Repeat the step for ***View All Users***.  Copy two sepatate user _id's down.  Now in the address bar of insomnia eneter *INS Example 4*.  Replace the user _id with one copied id, and replace the friend _id with the second copied id.  Then in the JSON field enter an empty object as *INS Object 4*.

*INS Example 4:*
```
http://localhost:3001/api/users/<user _id>/friends/<friend _id>
```

*INS Object 4:*
```
{

}
```

Now press send.

* Returned is the *User* with an id inside the FriendList array.<br>
*INS Output 4:*<br>
![Insomnia screen 4](./assets/screen4.png)

**Create A Thought**<br>
Again repeat step for ***Get All Users*** and copy the '*first*' user's id (the one updated previously). At the address bar, select 'POST', and enter *INS Example 5* below replacing user _id with the copied id.<br>Then enter *INS Object 5* into the JSON field.<br>

*INS Example 5:*
```
http://localhost:3001/api/thoughts/
```

*INS Object 5:*
```
{
	"username": "testingONEChange",
	"text": "test text ONE",
	"userID": "<user _id>"
}
```
*the username and userID fields are specific.  if not matching error will be thrown*

Now press send.

* Returned is the *USER* in the preview field.  The *thought_id* is inside of our *user's* thoughts array.<br>
*INS Output 5:*<br>
![Insomnia screen 5](./assets/screen5.png)

**Create Reaction to Thought**<br>
Again repeat step for ***Get All Users*** and copy the '*second*' user's id. Now copy the '*first*' user's thought id within the array. At the address bar, select 'POST', and enter *INS Example 6* below replacing thought _id with the copied thought id.<br>Then enter *INS Object 6* into the JSON field.<br>

*INS Example 6:*
```
http://localhost:3001/api/thoughts/<thought _id>/reactions
```

*INS Object 6:*
```
{
	"username": "testerTWO",
	"text": "test text FOUR"
}
```
*AGAIN the username is specific.  if not matching error will be thrown*

Now press send.

* Returned is the *THOUGHT* in the preview field.  The *reaction text* and *username* appear along side a *reactionId*.<br>
*INS Output 6:*<br>
![Insomnia screen 5](./assets/screen5.png)

**View All Thoughts**
At the address bar, select 'GET', and enter *INS Example 7*.<br>

*INS Example 7:*
```
http://localhost:3001/api/thoughts/
```

Now press send.

* Return in the preview field are all *Thoughts* within the database.<br>
*INS Output 7:*<br>
![Insomnia screen 5](./assets/screen5.png)

*&nbsp;*Usage 'Output' examples ***here*** does NOT reflect ALL 'Fetch requests'.*<br>For more references, view the *walkthrough video* below.

**Walkthrough video [*click here*.](https://drive.google.com/file/d/1MgjOiwTnzAuIYv1BSkaSaoRjxsPr5iXj/view)**

### [**Back to top**](#)

## Resources:

[node.js](https://nodejs.org/en/docs/)<br>[express](https://expressjs.com/)<br>[mongoose](https://mongoosejs.com/docs/)<br>[MongoDB](https://www.mongodb.com/)<br>[Google](https://www.google.com)<br>

## Location:

[Social Network API](https://github.com/zMag33z/week-18_Social_Network_API)

## License:
  
![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)
  
See *Terms & Conditions* of the license [***here***](https://opensource.org/licenses/MIT).

<br>


### [**Back to top**](#)