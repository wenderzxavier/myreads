import React from 'react'
import './App.css'
import SearchBook from './component/SearchBook'
import * as BookAPI from './BookAPI'
import Shelves from './component/Shelves'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    searchBookList: [],
    bookList: [],
    shelfList: {}
  }

  getAllBooks = async () => {
    await BookAPI.getAll().then((result) => {
      this.setState({ bookList: result })
    })
  }

  changeShelf = async (book, shelf) => {
    if (!book.hasOwnProperty('shelf')) {
      this.setState(state => ({
        bookList: state.bookList.concat([book])
      }))
    }
    await BookAPI.update(book, shelf).then(shelfList => {
      this.setState({ shelfList })
    })
    this.getAllBooks();
  }

  searchBooks = async (query) => {
    if (query) {
      await BookAPI.search(query).then((result) => {
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
      <div className="app" >
        <Route exact path="/search" render={() => (
          <SearchBook
            onSearchBooks={(query) => this.searchBooks(query)}
            booksFound={this.state.searchBookList}
            onChangeShelf={this.changeShelf}
            bookList={this.state.bookList}
          />
        )}
        />
        <Route exact path="/" render={() => (
          <Shelves
            bookList={this.state.bookList}
            onChangeShelf={this.changeShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp;