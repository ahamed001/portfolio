import { Box, Typography, Avatar, Stack } from "@mui/material";

function formatDuration(start, end) {
  return `${start} – ${end === "present" ? "Present" : end}`;
}

function getInitials(name) {
  if (!name) return "";
  const words = name.trim().split(" ");
  return words.length === 1
    ? words[0].slice(0, 2).toUpperCase()
    : (words[0][0] + words[1][0]).toUpperCase();
}

export default function ExperienceBlock({ exp }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 1.5, md: 3 },
      }}
    >
      {/* Initials */}
      <Avatar
        sx={{
          width: { xs: 32, sm: 36, md: 44 },
          height: { xs: 32, sm: 36, md: 44 },
          fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.85rem" },
          bgcolor: "#fff",
          color: "#111",
          border: "2px solid rgba(0,0,0,0.2)",
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {getInitials(exp.company)}
      </Avatar>

      {/* Card */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          backgroundColor: "#fff",
          color: "#111",
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        }}
      >
        <Typography fontWeight={600} sx={{fontSize:{ xs: "1rem", sm: "1.1rem", md: "1.25rem" }}}>{exp.company}</Typography>
          <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem", color: "#555" } }}>
          {exp.role} • {formatDuration(exp.start, exp.end)}
        </Typography>

        <Typography variant="caption" sx={{ color: "#666" }}>
          {exp.location} • {exp.workMode}
        </Typography>

        <Stack spacing={0.75} mt={1}>
          {exp.description.map((point, i) => (
            <Typography key={i} sx={{ fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" } }}>
              • {point}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
