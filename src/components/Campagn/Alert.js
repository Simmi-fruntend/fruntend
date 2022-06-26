import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import{Box,CssBaseline} from '@mui/material'
const Alertcmp = () => {
  return (
    <><CssBaseline/>
    <Box component="div" sx={{
      // mt:'120px',
      height:'75px',
      width:'100vw'

    }}>

    <Stack sx={{ width: '100vw',height:'75px'}} >
      <Alert onClose={() => {}} sx={{backgroundColor:'#FFFACB', height:'73px' }} >Your Found is Raised!!</Alert>
    </Stack>
    </Box>
  
    </>
  )
}

export default Alertcmp;