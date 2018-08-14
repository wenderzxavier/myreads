import React from 'react'
import '../styles/App.css'
import SearchBook from './SearchBook'
import Shelves from './Shelves'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app" >
        <Route exact path="/search" render={() => (
          <SearchBook
          />
        )}
        />
        <Route exact path="/" render={() => (
          <Shelves />
        )}
        />
      </div>
    )
  }
}

export default BooksApp;