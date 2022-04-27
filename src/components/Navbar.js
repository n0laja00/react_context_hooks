import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);

    return ( 
        <div className="navbar">
            <h1>Jean's Reading List</h1>
            <p>Currently, I have { books.length } books to get through ...</p>
        </div>
     );
}
 
export default Navbar;