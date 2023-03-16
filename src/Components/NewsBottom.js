import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import images from '../Images'

const NewsBottom = () => {
  return (
    <Grid container xs={12}>
      {
        images.map((item)=>(
          <Grid item xs={12} p={1} >
            <Card sx={{display:"flex",flexDirection:"row"}}elevation={2}>
              <Box>
              <CardMedia 
              sx={{height:100,width:100}}
              image={item.src}
              />
              </Box>
              <Box>
                <CardContent >
                  <Typography>{item.content}</Typography>
                </CardContent>
              </Box>
            </Card>
            </Grid>
        ))
      }
    </Grid>
  )
}

export default NewsBottom