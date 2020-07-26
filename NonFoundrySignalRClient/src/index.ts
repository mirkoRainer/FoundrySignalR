import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000/foundryHub")
    .build();

connection.on("ReceiveMessage", (username: string, message: string) => {
    console.log(username + " sent " + message)
});

connection.start().catch(err => document.write(err));