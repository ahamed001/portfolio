import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box
            component={'img'}
            src={image}
            alt={'mockup'}
            sx={{
               width: '80%',
               height: '80%',
               objectFit: 'cover',
               borderRadius: '15px'
            }}
         />
         <h1 style={{
            fontSize: '2rem',
            marginTop: '4%',
            '@media (max-width: 400px)': {
               fontSize: '1.5rem',
            }
         }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'} 
               sx={{
                  '@media (max-width: 400px)': {
                     fontSize: '1rem',
                     padding: '0.5rem'
                  }
            }}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}
               sx={{
                  '@media (max-width: 400px)': {
                     fontSize: '1rem',
                     padding: '0.5rem' 
                  }
               }}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;