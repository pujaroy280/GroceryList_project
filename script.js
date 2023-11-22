// Grocery items that are objects are in an rrray
let groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
  ];
  
  // Elements from HTML
  //  Create a variable called groceryList that grabs our HTML element with an id of 'groceryList'
  let groceryList = document.getElementById("groceryList");
  // Create a variable called groceryList that grabs our HTML element with an id of ‘groceryList’
  let totalCostElement = document.getElementById("totalCost");
  // Create a variable called totalQuantityElement that grabs our HTML element with an id of ‘totalQuantity’
  let totalQuantityElement = document.getElementById("totalQuantity");
  

  // Function that displays grocery items
  /*Create a function called displayGroceryItems
  a. (Inside) Set the groceryList ’s HTML to be empty
  Grocery List Project 4
  b. (Inside) Create a variable called totalCost and set it to 0
  c. (Inside) Create a variable called totalQuantity and set it to 0
  */
  function displayGroceryItems() {
    // Clear the groceryList HTML
    groceryList.innerHTML = '';
  
    // Variables to track total cost and quantity
    let totalCost = 0;
    let totalQuantity = 0;
  
    /*
    d. (Inside) Create a forEach to loop over the groceryItems object with 
  (Reference). Set the key to be named item
  i. (Inside) Create a variable called itemDiv that will create a new <div>
  element
  ii. (Inside) Set the itemDiv ’s HTML to: <b>${item.name}</b> (${item.category}):
  $${item.price} - ${item.quantity} units using backticks
  iii. (Inside) Append the itemDiv to the groceryList
  iv. Set totalCost to be the item ’s price multiplied by the item ’s quantity
  v. Set totalQuantity to be each item added to one another
    */
    // Loop through groceryItems array
    groceryItems.forEach((item) => { // The key in each object was named to item
      // Create a new div element for each item
      let itemDiv = document.createElement("div");
      // Set the innerHTML for the itemDiv
      itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price.toFixed(2)} - ${item.quantity} units`;
      // Append the itemDiv to the groceryList so that the element is visible
      groceryList.appendChild(itemDiv);
  
      /*
      iv. Set totalCost to be the item ’s price multiplied by the item ’s quantity
       v. Set totalQuantity to be each item added to one another
      */
      totalCost += item.price * item.quantity;
      totalQuantity += item.quantity;
    });
  
    /*
    Below (and outside of) the forEach loop, set the following:
    i. totalCostElement should be set to totalCost . Using a JavaScript method,
    make sure the price only displays up to 2 decimal places (e.g. $10.60)
    ii. totalQuantityElement should be set to totalQuantity
    */
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    totalQuantityElement.textContent = `Total Quantity: ${totalQuantity}`;
  }
  
  /*
  Create a function called isolateCategory with a parameter called category
  a. (Inside) Set the groceryList ’s HTML to be empty
  b. (Inside) Create a variable called filteredItems that will use JavaScript’s filter
  method on groceryItems. Name the key item
  i. (Inside) Set the category of the item s to be triple-equals to category
  c. (Inside) Below filteredItems , use a forEach loop to iterate over filteredItems .
  Name the key item
  i. (Inside) Create a variable called itemDiv that will create a new <div>
  element
  ii. (Inside) Set the itemDiv ’s HTML to be: <b>${item.name}</b>
  (${item.category}): $${item.price} - ${item.quantity} units using backticks
  iii. Append the itemDiv to the groceryList
  */
  // Function to display items of a specific category
  function isolateCategory(category) {
    // Clear the groceryList HTML
    groceryList.innerHTML = '';
  
    // Use filter to get items of the specified category
    let filteredItems = groceryItems.filter(item => item.category === category);
  
    // Loop through filteredItems display each item in the grocery list
    filteredItems.forEach((item) => {
      let itemDiv = document.createElement("div");
      itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price.toFixed(2)} - ${item.quantity} units`;
      groceryList.appendChild(itemDiv);
    });
  }
  
  /*
  Create a function called showAllCategories
  a. Have it call the displayGroceryItems function
  b. Test your showAllCategories button
  */
  // Function to show all categories
  function showAllCategories() {
    // Call the displayGroceryItems function
    displayGroceryItems();
  }
  
  /*
   Create a function called orderItemsByCost
  a. (Inside) Using the JavaScript sort method, use two keys a and b
  i. (Inside) To have the items sort in ascending order, use the expression 
  b.price - a.price
  ii. (Inside) Below the sort method, call the displayGroceryItems function
  b. Test your orderItemsByCost button
  i. If unsure, check your HTML
  */
  // Function to order items by cost
  function orderItemsByCost() {
    // Sort the groceryItems array by price in descending order
    groceryItems.sort((a, b) => b.price - a.price);
    // Call the displayGroceryItems function
    displayGroceryItems();
  }
  
  /*
  Create a function called addItemPrompt
  a. (Inside) Create four variables for name , category , price , and quantity
  i. Set each to a prompt that will ask the user for their respective information
  b. (Inside) Create a conditional that checks if any of the above categories are
  missing using the || operator
  i. (Inside) Alert the user when a piece of information is missisng
  ii. Use a return to stop the function’s execution
  c. Below the conditional, create a variable called priceValue
  i. Using a parseFloat method, pass in price
  d. Create a variable called quantityValue
  i. Using a parseInt method, pass in quantity
  e. Below both priceValue and quantityValue , create a condition that checks if either
  is NaN by using the isNaN method and the || operator
  i. Alert the user if either is not a valid numeric value
  ii. Use a return to break the function’s execution
  f. Below the conditional, create an object called newItem with keys name , category ,
  price , and quantity , and values name , category , price , and quantityValue
  g. Below newItem , use JavaScript’s push method to add newItem to groceryItems
  h. Call the displayGroceryItems function
  i. Test your addItemPrompt button
  */
  // Function to prompt user and add a new item
  function addItemPrompt() {
    // Prompt for item details
    let name = prompt("Enter item name:"); // Prompts user to input item name to add in the Grocery List
    let category = prompt("Enter item category:"); // Prompts user to input category name of the item to add in the Grocery List
    let price = prompt("Enter item price:");  // Prompts user to input item price to add in the Grocery List
    let quantity = prompt("Enter item quantity:"); // Prompts user to input item quantity to add in the Grocery List
  
    // Check if any information is missing
    if (!name || !category || !price || !quantity) {  // If the items name or category or price or quantity is missing, alert the user to provide all information of the item.
      alert("Please provide all information");
      return;
    }
  
    // Convert price and quantity to numeric values
    let priceValue = parseFloat(price);
    let quantityValue = parseInt(quantity);
  
    // Check if price and quantity are valid numeric values
    if (isNaN(priceValue) || isNaN(quantityValue)) {  // System verifies if the price or quantity value is not a number
      alert("Price and quantity must be valid numeric values"); // If above is not true, alert the user that the price and quantity values have to be numeric
      return;
    }
  
    // Create a new item object to input data/info based on the grocery item in the list
    let newItem = {
      name: name,
      category: category,
      price: priceValue,
      quantity: quantityValue
    };
  
    // Add the new item to the groceryItems array
    groceryItems.push(newItem);
    // Call the displayGroceryItems function
    displayGroceryItems();
  }
  
  // Below all of the above functions, call the displayGroceryItems function
  displayGroceryItems();
  