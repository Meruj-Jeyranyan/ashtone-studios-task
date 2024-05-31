import styled, { css } from "styled-components";
import { theme } from "styles/styles.js";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;
  z-index: 1000;

  ${(props) =>
    props.$scrolled &&
    css`
      transform: translateY(-100%);
    `}

  @media (min-width: 768px) {
    border-bottom: ${theme.borderBottom};
    min-height: 110px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  display: flex;
  align-self: center;
`;

export const SearchIcon = styled.img`
  cursor: pointer;
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  margin: 0 10px;
  position: relative;
  cursor: pointer;
`;

export const SubMenu = styled.div`
  display: ${(props) => (props.$isSubmenuOpen ? "block" : "none")};
  position: absolute;
  background-color: ${theme.colors.white};
  padding: 0 10px;
  z-index: 1000;

  width: 180px;
  margin-top: 15px;

  div {
    border-bottom: ${theme.borderBottom};
    padding: 4px 6px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &:last-child {
      border-bottom: none;
    }
  }

  span {
    padding: 4px 0;
    &:hover {
      margin-left: 12px;
      color: ${theme.colors.gray};
    }
  }
`;

export const BurgerIcon = styled.img`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  padding: 32px;
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

export const MobileMenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const NavbarHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 56px;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${theme.borderBottom};
  padding: 12px 20px;
`;

export const Row = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 200px;
  align-self: end;
  gap: 12px;
`;

export const ArrowIcon = styled.img`
  width: 10px;
  margin-left: 3px;
`;

export const MobileSubMenuItem = styled.div`
  display: ${(props) => (props.$isSubmenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;

  span {
    padding: 12px;
    &:hover {
      margin-left: 12px;
      color: ${theme.colors.gray};
    }
  }
`;
