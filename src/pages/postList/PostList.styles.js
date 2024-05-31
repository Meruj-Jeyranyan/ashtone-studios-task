import styled from "styled-components";

export const LoadingText = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #555;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 6px auto;
  text-align: left;

  @media (max-width: 600px) {
    padding: 15px;
    margin: 20px;
  }
`;

export const ModalHeader = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;

export const ModalText = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

export const ModalDetail = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  color: #777;

  @media (max-width: 600px) {
    font-size: 0.9em;
    margin-bottom: 8px;
  }
`;

export const Strong = styled.strong`
  color: #333;
`;
