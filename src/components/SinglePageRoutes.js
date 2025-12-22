import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Box } from "@mui/material";
import Experience from "./experience/experience";

export default function SinglePageRoutes({ refs }) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome} />
        <About innerRef={refs.refAbout} />
        <Portfolio innerRef={refs.refPortfolio} />
        <Experience innerRef={refs.refExperience} />
    </Box>)
}