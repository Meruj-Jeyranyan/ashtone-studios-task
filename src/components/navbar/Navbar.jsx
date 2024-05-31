import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "hooks/useDebounce";
import { searchPosts } from "features/postSlice";
import arrowRight from "assets/arrow-right.svg";
import arrowDown from "assets/arrow-down.svg";

import Input from "../input/Input";
import {
  NavbarContainer,
  NavbarHeader,
  BurgerIcon,
  Logo,
  SearchIcon,
  MenuItems,
  SubMenu,
  MenuItem,
  MobileMenu,
  MobileMenuItem,
  Row,
  ArrowIcon,
  MobileSubMenuItem,
} from "./Navbar.styles";
import searchIcon from "assets/search.svg";
import menu from "assets/menu.svg";
import logo from "assets/logo.svg";

const menuItems = [
  {
    label: "Demos",
    subItems: ["SubItem 1", "SubItem 2"],
  },
  {
    label: "Post",
    subItems: [
      "Post Header",
      "Post Layout",
      "Share Buttons",
      "Gallery Post",
      "Video Post",
    ],
  },
  {
    label: "Features",
    subItems: ["SubItem 3", "SubItem 4"],
  },
  {
    label: "Categories",
    subItems: ["SubItem 5", "SubItem 6"],
  },
  {
    label: "Shop",
    subItems: ["SubItem 7", "SubItem 8"],
  },
  {
    label: "Buy Now",
  },
];

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(search, 500);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOutsideClick = (e) => {
    const searchIcon = document.getElementById("input-show");
    const inputField = document.getElementById("input");

    if (
      e.target.closest(".mobile-menu") === null &&
      e.target.closest(".burger-icon") === null
    ) {
      setMenuOpen(false);
    }

    if (!searchIcon?.contains(e.target) && !inputField?.contains(e.target)) {
      setShowSearch(false);
    }
  };

  const handleOpenSubMenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    dispatch(searchPosts(search));
  }, [debouncedSearch, dispatch, search]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    });

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <NavbarContainer $scrolled={scrolled}>
        <NavbarHeader>
          <BurgerIcon
            className="burger-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            src={menu}
            alt="menuIcon"
          />
          <Row />
          <Logo src={logo} />
          <Row>
            <Input
              visible={showSearch}
              placeholder="Search..."
              id="input"
              onChange={handleSearchChange}
              value={search}
            />
            <SearchIcon
              onClick={handleSearchClick}
              src={searchIcon}
              alt="search"
              id="input-show"
            />
          </Row>
        </NavbarHeader>
        <MenuItems>
          {menuItems?.map((menuItem, index) => (
            <MenuItem key={index} onClick={() => handleOpenSubMenu(index)}>
              <span>
                {menuItem.label}
                {menuItem?.subItems && <ArrowIcon src={arrowDown} alt="icon" />}
              </span>
              <SubMenu $isSubmenuOpen={openSubmenuIndex === index}>
                {menuItem.subItems?.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <span>{subItem}</span>
                    <ArrowIcon src={arrowRight} alt="icon" />
                  </div>
                ))}
              </SubMenu>
            </MenuItem>
          ))}
        </MenuItems>
      </NavbarContainer>
      <MobileMenu className="mobile-menu" open={menuOpen}>
        <Logo src={logo} />
        {menuItems?.map((menuItem, index) => (
          <MobileMenuItem key={index} onClick={() => handleOpenSubMenu(index)}>
            {menuItem.label}
            {menuItem.subItems?.map((subItem, subIndex) => (
              <MobileSubMenuItem
                key={subIndex}
                $isSubmenuOpen={openSubmenuIndex === index}
              >
                <span>
                  {subItem}
                  <ArrowIcon src={arrowRight} alt="icon" />
                </span>
              </MobileSubMenuItem>
            ))}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navbar;
