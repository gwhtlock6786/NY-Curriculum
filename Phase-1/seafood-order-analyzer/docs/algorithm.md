# Phase 01 Cumulative Performance Assessment

## Seafood Order Analyzer — Algorithm

## 1. Algorithm Overview

The Seafood Order Analyzer uses a series of smaller algorithms to solve the overall restaurant order-analysis problem.

The overall process is:

```text
Load Order Data
      ↓
Calculate Order Totals
      ↓
Count Order Statuses
      ↓
Calculate Completed Revenue
      ↓
Search Orders by Customer
      ↓
Count Customer's Completed Orders
      ↓
Classify Customer
      ↓
Count Completed Orders by Category
      ↓
Classify Selected Category
      ↓
Display Results
```

Each operation is handled by a separate function so that the program can be developed, tested, and debugged in smaller pieces.

---

# 2. Algorithm: Calculate Individual Order Total

### Purpose

Calculate the total cost of a single order.

### Inputs

- Order price
- Order quantity

### Process

Multiply the price by the quantity.

### Output

The total cost of the order.

### Algorithm

```text
START

Receive an order.

Get the order price.

Get the order quantity.

Multiply price by quantity.

Store the result as the order total.

Return the order total.

END
```

### Example

```text
Price = $18.50
Quantity = 2

18.50 × 2 = 37.00
```

Expected result:

```text
$37.00
```

---

# 3. Algorithm: Calculate Completed Revenue

### Purpose

Calculate the total revenue generated only from completed orders.

### Inputs

- Array of orders

### Process

Examine each order.

If the order is completed, calculate its total and add that amount to the revenue total.

### Output

Total completed revenue.

### Algorithm

```text
START

Receive the orders array.

Set totalRevenue to 0.

FOR each order in the orders array:

    Check the order status.

    IF the status is "completed":

        Calculate the order total.

        Add the order total to totalRevenue.

    END IF

END FOR

Return totalRevenue.

END
```

### Important Rule

Pending orders must not contribute to completed revenue.

---

# 4. Algorithm: Count Orders

### Purpose

Determine the total number of orders and the number of completed and pending orders.

### Inputs

- Array of orders

### Process

Examine each order and determine its status.

### Outputs

- Total orders
- Completed orders
- Pending orders

### Algorithm

```text
START

Receive the orders array.

Set completedOrders to 0.

Set pendingOrders to 0.

FOR each order in the orders array:

    IF the status is "completed":

        Increase completedOrders by 1.

    ELSE IF the status is "pending":

        Increase pendingOrders by 1.

    END IF

END FOR

Set totalOrders equal to the number of orders.

Return:

    totalOrders
    completedOrders
    pendingOrders

END
```

---

# 5. Algorithm: Search Orders by Customer

### Purpose

Find all orders associated with a specific customer.

### Inputs

- Array of orders
- Customer name

### Process

Check each order's customer name against the requested customer name.

### Output

An array containing matching orders.

### Algorithm

```text
START

Receive the orders array.

Receive the customer name.

Create an empty matchingOrders array.

FOR each order in the orders array:

    IF the order customer matches the requested customer:

        Add the order to matchingOrders.

    END IF

END FOR

Return matchingOrders.

END
```

### Example

Search:

```text
Maria
```

Expected matching orders:

```text
101
103
107
111
```

---

# 6. Algorithm: Count Completed Orders by Category

### Purpose

Determine how many completed orders belong to each restaurant category.

### Inputs

- Array of orders

### Outputs

- Completed appetizer count
- Completed entree count
- Completed dessert count

### Algorithm

```text
START

Receive the orders array.

Set appetizerCount to 0.

Set entreeCount to 0.

Set dessertCount to 0.

FOR each order in the orders array:

    IF the order status is "completed":

        IF the category is "Appetizer":

            Increase appetizerCount by 1.

        ELSE IF the category is "Entree":

            Increase entreeCount by 1.

        ELSE IF the category is "Dessert":

            Increase dessertCount by 1.

        END IF

    END IF

END FOR

Return:

    appetizerCount
    entreeCount
    dessertCount

END
```

### Important Rule

Only completed orders should be included in the category counts.

---

# 7. Algorithm: Count a Customer's Completed Orders

### Purpose

Determine how many completed orders belong to a selected customer.

### Inputs

- Customer's matching orders

### Process

Examine each matching order and count only completed orders.

### Output

Number of completed orders belonging to the customer.

### Algorithm

```text
START

Receive the customer's matching orders.

Set completedOrderCount to 0.

FOR each customer order:

    IF the order status is "completed":

        Increase completedOrderCount by 1.

    END IF

END FOR

Return completedOrderCount.

END
```

### Example

Maria has:

```text
Order 101 → completed
Order 103 → pending
Order 107 → completed
Order 111 → completed
```

Therefore:

```text
Completed Order Count = 3
```

---

# 8. Algorithm: Classify Customer

### Purpose

