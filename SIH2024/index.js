
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
