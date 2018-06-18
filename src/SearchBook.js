import React, { Component } from 'react';
import Book from './Book'
//import * as BookAPI from './BookAPI'

class SearchBook extends Component {

    render() {
        let bookList = this.props.bookList;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" /*onClick={() => this.setState({ showSearchPage: false })}*/>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by category" onChange={(evt) => this.props.onSearchBooks(evt.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(bookList['error']) ? <p>Sorry, no result found.</p> :
                            Object.keys(bookList).map((item, index) => {
                                return (
                                    <Book
                                        key={index}
                                        id={bookList[item].id}
                                        title={bookList[item].title}
                                        // TODO: Fix author display on Book authors
                                        author={ bookList[item].authors } 
                                        cover={bookList[item].hasOwnProperty('imageLinks') ? bookList[item].imageLinks['thumbnail'] : " "} />)
                            })
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;