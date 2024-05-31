import styled from "styled-components";
import { theme } from "styles/styles";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 24px;
`;

export const CardContainer = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  width: 250px;
`;

export const Title = styled.h2`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #333;
`;

export const Tags = styled.div`
  margin-top: 8px;
  color: ${theme.colors.red};
`;

export const Author = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export const Meta = styled.span`
  font-size: 12px;
  color: #666;
`;

export const Image = styled.img`
  width: 250px;
  height: 200px;
  object-fit: contain;
  border-radius: 4px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 2px;
`;
