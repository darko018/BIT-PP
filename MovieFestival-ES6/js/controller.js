const festival = new Festival();

const inputTitle = document.getElementById('title');
const inputLength = document.getElementById('length');
const optionGenre = document.getElementById('genre');
const createMovieButton = document.getElementById('create-movie');
const paraErrorMessage = document.getElementById('para-error-message');
const listOfMovies = document.getElementById('listOfMovies');
const movieSelect = document.getElementById('movie-select');
const createProgram = document.getElementById('create-program');
const inputDate = document.getElementById('input-date');
const programError = document.getElementById('program-error');
const programSelect = document.getElementById('program-select');
const programList = document.getElementById('program-list');
const addMovieToProgram = document.getElementById('add-movie-to-program');



function createMovieFunction() {
    let titleValue = inputTitle.value;
    let lengthValue = inputLength.value;
    let genreValue = optionGenre.value;


    if (!titleValue || !lengthValue || !genreValue) {
        paraErrorMessage.textContent = 'You must fill all of the fields !';
        return;
    }

    paraErrorMessage.textContent = '';

    let movie = new Movie(titleValue, lengthValue, genreValue);
    festival.listOfAllMovies.push(movie);
    let indexOfMovie = festival.listOfAllMovies.length - 1;
    console.log(movie);

    let li = document.createElement('li');
    li.textContent = movie.getData();
    listOfMovies.append(li);

    let movieOptionElement = document.createElement('option');
    movieOptionElement.textContent = movie.title;
    movieOptionElement.setAttribute('value', indexOfMovie);
    movieSelect.appendChild(movieOptionElement);


    console.log(festival);
}


array = [];
function createProgramFunction() {
    let programDate = inputDate.value;
    console.log(programDate);



    let date = new Date(programDate);

    if (date.getTime() < (Date.now() - 86400000)) {
        programError.textContent = 'Invalid date !';
        console.log(Date.now());
        return;
    }
    if (array.includes(date.getTime())) {
        programError.textContent = 'That program already exists !';
        return;
    }

    if (!programDate) {
        programError.textContent = 'Date input is requared !';
        return;
    }

    programError.textContent = '';


    let program = new Program(date);
    festival.listOfprograms.push(program);
    let index = festival.listOfprograms.length - 1;

    let li = document.createElement('li');
    li.setAttribute('id', 'id-' + index);
    li.textContent = program.getData();
    programList.appendChild(li);


    let optionProgram = document.createElement('option');
    optionProgram.setAttribute('value', index);
    optionProgram.setAttribute('id', 'option-' + index);
    optionProgram.textContent = program.getData();
    programSelect.appendChild(optionProgram);

    array.push(date.getTime());



    console.log(array);
    console.log(festival);


}

function addMovieToProgramFunction() {

    let movieIndex = movieSelect.value;
    let programIndex = programSelect.valulet
    let movie = festival.listOfAllMovies[movieIndex];
    let program = festival.listOfprograms[programIndex];
    let li = document.querySelector('#id-' + programIndex);
    let option = document.querySelector('#option-' + programIndex);

    program.addMovie(movie);
    li.textContent = program.getData();
    option.textContent = program.getData();

}



createMovieButton.addEventListener('click', createMovieFunction);
createProgram.addEventListener('click', createProgramFunction);
addMovieToProgram.addEventListener('click', addMovieToProgramFunction);
