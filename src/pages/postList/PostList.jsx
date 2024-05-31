import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "features/postActions";
import { selectPosts, selectLoading } from "features/postSlice";
import Card from "components/card";
import Modal from "components/modal";
import {
  LoadingText,
  ModalContent,
  ModalHeader,
  ModalText,
  ModalDetail,
  ModalImage,
} from "./PostList.styles";

const PostList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const dispatch = useDispatch();
  const postData = useSelector(selectPosts);
  const isLoading = useSelector(selectLoading);

  const handleOpenModal = (item) => {
    setSelectedPost(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoadingText>Loading ...</LoadingText>
      ) : (
        <>
          <Card data={postData} onClick={(item) => handleOpenModal(item)} />
          {selectedPost && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <ModalContent>
                <ModalHeader>{selectedPost.title}</ModalHeader>
                <ModalText>{selectedPost.text}</ModalText>
                <ModalDetail>
                  <strong>Tags:</strong> {selectedPost.tags}
                </ModalDetail>
                <ModalDetail>
                  <strong>Author:</strong> {selectedPost.autor}
                </ModalDetail>
                <ModalImage src={selectedPost.img} alt={selectedPost.title} />
                <ModalDetail>
                  <strong>Date:</strong> {selectedPost.date}
                </ModalDetail>
                <ModalDetail>
                  <strong>Views:</strong> {selectedPost.views}
                </ModalDetail>
              </ModalContent>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default PostList;
