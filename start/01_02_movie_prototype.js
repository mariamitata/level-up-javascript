// Write your code here
class Movie {
  constructor(title, director, genre, release_year, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.release_year = release_year;
  this.rating = rating;
  }
  //getter
  get overview() {
    return this.movidOverview();
  }

  //Method
  movidOverview () {
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director} 
    was released in ${this.release_year}. It received a rating of ${this.rating}`);
  }
}

const LordOfTheRings = new Movie("The Lord of the Rings", "Peter Jackson", "Drama", 2003, 9.0 );

console.log(LordOfTheRings.overview)