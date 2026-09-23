import { orders } from "./data.js";
function calculateOrderTotal(order) {
  return order.price * order.quantity;
}

function calculateCompletedRevenue(orders) {
  let totalRevenue = 0;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.status === "completed") {
      totalRevenue += calculateOrderTotal(order);
    }
  }

  return totalRevenue;
}

function countOrders(orders) {
  let completedOrders = 0;
  let pendingOrders = 0;

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "completed") {
      completedOrders++;
    } else if (orders[i].status === "pending") {
      pendingOrders++;
    }
  }

  return {
    total: orders.length,
    completed: completedOrders,
    pending: pendingOrders,
  };
}

function searchOrdersByCustomer(orders, customerName) {
  const matchingOrders = [];

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].customer === customerName) {
      matchingOrders.push(orders[i]);
    }
  }

  return matchingOrders;
}

function countOrdersByCategory(orders) {
  const categoryCounts = {
    Appetizer: 0,
    Entree: 0,
    Dessert: 0,
  };

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.status === "completed") {
      if (order.category === "Appetizer") {
        categoryCounts.Appetizer++;
      } else if (order.category === "Entree") {
        categoryCounts.Entree++;
      } else if (order.category === "Dessert") {
        categoryCounts.Dessert++;
      }
    }
  }

  return categoryCounts;
}

function classifyCustomer(completedOrderCount) {
  if (completedOrderCount === 0) {
    return "No Completed Orders";
  } else if (completedOrderCount <= 2) {
    return "Regular Customer";
  } else {
    return "Frequent Customer";
  }
}

function getCategoryMessage(category) {
  let message;

  switch (category) {
    case "Appetizer":
      message = "Starter order";
      break;

    case "Entree":
      message = "Main course order";
      break;

    case "Dessert":
      message = "Dessert order";
      break;

    default:
      message = "Unknown order category";
      break;
  }

  return message;
}

// Alternative solution
// function getCategoryMessage(category) {
//   switch (category) {
//     case "Appetizer":
//       return "Starter order";

//     case "Entree":
//       return "Main course order";

//     case "Dessert":
//       return "Dessert order";

//     default:
//       return "Unknown order category";
//   }
// }

function displayCustomerOrders(customerOrders) {
  let index = 0;

  while (index < customerOrders.length) {
    const order = customerOrders[index];

    console.log(
      `Order ${order.id}: ${order.item} - $${calculateOrderTotal(order).toFixed(2)}`,
    );

    index++;
  }
}

const orderCounts = countOrders(orders);

const completedRevenue = calculateCompletedRevenue(orders);

const categoryCounts = countOrdersByCategory(orders);

const customerSearch = searchOrdersByCustomer(orders, "Maria");

let mariaCompletedOrders = 0;

for (let i = 0; i < customerSearch.length; i++) {
  if (customerSearch[i].status === "completed") {
    mariaCompletedOrders++;
  }
}

const customerClassification = classifyCustomer(mariaCompletedOrders);

console.log("=================================");
console.log("     RESTAURANT ORDER SUMMARY");
console.log("=================================");

console.log(`Total Orders: ${orderCounts.total}`);
console.log(`Completed Orders: ${orderCounts.completed}`);
console.log(`Pending Orders: ${orderCounts.pending}`);

console.log(`Completed Revenue: $${completedRevenue.toFixed(2)}`);

console.log("");

console.log("Completed Orders by Category:");
console.log(`Appetizer: ${categoryCounts.Appetizer}`);
console.log(`Entree: ${categoryCounts.Entree}`);
console.log(`Dessert: ${categoryCounts.Dessert}`);

console.log("");

console.log("Maria's Orders:");

displayCustomerOrders(customerSearch);

console.log("");

console.log(`Maria's Classification: ${customerClassification}`);

console.log("");

console.log(`Category Message: ${getCategoryMessage("Entree")}`);
