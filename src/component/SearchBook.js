import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchBook extends Component {
    state = {
        booksToShow: []
    }

    static propTypes = {
        onSearchBooks: PropTypes.func.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
        booksFound: PropTypes.array,
        bookList: PropTypes.array
    }

    componentWillReceiveProps = (props) => {
        let displayBooks = []
        if (props.booksFound.length > 0 && props.booksFound[0] !== "error") {
            Object.values(props.booksFound).map((book) => {
                let myBook = (props.bookList.find((bookOnShelf) => {
                    return (book.id === bookOnShelf.id)
                }))
                return (displayBooks.push(myBook ? myBook : book))
            })
        }
        this.setState({
            booksToShow: displayBooks
        })
    }

    render() {
        const { onSearchBooks, onChangeShelf, booksFound } = this.props;
        const { booksToShow } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(evt) => onSearchBooks(evt.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            /*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */
                        }
                        {(booksFound.length > 0 && booksFound[0] === "error") ? <p>Sorry, no result found.</p> :
                            (
                                Object.values(booksToShow).map((book) => {
                                    return (
                                        <Book
                                            key={book.id}
                                            bookData={book}
                                            onChangeShelf={onChangeShelf}
                                        />
                                    )
                                })
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;