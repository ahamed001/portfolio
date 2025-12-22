import { Box, Typography, Chip, Stack } from "@mui/material";
import IconLink from "./IconLink";

export default function PortfolioBlock({ project }) {
  const {
    title,
    image,
    live,
    source,
    tech,
    description,
    status,
    access,
    platforms,
  } = project;

  const showLive = status === "live" && live;
  const showSource = source;

  const statusLabel = (() => {
    switch (status) {
      case "internal":
        return "Restricted Internal System";
      case "unhosted":
        return "Prototype (Not Publicly Hosted)";
      case "discontinued":
        return "Discontinued Prototype";
      case "live":
        return "Live Production System";
      case "archived":
        return "Archived Project";
      default:
        return null;
    }
  })();

  const fallbackText = (() => {
    if (project.tech?.some(t => t.toLowerCase().includes("ar"))) {
      return "Live Camera-Based AR System — Visuals Not Representative";
    }
    switch (status) {
      case "internal":
        return "Restricted Internal System — Visuals Not Public";
      case "discontinued":
        return "Prototype Discontinued — Visuals Archived";
      case "archived":
        return "Project Visuals Not Available";
      default:
        return "Project Visuals Not Available";
    }
  })();

  return (
    <Box
      sx={(theme) => ({
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 3,
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 6px 20px rgba(0,0,0,0.6)"
            : "0px 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0px 10px 30px rgba(0,0,0,0.8)"
              : "0px 6px 16px rgba(0,0,0,0.15)",
        },
      })}
    >
      <Stack spacing={1} alignItems="center">
        {/* Image or Fallback */}
        {image ? (
          <Box
            component="img"
            src={image}
            alt={title}
            sx={(theme) => ({
              width: "100%",
              maxHeight: 200,
              objectFit: "contain",
              borderRadius: 2,
              border: `2px dashed ${theme.palette.divider}`,
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.04)",
              p: 0.5,
            })}
          />
        ) : (
          <Box
            sx={(theme) => ({
              width: "100%",
              height: 170,
              borderRadius: 2,
              border: `2px dashed ${theme.palette.divider}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.04)",
              textAlign: "center",
              px: 1,
            })}
          >
            <Typography variant="body2" color="text.secondary">
              {fallbackText}
            </Typography>
          </Box>
        )}

        {/* Title + Access */}
        <Typography
          variant="h6"
          fontWeight={600}
          textAlign="center"
          sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}
        >
          {title}
        </Typography>

        {access && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            textAlign="center"
            sx={{ fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" } }}
          >
            Access: {access}
          </Typography>
        )}

        {/* Description */}
        {description && (
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mt: 1, px: 1, fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" } }}
          >
            {description}
          </Typography>
        )}

        {/* Tech Stack */}
        {tech && (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={0.5} mt={1}>
            {tech.map((t, i) => (
              <Chip
                key={i}
                label={t}
                size="small"
                sx={{
                  fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" },
                  px: { xs: 0.5, sm: 1, md: 1.5 },
                  py: { xs: 0.25, sm: 0.5, md: 0.5 },
                }}
              />
            ))}
          </Box>
        )}

        {/* Platforms */}
        {platforms && (
          <Typography
            variant="caption"
            mt={1}
            sx={{ fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.75rem" } }}
          >
            Platforms: {platforms.join(", ")}
          </Typography>
        )}

        {/* Status */}
        {statusLabel && (
          <Chip
            label={statusLabel}
            size="small"
            sx={{
              mt: 1,
              opacity: 0.85,
              fontWeight: 500,
              fontSize: { xs: "0.6rem", sm: "0.7rem" },
              px: { xs: 0.5, sm: 1 },
              height: { xs: 22, sm: 26 },
            }}
          />
        )}
      </Stack>

      {/* Action Buttons */}
      <Box display="flex" gap={2} mt={2} flexWrap="wrap" justifyContent="center">
        {showLive && (
          <ActionButton>
            <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
          </ActionButton>
        )}
        {showSource && (
          <ActionButton>
            <IconLink link={source} title="Source Code" icon="fa fa-code" />
          </ActionButton>
        )}
      </Box>
    </Box>
  );
}

function ActionButton({ children }) {
  return (
    <Box
      sx={(theme) => ({
        px: 2.5,
        py: 0.75,
        minWidth: 110,
        borderRadius: "999px",
        border: `1.5px solid ${
          theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[800]
        }`,
        color:
          theme.palette.mode === "dark" ? theme.palette.grey[200] : theme.palette.grey[900],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.75,
        fontWeight: 500,
        transition: "all 0.2s ease",
        cursor: "pointer",

        "& a, & i": {
          color: "inherit !important",
          textDecoration: "none",
        },

        "&:hover": {
          backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[200] : theme.palette.grey[900],
          color: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[100],
        },
      })}
    >
      {children}
    </Box>
  );
}
