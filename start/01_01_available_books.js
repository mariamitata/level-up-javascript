// Write your code here

class Book{
  constructor(bookTitle, bookAuthor, bookISBN, numCopies) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookISBN = bookISBN;
    this.numCopies = numCopies;
  }
  get avalability() {
    return this.getAvailability();
  }
  get numberOfCopies() {
    return this.getNumberOfCopies();
  }
// function check the books numbers in stock and
// returns the message depend of the numbers left
  getAvailability() {
    if (this.numCopies <= 0 ) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low in stock";
    } else {
      return "In stock";
    }
  }

  getNumberOfCopies() {
    return this.numCopies;
  }
//sell book and calculate how many copies left  
sell(numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
}
//stock book and calculate copies
stock(numKopiesStocked = 5) {
  this.numCopies += numKopiesStocked;
}
}



const HafkaOnTheShore = new Book("Hafka On The Shore", "Haruki Murakami", 655445, 12)



HafkaOnTheShore.stock(3)
console.log(HafkaOnTheShore.getNumberOfCopies())