'use strict';
(function () {


    function Country (name, odds, continent) {

        if (!countryName || !odds || !continent) {
            throw new Error('Country: All properties are required')
          }
          if (!(continent instanceof Continent)) {
            throw new Error('Country: Invalid continent input')
          }

        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }


    function Person (name, surname, dateOfBirth) {
        
        if (!name || !surname || !dateOfBirth) {
            throw new Error('Person: All fields are required')
          }

        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new (dateOfBirth);

        this.getData = function () {
            var day = this.dateOfBirth.getDate();
            var month = this.dateOfBirth.getMonth() + 1;
            var year = this.dateOfBirth.getFullYear();
            var result = day + '.' + month + '.' + year;
      
            return [this.name, this.surname, result].join(' ');
          }
      
          this.getAge = function () {
            var currentYear = (new Date()).getFullYear();
            return currentYear - this.dateOfBirth.getFullYear();
          }
    }


    function Player (person, betAmount, country) {

        if (!person || !(person instanceof Person)) {
            throw new Error('Player: Invalid person input');
          }
          if (!country || !(country instanceof Country)) {
            throw new Error('Player: Invalid country input');
          }

          this.person = person;
          this.betAmount = betAmount;
          this.country = country;
    }


    function Adress (country, city, postalCode, street, number) {

        if (!country || !(country instanceof Country)) {
            throw new Error('Address: Invalid country input');
          }

          this.country = country;
          this.city = city;
          this.postalCode = postalCode;
          this.street = street;
          this.number = number;
    }


    function BettingPlace (adress) {

        if (!address || !(address instanceof Address)) {
            throw new Error('Betting Place: Invalid address input');
          }
      
          this.listOfPlayers = [];
          this.address = address;
    }


    function BettingHouse (competition, numberOfPlayers) {

        this.competition = competition;
        this.numberOfPlayers = numberOfPlayers;
        this.list = [];
    }








})