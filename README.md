# Foundry SignalR Communication to Other Applications

This application if a Proof of Concept for pushing data into and out of the Foundry Virtual Table Top (FVTT) using SignalR.

`foundry-signalR-Actors` is the repository with the [Foundry Module](https://foundry-vtt-community.github.io/wiki/Modules/#developing-modules) used to initiate a SignalR connection from within FVTT.

`FoundrySignalRServer` is the .NET web server hosting the SignalR Hub. (This could be [Serverless Azure SignalR](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-concept-azure-functions))

`NonFoundrySignalRClient` is a basic node app that acts as an outside client from FVTT.

In this example, the `FoundrySignalRServer` Hub should be up and running first. Then you run the `NonFoundrySignalRClient` to listen for messages. Finally, run the FVTT Module within the browser and watch the developer console (F12)

See the MSFT docs for more info on SignalR:

    https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction?view=aspnetcore-3.1
    https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio-code

