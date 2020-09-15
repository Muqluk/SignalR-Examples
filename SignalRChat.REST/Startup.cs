using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using SignalRChat.REST.Hubs;

namespace SignalRChat.REST {
  public class Startup {
    public Startup(IConfiguration configuration) {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services) {
      services.AddCors(o =>
        o.AddPolicy("CorsPolicy", builder => { // refer to Configure method, app.UseCors() below
          builder
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials()
          .AllowAnyOrigin()
          .WithOrigins("http://localhost:9000")
          ; // trailing semi-colon deliberately set.
        }));

      services.AddControllers();
      services.AddSignalR();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
      app.UseCors("CorsPolicy"); // refer to ConfigureServices.services.AddCors() above.

      if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
      }

      app.UseRouting();
      app.UseAuthorization();
      app.UseEndpoints(endpoints => {
        endpoints.MapControllers();
        endpoints.MapHub<ChatHub>("/chathub");
      });
    }
  }
}
