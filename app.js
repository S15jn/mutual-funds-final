document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const investment = parseFloat(document.getElementById('investment').value);

    // Your prediction algorithm here
    const predictedAmount = investment * 1.1; // Just a simple prediction algorithm for demonstration

    document.getElementById('predictionResult').innerHTML = `
      <h3>Predicted Amount after One Year:</h3>
      <p>${predictedAmount.toFixed(2)}</p>
    `;
  });


  // cookies
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('overlay').style.display = 'block';
    }, 2000); // Show the popup after 10 seconds
  
    document.getElementById('acceptBtn').addEventListener('click', function() {
      document.getElementById('overlay').style.display = 'none';
      // Here you can add code to set a cookie or save the user's acceptance of terms
    });
  });
  
