import { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { HashLink as Link } from "react-router-hash-link";
import { Box, IconButton, Drawer, Stack } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from "../info/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { name: "Home", to: "", active: "home" },
  { name: "About", to: "about", active: "about" },
  { name: info.initials, type: "initials", to: "", active: "home" },
  { name: "Portfolio", to: "portfolio", active: "portfolio" },
  { name: "Experience", to: "experience", active: "experience" },
];

const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="nav"
      width="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      sx={{
        bgcolor: darkMode ? "#1e1e1e" : "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* Desktop Menu */}
      <Box
        component="ul"
        display={{ xs: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        gap={{ md: "4rem", lg: "6rem" }}
        fontSize="1rem"
        className={darkMode ? Style.dark : Style.light}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component="li"
            className={link.active === active && !link.type ? Style.active : ""}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link
              to={singlePage ? `#${link.to}` : `/${link.to}`}
              scroll={(el) => scrollWidthOffset(el)}
              smooth
              onClick={() => setActive(link.active)}
              className={Style.link}
              style={{ textDecoration: "none" }}
            >
              {!link.type ? (
                <p style={{ padding: "0.5rem 0" }}>{link.name}</p>
              ) : (
                <h1>{link.name}</h1>
              )}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>

      {/* Mobile Menu */}
      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        {/* Left: Dark Mode Toggle */}
        <Toggler darkMode={darkMode} handleClick={handleClick} />

        {/* Center: Initials / Brand */}
        <Link
          to={singlePage ? `#home` : `/`}
          scroll={(el) => scrollWidthOffset(el)}
          smooth
          style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: darkMode ? "#fff" : "#000",
            textDecoration: "none",
          }}
          onClick={() => setActive("home")}
        >
          {info.initials}
        </Link>

        {/* Right: Menu Icon */}
        <IconButton onClick={() => setOpen(true)} color="inherit">
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              bgcolor: darkMode ? "#1e1e1e" : "#fff",
              color: darkMode ? "#fff" : "#000",
              height: "100vh",
              px: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {/* Close Button */}
          <Box position="absolute" top={16} right={16}>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: darkMode ? "#fff" : "#000" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Only show actual links in drawer */}
          <Stack spacing={3} alignItems="center">
            {links
              .filter((link) => !link.type)
              .map((link, i) => (
                <Link
                  key={i}
                  to={singlePage ? `#${link.to}` : `/${link.to}`}
                  scroll={(el) => scrollWidthOffset(el)}
                  smooth
                  onClick={() => {
                    setActive(link.active);
                    setOpen(false);
                  }}
                  style={{
                    textDecoration: "none",
                    color: darkMode ? "#fff" : "#000",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            <Box
              sx={{
                height: 1,
                bgcolor: darkMode ? "#555" : "#ccc",
                width: "60%",
              }}
            />
          </Stack>
        </Drawer>
      </Box>
    </Box>
  );
}