import Navbar from "components/navbar/Navbar.jsx";
import { Container, ChildrenWrapper } from "./Layout.styles";

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </Container>
);

export default Layout;
