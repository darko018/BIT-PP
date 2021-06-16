"use strict";

(function () {

    function Country(name, odds, continent) {
        if (!name || !odds) {
            throw new Error ("Please fill out all fields!")
        }
        this.countryName = name;
        this.odds = odds;
        if (!continent)  {
            throw new Error ("Please, fill out continent name!");
        }
        this.continent = continent;
    };

    function Continent () {
        this.EUROPE = "EU";
        this.ASIA = "AS";
        this.AFRICA = "AF";
        this.SOUTHAMERICA = "SA";
        this.NORTHAMERICA = "NA";
        this.AUSTRALIA = "AU";
    };


    function Person (name, surname, date) {
        if (!name || !surname || !date) {
            throw new Error ("Please, fill out the required fields!")
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(date);
        this.getMethod = function () {
            var result = "";
            var day = this.dateOfBirth.getDate();
            var month = this.dateOfBirth.getMonth() + 1;
            var year = this.dateOfBirth.getFullYear();
            return result += this.name + " " + this.surname + ", " + day + "." + month + "." + year + ".";
        };
    };
    
    function Player (person, bet, country) {
        if (!person || !bet) {
            throw new Error ("All fiends are required!");
        }
        this.person = person;
        this.betAmount = bet;
        if (!country || !(country instanceof Country)) {
            throw new Error ("Country field is required!")
        }
        this.country = country;
        this.getMethod = function () {
            var abbr = abbrevation(this.country.countryName);
            var expectedAmount = (this.country.odds * this.betAmount).toFixed(2);
            var age = getAge(this.person.dateOfBirth);
            return abbr + ", " + expectedAmount + " eur, " + this.person.name + " " + this.person.surname + ", " + age + " years";
        }
    }

    function Address (country, city, code, street, number) {
        if (!country || !city || !code || !street || !number) {
            throw new Error ("Please, insert your full address!")
        }
        this.country = country;
        this.city = city;
        this.postalCode = code;
        this.street = street;
        this.streetNumber = number;
        this.getMethod = function () {
            var country = abbrevation(this.country); 
            return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + country;
        }
    };

    function BettingPlace (address) {
        if (!address || !(address instanceof Address)) {
            throw new Error ("Please insert your address!");
        }
        this.address = address;
        this.listOfPlayers = [];
        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);
        }
        this.getMethod = function () {
            var allBets = 0;
            this.listOfPlayers.forEach(function (player) {
                allBets += player.betAmount;
            });
            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + allBets + "eur";
        }
    };

    function BettingHouse (competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numbersOfPlayers = 0;
        this.addBettingPlaces = function (place) {
            this.listOfBettingPlaces.push(place);
            this.numbersOfPlayers += place.listOfPlayers.length;
        }
        this.allData = function () {
            var country = [];
            var result = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numbersOfPlayers + " bets" + "\n";
            this.listOfBettingPlaces.forEach(function (place) {
                result += "\t" + place.getMethod() + "\n"; 
                place.listOfPlayers.forEach(function (player) {
                    result += "\t\t" + player.getMethod() + "\n";
                    country.push(player.country.countryName);
                })  
            });
            var split = mostFrequent(country).split(",");
            if (split[1] === 1) {
                return result += "All countries occur equally in Betting House.";
            }
            return result += "There are " + split[1] + " bets on " + split[0];

        }
    };



    //object factory

    function createPlayer (person, bet, country) {
        return new Player(person, bet, country);
    };

    function createBettingPlace(address) {
        return new BettingPlace(address);
    };


    //utility functions

    function abbrevation (country) {
        var vowels = ["a", "e", "i", "o", "u"];
        var abbr = country[0];
        for (var i = 1; i < country.length; i++) {
            
            if (!(vowels.includes(country[i].toLowerCase()))) {
                abbr += country[i];
            }
        }
        return abbr.toUpperCase().slice(0, 2);
    }

    function getAge(birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function mostFrequent (array) {
        var theMost = 1;
        var counter = 0;
        var temp;
        for (var i = 0; i < array.length; i++) {
            for (var j = i; j <array.length; j++) {
                if (array[i] === array[j]) {
                    counter++;
                } 
                if (theMost < counter) {
                    theMost = counter;
                    temp = array[i];
                }
            }
            counter = 0;
        }
        return temp + "," + theMost;
    }


    //testing
    
    try {
        var Continent = new Continent();
        Object.freeze(Continent);
        
        //first player
        var person1 = new Person("Pera", "Peric", "Feb 23 1992");
        var country1 = new Country("Srbija", 1, Continent.EUROPE);
        var player1 = createPlayer(person1, 1050, country1);
        //second player
        var person2 = new Person("Pera", "Peric", "Feb 23 1992");
        var country2 = new Country("Srbija", 1, Continent.EUROPE);
        var player2 = createPlayer(person2, 1050, country2);
        //third player 
        var person3 = new Person("Pera", "Peric", "Feb 23 1992");
        var country3 = new Country("Germay", 1, Continent.EUROPE);
        var player3 = createPlayer(person3, 1050, country3);
        //forth player
        var person4 = new Person("Pera", "Peric", "Feb 23 1992");
        var country4 = new Country("Srbija", 1, Continent.EUROPE);
        var player4 = createPlayer(person4, 1050, country4);

        //first betting place
        var address1 = new Address ("Srbija", "Beograd", 11000, "Nemanjina", 41)
        var bettingPlace1 = createBettingPlace(address1);
        //second betting place
        var address2 = new Address("Srbija", "Beograd", 11000, "Nemanjina", 34);
        var bettingPlace2 = createBettingPlace(address2);

        //add players to betting places
        bettingPlace1.addPlayer(player1);
        bettingPlace1.addPlayer(player2);
        
        bettingPlace2.addPlayer(player3);
        bettingPlace2.addPlayer(player4);


        //add betting places 
        var bettingHouse = new BettingHouse("Football World Cup Winner,");
        bettingHouse.addBettingPlaces(bettingPlace1);
        bettingHouse.addBettingPlaces(bettingPlace2);

        
        console.log(bettingHouse.allData());

        
    }catch (err) {
        console.log(err.message);
    }
})();







