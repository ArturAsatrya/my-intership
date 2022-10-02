import React, { useState } from "react";
import { Box, Button, Grid, TextField, Link, Tooltip } from "@mui/material";
import { ListItem } from "../../components/ListItem";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import Add from "../Add";

const Data = [
  {
    id: 1,
    image:
      "https://www.campostools.com/images/Fittings/hq/Homepage_Group_Images/472.jpg",
    cost: "45$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Kluch",
  },
  {
    id: 2,
    image:
      "	https://www.v-toolstore.com/media/image/09/75/7b/Estwing_Sure_Strike_3.jpg",
    cost: "50$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Hammer",
  },
  {
    id: 3,
    image: "	https://m.media-amazon.com/images/I/51-sr6ZPwxL._SL1300_.jpg",
    cost: "48$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Axe",
  },
  {
    id: 4,
    image:
      "https://cdn.hoffmann-group.com/derivatives/22655/jpg_1200/jpg_1200_b667072_4_2.jpg",
    cost: "67$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Axe",
  },
  {
    id: 5,
    image:
      "	https://cdn.harttools.com/product/card_images/card/e4530e449e63467f96a637e15f4292af.webp",
    cost: "95$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Power",
  },
  {
    id: 6,
    image:
      "https://5.imimg.com/data5/QA/QT/MY-4418188/electrical-pliers-500x500.jpg",
    cost: "55$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Electrician",
  },
  {
    id: 7,
    image:
      "https://assets.mitre10.co.nz/sys-master/productimages/h50/h20/10491296907294/253454xlg.jpg",
    cost: "53$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "axe",
  },
  {
    id: 8,
    image:
      "https://bynder.sbdinc.com/m/6a91ad9053328f7d/Drupal_Small-16-791_1.jpg",
    cost: "65$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "axe",
  },
  {
    id: 9,
    image:
      "	https://atlas-content-cdn.pixelsquid.com/assets_v2/185/1854718250609285081/jpeg-600/G15.jpg",
    cost: "35$",
    buyIcon: "BUY",
    deleteicon: "DELETE",

    add: "ADD",

    text: "Pickaxe",
  },
];

// https://thumbs.dreamstime.com/b/building-tools-background-isolated-white-144760801.jpg

const HomePage = () => {
  const [value, setValue] = useState(Data);

  const [textfilter, setTextfilter] = useState("");

  const DeleteOneItem = (id) => {
    setValue(value?.filter((item) => item.id !== id));
  };

  // console.log(text);

  // console.log(value, "value");

  return (
    <Box
      sx={{
        ml: "150px",
      }}
    >
      <Button
        sx={{
          color: "red",
          transition: "0.6s",
          borderRadius: BORDRADIUS.xl,
          mt: "40px",
          ml: "40px",
          boxShadow: 1,
          "&:hover": {
            boxShadow: 15,
          },
        }}
        onClick={() => setValue(null)}
      >
        All DELETE
      </Button>
      <TextField
        sx={{
          ml: "100px",
          mt: "30px",
          bgcolor: COLOR.yellow,  
        }}
        variant="filled"
        onChange={(even) => setTextfilter(even.target.value)}
        label="Search"
      />
      <Link href="/Add" sx={{
        color:"transparent"
      }}>
        <Tooltip title="Go to Add">
        <Button
          sx={{
            ml: "100px",
            mt: "40px",
            width: "100px",
            color: COLOR.yellow,
            transition: "0.6s",
            boxShadow: 1,
            borderRadius:BORDRADIUS.xl,
            "&:hover": {
              boxShadow: 15,
            },
          }}
        >
          ADD
        </Button>
        </Tooltip>
      </Link>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container rowSpacing={2}>
          {value
            ?.filter((item) =>
              item?.text
                ?.toLowerCase()
                .includes(textfilter?.toLocaleLowerCase())
            )
            .map(({ id, image, cost, buyIcon, deleteicon, text, add }) => (
              <Grid item xs={4}>
                <Box>
                  <ListItem
                    key={id}
                    image={image}
                    cost={cost}
                    buyIcon={buyIcon}
                    deleteicon={deleteicon}
                    id={id}
                    DeleteOneItem={DeleteOneItem}
                    add={add}
                    text={text}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default HomePage;
