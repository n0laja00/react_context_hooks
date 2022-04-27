import React, { useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext); /*Now we can use addBook function here*/
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} 
                onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Author" value={author} required
                onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="add book" />
        </form>
     );
}
 
export default NewBookForm;