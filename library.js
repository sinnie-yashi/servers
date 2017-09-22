var books = {
  "Harry Potter" : {
    author: "J. K. Rowling",
    published: "26th June 1997",
  },
    "The Bible" : {
      author: "The Prophets",
      published: "many years ago",
    },
    "Abundant Grace" : {
      author: "McDowell",
      published: "1st April 2000",
    },
};

function getBookAuthor(name) {
  return books[name].author;
};

function getDatePublished(name) {
  return books[name].published;
};

console.log(getBookAuthor("Harry Potter"))

module.exports = {
  getBookAuthor: getBookAuthor,
  getDatePublished: getDatePublished
}
