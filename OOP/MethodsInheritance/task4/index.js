class App {
    constructor (name, licence,stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    isCCLicence () {
        return (this.licence === "CC");
    }

    like () {
        this.stars += 1;
    }

    showStars () {
        console.log(this.stars);
    }
}

class WebApp extends App {
    constructor (name, licence, stars, technologies) {

    super (name, licence, stars)
    this.technologies = technologies;
    }

    getData () {
        console.log(this.name + ", " + this.licence + ", " + this.stars + ", " + this.technologies);
    }

    reactBased () {
        this.technologies.forEach(function (el) {
            if (el === "React") {
                result = true;
            } else {
                return false;
            }
        })
    }

}

class MobileApp extends App {
    constructor (name, licence, stars, platforms) {
        
    super (name, licence, stars)   
    this.platforms = platforms; 
    }

    getData () {
        console.log(this.name + ", " + this.licence + ", " + this.stars + ", " + this.platforms);    
    }

    forAndroid () {
        this.platforms.forEach(function (el) {
            if (el === "Android") {
                result = true;
            } else {
                return false;
            }
        })
    }
}

var mobile1 = new MobileApp ("Samsung", "CC", 3, "Android");
console.log(mobile1.isCCLicence());