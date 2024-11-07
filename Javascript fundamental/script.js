function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");

  // Loop through all food cards and toggle dark mode class
  const foodCards = document.querySelectorAll(".food-card");
  foodCards.forEach(card => {
    card.classList.toggle("dark-mode");
  });

  // Simpan preferensi pengguna di localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Cek preferensi pengguna saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    toggleMode();
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Data for food items
const foodData = {
  spaghetti: {
    name: "Spaghetti Carbonara",
    isVegetarian: false,
    ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "black pepper"],
    servings: 2, // Number specific to food item
  },
  taco: {
    name: "Beef Tacos",
    isVegetarian: false,
    ingredients: ["beef", "lettuce", "cheese", "taco shells", "salsa"],
    servings: 3,
  },
  sushi: {
    name: "Sushi Roll",
    isVegetarian: true,
    ingredients: ["rice", "seaweed", "fish", "wasabi", "soy sauce"],
    servings: 4,
  },
};

// Other data types
const foodTitle = "Delicious Food Recommendations"; // String
const isSpicy = true; // Boolean
const numberOfDishes = 3; // Number
const foodNames = ["Spaghetti Carbonara", "Beef Tacos", "Sushi Roll"]; // Array
const bigNumber = 12345678901234567890n; // BigInt
let description; // Undefined
let noDish = null; // Null
const foodSymbol = Symbol("Food data type"); // Symbol

// Function to display unique data types and values in console
function showDataTypes(foodType) {
  const foodItem = foodData[foodType];

  // Display each type only once with example values
  console.log("Type of foodTitle:", typeof foodTitle, "->", foodTitle); // String
  console.log("Type of isSpicy:", typeof isSpicy, "->", isSpicy); // Boolean
  console.log(
    "Type of numberOfDishes:",
    typeof numberOfDishes,
    "->",
    numberOfDishes
  ); // Number
  console.log("Type of foodNames:", typeof foodNames, "->", foodNames); // Array
  console.log("Type of bigNumber:", typeof bigNumber, "->", bigNumber); // BigInt
  console.log("Type of description:", typeof description, "->", description); // Undefined
  console.log("Type of noDish:", typeof noDish, "->", noDish); // Null
  console.log(
    "Type of foodSymbol:",
    typeof foodSymbol,
    "->",
    foodSymbol.description
  ); // Symbol

  // Display Object type using specific food item information
  console.log("Type of foodItem (Object):", typeof foodItem, "->", foodItem);
  console.log(`Food Name: ${foodItem.name}`);
  console.log(`Is Vegetarian: ${foodItem.isVegetarian}`);
  console.log(`Ingredients: ${foodItem.ingredients.join(", ")}`);
  console.log(`Servings: ${foodItem.servings}`);

  alert(`Data types and ingredients for ${foodType} logged in console.`);
}

// Example usage: show data types for 'spaghetti', 'taco', or 'sushi'
showDataTypes("spaghetti");
