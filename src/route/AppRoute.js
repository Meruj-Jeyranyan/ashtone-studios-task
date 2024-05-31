import PostList from "pages/postList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route exact path="/posts" element={<PostList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
