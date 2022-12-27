import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PostDetail } from "./pages/PostDetail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<PostDetail />} />
    </Routes>
  );
};
