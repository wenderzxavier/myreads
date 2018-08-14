import React, { Component } from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import { search } from '../utils/BookAPI'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions'
import { DebounceInput } from 'react-debounce-input'

class SearchBook extends Component {
    state = {
        booksFound: [],
        booksToShow: []
    }

    searchBooks = async (query) => {
        if (query) {
            await search(query).then((result) => {
                this.setState({
                    booksFound: result.hasOwnProperty('error') ? ["error"] : result
                })
                const { booksFound } = this.state;
                let displayBooks = [];
                if (booksFound.length > 0 && booksFound[0] !== "error") {
                    Object.values(booksFound).map((book) => {
                        let myBook = (this.props.bookList.find((bookOnShelf) => {
                            return (book.id === bookOnShelf.id)
                        }))
                        return (displayBooks.push(myBook ? myBook : book))
                    })
                }
                this.setState({
                    booksToShow: displayBooks
                })
            })
        } else {
            this.setState({
                booksFound: []
            })
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }

    render() {
        const { booksToShow, booksFound } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput minLength={3} debounceTimeout={200} type="text" placeholder="Search by title or author" onChange={(evt) => this.searchBooks(evt.target.value)}/>
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
                        {(booksFound !== undefined && booksFound.length > 0 && booksFound[0] === "error") ? <p>Sorry, no result found.</p> :
                            (
                                Object.values(booksToShow).map((book) => {
                                    return (
                                        <Book
                                            key={book.id}
                                            bookData={book}
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

function mapStateToProps(state) {
    return {
        bookList: state
    }
}

export default connect(mapStateToProps)(SearchBook);