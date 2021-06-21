// 1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


var coffie = {
    name:"esspreso", 
    strength: "strong", 
    flavour: "irish", 
    milk: false, 
    sugar: true,
}
console.log(coffie.flavour);


// 2.Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.


var movie = {
    title:"Jumanji", 
    actors: ["dasda", "dasdas","dasdas"],
    director:{
        firstName: "Jake",
        lastName:"Kasdan"
    } ,
    genre:"Comedy, Adventure, Action", 
}
console.log(movie.director.firstName);
console.log(movie.director);


// 3.Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.


function project(des, lan, repository, stat,) {
    var obj = {
      description: des,
      language: lan,
      git: repository,
      status: stat,
      printStatus: function () {
        if (stat) {
          return "Is in development";
        }
        return "Is finished";
      },
      printRep: function () {
        console.log(repository);
      },
      printWritten: function () {
        if (lan == "JavaScript") {
          return "Using JavaScript";
        }
        return "Do not using JavaScript";
      }
    }
    return obj;
  }
  var func = project("E-commerce", "PHP", "SomeGitHubProfile", true);
  console.log(func.printStatus());


// 4.Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
//   Add a method that prints out all the ingredients necessary for the meal preparation. 
//   Add a method that checks if a meal can be prepared for 15 minutes. 
//   Add a method that changes the type of cuisine to the given value. 
//   Add a method that delete a given ingredient from the list of ingredients.


function createRecipe (name, cuisine, complexity, ingredients, time, instruction){
    var recipe = {
        name: name,
        typeOfCuisine: cuisine,
        complexity: complexity,
        ingredients: ingredients,
        preparingTime: time,
        preparingInstruction: instruction,
        mealIngredients: function () {
            return console.log(ingredients);
        },
        timeOfPreparing: function (){
            return time <= 15 ? console.log("Can be prepared in 15 minutes") : console.log("Can\'t be prepared in 15 minutes");
        },
        changeCuisine: function (newCuisine){
            cuisine = newCuisine;
            recipe.typeOfCuisine = cuisine;
            return console.log(recipe.typeOfCuisine);
        },
        deleteIngredient: function (ingredient){
            var newIngredients = [];
            var j = 0;
            for (var i = 0; i < ingredients.length; i++){
                if (ingredient !== ingredients[i]){
                    newIngredients[j] = ingredients[i];
                    j++;
                } else {
                    continue;
                }
            }
            recipe.ingredients = newIngredients;
            return console.log(newIngredients);
        },
    }
    return recipe;
}

var recipe = createRecipe("Punjene paprike","Serbian",5,['paprika', 'luk', 'meso', 'pirinac', 'sargarepa', 'vegeta', 'paradajz sok', 'so', 'biber'], 120, 'Paprike izdubiti i napuniti nadevom od mesa i zacina. U serpicu dodati sok od paradajza, vodu, so i staviti na vatru da se prokuva. Pred kraj kuvanja dodati zaprsku. Vreme pripreme 2 sata.');


// recipe.mealIngredients();                 //prints needed ingredients when uncommented
// recipe.timeOfPreparing();                 //checks if needed time of preparing is within 15 minutes
// console.log(recipe.typeOfCuisine);                  //prints type of cuisine
// recipe.changeCuisine("serbian");                    //change the type of cuisine
// console.log(recipe.typeOfCuisine);                  //prints new (changed) type of cuisine
// console.log(recipe.ingredients);                    //prints needed ingredients
// recipe.deleteIngredient('punjene paprike');         //delete given ingredient and prints new list of needed ingredients 