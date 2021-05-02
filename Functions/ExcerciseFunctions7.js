// 1.Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// *takes 4 arguments: number of children, partner's name, geographic location, job title.
// *outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function fortuneTeller(children, location, partner, job) {
    var children = children;
    var location = location;
    var partner = partner;
    var job = job;
    var string = "";
  
    string = "You will be a " + job + " in " + location + " and married to " + partner + " with " + children + " kids.";
    return string;
  }
console.log(fortuneTeller("1", "Serbia", "Jasmina", "Programer"));
console.log(fortuneTeller("2", "England", "Victoria", "Soccer Player"));
console.log(fortuneTeller("3", "USA", "Emma", "CEO"));


// 2.You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}
calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(5);


// 3.Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply (age, amount) {
    var result = "";
    var maxAge = 80;
    var lifetimeSupply = 365 * amount;
  
    result = lifetimeSupply * (maxAge - age);
    return "You will need " + result + " candies to last you until the ripe old age of " + maxAge;
  }
console.log(calculateSupply(13, 1));
console.log(calculateSupply(9, 2));
console.log(calculateSupply(6, 4));


// 4.It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(num) {
    var celsius = num;
    var result = celsius + "°C is " + ((celsius * 9) / 5 + 32) + "°F";
    return result;
  }
  function fahrenheitToCelsius(num) {
    var fahrenheit = num;
    var result = fahrenheit + "°F is " + ((fahrenheit - 32) * 5) / 9 + "°C";
    return result;
  }
console.log(fahrenheitToCelsius(100));
console.log(celsiusToFahrenheit(29));
