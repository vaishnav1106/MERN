 // Set the initial time when the page loads
 var start = new Date().getTime();

 // Function to move the shape and prepare for the next interaction
 function move() 
 {
     // Variables to store random position and size values
     var left;
     var top;
     var wh;
     var color;

     // Generate a random color in hexadecimal format (e.g., #RRGGBB)
     color = "#" + Math.floor(Math.random()*16777215).toString(16);

     // Generate random values for position and size
     left = Math.random() * 300;
     top = Math.random() * 300; // Random top position
     wh = ((Math.random() * 400) + 100); // Random width and height

     // Apply the random values to the shape's style properties
     document.getElementById("shape").style.left = left + "px"; // Set left position in pixels
     document.getElementById("shape").style.top = top + "px"; // Set top position in pixels
     document.getElementById("shape").style.width = wh + "px"; // Set width in pixels
     document.getElementById("shape").style.height = wh + "px"; // Set height in pixels
     document.getElementById("shape").style.backgroundColor = color; // Set background color
     document.getElementById("shape").style.display = "block"; // Display the shape
     start = new Date().getTime(); // Record the start time for reaction measurement
 }

 // Call the move function to initialize the shape
 move();

 // Add a click event listener to the shape
 document.getElementById("shape").onclick = function()
 {
     document.getElementById("shape").style.display = "none"; // Hide the shape
     var end = new Date().getTime(); // Get the current time
     var timeTaken = (end - start) / 1000; // Calculate reaction time in seconds
     alert(timeTaken); // Display an alert with the reaction time
     console.log(timeTaken); // Log the reaction time to the console
     move(); // Call the move function to prepare for the next interaction
 }