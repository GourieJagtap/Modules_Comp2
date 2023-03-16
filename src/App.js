import React from 'react';
import {Grid, Paper, Typography} from "@mui/material"
import SlideCard from './Components/SlideCard';
import NewsBottom from './Components/NewsBottom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import images from "./Images"


const App = () => {
  return (
    <Grid container justifyContent={"center"} sx={{p:10,bgcolor:"#F2F2F2"}} >
      <Grid item xs={12} sx={{justifyContent:"center",pb:5,px:5}}>
          <Typography sx={{fontWeight:"700"}} variant="h3" >Title:Lorem ipsum dolor sit amet, consectetur </Typography>
          <Typography sx={{fontWeight:"500"}} variant="h5" >SubTitle:Lorem ipsum dolor sit amet, consectetur"</Typography>
      </Grid>
      <Grid item xs={12} component={Paper} p={4} >
        <Grid item xs={12} sx={{px:"70px"}} >
            <SlideCard images={images}/>
        </Grid>
        <Grid item xs={12} sx={{px:"10px",py:"30px"}}>
            <NewsBottom/>
        </Grid>
        </Grid>
    </Grid>
  )
}

export default App