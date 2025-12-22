import { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from "./MultiPageRoutes";
import { singlePage } from "../info/Info";
import SinglePageRoutes from "./SinglePageRoutes";
import useScrollObserver from "../hooks/useScrollObserver";

export default function BaseLayout() {
  const location = useLocation();

  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );
  const refHome = useScrollObserver(setActive);
  const refAbout = useScrollObserver(setActive);
  const refPortfolio = useScrollObserver(setActive);
  const refExperience = useScrollObserver(setActive);
  let [darkMode, setDarkMode] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Navbar
        darkMode={darkMode}
        handleClick={handleToggleDarkMode}
        active={active}
        setActive={setActive}
      />
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
        sx={{ pt: { xs: "50px", md: "80px" } }}
      >
        <Grid item flexGrow={1}>
          {singlePage ? (
            <SinglePageRoutes refs={{ refHome, refAbout, refPortfolio, refExperience }} />
          ) : (
            <MultiPageRoutes />
          )}
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>&copy; {currentYear} Ahamed Irfan</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
