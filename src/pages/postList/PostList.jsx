import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "features/postActions";
import { selectPosts, selectLoading } from "features/postSlice";
import Card from "components/card";

const PostList = () => {
  const dispatch = useDispatch();
  const postData = useSelector(selectPosts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return <>{isLoading ? <p>Loading ...</p> : <Card data={postData} />}</>;
};

export default PostList;
