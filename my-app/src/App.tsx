
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from './pages/TrendingPosts';
import Feed from "./pages/Feed";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};
export default App
