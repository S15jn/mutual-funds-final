document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('overlay').style.display = 'block';
    }, 5000); // Show the popup after 10 seconds
  
    document.getElementById('acceptBtn').addEventListener('click', function() {
      document.getElementById('overlay').style.display = 'none';
      // Here you can add code to set a cookie or save the user's acceptance of terms
    });
  });
  