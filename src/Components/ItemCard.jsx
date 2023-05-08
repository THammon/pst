import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import icon from "../psticon.png"

export default function ItemCard() {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 2 }}>
      <CardMedia
        component="img"
        image={icon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Peacock
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "I'm a Peackcock, you gotta let me fly!" <br/> - Mark Whalburg
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}