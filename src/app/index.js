import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "../post.list";
import Post from "../post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}
export default App;
