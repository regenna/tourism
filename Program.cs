using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using web_do_an.Models;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services to the container.
builder.Services.AddControllersWithViews();



var assemblies = AppDomain.CurrentDomain.GetAssemblies(); // Lấy tất cả các assembly hiện tại

foreach (var assembly in assemblies)
{
    var types = assembly.GetTypes()
        .Where(t => t.IsClass && !t.IsAbstract && t.Name.StartsWith("EF") && t.GetInterfaces().Any()); // Tìm các lớp bắt đầu bằng EF

    foreach (var type in types)
    {
        var interfaceType = type.GetInterfaces()
            .FirstOrDefault(i => i.Name == "I" + type.Name.Substring(2)); // Tìm interface tương ứng với tên lớp
        
        if (interfaceType != null)
        {
            builder.Services.AddScoped(interfaceType, type); // Đăng ký interface với implementation
        }
    }
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseStaticFiles();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=TrangChu}/{action=Index}/{id?}");

app.Run();
