import { Box } from "@mui/material";
import { info } from "../../info/Info";
import BrowserWindow from "./BrowserWindow";

function groupByCompanyRole(projects) {
  const grouped = {};

  projects.forEach(proj => {
    const key = `${proj.company} — ${proj.role}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(proj);
  });

  return grouped;
}

export default function Portfolio({ innerRef }) {
  const allProjects = [
    ...info.portfolio.professional.fulltime,
    ...info.portfolio.professional.internship,
    ...info.portfolio.professional.personal
  ];

  const groupedProjects = groupByCompanyRole(allProjects);

  return (
    <Box id="portfolio" ref={innerRef} px={2}>
      {Object.entries(groupedProjects).map(([companyRole, projects], index) => (
        <BrowserWindow
          key={index}
          title={companyRole}
          projects={projects}
        />
      ))}
    </Box>
  );
}
