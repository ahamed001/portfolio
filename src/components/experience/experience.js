import { Box, Stack } from "@mui/material";
import { info } from "../../info/Info";
import BrowserWindow from "../portfolio/BrowserWindow";
import ExperienceBlock from "./experienceBlock";

export default function Experience({ innerRef }) {
  return (
    <Box ref={innerRef} id="experience" px={2}>
      <BrowserWindow title="Work Experience">
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Stack spacing={{ xs: 4, md: 5 }}>
            {info.experience.map((exp, index) => (
              <ExperienceBlock key={index} exp={exp} />
            ))}
          </Stack>
        </Box>
      </BrowserWindow>
    </Box>
  );
}
