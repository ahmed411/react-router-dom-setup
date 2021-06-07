import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Posts from './pages/Posts';
import PostsList from './pages/PostsList';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="posts" style={{ padding: 5 }}>
            Posts
          </Link>
          <Link to="about" style={{ padding: 5 }}>
            About
          </Link>
          <Link to="support" style={{ padding: 5 }}>
            Support
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="posts" element={<Posts />}>
            <Route path="/" element={<PostsList />} />
            <Route path=":id" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
