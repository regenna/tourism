using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.Reflection;
using web_do_an.user;
using web_do_an.Models.Model_TT;
using web_do_an.Repositories.EFRepository;
using web_do_an.Repositories.IRepository;
using FluentAssertions.Common;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddScoped<user_TK>();

builder.Services.AddDistributedMemoryCache(); // Lưu trữ Session trong bộ nhớ
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30); // Thời gian tồn tại của Session
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

builder.Services.AddScoped<ITourRepository, EFTourRepository>();

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
app.UseSession();

app.UseAuthorization();


app.MapControllerRoute(
    name: "areas",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=TrangChu}/{action=Index}/{id?}");


app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
    name: "Admin",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");
    endpoints.MapControllerRoute(
    name: "default",
    pattern: "{controller=TrangChu}/{action=Index}/{id?}");
});

app.Run();
