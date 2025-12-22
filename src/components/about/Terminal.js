import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal({ text }) {
   return (
      <Box
         component={'section'}
         className={classNames(Style.terminal, Style.shadowed)}
         width={{ xs: '90%', sm: '80%', md: '60%' }}
         borderRadius={'0.5rem'}
         mb={{ xs: 3, sm: 4, md: 5 }}
      >
         {/* Header */}
         <Box
            sx={{
               backgroundColor: '#8c8c8c',
               p: { xs: 0.3, sm: 0.5 },
               borderRadius: '0.5rem 0.5rem 0 0',
               fontSize: { xs: '0.85rem', sm: '1rem' },
            }}
         >
            <i className={classNames(iconClass, Style.red)} />
            <i className={classNames(iconClass, Style.amber)} />
            <i className={classNames(iconClass, Style.green)} />
         </Box>

         {/* Terminal Body */}
         <Box
            py={{ xs: 1, sm: 1.5, md: 2 }}
            px={{ xs: 1.5, sm: 2.5, md: 3 }}
            borderRadius={'0 0 0.5rem 0.5rem'}
            sx={{ backgroundColor: '#27242f' }}
            fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.5rem' }}
            fontFamily={'Courier New, Courier, monospace'}
         >
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;