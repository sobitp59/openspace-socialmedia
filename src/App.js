import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RequiresAuth from "./components/requiresauth/RequiresAuth";
import { useAuth } from "./context/AuthContext";
import Bookmark from './pages/bookmark/Bookmark';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import HomeFeed from "./pages/homefeed/HomeFeed";
import Liked from './pages/likedposts/Liked';
import Login from './pages/login/Login';
import Signup from "./pages/signup/Signup";

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
      -suggestions
  ::FOOTER
    :COPYRIGHT
    : OTHER INFO

*/



function App() {
  const {isLoggedIn} = useAuth();

  return (
    <div className='app'>



      {isLoggedIn && <Header />}
      <Routes>

        {/* Nested Route */}
        <Route path='/' element={ <RequiresAuth isLoggedIn={isLoggedIn} children={<Home />} /> }>
          <Route index element={<HomeFeed />}/>
          <Route path='/explore' element={  <RequiresAuth isLoggedIn={isLoggedIn} children={<Explore />} /> }/>
          <Route path='/bookmarks' element={<RequiresAuth isLoggedIn={isLoggedIn} children={<Bookmark />} />}/>
          <Route path='/likedposts' element={<RequiresAuth isLoggedIn={isLoggedIn} children={<Liked />} />}/>
        </Route>

        {/* Auth Route */}
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>

      </Routes>
      {isLoggedIn && <Footer />}
  </div>
    );
}

export default App;
