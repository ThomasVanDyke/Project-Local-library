function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id)
}

function findBookById(books, id) {
  return books.find((books) => books.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let checkedOutBooks = books.filter((books) => books.borrows[0].returned === false)
  result.push(checkedOutBooks)

  let returnedBooks = books.filter((books) => books.borrows[0].returned === true)
  result.push(returnedBooks)
  return result
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let accountId = accounts.find(account => account.id === borrow.id)
    return { ...borrow, ...accountId}
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
