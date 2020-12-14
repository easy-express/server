
<h1 align="center">Welcome to Easy-Express 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@easy-express/server" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@easy-express/server.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple, customizable, and extensible express server in Typescript.

### 🏠 [Homepage](https://github.com/leonardparisi/easy-express-server#readme)

## Introduction
At its core, Easy-Express is an extensible version of your typical express server. To add big feature sets to your server, you simply have to attach Easy-Express modules to it and you're good to go. Say, for example, you wish your server to have easy-to-use database integration; the @easy-express/sequelize module is just for you! Well, what if on top of that, you want to use GraphQL? Attach the @easy-express/graphql module too! 

The plan is to give you guys the ability to quickly build a robust server that has all the features you want without all the hassle.

## Install

```sh
npm install @easy-express/server
```
## Usage
An Easy-Express Server is simply a class that holds a reference to an express application. To modify the express application in any way, you would get the instance of the express application and call what ever methods you'd like. 

### Example

    import { EasyExpressServer } from  "@easy-express/server";
    
    // Create a new server
    
    let  server = new  EasyExpressServer();
      
    // Define a 'get' route
    
    server.instance.get("/", (req, res) => {
    
    res.send("Hello World!");
    
    });
    
    // Start the server
    
    server.start();

## Modules
Coming soon...

## Author

👤 **Leonard Parisi**

* Website: leonardparisi.com
* Github: [@leonardparisi](https://github.com/leonardparisi)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/lenny-parisi\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/lenny-parisi\/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/leonardparisi/easy-express-server/issues). You can also take a look at the [contributing guide](ssh://git@github.com:leonardparisi/easy-express-sequelize/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
