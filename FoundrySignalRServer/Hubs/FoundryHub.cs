using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class FoundryHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            Console.WriteLine("Message Received from:");
            Console.WriteLine(user);
            Console.WriteLine("Sending to everyone!");

            await Clients.All.SendAsync("ReceiveMessage", user, message); 
        } 
        public Task SendPrivateMessage(string user, string message)
        {
            return Clients.User(user).SendAsync("ReceiveMessage", message);
        }

        public async Task AddToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

            await Clients.Group(groupName).SendAsync("Send", $"{Context.ConnectionId} has joined the group {groupName}.");
        }

        public async Task UpdateActorsForGroup(string groupName, string actors) 
        {
            await Clients.Group(groupName).SendAsync("Send", actors);
        }
    }
}