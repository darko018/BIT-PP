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

