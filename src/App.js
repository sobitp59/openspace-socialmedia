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
import UserPage from "./pages/userpage/UserPage";

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
  const {currentUser : {token}} = useAuth();

  return (
    <div className='app'>



      {token && <Header />}
      <Routes>

        {/* Nested Route */}
        <Route path='/' element={ <RequiresAuth isLoggedIn={token} children={<Home />} /> }>
          <Route index element={<HomeFeed />}/>
          <Route path='/explore' element={  <RequiresAuth isLoggedIn={token} children={<Explore />} /> }/>
          <Route path='/bookmarks' element={<RequiresAuth isLoggedIn={token} children={<Bookmark />} />}/>
          <Route path='/likedposts' element={<RequiresAuth isLoggedIn={token} children={<Liked />} />}/>
          <Route path='/profile/:username' element={<RequiresAuth isLoggedIn={token} children={<UserPage />} />}/>
        </Route>

        {/* Auth Route */}
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>

      </Routes>
      {token && <Footer />}
  </div>
    );
}

export default App;
