import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';


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



function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Footer />
  </div>
    );
}

export default App;
