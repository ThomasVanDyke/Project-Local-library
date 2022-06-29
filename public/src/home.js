function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0
  books.forEach(books => {
    if (books.borrows[0].returned === false) {
      borrowedBooks ++
    }
  });
  return borrowedBooks
}

function getMostCommonGenres(books) {
  let genres = books.reduce((genre, books) => {
    genre[books.genre] = 0
    return genre
  }, {})
  for (let i = 0; i < books.length; i++) {
    if(books[i].genre in genres) {
      genres[books[i].genre] ++
    }
    else {
      genres[books[i].genre] = 1
    }
  }
  const result = []
  for (let key in genres) {
    const resultObj = {
      name : key,
      count : genres[key]
    }
    result.push(resultObj)
  }
  result.sort((genreA, genreB) => genreB.count - genreA.count)
  return result.slice(0, 5)
  
}

function getMostPopularBooks(books) {
  const result = []
  for(let i = 0; i < books.length; i++){
    const resultObj = {
      name : books[i].title,
      count : books[i].borrows.length
    }
    result.push(resultObj)
  }
  
  result.sort((bookA,bookB) => bookB.count - bookA.count)
  return result.slice(0,5)
  
}

function getMostPopularAuthors(books, authors) {
  let result = [];

  for(let i = 0; i < authors.length; i++){
    for(let j = 0; j < books.length; j++){
    if(authors[i].id === books[j].authorId){
      const resultObj = {
        name : authors[i].name.first + " " + authors[i].name.last,
        count : books[j].borrows.length
       }
      result.push(resultObj);
      }
    }  
  }
  console.log(result);

  result.sort((authorA, authorB) => authorB.count - authorA.count);
  return result.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
