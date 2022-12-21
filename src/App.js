import './App.css';
import PostView from './components/PostView/Post-View' 
import LandingPage from './components/Landing-Page/Landing-Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './form/post';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route path='/post' element={<PostView/>}></Route>
        <Route path='/uploade' element={<Post></Post>}></Route>
      </Routes>
    </Router> 
    
    </>
    
  );
}




export default App;
