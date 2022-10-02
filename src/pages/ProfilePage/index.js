import React from "react";
import {
    Box,
    TextField,
    Button
} from "@mui/material"
import { useForm } from "react-hook-form";
import { COLOR, FONTFAMILY } from "../../constant";
import { CostomInput } from "./styled";

export const ProfilePage  = () => {
    const user = JSON.parse(localStorage.getItem("admin"))
    console.log(user);
    const { register, handleSubmit, } = useForm({
        defaultValues:{
            email:user.Email,
            password:user.Password
        }
    })
    const submit = (data) =>{
        console.log(data);
        localStorage.setItem("admin",JSON.stringify(data))
    }
    return(
        <Box>
            <form onSubmit={handleSubmit(submit)}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"670px",
                }}>
                <Box sx={{
                    width:"500px",
                    height:"400px",
                    bgcolor:COLOR.white,
                    boxShadow:"6",
                    borderRadius:"60px"
                }}>
                    <Box sx={{
                        borderRadius:"80px",
                        ml:"5px",
                        mt:"5px",
                        width:"120px",
                        height:"120px",
                        bgcolor:COLOR.yellow2,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontFamily:FONTFAMILY.montserrat
                    }}>
                        your photo
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"start",
                        padding:"15px"
                    }}>
                <TextField name="email" {...register("email")} variant="filled"  label="Email"/>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"start",
                        padding:"15px"
                    }}>
                <TextField name="password" {...register("password")} variant="filled" label="Password"/>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                        padding:"10px",
                        width:"465px",
                    }}>
                <Button type="submit" variant="contained" sx={{
                    bgcolor:COLOR.yellow2,
                    transition:"0.8s",
                    boxShadow:"7",
                    "&:hover":{
                       bgcolor:COLOR.yellow3,
                       color:COLOR.yellow2,
                       boxShadow:"3",
                       transform: "translateY(-10px)",
                    }
                }} >Replace</Button>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"750px",
                        mt:"-269px",
                        mb:"21px",
                        fontFamily:FONTFAMILY.montserrat2,
                    }} >Your id:{Math.random()}</Box>
                    <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    padding:"15px",
                    width:"700px"
                }}>
                <TextField label="Phone Number" variant="filled" type="tel" {...register("telephoneNumber")} value="+374"/>
                </Box>
                <Box sx={{
                     display:"flex",
                     justifyContent:"center",
                     padding:"15px",
                     width:"700px"
                }}>
                        <TextField label="Your Name " variant="filled" {...register("UserName")}/>
                    </Box>
                </Box>
                </Box>
            </form>
        </Box>

    )
}