// 1. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. Print output in console.
// For input 1, output should be “Monday”.


var number = 1;

switch (number){

    case 1:
        console.log('Monday');
    break;
    case 2:
        console.log('Tuesday');
    break;
    case 3:
        console.log('Wendsday');
    break;
    case 4:
        console.log('Thursday');
    break;
    case 5:
        console.log('Friday');
    break;
    case 6:
        console.log('Saturaday');
    break;
    case 7:
        console.log('Sanday');
    break;

}


// 2. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var number = 1;

switch (number){

    case 1:
        console.log('Monday');
    break;
    case 2:
        console.log('Tuesday');
    break;
    case 3:
        console.log('Wendsday');
    break;
    case 4:
        console.log('Thursday');
    break;
    case 5:
        console.log('Friday');
    break;
    case 6:
        console.log('Saturaday');
    break;
    case 7:
        console.log('Sanday');
    break;
    default :
    console.log("It must be number between 1 to 7");
}


// 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

var number = 7;

switch (number) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('It’s weekday')
    break;
    case 6:
    case 7:
        console.log('It’s weekend');
    break;
    default :
    console.log("It must be number between 1 to 7");
}

// 4. Write a program that for a 1-12 number input (representing a month in a year) shows that
// month’s name. All other cases output a message explaining that input must be a number
// between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.


var number = 13;

switch (number){

    case 1:
        console.log('Januray');
    break;
    case 2:
        console.log('Febraury');
    break;
    case 3:
        console.log('March');
    break;
    case 4:
        console.log('April');
    break;
    case 5:
        console.log('May');
    break;
    case 6:
        console.log('June');
    break;
    case 7:
        console.log('July');
    break;
    case 8:
        console.log('August');
    break;
    case 9:
        console.log('Septembar');
    break;
    case 10:
        console.log('October');
    break;
    case 11:
        console.log('November');
    break;
    case 12:
        console.log('December');
    break;

    default :
    console.log("It must be number between 1 to 12");
}

// 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var number = 3;

switch (number){

    case 1:
    case 2:
        console.log('Winter');
    break;
    case 3:
    console.log("First half of March is Winter, second half of March is Spring");
    break;

    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
        console.log("First half of June is Spring, second half of June is Summer");
    break;
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
        console.log("First half of September is Summer, second half of September is Autumn");
    break;
    case 10:
    case 11:
        console.log('Autumn');
    case 12:
        ("First half of December is Autumn, second half of December is Winter");
    break;

    default :
    console.log("It must be number between 1 to 12");
}

// 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
// message about that grade in the following manner: A - ;Good job, B - ;Pretty good, C -
// Passed;, D - ;Not so good, F - ;Failed;. Input different from letters A-F outputs a message
// Unknown grade;.

var grade = 'A';

switch (grade){

    case 'A':
        console.log('Good job');
    break;
    case 'B':
        console.log('Pretty good');
    break;
    case 'C':
        console.log('Passed');
    break;
    case 'D':
        console.log('Not so good');
    break;
    case 'F':
        console.log('Failed');
    break;
    default :
    console.log("Unknown grade");
}

// 7. Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has
// to be at least 5 countries and 15 cities. Note that each country must have a different
// number of cities. Input different from the listed cities should output a message;Please
// choose a different city;.

var city = 'Belgrade';
switch (city){

    case 'Belgrade':
    case 'Nis': 
    case 'Kragujevac':
    case 'Novi Sad':  
    case 'Krusevac':
        console.log('Serbia');
    break;
    case 'New York':
    case 'Las vegas': 
    case 'Chicago':
    case 'Detroit':  
    case 'Krusevac':
        console.log('Serbia');
    break;
    default :
    console.log("Unknown grade");
}