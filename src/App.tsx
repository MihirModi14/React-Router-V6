import './App.css'
import { BrowserRouter, Routes, Route, Link, useRoutes, NavLink, useLocation } from 'react-router-dom';
import { Home, About, Contact, BookLayout, BookList, Book, AddBook, NotFound, BookRoute } from './components';

function App() {
  const location = useLocation();
  console.log(location);
  // Can also Define Route like this
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home/>
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound/>
  //   }
  // ]);

  return (
    <>
      <Routes>
        <Route path='/about' element={<h1>Extra Information</h1>}/>
      </Routes>
      <ul>
        {/* replace is going to replace previous route with current route (Home) so when you press back then previous route will not be there as it was replaced. */}
        <li><Link to="/" replace>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* when you write reloadDocument it will not only reload section that changed but reload whole page when route is match.  */}
        <li><Link to="/contact" reloadDocument>Contact</Link></li>
        {/* NavLink allows you to do things with active state of link  */}
        <li>
          <NavLink style={({isActive}) => { return (isActive ? {color: "red"} : {})}} to="/books">
            {({isActive}) => { return (isActive ? "Active Books" : "Books")}}
          </NavLink>
        </li>
        {/* state is just passing data to that url */}
        <li><Link to="/asdfasdf" state="Hi">Random URL</Link></li>
      </ul>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* CREATED BOOK ROUTE COMPONENT AND SWAPPED BOOKLAYOUT WITH BOOKROUTE  FOR ROUTING IN IT'S OWN COMPONENT (DON't FORGOT * IF YOU ARE GIVING DIFFERENT ROUTE PATH)*/}
        <Route path='/books/*' element={<BookRoute/>}/>
          {/* <Route index element={<BookList/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='add' element={<AddBook/>}/> */}

        {/* IF NO COMMON PATH BUT STILL WANT TO WRAP INSIDE BOOKLAYOUT THEN DO THIS */}
        {/* <Route element={<BookLayout/>}> 
          <Route path="/books" element={<BookList/>}/>
          <Route path='/books/1' element={<Book/>}/>
          <Route path='/books/add' element={<AddBook/>}/>
        </Route> */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
