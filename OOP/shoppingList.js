"use strict";

(function shoppingList() {

    function Product (name, price, expDate) {

        if (!name || !price || expDate){
            throw new Error ("All field are required")
        }

        this.productID = parseInt(((99999 - 10000) * Math.random()) + 10000);
        this.productName = name;
        this.productPrice = price.toFixed(2);
        this.expirationDate = new Date(expDate);

        this.getInfo = function() {

            var pName = this.productName;
            var string = (pName.charAt(0).concat(pName.charAt(pName.length - 1))).toUpperCase();
            var letterID = string + this.productID;

            return letterID + ", " + pName + ", " +this.productPrice;
        }
    }


    function ShoppingBag() {

        this.productList = [];
        this.addProduct = function (product) {

            if (product.expirationDate.getTime() > Date.now()) {
                this.productList.push(product);
                return "Your product has valid expiration date!";
            } else {
                return "Your product has expired!!!";
            }
        }  

        this.averagePrice = function () {

            var average = this.calulateTotalPrice() / this.productList.length;
            return average.toFixed(3);

        }

        this.getMostExpensive = function () {
            var max = -Infinity;
            var maxProduct;

            this.productList.forEach (function(el) {
                var currentPrice = parseFloat(el.productPrice);
                 if (currentPrice > max) {
                     max = currentPrice;
                     maxProduct = e.getInfo();
                 }
            })
            return maxProduct;
        }

        this.calulateTotalPrice = function () {
            var priceOfAllProducts = 0;
            this.productList.forEach (function (el) {
                var productPrice = parseFloat(e.productPrice);
                priceOfAllProducts += productPrice;
            })
            return priceOfAllProducts;
        } 
    }

    function PaymentCard (balance, status, validDate) {
        if (!balance || !status || !validDate) {
            throw new Error ("All fields are required!")
        }
        this.accountBalance = balance.toFixed(2);
        this.status = status;
        this.valid = new Date (validDate);
    }

    function checkoutAndBuy (bag, card) {
        if (!(bag instanceof ShoppingBag) || !(card instanceof PaymentCard)) {
            throw new Error ("Invalid input!")
        }
        var cardAmount = card.accountBalance;
        var totalPrice = bag.calculateTotalPrice();
        if (card.valid.getTime() > Date.now()) {
            if (cardAmount >= totalPrice) {
                return "Your purchase is successful!"
            } else {
                var missingAmount = totalPrice - cardAmount;
                return "You are missing " + missingAmount.toFixed(2) + " to complete your purchase!"
            }
        } else {
            throw new Error ("Your card has expired!");
        }
        
        
    }

    
}) 