import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Comment from "./components/commentbox/Comment";
import CreatePost from "./components/createpost/CreatePost";
import Header from './components/header/Header';
import RequiresAuth from "./components/requiresauth/RequiresAuth";
import { useAuth } from "./context/AuthContext";
import { useData } from "./context/DataContext";
import Bookmark from './pages/bookmark/Bookmark';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import HomeFeed from "./pages/homefeed/HomeFeed";
import Liked from './pages/likedposts/Liked';
import Login from './pages/login/Login';
import PostDetails from "./pages/postdetails/PostDetails";
import Signup from "./pages/signup/Signup";
import UserPage from "./pages/userpage/UserPage";



function App() {
  const {currentUser : {token}} = useAuth();
  const {showCommentBox, showPostBox, hideShowPostBox} = useData();

  const postBoxref = useRef();


  useEffect(() => {
  const  closeLikeBy = (e) => {
    if(!postBoxref?.current?.contains(e?.target)){
    hideShowPostBox(false);
    }
  }
  document.addEventListener('mousedown', closeLikeBy)
}, [])


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
          <Route path='/posts/:postId' element={<RequiresAuth isLoggedIn={token} children={<PostDetails />} />}/>
        </Route>

        {/* Auth Route */}
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>

      </Routes>
      
      {showCommentBox && <Comment />}
      {showPostBox && <CreatePost postBox postBoxref={postBoxref}/>}
  </div>
    );
}

export default App;
