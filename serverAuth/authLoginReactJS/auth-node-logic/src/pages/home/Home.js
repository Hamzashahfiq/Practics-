import { Box } from '@mui/material';
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import NavigationTab from '../../commonComponents/NavigationTab';
import ProgressLoader from '../../commonComponents/progressLoader/ProgressLoader';
import { CurrentUser } from '../../store/AuthSlice';

export default function Home() {
    const [currentUserLoading,setCurrentUserLoading] =  useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CurrentUser({setCurrentUserLoading}))
    
    }, [])
   if (currentUserLoading){
    return <Box sx={{height:'100vh',width:'100%',dispaly:'flex',justifyContent:'center',alignItems:'center'}}>
        <ProgressLoader size={30}/>
    </Box>
   }
    
    return (
        <div style={{ padding: '30px' }}>
            <h2>Home</h2>
               <NavigationTab />
        </div>
    )
}