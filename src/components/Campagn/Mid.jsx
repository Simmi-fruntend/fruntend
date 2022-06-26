import React from 'react'
import { CssBaseline, Box, Typography,Button, ButtonGroup } from '@mui/material'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.png'
import CircularStatic from './ProgressBar'
import SvgIcon from '@mui/material/SvgIcon';
import GooglePay from './assets/GooglePay.svg'
import Paytm from './assets/Paytm.svg'
import PhonePay from './assets/PhonePay.svg'
import facebook from './assets/facebook.svg'
import DeleteIcon from '@mui/icons-material/Delete';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Midpage = () => {

  function GooglePayIcon(props) {
    return (
      <SvgIcon {...props}>
        <path m={GooglePay} />
      </SvgIcon>
    );
  }
  
  return (
    <>
      <CssBaseline />
      <Box component="div" sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '73px',
        width: '100%',
      }}>
        <Box component="div" sx={{
          display: 'flex',
          flexDirection: 'column'

        }}>
          <Box component='div' sx={{
            mt: '57px',
            ml: '35px',
            width: '676px',
            height: '128px',
            display:{sm:'none',lg:'block'},
          }}>
            <Typography variant="h6" sx={{
              fontSize: '40px',
              fontWeight: '600',
              fontFamily: 'inter',
              color: '#000000'


            }}>Each Day Without Surgery Puts 2
              Month Old's Life At Further Risk</Typography>
          </Box>
          <Box component='div' sx={{
            ml: '29px',
            mt: '9px',
           

          }}>
            <img src={pic1} alt="pic1" sx={{
              width: '709px',
              height: '718px',
            }} />

          </Box>
          <Box component={'div'} sx={{
            display:'flex',
            flexDirection:'row'
          }}>
          
            <Box component='div' sx={{
              display:'flex',
              flexDirection:'row',
              ml:'28px',
              mt:'92px',
              width:'350px',
              height:'128px',
            borderBlock:'2px'
             
            }}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Box>
              <Typography  >Created by</Typography>
              <Typography  >abcdefgh</Typography>
            </Box>
            </Box>
    
      
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
   
          </Box>
        </Box>
        <Box component="div" sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          mt: '40px',
          ml: '26px',
          left:'774px',
          height: '1018px',
          width: '626px',
          backgroundColor: '#F2F2F2',
          borderRadius: '10px solid',
          mr:'auto',
        }}>
            <Box component="div" sx={{
              display:'flex',
              flexDirection:'row',

            }}>
              <Box component='div' sx={{
                mt:"23px",
                ml:'10px',
              }}>
              <CircularStatic />

              </Box>
              <Box component="div" sx={{
                width:'212px',
                
              }}><Typography sx={{
                fontFamily:'Inter',
                fontStyle:'light',
                FontSize:'20px',


                mt:'52px',
                ml:'36px',
              }} >Raised</Typography>
              <Typography component="div" sx={{
                  ml:'36px',
                  fontFamily:'Inter',
                  fontStyle:'Medium',
                  fontSize:'24px',

              }}><span style={{color:'#FF7C03'}} >Rs.0 </span>of 10000

              </Typography>

              </Box>
              <Box component="div" sx={{
                  width:'201px',
                  height:'71px',
                  ml:'13px',
                  mt:'49px',
                  backgroundColor:'#D9D9D9',
                  display:'solid',
                  mr:'auto',
                  textAlign:'center'

              }}><Box component="div" sx={{
                mt:'20px',
                fontFamily:'inter',
                fontSize:'24px',
                textDecoration:'underline'

              }} >
                0 supporters
              </Box>
                
              </Box>

            </Box>
            <Box component="button" sx={{
                backgroundColor:'#FF7E06',
                width:'574px',
                height:'125px',
                ml:'25px',
                mt:'33px',
                borderRadius:'15px',
                contentAlign:'center'
            }}>
              <Box component="div" sx={{
                fontFamily:'inter',
                fontStyle:'Bold',
                fontSize:'40px',
                display:'solid',
                color:'#FFFFFF'
              }}>
                Donate now
              </Box>
            </Box>
            <Box component='div' sx={{
              ml:'104px',
              mr:'103px',
              mt:'51px',
              fontFamily:'inter',
              fontStyle:'regular',
              fontSize:'29px',
           

            }}>
              Card, Netbanking, Cheque pickups
            </Box>
            {/* <Box component="div" sx={{
              display:'flex',
              flexDirection:'row',
              mt:'145px'
            }}>
           <Box component="div" sx={{
          borderTop:'1px red'
          
           }}>

           </Box>
            </Box> */}
            <Box component="div" sx={{
              mt:'106px',
              ml:'199px',
            }}>
              <img src={pic2} alt="" sx={{
                width:'264px',
                height:'243px',
              }}/>
            </Box>
            <Box component='div' sx={{
              display:'flex',
              flexDirection:'row',
              mt:'39px',
              ml:'229px',
              mr:'180px'

            }}>
              <Box component='button' sx={{
                width:'63px',
                height:'64px',
              }}>
               <img src={GooglePay} alt="GooglePay" sx={{
               
               }} />
              </Box>
              <Box component='button' sx={{
                width:'63px',
                height:'64px',
                ml:'13px',
                mr:'15px'
              }}>
               <img src={Paytm} alt="GooglePay" sx={{
               
               }} />
              </Box>
              <Box component='button' sx={{
                width:'63px',
                height:'64px',
              }}>
               <img src={PhonePay} alt="GooglePay" sx={{
               
               }} />
              </Box>
            </Box>
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ml:'96px',
        mr:'91px',
        mt:'60px'
        // '& > *': {
        //   m: 1,
        // },
      }}
    >
      <Box component='div' sx={{
        mr:'21.5px',
        width:'440pxpx',
        height:'73px',
        borderRadius:'9px',
        display:'flex',
        flexDirection:'row'

        
      }} spacing={5}>
    
      <Button variant="contained"  sx={{width:'209px', height:'73px',diplay:'block',}} startIcon={<FacebookIcon />} >
        <Typography sx={{style:'bold', color:'white'}}>
        SHARE
        </Typography>
     
      </Button>
      <Button variant="contained" sx={{width:'209px', height:'73px',backgroundColor:'green',display:'block'}}  startIcon={<WhatsappIcon/>}>
       <Typography sx={{style:'bold', color:'white'}}>
        SHARE
       </Typography>

      </Button>
    </Box>

     
        
        </Box>
        </Box>
      </Box>

    </>
  )
}

export default Midpage