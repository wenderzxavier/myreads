import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BookAPI'

class SearchBook extends Component {
    state = {
        query: '',
        bookList: {}
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }

    componentDidUpdate () {
        if (this.state.query) {
            BooksAPI.search(this.state.query).then( result => {
                this.setState({ bookList: result })
            })                
        }
    }

    render() {
        const { query, bookList } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" /*onClick={() => this.setState({ showSearchPage: false })}*/>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.updateQuery(evt.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { ( Object.keys(bookList).length > 0  && !bookList['error']) && Object.keys(bookList).map( (item, index) => {
                            return(
                            <Book 
                            key={index} 
                            title={bookList[item].title} 
                            author={bookList[item].authors} 
                            cover={bookList[item].hasOwnProperty('imageLinks') ? bookList[item].imageLinks['thumbnail'] : " "}/>)
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;