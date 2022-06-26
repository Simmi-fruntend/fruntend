import React from 'react'
import {CSSModules,Box,Button,Alert, CssBaseline} from '@mui/material'
import Alertcmp from './Alert'
import Midpage from './Midpage'
import SupporterStory_page from './SupporterStory_page'
export const Campaign = () => (
  <>
    <CssBaseline />
  
    
    
    <Box component='container' sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      height:'100vh',
      width:'100vw',
    }}>

    <Alertcmp />
<Midpage />
<SupporterStory_page />



    </Box>

  </>

)

export default Campaign;