import styled, { keyframes } from "styled-components";
import { theme } from "styles/styles.js";

const slideUp = keyframes`
  from {
    top: 0;
  }
  to {
    top: -120px;
  }
`;

const slideDown = keyframes`
  from {
    top: -120px;
  }
  to {
    top: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 99999999;
  animation: ${(props) => (props.$isHidden ? slideUp : slideDown)} 0.5s forwards;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: ${theme.padding.medium} ${theme.padding.large};
  border-bottom: 1px solid ${theme.colors.gray};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: ${theme.fontSize.medium};
  background: ${theme.colors.white};
  padding: 4px 12px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: ${theme.borderBottom};
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  background: ${theme.colors.white};
  align-items: center;
  padding: ${theme.padding.large} ${theme.padding.medium};
  transform: translateX(-100%);
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.3s forwards;

  hr {
    width: 100%;
    margin-top: 24px;
  }

  .mobile-menu {
    /* background-color: red; */
    border-bottom: ${theme.borderBottom};
  }
`;

export const SearchIcon = styled.div`
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: ${theme.padding.small};
  border: none;
  border-radius: ${theme.borderRadius};
  transition: width 0.3s;
  width: ${(props) => (props.$isVisible ? "300px" : "0")};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  @media (max-width: 768px) {
    width: ${(props) => (props.$isVisible ? "200px" : "0")};
  }

  @media (max-width: 500px) {
    width: ${(props) => (props.$isVisible ? "150px" : "0")};
  }

  @media (max-width: 400px) {
    width: ${(props) => (props.$isVisible ? "100px" : "0")};
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 12px;
  min-width: 350px;

  @media (max-width: 768px) {
    min-width: 0;
  }
`;

export const IconLogo = styled.img`
  @media (min-width: 1000px) {
    margin-left: calc(50% - 100px);
  }
`;

export const MenuItem = styled.li`
  margin: 0 ${theme.margin.medium};
  position: relative;
  cursor: pointer;

  ul {
    display: ${(props) => (props.$isSubmenuOpen ? "block" : "none")};
  }

  @media (max-width: 768px) {
    margin: ${theme.margin.medium} 0;
  }
`;

export const SubmenuItems = styled.ul`
  display: ${(props) => (props.$isSubmenuOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: ${theme.colors.white};
  width: 170px;
  text-align: center;
  list-style: none;
  padding: ${theme.padding.small} 0;
  margin-top: 17px;

  li {
    padding: ${theme.padding.small} ${theme.padding.medium};
    border-bottom: ${theme.borderBottom};

    p {
      margin: 0;
    }

    &:hover {
      p {
        margin-left: 30px;
        color: ${theme.colors.gray};
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isSubmenuOpen ? "block" : "none")};
  }
`;

export const MobileMenuItem = styled.ul`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#f0f0f0" : "white")};
  border-bottom: ${theme.borderBottom};
  width: 100%;

  &:hover {
    background-color: #f0f0f0;
  }

  li {
    &:last-child {
      border-bottom: none;
    }
  }

  span {
    margin-left: 12px;
  }
`;

export const MobileMenuItemWrapper = styled.div`
  width: 100%;
  /* text-align: center; */
`;

export const Icon = styled.img`
  height: 20px;
  margin-left: 12px;
`;
