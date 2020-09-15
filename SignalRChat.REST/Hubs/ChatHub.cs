using System.Threading.Tasks;

using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.REST.Hubs {
  public class ChatHub : Hub {

    public void SendToAll(string name, string message) {
      Clients.All.SendAsync("sendToAll", name, message);
    }

    public async Task SendMessage(string user, string message) {
      await Clients.All.SendAsync("ReceiveMessage", user, message);
    }

  }
}
