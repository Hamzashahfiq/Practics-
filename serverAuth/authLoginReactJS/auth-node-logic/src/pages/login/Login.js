import React from 'react'
import { styles } from './LoginStyle'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Login() {
  return (
    <div style={styles.mainDiv}>
      <div style={styles.innerDiv}>
        <Typography style={styles.innerDivText} variant="h4" gutterBottom component="div">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>


      </div>
    </div>
  )
}