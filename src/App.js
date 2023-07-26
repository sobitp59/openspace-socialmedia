import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Bookmark from './pages/bookmark/Bookmark';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import HomeFeed from "./pages/homefeed/HomeFeed";
import Liked from './pages/likedposts/Liked';
import Login from './pages/login/Login';

/*
  ::HEADER
    :Logo
    :SearchBar
    :Profile
    :Theme

  ::BODY
    :SIDE-LEFT
      -HOME (BTN)
      -EXPLORE (BTN)
      -BOOKMARKS (BTN)
      -LIKED POSTS (BTN)
      -POST (BTN)
    
    :MAIN
      -POST SECTION
    
    :SIDE-RIGHT
      -Trending / Latest
      --
  ::FOOTER
    :COPYRIGHT
    : OTHER INFO

*/

const login = false;


function App() {
  return (
    <div className='app'>



      <Header />
      {/* {login ? <Home/> : <Login />} */}
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<HomeFeed />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/bookmarks' element={<Bookmark />}/>
          <Route path='/likedposts' element={<Liked />}/>
        </Route>
      </Routes>
      {/* <Home /> */}
      <Footer />
  </div>
    );
}

export default App;
