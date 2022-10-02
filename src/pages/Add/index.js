import {
  TextField,
  Box,
  Stack,
  Typography,
  Button,
  Link,
  Tooltip,
  Switch,
} from "@mui/material";
import React from "react";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import UndoIcon from "@mui/icons-material/Undo";
import ConstructionIcon from "@mui/icons-material/Construction";
import {useForm} from 'react-hook-form'

const Add = () => {

  const {register,handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Box>
      <Link href="/">
        <Tooltip title="Go to the Homepage">
          <Button
            sx={{
              width: "30px",
              color: COLOR.orange,
              ml: "180px",
              mt: "40px",
            }}
          >
            <UndoIcon />
          </Button>
        </Tooltip>
      </Link>
      <Typography
        sx={{
          ml: "250px",
          mt: "-45px",
          fontSize: "30px",
          fontFamily: FONTFAMILY.montserrat,
        }}
      >
        You can add Tools
      </Typography>
      <Box sx={{
        ml:"540px",
        mt:"-34px"
      }}>
        <ConstructionIcon />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: "1200px",
          height: "500px",
          boxShadow: 5,
          ml: "150px",
          mt: "40px",
          borderRadius: BORDRADIUS.xl,
        }}
      >
        <TextField
        {...register("name")}
          sx={{
            width: "500px",
            ml: "40px",
            mt: "50px",
          }}
          variant="filled"
          label="Name Tool"
        />
        <TextField
        {...register("cost")}
          sx={{
            width: "500px",
            ml: "121px",
            mt: "50px",
          }}
          type="number"
          variant="filled"
          label="Cost"
        />
        <TextField
        {...register("url")}
          sx={{
            width: "500px",
            ml: "40px",
            mt: "50px",
          }}
          variant="filled"
          label="URL"
        />
        <TextField
        {...register("description")}
          sx={{
            width: "500px",
            ml: "120px",
            mt: "50px",
          }}
          variant="filled"
          label="Description"
        />
         <TextField
         {...register("country")}
          sx={{
            width: "500px",
            ml: "-500px",
            mt: "150px",
          }}
          variant="filled"
          label="Country"
        />
         <Tooltip title="Add Tools">
        <Button
        type="submit"  
         sx={{
            ml: "200px",
            mt: "0px",
            width: "150px",
            color: COLOR.yellow,
            transition: "0.6s",
            boxShadow: 1,
            borderRadius:BORDRADIUS.xl,
            "&:hover": {
              boxShadow: 15,
            },
          }}
          >
          Add
        </Button>
        </Tooltip>
      </Box>
      </form>
    </Box>
  );
};

export default Add;

{
  /* <Box
        sx={{
          width: "300px",
          ml: "100px",
          mt: "50px",
        }}
      >
        <Stack spacing={2}>
          <TextField label="URL" />
          <TextField label="Cost" />
          <TextField label="Name" />
        </Stack>
      </Box> */
}
{
  /* <Button
        sx={{
          color:COLOR.yellow,
          width:"100px",
          mt: "50px",
          ml: "200px",
          transition: "0.6s",
          borderRadius: BORDRADIUS.sm,
          boxShadow: 1,
          "&:hover": {
            boxShadow: 10,
          },
        }}
      >
        Add
      </Button> */
}
