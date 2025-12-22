import Style from "./Home.module.scss";
import me from "../../img/self.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, Typography } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
      id={"home"}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <h1>
          Hi, I'm{" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>

        <h2>{info.position}.</h2>

        <Typography variant="caption" sx={{ opacity: 0.7, mt: 1 }}>
          Chennai, India
        </Typography>

         <Box
         component={"ul"}
         p={"0.8rem"}
         mt={{ xs: 2, md: 2 }}
         sx={{
            textAlign: "left",
            mx: { xs: "auto", md: 0 },
            width: "fit-content",
         }}
         >
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>

        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          mt={{ xs: 4, md: 4 }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
              hoverColor={social.hoverColor}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}