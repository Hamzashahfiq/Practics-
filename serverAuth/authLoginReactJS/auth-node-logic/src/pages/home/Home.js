import { useEffect, useState } from 'react';
import { styles } from './HomeStyle';
import CommonCard from '../../commonComponents/commonCard/CommonCard';
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../../store/ProductSlice';
import ProgressLoader from '../../commonComponents/progressLoader/ProgressLoader';
import { Box } from '@mui/material';

export default function Home() {
    const [getProductLoading, setGetProductLoading] = useState(true)
    const Products = useSelector((store) => store.ProductSlice.products)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('home effect')
        dispatch(getProduct({ setGetProductLoading }))
    }, [])

    if (getProductLoading) {
        <Box component='div' sx={{
            height: '100%', width: '100%', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <ProgressLoader />
        </Box>
    }
    return (
        <div style={styles.mainDiv}>
            <div style={styles.cardDiv}>
                {Products.map((item) => {
                    return (
                        <CommonCard pData={item} />
                    )
                })}

            </div>

        </div>
    )
}