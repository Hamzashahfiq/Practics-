import React from 'react'
import { styles } from './ProductStyle'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import ComButton from '../../commonComponents/ComButton';


export default function Product() {
    const location = useLocation();
    const data = location.state?.pData;
    console.log({ data })
    return (
        <div style={styles.mainDiv}>
            <Box sx={{ flexGrow: 1, height: '100%' }}>
                <Grid container spacing={2} sx={{ height: '100%' }}>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={6} style={styles.productDiv}>
                        <div style={styles.imgDiv}>
                            <img src={data.imageUrl} height='300' width='100%' alt='product image' />
                        </div>
                        <div style={styles.pDetail} >
                            <Box component='div' sx={{ fontWeight: 'bold' }}>
                                {data.productTitle}
                            </Box>
                            <Box component='div'  >
                                {data.productDesc}
                            </Box>
                            <Box component='span' sx={{ fontWeight: 'bold', paddingY: 2, display: 'inline-block' }}>
                                Price:
                            </Box>
                            <Box component='span'  >
                                {data.price}
                            </Box>
                        </div>
                        <div style={styles.orders}>
                            <ComButton bText='Add to Cart' />
                            <div>
                            <ComButton bText='+' />
                            <span style={styles.qty}>0</span>
                            <ComButton bText='-' />
                            </div>
                            
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
            </Box>
        </div>
    )
}
