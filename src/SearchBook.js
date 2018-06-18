import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBook extends Component {
    static propTypes = {
        onSearchBooks: PropTypes.func.isRequired,
        bookList: PropTypes.array
    }

    render() {
        const { bookList, onSearchBooks } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" /*onClick={() => this.setState({ showSearchPage: false })}*/>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by category" onChange={(evt) => onSearchBooks(evt.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { (bookList.length > 0 && bookList[0] === "error") ? <p>Sorry, no result found.</p> :
                            Object.keys(bookList).map((item, index) => {
                                return (
                                    <Book
                                        key={index}
                                        id={bookList[item].id}
                                        title={bookList[item].title}
                                        // TODO: Fix author display on Book authors
                                        author={bookList[item].authors}
                                        shelf={"none"}
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