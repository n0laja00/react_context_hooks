import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[], () => {
        const localData = localStorage.getItem('books'); /*Get Item "Books" from localstorage.*/
        return localData ? JSON.parse(localData) : [] /*if localData is true, parse and return it. If "Books" is false, non-existent, return an empty array.*/
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return(
        <BookContext.Provider value= {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider