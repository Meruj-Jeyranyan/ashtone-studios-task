import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "hooks/useDebounce";
import { searchPosts } from "features/postSlice";
import logo from "assets/logo.svg";
import arrowRight from "assets/arrow-right.svg";
import {
  NavbarContainer,
  Logo,
  MenuIcon,
  MenuItem,
  MenuItems,
  SearchIcon,
  SearchInput,
  SubmenuItems,
  SearchWrapper,
  IconLogo,
  Container,
  MobileMenu,
  MobileMenuItem,
  MobileMenuItemWrapper,
  Icon,
} from "./Navbar.styles";

const menuItems = [
  {
    title: "Home",
    submenuItems: ["Submenu 1", "Submenu 2"],
  },
  {
    title: "About",
    submenuItems: ["Submenu A", "Submenu B"],
  },
  {
    title: "Services",
    submenuItems: ["Service 1", "Service 2", "Service 3"],
  },
  {
    title: "Contact",
  },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const debouncedSearch = useDebounce(search, 500);

  const menuRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }

    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setIsSearchVisible(false);
    }
  };

  const handleOpenSubMenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMenuItemClick = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  useEffect(() => {
    dispatch(searchPosts(search));
  }, [debouncedSearch, dispatch, search]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollTop]);

  return (
    <Container $isHidden={isHidden}>
      <Logo>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
        <MobileMenu $isOpen={isOpen} ref={menuRef}>
          <IconLogo alt="logo" src={logo} />
          <hr />
          {menuItems.map((item, index) => (
            <MobileMenuItemWrapper className="mobile-sub-menu " key={index}>
              <MobileMenuItem
                $active={openMenuIndex === index}
                onClick={() => handleMenuItemClick(index)}
              >
                {item.title}
                <Icon src={arrowRight} alt="icon" />
              </MobileMenuItem>
              {openMenuIndex === index && item.submenuItems && (
                <div className="mobile-menu">
                  {item.submenuItems.map((submenuItem, subIndex) => (
                    <MobileMenuItem key={subIndex}>
                      <span>
                        {submenuItem}
                        <Icon src={arrowRight} alt="icon" />
                      </span>
                    </MobileMenuItem>
                  ))}
                </div>
              )}
            </MobileMenuItemWrapper>
          ))}
        </MobileMenu>
        <IconLogo alt="logo" src={logo} />
        <SearchWrapper ref={searchInputRef}>
          <SearchIcon onClick={() => setIsSearchVisible(!isSearchVisible)}>
            🔍
          </SearchIcon>
          <div>
            <SearchInput
              $isVisible={isSearchVisible}
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </SearchWrapper>
      </Logo>
      <NavbarContainer>
        <MenuItems>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.title}
              onClick={() => handleOpenSubMenu(index)}
              $isSubmenuOpen={openSubmenuIndex === index}
            >
              {item.title}
              {item.submenuItems && (
                <SubmenuItems $isSubmenuOpen={openSubmenuIndex === index}>
                  {item.submenuItems.map((subItem) => (
                    <li key={subItem}>{subItem}</li>
                  ))}
                </SubmenuItems>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
