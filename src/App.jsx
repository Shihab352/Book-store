
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Book from './Components/Book';
import { useState } from 'react';

function App() {

  const loadedBooks = useLoaderData();
  const [books , setBooks] = useState(loadedBooks);
  
  

  return (
    <>
      
        
      <h1 className='text-4xl font-bold text-pink-700 my-10'>All Books </h1>

      <div className='grid md:grid-cols-3 gap-5'>
        {
          loadedBooks.map(book=> <Book 
            key={book._id} 
            book={book}
            books={books}
            setBooks={setBooks}
            ></Book>)
        }
      </div>
      
    </>
  )
}

export default App
