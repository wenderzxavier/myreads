import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import * as BookAPI from './BookAPI'
import Shelves from './Shelves'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    searchBookList: [],
    bookList: []
  }

  searchBooks = (query) => {
    if (query) {
      BookAPI.search(query).then((result) => {
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
    BookAPI.getAll().then((bookList) => {
      this.setState({ bookList })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
            onSearchBooks={(book) => this.searchBooks(book)}
            bookList={this.state.searchBookList}
          />
        ) : (
            <Shelves
              bookList={this.state.bookList}
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