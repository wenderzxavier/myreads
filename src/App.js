import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import * as BookAPI from './BookAPI'
import Shelves from './Shelves'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    searchBookList: [],
    bookList: [],
    shelfList: {}
  }

  getAllBooks = async () => {
    await BookAPI.getAll().then((result) => {
      this.setState({ bookList: result })
    })
    console.log(this.state.bookList);
    console.log(this.state.shelfList);
  }

  changeShelf = async (book, shelf) => {
    if( !book.hasOwnProperty('shelf') ) {
      this.setState( state => ({
        bookList: state.bookList.push(book)
      }))
    }
    console.log(shelf);
    await BookAPI.update( book, shelf).then( shelfList => {
      this.setState({ shelfList })
    })
    this.getAllBooks();
  }

  searchBooks = async (query) => {
    if (query) {
      await BookAPI.search(query).then((result) => {
        // this.state.bookList.push(result[1])
        // console.log(this.state.bookList)
        // console.log(this.state.shelfList)
        // this.changeShelf(result[1], "wantToRead")
         this.setState({
          searchBookList: result.hasOwnProperty('error') ? ["error"] : result
        })
      })
    } else {
      this.setState({
        searchBookList: []
      })
    }
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
            onSearchBooks={(book) => this.searchBooks(book)}
            bookList={this.state.searchBookList}
            onChangeShelf={this.changeShelf}
          />
        ) : (
            <Shelves
              bookList={this.state.bookList}
              onChangeShelf={this.changeShelf}
            />
          )}
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp;