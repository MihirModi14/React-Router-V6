import { Routes, Route} from 'react-router-dom';
import { BookLayout, BookList, Book, AddBook } from './index';

export const BookRoute = () => {
  return (
    <Routes>
        <Route element={<BookLayout/>}>
            <Route index element={<BookList/>}/>
            <Route path=':id' element={<Book/>}/>
            <Route path='add' element={<AddBook/>}/>
        </Route>
    </Routes>
  )
}
