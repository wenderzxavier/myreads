
Final assessment project for Udacity's React Nanodegree by Wender Xavier.

## Setup Instructions
  
* Download or fork and clone the [MyReads](https://github.com/wenderzxavier/myreads.git) repository using `git clone`.
* run `npm install` to install the required dependencies.
* run `npm start` or `yarn start` to compile and run the application.
* The site can be accessed at http://localhost:3000.

## What's Included
```
+--public/    
 |-- favicon.ico - React Icon, You may change if you wish.
 |-- index.html - DO NOT MODIFY
 |-- manifest.json - Configuration files. Do not modify.
+-- src/
 +-- component/ - Classes and components implemented on the applications.
  |-- Book.js - Component used to create the structure of the book.
  |-- SearchBook.js - This is the search book component used to search and add books to shelves.
  |-- Shelves.js - Component used to display books on the corresponding shelf.
 +-- icons/ - Helpful icons for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- info.png
 +-- img/ - Images for your app. You can change or add new images.
  |-- background-slider.png
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.js - This is the root of your app. Contains routes and react components, showing the structure of the application.
 |-- App.test.js - Used for testing. Not implemented.
 |-- BooksAPI.js - A JavaScript API used to provided functionalities to access backend searching and retrieving books (See details below). 
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. Fell free to modify few styles here.
|-- .gitignore 
|-- CONTRIBUTING.MD - Information about contributing to this repo. 
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Backend Server

Provided backend server by Udacity to simplify the development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## Create React App
This project was boostraped with [Create React App](https://github.com/facebook/create-react-app).