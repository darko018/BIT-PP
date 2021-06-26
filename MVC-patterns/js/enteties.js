function Festival() {
    this.listOfAllMovies = [];
    this.listOfPrograms = [];
}

function Movie (title, lenght, genre) {
    this.title = title;
    this.lenght = lenght;
    this.genre = genre;
}

Movie.prototype.genreCode = function() {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.lenght - 1].toUpperCase();
    return firstLetter + lastLetter;
}

Movie.prototype.getData = function() {
    return this.title + ", " + this.lenght + "min." + ", " + this.genreCode();
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.lenghtOfAllMovie = function(){
    var sumOfMinutes = 0;
    this.listOfMovies.forEach(function (item) {
        sumOfMinutes += item.lenght;
    });
    return sumOfMinutes;
}

Program.prototype.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input!!!");
        return;
    }
    this.listOfMovies.push(movie);
}

Program.prototype.getTotalMovies = function() {
    
}