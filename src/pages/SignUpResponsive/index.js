import React from "react";
import { 
    Box, 
    Button,
    TextField,
    ImageListItem,
    Link,
    Divider,
    Typography
 } from "@mui/material";
 import {COLOR,FONTS,FONTFAMILY,BORDRADIUS,MARGINS} from '../../constant/index'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


 const SignUpResponsive = () => {
     const history = useHistory()
     const { register, handleSubmit, } = useForm()
     const onSubmit = (data) => {
        try{
            window.localStorage.setItem("admin" , JSON.stringify(data))
            if(data.Email === "admin@gmail.org" && data.Password === "admin13org" ){
                 history.push("/admin")
            }else{
                history.push("/user")
            }
        }catch (error){
            alert("your login is not correct", error)
        }}
     return(
         <Box display={{ sm: "hidden", md: "none" }} sx={{
            justifyContent:"center",
         }}>
            <Box >
            <Box sx={{
                justifyContent:"center",
                display:"flex",
            }}>
             <Box sx={{
                 border:"15px solid white",
                 width:"150px",
                 height:"150px",
                 bgcolor:"#ffab00",
                 borderRadius:"200px",
                 mt:"60px",
                 position:"absolute"
             }}>
              <Box sx={{
                  mt:"30px",
                  display:"flex",
                  borderRadius:"50px",
                  justifyContent:"center",
              }}>
                 
          <Box sx={{
              color:COLOR.white,
              fontFamily:FONTFAMILY.lobster,
              fontSize:FONTS.body4,
              cursor:"pointer"
          }} onClick={() => {
             history.push("/")
          }}>
              G
          </Box>
          <Box sx={{
              color:COLOR.yellow,
              fontFamily:FONTFAMILY.lobster,
              fontSize:FONTS.body3,
              cursor:"pointer"
          }} onClick={() => {
             history.push("/")
          }}>
              S
          </Box>
          </Box>
          <Box sx={{
              fontFamily:FONTFAMILY.lobster,
              fontSize:FONTS.body4,
              color:COLOR.grey,
              display:"flex",
              justifyContent:"center",
              mb:MARGINS.mb
          }}>
          Sign Up
          </Box>
              </Box>
              </Box>
             <form onSubmit={handleSubmit(onSubmit)}>
                 <Box sx={{
                     display:"flex",
                     justifyContent:"center",
                     alignItems:"center",
                     height:"800px"
                 }}>
             <Box sx={{
                 boxShadow:"8",
                 borderRadius:BORDRADIUS.xxl,
                 width:"300px",
                 height:"420px",
                 backgroundImage: "linear-gradient(to right, #ffab00, #ffe082, #ffc400)",
             }}>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center",
                     mt:MARGINS.mt4
                 }}>
                     <TextField  label="Type Email" variant="standard" {...register("Email")} type="email" />
                 </Box>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center",
                 }}>
                     <TextField label="Type Password" variant="standard" {...register("Password")} type="password"/>
                 </Box>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center",
                     mb:MARGINS.mb3
                 }}>
                     <TextField label="Type UserName" variant="standard" {...register("UserName")} type="text"/>
                 </Box>
                 <Box sx={{
                     display:"flex",
                     justifyContent:"center"
                 }}>
             <Button type="submit" sx={{
                 color:COLOR.grey,
                 width:"200px",
                 transition:"0.8s",
                 bgcolor:COLOR.yellow2,
                 boxShadow:"4",
                 borderRadius:"30px",
                 "&:hover":{
                  transform: "translateY(-10px)",
                  bgcolor: COLOR.yellow,  
                    color:COLOR.grey,
                    boxShadow:"8",
                    borderRadius: "100px",
            
                 }
             }}>Sign Up</Button>
             </Box>
             <Box sx={{
            display:"flex",
            justifyContent:"center",
            width:"300px",
            height:"50px",
            alignItems:"center"
          }}>
          <Divider sx={{
            width:"100px",
          }}>
            <Typography sx={{
                fontFamily:FONTFAMILY.lobster,
                color:COLOR.grey,
            }}>
                or
            </Typography>
          </Divider>
          </Box>
             <Link href="signUp" underline="none">
             <Box sx={{
                fontFamily:FONTFAMILY.montserrat2,
                color:COLOR.grey,
                display:"flex",
                mb:MARGINS.mb2,
                justifyContent:"center",
             }}>
                Go to the Sign In
             </Box>
             </Link>
             <Box sx={{
              display:"flex",
              justifyContent:"center"
          }}>
          <Box sx={{
              display:"flex",
              justifyContent:"center",
              boxShadow:"3",
              width:"50px",
              mr:"10px",
              height:"50px",
              transition:"0.9s",
              borderRadius:BORDRADIUS.xxl,
              bgcolor:COLOR.blue,
              "&:hover":{
                transform: "translateY(-10px)",
                boxShadow:"8"
              }
          }} >
            <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=1557999815&extra_1=s%7Cc%7C294723539698%7Ce%7Cfacebook%7C&placement=&creative=294723539698&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1557999815%26adgroupid%3D58938663837%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9070053%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwqPGUBhDwARIsANNwjV5Z5JjE-pwWizBSqvMG9Ctos9j26aandqM2xcDwj260wKgWpS4O76UaAjeFEALw_wcB"
           underline="none"
          >
          <ImageListItem  sx={{
              width:"50px",
          }} >
             <img src={"	https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-Free-PNG.png"} />
          </ImageListItem>
          </Link>
          </Box>
           <Box sx={{
              display:"flex",
              alignItems:"center"
           }}>
           <Box sx={{
              display:"flex",
              justifyContent:"center",
              boxShadow:"3",
              transition:"0.9s",
              width:"50px",
              height:"50px",
              borderRadius:BORDRADIUS.xxl,
              bgcolor:COLOR.WhiteBlue,
              mr:"10px",
              "&:hover":{
                transform: "translateY(-10px)",
                boxShadow:"8"
              }
          }}>
            <Link href="https://www.google.com/" underline="none">
           <ImageListItem  sx={{
              width:"50px",
          }}>
             <img src={"https://www.techora.net/wp-content/uploads/2017/10/Google-Chrome-for-MAC.png"}/>
          </ImageListItem>
          </Link>
          </Box>
          </Box>
           <Box sx={{
              display:"flex",
              justifyContent:"center",
              boxShadow:"5",
              width:"50px",
              height:"50px",
              transition:"0.9s",
              borderRadius:BORDRADIUS.xxl,
              bgcolor:COLOR.pink,
              "&:hover":{
                transform: "translateY(-10px)",
                boxShadow:"8"
              }
          }}>
            <Link href="https://www.instagram.com/" underline="none">
           <ImageListItem  sx={{
              width:"50px",
          }}>
             <img src={"https://www.pngmart.com/files/21/Instagram-Logo-PNG-File.png"}/>
          </ImageListItem>
          </Link>
          </Box>
          </Box>
          </Box>
             </Box>
             </form>
             </Box>
         </Box>
     )
 }

 export default SignUpResponsive