Determine the customer's classification based on completed orders.

### Inputs

- Number of completed orders

### Output

Customer classification.

### Algorithm

```text
START

Receive completedOrderCount.

IF completedOrderCount equals 0:

    Return "No Completed Orders".

ELSE IF completedOrderCount is less than or equal to 2:

    Return "Regular Customer".

ELSE:

    Return "Frequent Customer".

END IF

END
```

### Classification Rules

```text
0 completed orders
    → No Completed Orders

1 completed order
    → Regular Customer

2 completed orders
    → Regular Customer

3 or more completed orders
    → Frequent Customer
```

### Boundary Condition

The most important boundary is:

```text
2 → Regular Customer
3 → Frequent Customer
```

---

# 9. Algorithm: Classify Order Category

### Purpose

Provide a descriptive message based on an order category.

### Input

- Category name

### Output

Category message.

### Algorithm

```text
START

Receive category.

SWITCH category:

    CASE "Appetizer":

        Set message to "Starter order".

        BREAK.

    CASE "Entree":

        Set message to "Main course order".

        BREAK.

    CASE "Dessert":

        Set message to "Dessert order".

        BREAK.

    DEFAULT:

        Set message to "Unknown order category".

        BREAK.

END SWITCH

Return message.

END
```

### Category Rules

| Input           | Output                   |
| --------------- | ------------------------ |
| `Appetizer`     | `Starter order`          |
| `Entree`        | `Main course order`      |
| `Dessert`       | `Dessert order`          |
| Any other value | `Unknown order category` |

---

# 10. Algorithm: Display Customer Orders

### Purpose

Display the orders returned from a customer search.

### Inputs

- Array of matching customer orders

### Process

Use an index to move through the array.

### Output

A readable line for each customer order.

### Algorithm

```text
START

Receive customerOrders.

Set index to 0.

WHILE index is less than the number of customer orders:

    Get the order at the current index.

    Calculate the order total.

    Display the order ID,
    item name,
    and order total.

    Increase index by 1.

END WHILE

END
```

---

# 11. Main Program Algorithm

The main program coordinates the individual algorithms.

```text
START

Load the restaurant order data.

Call the order-counting algorithm.

Store the order counts.

Call the completed-revenue algorithm.

Store the completed revenue.

Call the category-counting algorithm.

Store the category counts.

Search for the selected customer.

Store the customer's matching orders.

Set the customer's completed order count to 0.

FOR each matching customer order:

    IF the order is completed:

        Increase the customer's completed order count.

    END IF

END FOR

Call the customer-classification algorithm.

Store the customer classification.

Call the category-classification algorithm.

Store the category message.

Display the restaurant order summary.

Display the customer's orders.

Display the customer's classification.

Display the category message.

END
```

---

# 12. Complete Algorithm Flow

The entire solution can be represented as:

```text
                    START
                      │
                      ▼
               Load Order Data
                      │
                      ▼
              Count Order Status
                      │
                      ▼
          Calculate Completed Revenue
                      │
                      ▼
       Count Completed Orders by Category
                      │
                      ▼
           Search for Customer
                      │
                      ▼
        Count Customer's Completed
                 Orders
                      │
                      ▼
            Classify Customer
                      │
                      ▼
           Classify Category
                      │
                      ▼
             Display Results
                      │
                      ▼
                     END
```

---

# 13. Algorithm Design Principles

The solution follows several important programming principles introduced during Phase 01.

## Decomposition

The overall problem is divided into smaller problems.

## Sequence

Instructions are performed in a logical order.

## Selection

Conditional statements determine which actions should occur.

Examples include:

```text
IF order is completed
```

and:

```text
IF customer has 0 completed orders
```

## Iteration

Loops allow the program to process multiple orders.

Examples include:

```text
FOR each order
```

and:

```text
WHILE index is within the array
```

## Reuse

Functions allow common operations to be performed without rewriting the same logic.

For example:

```text
calculateOrderTotal()
```

can be used whenever the program needs to determine the value of an order.

---

# 14. Expected Algorithm Results

Using the provided starter data, the algorithms should produce:

```text
Total Orders: 12

Completed Orders: 9

Pending Orders: 3

Completed Revenue: $197.25

Completed Appetizer Orders: 2

Completed Entree Orders: 6

Completed Dessert Orders: 1

Maria's Matching Orders: 4

Maria's Completed Orders: 3

Maria's Classification:
Frequent Customer

Entree Category:
Main course order
```

These results provide the instructor with reference values for evaluating student implementations.

---

# 15. Algorithm Completion Standard

A student's algorithm is considered acceptable when it clearly communicates:

1. What information is received.
2. What processing occurs.
3. What decisions are made.
4. What repetition occurs.
5. What information is produced.
6. How the overall problem is divided into smaller tasks.

The student's algorithm does not need to use the same wording or function structure as this instructor solution.

The student's implementation should demonstrate equivalent logical understanding.
