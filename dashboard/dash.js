document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home');
    const profileLink = document.getElementById('profile');
    const settingsLink = document.getElementById('settings');
    const contentDiv = document.getElementById('content');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        contentDiv.innerHTML = '<h2>Home</h2><p>Welcome to the dashboard!</p>';
    });

    profileLink.addEventListener('click', function(event) {
        event.preventDefault();
        contentDiv.innerHTML = '<h2>Profile</h2><p>This is your profile.</p>';
    });

    settingsLink.addEventListener('click', function(event) {
        event.preventDefault();
        contentDiv.innerHTML = '<h2>Settings</h2><p>Here are your settings.</p>';
    });
});


function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }