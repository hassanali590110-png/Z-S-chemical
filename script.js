emailjs.init({
    publicKey: "_pCJINq-uBZVqZ-wu",
});
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 1
// Variables + Data Types + Operators
// ======================================

// Welcome Message

alert("Welcome to ZS Chemicals");


// ============================
// Company Information
// ============================

let companyName = "ZS Chemicals";
let companyCEO = "Muhammad Kamran";
let companyPhone = "03332194577";
let companyCity = "Karachi";
let companyCountry = "Pakistan";

console.log(companyName);
console.log(companyCEO);
console.log(companyPhone);
console.log(companyCity);
console.log(companyCountry);


// ============================
// Employees
// ============================

let employeeOne = "Akash Ali";
let employeeTwo = "Zubair Ali";

console.log(employeeOne);
console.log(employeeTwo);


// ============================
// Company Statistics
// ============================

let totalProjects = 500;
let totalClients = 300;

console.log(totalProjects);
console.log(totalClients);


// ============================
// Product Information
// ============================

let resinPrice = 5000;
let hardenerPrice = 3500;

console.log(resinPrice);
console.log(hardenerPrice);


// ============================
// Chemical Quantity
// ============================

let resinQuantity = 200;
let hardenerQuantity = 100;


// ============================
// Arithmetic Operators
// ============================

console.log(
    "Addition = " +
    (resinQuantity + hardenerQuantity)
);

console.log(
    "Subtraction = " +
    (resinQuantity - hardenerQuantity)
);

console.log(
    "Multiplication = " +
    (resinQuantity * hardenerQuantity)
);

console.log(
    "Division = " +
    (resinQuantity / hardenerQuantity)
);

console.log(
    "Remainder = " +
    (resinQuantity % hardenerQuantity)
);


// ============================
// Increment
// ============================

let stock = 100;

stock++;

console.log(stock);


// ============================
// Decrement
// ============================

stock--;

console.log(stock);


// ============================
// Assignment Operators
// ============================

let totalStock = 500;

totalStock += 100;

console.log(totalStock);

totalStock -= 50;

console.log(totalStock);

totalStock *= 2;

console.log(totalStock);

totalStock /= 5;

console.log(totalStock);


// ============================
// Part 1 Completed
// Next: Part 2 If Else
// ============================
// ======================================
// ZS Chemicals JavaScript
// Part 2
// If Else Conditions
// ======================================


// ============================
// Customer Age Check
// ============================

let customerAge = 20;

if (customerAge >= 18) {

    console.log("Customer can purchase products.");

} else {

    console.log("Customer cannot purchase products.");

}


// ============================
// Employee Performance
// ============================

let employeeMarks = 75;

if (employeeMarks >= 50) {

    console.log("Employee Passed.");

} else {

    console.log("Employee Failed.");

}


// ============================
// Product Stock Check
// ============================

let epoxyStock = 120;

if (epoxyStock > 0) {

    console.log("Epoxy Resin Available.");

} else {

    console.log("Epoxy Resin Out Of Stock.");

}


// ============================
// Product Price Check
// ============================

let epoxyPrice = 5000;

if (epoxyPrice == 5000) {

    console.log("Correct Product Price.");

} else {

    console.log("Wrong Product Price.");

}


// ============================
// Company Projects Check
// ============================

let completedProjects = 500;

if (completedProjects >= 100) {

    console.log("Company is Growing.");

} else {

    console.log("Company Needs More Projects.");

}


// ============================
// Chemical Quantity Check
// ============================

let availableResin = 200;

if (availableResin >= 100) {

    console.log("Enough Resin Available.");

} else {

    console.log("Need More Resin.");

}
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 3
// Comparison Operators
// > < >= <= == != === !==
// ======================================


// ============================
// Basic Number Comparison
// ============================

let firstNumber = 20;
let secondNumber = 10;

console.log(firstNumber > secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber >= secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber === secondNumber);
console.log(firstNumber !== secondNumber);


// ============================
// Company Projects Comparison
// ============================

let companyProjects = 500;
let companyClients = 300;

console.log(companyProjects > companyClients);
console.log(companyProjects < companyClients);
console.log(companyProjects >= companyClients);
console.log(companyProjects <= companyClients);
console.log(companyProjects === companyClients);
console.log(companyProjects !== companyClients);


// ============================
// Product Price Comparison
// ============================

let epoxyResinPrice = 5000;
let epoxyHardenerPrice = 3500;

if (epoxyResinPrice > epoxyHardenerPrice) {

    console.log("Epoxy Resin is more expensive.");

} else {

    console.log("Hardener is more expensive.");

}


// ============================
// Company City Check
// ============================

let companyLocation = "Karachi";

if (companyLocation === "Karachi") {

    console.log("Company is located in Karachi.");

} else {

    console.log("Company location is different.");

}


// ============================
// Stock Comparison
// ============================

let availableStock = 250;
let minimumStock = 100;

if (availableStock >= minimumStock) {

    console.log("Stock level is sufficient.");

} else {

    console.log("Stock level is low.");

}


// ============================
// Client Target Check
// ============================

let currentClients = 350;
let targetClients = 500;

if (currentClients !== targetClients) {

    console.log("Target not achieved yet.");

} else {

    console.log("Target achieved.");

}


// ============================
// Employee Experience Check
// ============================

let employeeExperience = 5;

if (employeeExperience >= 3) {

    console.log("Experienced Employee.");

} else {

    console.log("New Employee.");

}


// ======================================
// Part 3 Completed
// Next: Part 4 Functions
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 4
// Functions
// ======================================


// ============================
// Welcome Function
// ============================

function showWelcomeMessage() {

    console.log("Welcome to ZS Chemicals");

}

showWelcomeMessage();


// ============================
// Employee Welcome Function
// ============================

function welcomeEmployee(employeeName) {

    console.log("Welcome " + employeeName);

}

welcomeEmployee("Hassan Ali");
welcomeEmployee("Akash Ali");
welcomeEmployee("Zubair Ali");


// ============================
// Product Function
// ============================

function displayProduct(productName, productPrice) {

    console.log("Product : " + productName);
    console.log("Price : Rs. " + productPrice);

}

displayProduct("Epoxy Resin", 5000);
displayProduct("Hardener", 3500);
displayProduct("Floor Coating", 7000);


// ============================
// Addition Function
// ============================

function addNumbers(firstValue, secondValue) {

    console.log("Total : " + (firstValue + secondValue));

}

addNumbers(100, 50);
addNumbers(500, 300);


// ============================
// Return Function
// ============================

function calculateBill(price, quantity) {

    return price * quantity;

}

let totalBill = calculateBill(5000, 5);

console.log("Total Bill : Rs. " + totalBill);


// ============================
// Company Function
// ============================

function displayCompany(companyName, companyCEO) {

    console.log("Company : " + companyName);
    console.log("CEO : " + companyCEO);

}

displayCompany("ZS Chemicals", "Muhammad Kamran");


// ============================
// Employee Function
// ============================

function displayEmployee(employeeName, employeeRole) {

    console.log("Employee : " + employeeName);
    console.log("Role : " + employeeRole);

}

displayEmployee("Akash Ali", "Chemical Expert");
displayEmployee("Zubair Ali", "Production Manager");


// ============================
// Chemical Stock Function
// ============================

function calculateChemicalStock(resinQuantity, hardenerQuantity) {

    let totalChemicalStock = resinQuantity + hardenerQuantity;

    console.log("Total Chemical Stock : " + totalChemicalStock);

}

calculateChemicalStock(200, 100);
calculateChemicalStock(500, 300);


// ============================
// Client Function
// ============================

function displayClient(clientName, clientCity) {

    console.log("Client : " + clientName);
    console.log("City : " + clientCity);

}

displayClient("ABC Builders", "Karachi");
displayClient("XYZ Construction", "Lahore");


// ======================================
// Part 4 Completed
// Next: Part 5 (Events)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 5
// Events
// querySelector()
// addEventListener()
// ======================================


// ============================
// Contact Button Click
// ============================

const contactButton = document.querySelector(".hero-contact-btn");

if (contactButton) {

    contactButton.addEventListener("click", function () {

        alert("Thank you for contacting ZS Chemicals!");

    });

}


// ============================
// Product Button Click
// ============================

const productButton = document.querySelector(".product-btn");

if (productButton) {

    productButton.addEventListener("click", function () {

        alert("Opening Products Section...");

    });

}


// ============================
// Hero Title Click
// ============================

const heroTitle = document.querySelector(".hero-title");

if (heroTitle) {

    heroTitle.addEventListener("click", function () {

        heroTitle.style.color = "#ff6600";

    });

}


// ============================
// Logo Hover
// ============================

const companyLogo = document.querySelector(".logo");

if (companyLogo) {

    companyLogo.addEventListener("mouseover", function () {

        companyLogo.style.color = "gold";

    });

    companyLogo.addEventListener("mouseout", function () {

        companyLogo.style.color = "white";

    });

}


// ============================
// Body Double Click
// ============================

document.body.addEventListener("dblclick", function () {

    document.body.style.backgroundColor = "#eef6ff";

});


// ============================
// Hero Image Click
// ============================

const firstHeroImage = document.querySelector(".hero-images img");

if (firstHeroImage) {

    firstHeroImage.addEventListener("click", function () {

        firstHeroImage.style.border = "5px solid #003366";

    });

}


// ============================
// Navigation Hover Effect
// ============================

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("mouseover", function () {

        link.style.color = "gold";

    });

    link.addEventListener("mouseout", function () {

        link.style.color = "white";

    });

});


// ============================
// Footer Click
// ============================

const footerSection = document.querySelector("footer");

if (footerSection) {

    footerSection.addEventListener("click", function () {

        alert("Thanks for visiting ZS Chemicals.");

    });

}


// ============================
// Window Loaded
// ============================

window.addEventListener("load", function () {

    console.log("Website Loaded Successfully.");

});


// ======================================
// Part 5 Completed
// Next: Part 6 (DOM Manipulation)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 6
// DOM Manipulation
// textContent
// innerHTML
// style
// src
// ======================================


// ============================
// Hero Heading
// ============================

const heroHeading = document.querySelector(".hero-title");

if (heroHeading) {

    heroHeading.textContent =
        "Premium Epoxy Resin & Industrial Chemicals";

    heroHeading.style.color = "#003366";

}


// ============================
// Hero Paragraph
// ============================

const heroParagraph = document.querySelector(".hero-text p");

if (heroParagraph) {

    heroParagraph.textContent =
        "We provide premium quality epoxy resin, hardener and industrial chemicals all over Pakistan.";

    heroParagraph.style.color = "#555";

    heroParagraph.style.fontSize = "20px";

}


// ============================
// Contact Button
// ============================

const contactBtn = document.querySelector(".contact-btn");

if (contactBtn) {

    contactBtn.textContent = "Get Free Quote";

    contactBtn.style.backgroundColor = "#0055aa";

    contactBtn.style.color = "#ffffff";

    contactBtn.style.borderRadius = "10px";

}


// ============================
// Hero Image
// ============================

const heroImage = document.querySelector(".hero-images img");

if (heroImage) {

    heroImage.src = "images/resin.jpg";

    heroImage.alt = "Premium Epoxy Resin";

}


// ============================
// Company Logo
// ============================

const logoHeading = document.querySelector(".logo h1");

if (logoHeading) {

    logoHeading.textContent = "ZS Chemicals";

}


// ============================
// Footer Text
// ============================

const footerArea = document.querySelector("footer");

if (footerArea) {

    footerArea.innerHTML +=
        "<p>Premium Chemical Manufacturer in Pakistan</p>";

}


// ============================
// Website Title
// ============================

document.title =
    "ZS Chemicals | Premium Epoxy Resin";


// ============================
// Body Background
// ============================

document.body.style.backgroundColor =
    "#f5f7fa";


// ============================
// Navigation Transition
// ============================

const navItems =
    document.querySelectorAll("nav a");

navItems.forEach(function (item) {

    item.style.transition = "0.3s";

});


// ============================
// Gallery Images Border
// ============================

const galleryImages =
    document.querySelectorAll(".gallery-container img");

galleryImages.forEach(function (image) {

    image.style.border =
        "3px solid #003366";

});


// ======================================
// Part 6 Completed
// Next: Part 7 (Forms)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 7
// Forms
// Form Validation
// ======================================


// ============================
// Contact Form
// ============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // ============================
        // Get Input Fields
        // ============================

        const nameInput = document.querySelector("#name");

        const emailInput = document.querySelector("#email");

        const messageInput = document.querySelector("#message");


        // ============================
        // Get Values
        // ============================

        const customerName = nameInput.value.trim();

        const customerEmail = emailInput.value.trim();

        const customerMessage = messageInput.value.trim();


        // ============================
        // Empty Validation
        // ============================

        if (
            customerName === "" ||
            customerEmail === "" ||
            customerMessage === ""
        ) {

            alert("Please fill all fields.");

            return;

        }


        // ============================
        // Email Validation
        // ============================

        if (
            !customerEmail.includes("@") ||
            !customerEmail.includes(".")
        ) {

            alert("Please enter a valid email address.");

            emailInput.focus();

            return;

        }


        // ============================
        // Name Length
        // ============================

        if (customerName.length < 3) {

            alert("Name must contain at least 3 characters.");

            nameInput.focus();

            return;

        }


        // ============================
        // Message Length
        // ============================

        if (customerMessage.length < 10) {

            alert("Please write a proper message.");

            messageInput.focus();

            return;

        }


        // ============================
        // Success
        // ============================

        alert(
            "Thank You " +
            customerName +
            "! Your message has been sent successfully."
        );


        console.log("Name :", customerName);

        console.log("Email :", customerEmail);

        console.log("Message :", customerMessage);


        // ============================
        // Reset Form
        // ============================

        form.reset();

    });

}


// ======================================
// Required HTML
// ======================================

/*

<form class="contact-form">

    <input
        type="text"
        id="name"
        placeholder="Your Name"
    >

    <input
        type="email"
        id="email"
        placeholder="Your Email"
    >

    <textarea
        id="message"
        placeholder="Your Message"
    ></textarea>

    <button
        type="submit"
        class="contact-btn"
    >
        Send Message
    </button>

</form>

*/


// ======================================
// Part 7 Completed
// Next: Part 8 (Arrays)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 8
// Arrays
// ======================================


// ============================
// Product Array
// ============================

let products = [
    "Epoxy Resin",
    "Hardener",
    "Floor Coating",
    "Industrial Chemicals"
];


console.log(products);



// ============================
// Employee Array
// ============================

let employees = [
    "Muhammad Kamran",
    "Akash Ali",
    "Zubair Ali"
];


console.log(employees);



// ============================
// Client Array
// ============================

let clients = [
    "ABC Builders",
    "XYZ Construction",
    "Karachi Industries"
];


console.log(clients);



// ============================
// Array Length
// ============================

console.log(
    "Total Products : " + products.length
);


console.log(
    "Total Employees : " + employees.length
);


console.log(
    "Total Clients : " + clients.length
);



// ============================
// Access Array Values
// ============================

console.log(products[0]);

console.log(products[1]);

console.log(employees[0]);

console.log(clients[2]);



// ============================
// Add New Product
// push()
// ============================

products.push("Chemical Cleaner");


console.log(products);



// ============================
// Remove Last Product
// pop()
// ============================

products.pop();


console.log(products);



// ============================
// Add Employee
// ============================

employees.push("New Worker");


console.log(employees);



// ============================
// Remove Employee
// ============================

employees.pop();


console.log(employees);



// ============================
// Change Array Value
// ============================

products[0] = "Premium Epoxy Resin";


console.log(products);



// ============================
// Loop Through Products
// ============================

for (let i = 0; i < products.length; i++) {

    console.log(
        "Product : " + products[i]
    );

}



// ============================
// forEach Loop
// ============================

products.forEach(function (product) {

    console.log(
        "Available Product : " + product
    );

});



// ============================
// Company Data Array
// ============================

let companyDetails = [

    "ZS Chemicals",
    "Karachi",
    "Pakistan",
    500,
    300

];


console.log(companyDetails);



// ======================================
// Part 8 Completed
// Next: Part 9 (Objects)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 9
// Objects
// ======================================


// ============================
// Company Object
// ============================

let company = {

    name: "ZS Chemicals",
    CEO: "Muhammad Kamran",
    city: "Karachi",
    country: "Pakistan",
    phone: "03332194577"

};


console.log(company);

console.log(company.name);

console.log(company.CEO);

console.log(company.city);



// ============================
// Product Object
// ============================

let epoxyProduct = {

    productName: "Epoxy Resin",
    price: 5000,
    quantity: 200,
    category: "Industrial Chemical"

};


console.log(epoxyProduct);

console.log(epoxyProduct.productName);

console.log(epoxyProduct.price);



// ============================
// Employee Object
// ============================

let employee = {

    name: "Akash Ali",
    role: "Chemical Expert",
    experience: 5,
    salary: 50000

};


console.log(employee);

console.log(employee.name);

console.log(employee.role);



// ============================
// Client Object
// ============================

let client = {

    companyName: "ABC Builders",
    city: "Karachi",
    projects: 20

};


console.log(client);

console.log(client.companyName);



// ============================
// Add New Property
// ============================

company.email = "info@zschemicals.com";


console.log(company);



// ============================
// Change Object Value
// ============================

epoxyProduct.price = 5500;


console.log(epoxyProduct.price);



// ============================
// Delete Property
// ============================

delete employee.salary;


console.log(employee);



// ============================
// Object Function (Method)
// ============================

let productInfo = {

    name: "Hardener",
    price: 3500,

    showInfo: function () {

        console.log(
            "Product: " + this.name
        );

        console.log(
            "Price: Rs. " + this.price
        );

    }

};


productInfo.showInfo();



// ============================
// Multiple Products Object
// ============================

let productsData = {

    product1: "Epoxy Resin",

    product2: "Hardener",

    product3: "Floor Coating"

};


console.log(productsData);

console.log(productsData.product1);

console.log(productsData.product2);



// ============================
// Company Full Information
// ============================

let ZSChemicals = {

    name: "ZS Chemicals",

    location: "Karachi Pakistan",

    projects: 500,

    clients: 300,

    showCompany: function () {

        console.log(
            this.name
        );

        console.log(
            this.location
        );

    }

};


ZSChemicals.showCompany();


// ======================================
// Part 9 Completed
// Next: Part 10 (Array Of Objects)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 10
// Array Of Objects
// ======================================


// ============================
// Products Database
// ============================

let productsList = [

    {
        name: "Epoxy Resin",
        price: 5000,
        category: "Industrial Chemical",
        stock: 200
    },


    {
        name: "Hardener",
        price: 3500,
        category: "Epoxy Material",
        stock: 150
    },


    {
        name: "Floor Coating",
        price: 7000,
        category: "Floor Solution",
        stock: 100
    }

];


console.log(productsList);



// ============================
// Access Object From Array
// ============================

console.log(productsList[0]);

console.log(productsList[0].name);

console.log(productsList[1].price);



// ============================
// Loop Through Products
// ============================

productsList.forEach(function (product) {


    console.log(
        "Product Name : " + product.name
    );


    console.log(
        "Price : Rs. " + product.price
    );


    console.log(
        "Stock : " + product.stock
    );


});



// ============================
// Employees Database
// ============================

let employeesList = [

    {
        name: "Muhammad Kamran",
        role: "CEO",
        experience: 10
    },


    {
        name: "Akash Ali",
        role: "Chemical Expert",
        experience: 5
    },


    {
        name: "Zubair Ali",
        role: "Production Manager",
        experience: 6
    }

];



console.log(employeesList);



// ============================
// Employee Details Loop
// ============================

employeesList.forEach(function (employee) {


    console.log(
        "Employee : " + employee.name
    );


    console.log(
        "Role : " + employee.role
    );


    console.log(
        "Experience : " + employee.experience + " Years"
    );


});



// ============================
// Clients Database
// ============================

let clientsList = [

    {
        name: "ABC Builders",
        city: "Karachi",
        projects: 20
    },


    {
        name: "XYZ Construction",
        city: "Lahore",
        projects: 15
    },


    {
        name: "Pakistan Industries",
        city: "Islamabad",
        projects: 25
    }

];



console.log(clientsList);



// ============================
// Add New Product Object
// ============================

productsList.push({

    name: "Chemical Cleaner",
    price: 2500,
    category: "Cleaning Chemical",
    stock: 50

});


console.log(productsList);



// ============================
// Remove Last Product
// ============================

productsList.pop();


console.log(productsList);



// ============================
// Total Product Count
// ============================

console.log(
    "Total Products : " + productsList.length
);



// ======================================
// Part 10 Completed
// Next: Part 11 (Loops)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 11
// Loops
// for Loop
// while Loop
// do while Loop
// ======================================



// ============================
// For Loop Basic
// ============================


for (let i = 1; i <= 5; i++) {

    console.log(
        "ZS Chemicals Project Number : " + i
    );

}



// ============================
// Product Loop
// ============================


let chemicalProducts = [

    "Epoxy Resin",
    "Hardener",
    "Floor Coating",
    "Industrial Chemicals"

];


for (let i = 0; i < chemicalProducts.length; i++) {


    console.log(
        "Product : " + chemicalProducts[i]
    );


}



// ============================
// Employee Loop
// ============================


let companyEmployees = [

    "Muhammad Kamran",
    "Akash Ali",
    "Zubair Ali"

];


for (let i = 0; i < companyEmployees.length; i++) {


    console.log(
        "Employee : " + companyEmployees[i]
    );


}



// ============================
// While Loop
// ============================


let stockQuantity = 5;


while (stockQuantity > 0) {


    console.log(
        "Remaining Stock : " + stockQuantity
    );


    stockQuantity--;


}



// ============================
// Do While Loop
// ============================


let clientCount = 1;


do {


    console.log(
        "Client Number : " + clientCount
    );


    clientCount++;


}

while (clientCount <= 5);



// ============================
// Loop With Condition
// ============================


let projectsCompleted = 0;


for (let i = 1; i <= 10; i++) {


    projectsCompleted += 1;


    console.log(
        "Completed Project : " + projectsCompleted
    );


}



// ============================
// Nested Loop
// ============================


for (let company = 1; company <= 3; company++) {


    for (let project = 1; project <= 2; project++) {


        console.log(
            "Company " + company +
            " Project " + project
        );


    }


}



// ============================
// Sum Using Loop
// ============================


let prices = [

    5000,
    3500,
    7000

];


let totalPrice = 0;


for (let i = 0; i < prices.length; i++) {


    totalPrice = totalPrice + prices[i];


}


console.log(
    "Total Product Price : Rs. " + totalPrice
);



// ======================================
// Part 11 Completed
// Next: Part 12 (Advanced Functions)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 12
// Advanced Functions
// Arrow Functions
// Default Parameters
// Callback Functions
// ======================================



// ============================
// Normal Function
// ============================


function companyMessage() {

    console.log(
        "Welcome to ZS Chemicals"
    );

}


companyMessage();



// ============================
// Arrow Function
// ============================


const welcomeCompany = () => {

    console.log(
        "Premium Epoxy Resin Supplier Pakistan"
    );

};


welcomeCompany();



// ============================
// Arrow Function With Parameter
// ============================


const showEmployee = (name) => {

    console.log(
        "Employee Name : " + name
    );

};


showEmployee("Muhammad Kamran");

showEmployee("Akash Ali");



// ============================
// Multiple Parameters
// ============================


const calculateProductPrice = (price, quantity) => {


    let total = price * quantity;


    console.log(
        "Total Price : Rs. " + total
    );


};


calculateProductPrice(5000, 5);

calculateProductPrice(3500, 10);



// ============================
// Return Arrow Function
// ============================


const calculateStock = (resin, hardener) => {


    return resin + hardener;


};


let totalChemicalStock = calculateStock(200, 100);


console.log(
    "Total Chemical Stock : " + totalChemicalStock
);



// ============================
// Default Parameter
// ============================


function customerWelcome(name = "Customer") {


    console.log(
        "Welcome " + name
    );


}


customerWelcome();

customerWelcome("Hassan Ali");



// ============================
// Default Product Price
// ============================


function productDetails(
    product = "Epoxy Resin",
    price = 5000
) {


    console.log(
        "Product : " + product
    );


    console.log(
        "Price : Rs. " + price
    );


}


productDetails();

productDetails(
    "Hardener",
    3500
);



// ============================
// Callback Function
// ============================


function showMessage(callback) {


    console.log(
        "ZS Chemicals Processing..."
    );


    callback();


}



function completed() {


    console.log(
        "Task Completed Successfully."
    );


}



showMessage(completed);



// ============================
// Callback With Data
// ============================


function calculateBillWithCallback(price, callback) {

    let bill = price + 1000;

    callback(bill);

}



function displayBill(total) {


    console.log(
        "Final Bill : Rs. " + total
    );


}



calculateBill(
    5000,
    displayBill
);



// ============================
// Function Expression
// ============================


const companyInfo = function () {


    console.log(
        "ZS Chemicals Karachi Pakistan"
    );


};


companyInfo();



// ============================
// Real Website Function
// ============================


const discountPrice = (price, discount = 10) => {


    let finalPrice =
        price - (price * discount / 100);


    return finalPrice;


};



let newPrice = discountPrice(5000);


console.log(
    "Discount Price : Rs. " + newPrice
);



// ======================================
// Part 12 Completed
// Next: Part 13 (DOM Advanced)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 13
// Advanced DOM Manipulation
// Create Elements
// Change HTML
// Dynamic Content
// ======================================



// ============================
// Create New Heading
// ============================

// ============================
// Create Product Card
// ============================


let productCard = document.createElement("div");


productCard.className =
    "card";



productCard.innerHTML = `

<h3>Epoxy Resin</h3>

<p>
High quality epoxy resin for industrial use.
</p>

`;



console.log(productCard);



// ============================
// Add Product Card
// ============================


let productsSection =
    document.querySelector(".products-container");


if (productsSection) {

    productsSection.appendChild(productCard);

}



// ============================
// Change Text Using DOM
// ============================


let footerText =
    document.querySelector("footer p");


if (footerText) {

    footerText.textContent =
        "Trusted Chemical Supplier in Pakistan";

}



// ============================
// Create Button Dynamically
// ============================


let newButton =
    document.createElement("button");



newButton.textContent =
    "Contact ZS Chemicals";



newButton.className =
    "contact-btn";



body.appendChild(newButton);



// ============================
// Button Click Event
// ============================


newButton.addEventListener(
    "click",
    function () {

        alert(
            "Thank you for contacting ZS Chemicals"
        );

    }
);



// ============================
// Change CSS Using JavaScript
// ============================


newButton.style.padding =
    "15px 30px";


newButton.style.backgroundColor =
    "#003366";


newButton.style.color =
    "white";


newButton.style.borderRadius =
    "10px";



// ============================
// Create Product List
// ============================


let productNames = [

    "Epoxy Resin",
    "Hardener",
    "Floor Coating",
    "Industrial Chemicals"

];



let list =
    document.createElement("ul");



productNames.forEach(function (product) {


    let item =
        document.createElement("li");


    item.textContent =
        product;


    list.appendChild(item);


});



body.appendChild(list);



// ============================
// Remove Element
// ============================


let headingRemove =
    document.querySelector("h2");


// headingRemove.remove();


// ============================
// Replace Content
// ============================


let aboutHeading =
    document.querySelector(".about-text h2");


if (aboutHeading) {

    aboutHeading.innerHTML =
        "About Our Chemical Company";

}



// ======================================
// Part 13 Completed
// Next: Part 14 (Local Storage)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 14
// Local Storage
// Save Data
// Get Data
// Remove Data
// ======================================



// ============================
// Save Company Name
// ============================


localStorage.setItem(
    "company",
    "ZS Chemicals"
);



console.log(
    localStorage.getItem("company")
);



// ============================
// Save CEO Name
// ============================


localStorage.setItem(
    "CEO",
    "Muhammad Kamran"
);



console.log(
    localStorage.getItem("CEO")
);



// ============================
// Save Product Data
// ============================


let productStorage = {

    name: "Epoxy Resin",

    price: 5000,

    category: "Industrial Chemical"

};



localStorage.setItem(
    "product",
    JSON.stringify(productStorage)
);



// ============================
// Get Product Data
// ============================


let savedProduct =
    localStorage.getItem("product");



console.log(
    JSON.parse(savedProduct)
);



// ============================
// Customer Data Save
// ============================


let customer = {

    name: "Hassan Ali",

    city: "Karachi",

    order: "Epoxy Resin"

};



localStorage.setItem(
    "customerData",
    JSON.stringify(customer)
);



// ============================
// Display Customer Data
// ============================


let customerInfo =
    JSON.parse(
        localStorage.getItem("customerData")
    );



console.log(customerInfo);



// ============================
// Check Data Exists
// ============================


if (
    localStorage.getItem("company")
) {

    console.log(
        "Company Data Found"
    );

}

else {

    console.log(
        "No Data Available"
    );

}



// ============================
// Update Storage Data
// ============================


localStorage.setItem(
    "projects",
    500
);



localStorage.setItem(
    "clients",
    300
);



console.log(
    localStorage.getItem("projects")
);



console.log(
    localStorage.getItem("clients")
);



// ============================
// Remove Single Data
// ============================


// localStorage.removeItem("CEO");



// ============================
// Clear All Storage
// ============================


// localStorage.clear();



// ============================
// Contact Form Save Example
// ============================


const savedForm =
    document.querySelector(".contact-form");



if (savedForm) {


    savedForm.addEventListener(
        "submit",
        function () {


            let formName =
                document.querySelector("#name").value;



            localStorage.setItem(
                "lastCustomer",
                formName
            );



            console.log(
                "Customer Saved : " + formName
            );



        });


}



// ======================================
// Part 14 Completed
// Next: Part 15 (JSON & API Basics)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 15
// JSON & API Basics
// JSON Parse
// JSON Stringify
// Fetch API
// ======================================



// ============================
// Create JSON Data
// ============================


let companyJSON = {

    name: "ZS Chemicals",

    city: "Karachi",

    country: "Pakistan",

    products: 4

};



console.log(companyJSON);



// ============================
// Convert Object To JSON
// JSON.stringify()
// ============================


let jsonData =
    JSON.stringify(companyJSON);



console.log(jsonData);



// ============================
// Convert JSON To Object
// JSON.parse()
// ============================


let objectData =
    JSON.parse(jsonData);



console.log(objectData);

console.log(objectData.name);



// ============================
// Product JSON Data
// ============================


let productJSON = [

    {
        name: "Epoxy Resin",
        price: 5000
    },


    {
        name: "Hardener",
        price: 3500
    },


    {
        name: "Floor Coating",
        price: 7000
    }

];



console.log(productJSON);



// ============================
// Convert Product Data
// ============================


let productString =
    JSON.stringify(productJSON);



console.log(productString);



// ============================
// API Example Data
// ============================


let chemicalAPIData = {

    status: "Success",

    company: "ZS Chemicals",

    message: "Products Available"

};



console.log(chemicalAPIData);



// ============================
// Fetch API Basic Example
// ============================

fetch(
    "https://jsonplaceholder.typicode.com/users"
)


    .then(function (response) {


        return response.json();


    })


    .then(function (data) {


        console.log(data);


    })

    .catch(function (error) {


        console.log(
            "Error : " + error
        );


    });



// ============================
// Display API Data
// ============================


fetch(
    "https://jsonplaceholder.typicode.com/users"
)

    .then(function (response) {

        return response.json();

    })


    .then(function (users) {


        console.log(
            "API Users Data"
        );


        console.log(users);


    })

    .catch(function (error) {


        console.log(error);


    });



// ============================
// Async Function API
// ============================


async function getCompanyData() {


    let response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


    let data =
        await response.json();



    console.log(data);


}



getCompanyData();



// ============================
// API Loading Message
// ============================


console.log(
    "Loading ZS Chemicals Data..."
);



// ======================================
// Part 15 Completed
// Next: Part 16 (Error Handling)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 16
// Error Handling
// try
// catch
// finally
// throw Error
// ======================================



// ============================
// Basic Try Catch
// ============================


try {


    console.log(
        "Checking ZS Chemicals System..."
    );


    let result =
        10 / 2;


    console.log(result);


}

catch (error) {


    console.log(
        "Error Found : " + error
    );


}

finally {


    console.log(
        "System Check Completed."
    );


}



// ============================
// Error Example
// ============================


