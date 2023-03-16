import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import Cardd from './Cardd';


const SlideCard = ({images}) => {

   
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnFocus:true,

  };
  return (
        <Slider {...settings}>
          {images.map((item) => (
            <Grid item xs={12} sx={{p:1}}>
            <Card >
              <CardMedia 
              sx={{height:200}}
              image={item.src}
              />
              <CardContent>
                <Typography sx={{fontSize:20 , fontWeight:700}}>
                  {item.alt}
                </Typography>
                <Typography>
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
            </Grid>
          ))}
        </Slider>
  )
}

export default SlideCard