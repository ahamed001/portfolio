import { Box, Typography, Grid } from "@mui/material";
import PortfolioBlock from "./PortfolioBlock";

export default function BrowserWindow({ title, projects = [], children }) {
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        my: 4,
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#333",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.6)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#8c8c8c",
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1,
          borderBottom: "1px solid #333",
        }}
      >
        {/* Traffic lights */}
        <Box sx={{ width: 12, height: 12, bgcolor: "#ff5f56", borderRadius: "50%" }} />
        <Box sx={{ width: 12, height: 12, bgcolor: "#ffbd2e", borderRadius: "50%" }} />
        <Box sx={{ width: 12, height: 12, bgcolor: "#27c93f", borderRadius: "50%" }} />

        {/* Centered title */}
        {title && (
          <Typography
            variant="subtitle2"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: 600,
              color: "#fff",
              fontFamily: "Inter, system-ui",
              whiteSpace: "nowrap",
            }}
          >
            {title.split(" — ")[0]}
            <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
              {title.includes(" — ") && ` — ${title.split(" — ")[1]}`}
            </Box>
          </Typography>
        )}
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 } }}>
        {hasProjects ? (
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PortfolioBlock project={project} />
              </Grid>
            ))}
          </Grid>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
}
