import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CommonCard({pData}) {
  return (
    <Link to="/product"  state={{ pData }} style={{textDecoration:'none'}}>
    <Card sx={{ maxWidth: 345,margin:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pData.imageUrl}
          alt="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pData.productTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pData.productDesc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pData.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