try {


    let productPrice = 5000;

    let price = productPrice;

    console.log(price);


}

catch (error) {


    console.log(
        "Variable Error : " + error.message
    );


}



// ============================
// Custom Error Using Throw
// ============================


function checkStock(stock) {


    if (stock <= 0) {


        throw new Error(
            "Product Out Of Stock"
        );


    }


    console.log(
        "Product Available"
    );


}



try {


    checkStock(100);


    checkStock(0);


}

catch (error) {


    console.log(
        error.message
    );


}



// ============================
// Customer Form Error Check
// ============================


function checkCustomerName(name) {


    if (name.length < 3) {


        throw new Error(
            "Name is too short"
        );


    }


    return "Valid Customer";


}



try {


    console.log(
        checkCustomerName("Ali")
    );


}

catch (error) {


    console.log(
        "Customer Error : " +
        error.message
    );


}



// ============================
// Email Validation Error
// ============================


function validateEmail(email) {


    if (
        !email.includes("@")
    ) {


        throw new Error(
            "Invalid Email Address"
        );


    }


    return "Email Valid";


}



try {


    console.log(
        validateEmail("test@gmail.com")
    );


}

catch (error) {


    console.log(
        error.message
    );


}



// ============================
// Safe Calculation
// ============================


function calculateChemicalBill(price, quantity) {


    try {


        if (quantity <= 0) {


            throw new Error(
                "Invalid Quantity"
            );


        }


        return price * quantity;


    }


    catch (error) {


        console.log(
            "Calculation Error : " +
            error.message
        );


    }


}



console.log(
    calculateChemicalBill(5000, 5)
);



// ======================================
// Part 16 Completed
// Next: Part 17 (Classes & OOP)
// ======================================
// ======================================
// ZS Chemicals JavaScript
// Clean Final Version
// Part 17
// Classes & OOP
// Class
// Constructor
// Objects
// Methods
// ======================================



// ============================
// Create Company Class
// ============================


class Company {


    constructor(name, city, country) {


        this.name = name;

        this.city = city;

        this.country = country;


    }



    showCompany() {


        console.log(
            "Company : " + this.name
        );


        console.log(
            "City : " + this.city
        );


        console.log(
            "Country : " + this.country
        );


    }


}



// ============================
// Create Company Object
// ============================


let ZSCompany = new Company(

    "ZS Chemicals",

    "Karachi",

    "Pakistan"

);



ZSCompany.showCompany();



// ============================
// Product Class
// ============================


class Product {


    constructor(name, price, stock) {


        this.name = name;

        this.price = price;

        this.stock = stock;


    }



    showProduct() {


        console.log(
            "Product : " + this.name
        );


        console.log(
            "Price : Rs. " + this.price
        );


        console.log(
            "Stock : " + this.stock
        );


    }


}



// ============================
// Product Objects
// ============================


let resin = new Product(

    "Epoxy Resin",

    5000,

    200

);



let hardener = new Product(

    "Hardener",

    3500,

    150

);



resin.showProduct();

hardener.showProduct();



// ============================
// Employee Class
// ============================


class Employee {


    constructor(name, role, experience) {


        this.name = name;

        this.role = role;

        this.experience = experience;


    }



    introduce() {


        console.log(
            "Employee : " + this.name
        );


        console.log(
            "Role : " + this.role
        );


        console.log(
            "Experience : " +
            this.experience +
            " Years"
        );


    }


}



// ============================
// Employee Objects
// ============================


let employee1 = new Employee(

    "Akash Ali",

    "Chemical Expert",

    5

);



let employee2 = new Employee(

    "Zubair Ali",

    "Production Manager",

    6

);



employee1.introduce();

employee2.introduce();



// ============================
// Inheritance Example
// ============================


class ChemicalProduct extends Product {


    constructor(name, price, stock, type) {


        super(name, price, stock);


        this.type = type;


    }



    showType() {


        console.log(
            "Chemical Type : " +
            this.type
        );


    }


}



// ============================
// Child Class Object
// ============================


let industrialChemical =
    new ChemicalProduct(

        "Industrial Cleaner",

        2500,

        100,

        "Cleaning Chemical"

    );



industrialChemical.showProduct();

industrialChemical.showType();

// ======================================
// Part 18
// EmailJS + WhatsApp Integration
// ======================================

emailjs.init({
    publicKey: "_pCJINq-uBZVqZ-wu",
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Please fill all fields.");
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    emailjs.send(
        "service_19sp7ku",
        "template_00fm7v8",
        templateParams
    )
        .then(
            function (response) {
                console.log("SUCCESS", response.status, response.text);
                alert("Message sent successfully!");
                contactForm.reset();
            },
            function (error) {
                console.log("FAILED", error);
                alert("Failed to send message. Please try again.");
            }
        );
});