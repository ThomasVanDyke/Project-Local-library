function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id)
}

function sortAccountsByLastName(accounts) {
return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
        if (books[i].borrows[j].id === account.id) {
          result++
        }
    }
  }
  return result
}
// helper function to match author
function getAuthorByBook(authors, filteredBooks) { 
  filteredBooks.forEach(item => { 
    const author = authors.find(author => { 
    if(author.id === item.authorId) { 
      return author; 
    }
  })
  item.author = author }) 
} 

function getBooksPossessedByAccount(account, books, authors) {
  let accountId = account.id; 
  let result = []; 
  for(let i = 0; i < books.length; i++) {
    for(let j = 0; j < books[i].borrows.length; j++) {
      if(account.id === books[i].borrows[j].id && books[i].borrows[j].returned === false) {
         result.push(books[i]) 
      } 
    } 
  } 
  getAuthorByBook(authors, result) 
  return result; 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
