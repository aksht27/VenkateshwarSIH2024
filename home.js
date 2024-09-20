
const navItems = document.querySelectorAll(".nav-item");
const contentDisplay = document.getElementById("content-display");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedPage = item.querySelector("p").innerText;

    
    switch (selectedPage) {
      case "Your Profile":
        contentDisplay.innerHTML =
          "<h2>Your Profile</h2><p>Profile details and settings go here.</p>";
        break;
      case "Quiz":
        contentDisplay.innerHTML =
          "<h2>Quiz</h2><p>Quiz content goes here.</p>";
        break;
      case "Leaderboard":
        contentDisplay.innerHTML =
          "<h2>Leaderboard</h2><p>Leaderboard content goes here.</p>";
        break;
      case "Prizes":
        contentDisplay.innerHTML =
          "<h2>Prizes</h2><p>Prize information goes here.</p>";
        break;
      case "Your Consumption":
        contentDisplay.innerHTML =
          "<h2>Your Consumption</h2><p>Water consumption details go here.</p>";
        break;
      default:
        contentDisplay.innerHTML =
          "<h2>Dashboard</h2><p>Welcome to your dashboard!</p>";
    }
  });
});

const footprintData = {
  Eggs: { footprint: 3300, id: "item`" },
  Cheese: { footprint: 5000, id: "item2" },
  Bread: { footprint: 1600, id: "item3" },
  Apple: { footprint: 140, id: "item4" },
  Potatoes: { footprint: 250, id: "item5" },
  Tomatoes: { footprint: 180, id: "item6" },
  Bananas: { footprint: 790, id: "item7" },
  Orange: { footprint: 560, id: "item8" },
  Chocolate: { footprint: 17000, id: "item9" },
  Coffee: { footprint: 140, id: "item10" },
  Tea: { footprint: 200, id: "item11" },
  Milk: { footprint: 120, id: "item12" },
  Rice: { footprint: 100, id: "item13" },
};

let storedItems = [];

function calculateFootprint(event) {
  event.preventDefault();

  const item = document.getElementById("itemInput").value;
  const result = getWaterFootprint(item);

  if (result) {
    storedItems.push(result);

    document.getElementById(
      "result"
    ).innerText = `Item: ${item} | ID: ${result.id} | Water Footprint: ${result.footprint} liters`;

    updateStoredItems();
    updateTotalFootprint();
  } else {
    document.getElementById(
      "result"
    ).innerText = `Item not found in the predefined list.`;
  }
}
const photo = document.getElementById("photo");
const fileInput = document.getElementById("fileInput");
const itemInput = document.getElementById("itemInput");

photo.addEventListener("click", () => {
  fileInput.click();
});


fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
   
    itemInput.value = file.name;
  }
});
function getWaterFootprint(item) {
  return footprintData[item] || null;
}

function updateStoredItems() {
  const storedItemsList = document.getElementById("storedItemsList");
  storedItemsList.innerHTML = "";

  storedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Item: ${item.id} | Water Footprint: ${item.footprint} liters`;
    storedItemsList.appendChild(listItem);
  });
}

function updateTotalFootprint() {
  const totalFootprint = storedItems.reduce(
    (total, item) => total + item.footprint,
    0
  );
  document.getElementById("totalFootprint").innerText = totalFootprint;
}
 // Initialize the map
 var map = L.map('map').setView([20.5937, 78.9629], 5);

 // Add OpenStreetMap tiles
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Synthetic data for water footprint
 var waterFootprintData = [
     { state: 'Maharashtra', lat: 19.7515, lon: 75.7139, footprint: '5000 million m³' },
     { state: 'Gujarat', lat: 22.2587, lon: 71.1924, footprint: '3000 million m³' },
     { state: 'Rajasthan', lat: 27.0238, lon: 74.2179, footprint: '2000 million m³' },
     { state: 'Karnataka', lat: 15.3173, lon: 75.7139, footprint: '4000 million m³' },
     { state: 'Tamil Nadu', lat: 11.1271, lon: 78.6569, footprint: '3500 million m³' },
     { state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462, footprint: '4500 million m³' },
     { state: 'West Bengal', lat: 22.9868, lon: 87.8550, footprint: '2500 million m³' },
     { state: 'Bihar', lat: 25.0961, lon: 85.3131, footprint: '1500 million m³' },
     { state: 'Odisha', lat: 20.9517, lon: 85.0985, footprint: '2800 million m³' },
     { state: 'Telangana', lat: 18.1124, lon: 79.0193, footprint: '3200 million m³' },
     { state: 'Madhya Pradesh', lat: 22.9734, lon: 78.6569, footprint: '3700 million m³' },
     { state: 'Andhra Pradesh', lat: 15.9129, lon: 79.7400, footprint: '3300 million m³' },
     { state: 'Punjab', lat: 31.1471, lon: 75.3412, footprint: '2900 million m³' },
     { state: 'Haryana', lat: 29.0588, lon: 76.0856, footprint: '2700 million m³' },
     { state: 'Chhattisgarh', lat: 21.2787, lon: 81.8661, footprint: '2400 million m³' },
     { state: 'Jharkhand', lat: 23.6102, lon: 85.2799, footprint: '2200 million m³' },
     { state: 'Assam', lat: 26.2006, lon: 92.9376, footprint: '2100 million m³' },
     { state: 'Kerala', lat: 10.8505, lon: 76.2711, footprint: '2600 million m³' },
     { state: 'Himachal Pradesh', lat: 31.1048, lon: 77.1734, footprint: '1800 million m³' },
     { state: 'Uttarakhand', lat: 30.0668, lon: 79.0193, footprint: '1600 million m³' }
 ];

 // Add markers to the map
 waterFootprintData.forEach(function(data) {
     L.marker([data.lat, data.lon]).addTo(map)
         .bindPopup('<b>' + data.state + '</b><br>Water Footprint: ' + data.footprint);
 });