import PropTypes from "prop-types";
import {
  Container,
  CardContainer,
  Title,
  Text,
  Tags,
  Author,
  Image,
  Row,
  Meta,
} from "./Card.styles";

const Card = ({ data, onClick }) => {
  return (
    <Container>
      {data?.map((item, index) => (
        <CardContainer key={index} onClick={() => onClick(item)}>
          <Image
            src={item.img}
            srcSet={`${item.img} 1x, ${item.img_2x} 2x`}
            alt={item.title}
          />
          <Tags>{item.tags}</Tags>
          <Title>{item.title}</Title>
          <Row>
            <Author>{item.autor}</Author>
            <Meta>• {item.date} •</Meta>
            <Meta>{item.views}</Meta>
          </Row>
          <Text>{item.text}</Text>
        </CardContainer>
      ))}
    </Container>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      tags: PropTypes.string,
      author: PropTypes.string,
      img: PropTypes.string,
      img_2x: PropTypes.string,
      date: PropTypes.string,
      views: PropTypes.string,
    })
  ).isRequired,
};

export default Card;
