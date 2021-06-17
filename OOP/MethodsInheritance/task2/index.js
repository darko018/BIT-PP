function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}


App.prototype.isCCLicence = function () {
    if (this.licence === 'CC') {
        return true;
    }
    else {
        return false;
    }
}

App.prototype.like = function () {
    return ++this.stars;
}

App.prototype.showStars = function () {
    console.log(this.stars);
}

function WebApp(name, licence, stars, url, technologies) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    console.log(this.name + ' ' + this.licence + ' ' + this.stars + ' ' + this.url + ' ' + this.technologies);
}
WebApp.prototype.reactBased = function () {
    if (this.technologies === 'React') {
        return true;
    }
    else {
        return false;
    }
}

function Mobile(name, licence, stars, platforms) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

Mobile.prototype = Object.create(App.prototype);
Mobile.prototype.constructor = Mobile;

Mobile.prototype.getData = function () {
    console.log(this.name + ' ' + this.licence + ' ' + this.stars + ' ' + this.platforms);
}

Mobile.prototype.forAndroid = function () {
    if (this.platforms === 'Android') {
        return true;
    }
    else {
        return false;
    }
}

var viber = new WebApp('Viber', 'CC', 5, 'www.viber.com', 'React');
var biber = new Mobile('Biber', 'CC', 9, 'Android');


console.log(biber.forAndroid());

