## Application Overview
Simple To Do Application that allows user to add, edit, delete and complete daily tasks.

## Prerequisites

The following needs to be installed in your computer
* Node.js
*Express.js
* MongoDB

**Use Powershell or Command Prompt for installations using the following commands

### npm create-react-app
This creates package.json file with the necessary react packages

### npx install @reduxjs/toolkit
Installs Redux Toolkit which provides powerful data fetching and caching capabilities

### npm init -y
This triggers initialization and the -y initiates all packages automatically

### npm install express --save
Installs Express in the directory and saves it in the dependencies list

### npm start

Runs the application in development mode

## Database Setup

run "npm install mongodb --save"

## Backend Setup
*Node.js

API Reference documentation on "https://www.nodejs.org"

*Express

Express API's included:

express() - creates an express application
express.json - middleware function in express that parses incoming requests with JSON
express.raw - parses incoming requests into a buffer

Read more on "https://www.expressjs.com"


## Frontend Setup

* React Frontend (frontend-react)
* Redux

installs:
*fontawesome
*solid-svg-icons

Redux API's included:

configureStore() - provides configuration option by wrapping createSore, combines reducers, adds middleware
includes redux-thunk and enables use of Redux DevTools Extensions.

createAction() - generates an action creator function for the given action type.

Read more on "https://www.redux-toolkit.js.org"

Starting the Backend, Frontend, and Proxy Servers

    (1) Refer to the setup instructions in each implementation's README to configure and launch the backend server.
    (2) Refer to the setup instructions in each implementation's README to configure and launch the frontend server.
    (3) Follow the instructions in the README of the proxy-server subproject to initiate the proxy server on port 3000.
    (4) After successfully starting the backend, frontend, and proxy servers, navigate to http://localhost:3000 in your browser.


