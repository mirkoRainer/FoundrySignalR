import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

console.log("SignalR Actors | Hello World! This code runs immediately when the file is loaded.");

// CONFIG.debug.hooks = true;

const connection = new HubConnectionBuilder()
.withUrl("http://localhost:5000/foundryHub")
.configureLogging(LogLevel.Error)
.build();


Hooks.on("init", function() { 
  console.log("SignalR Actors | This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("SignalR Actors | This code runs once core initialization is ready and game data is available.");

  connection.start().then(function () {
      console.log("SignalR Actors | Connection started!")
  }).catch(function (err) {
      return console.error(err.toString());
  });
  
  connection.on("ReceiveMessage", function (user, message) {
    console.log("SignalR Actors | RECEIVED MESSAGE")
    console.log("SignalR Actors | " + user)
    console.log("SignalR Actors | " + message)    
  });
});

setTimeout(() => {
  let user = "Mirko";
  console.log(game.actors.entries[0].data.name);
  let message = JSON.stringify(game.actors.entries[0].data.name);
  connection.invoke("SendMessage", user, message).catch(function (err) {
    return console.error(err.toString());
  });
}, 3000);