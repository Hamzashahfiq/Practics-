import React from 'react'
import { styles } from './LoginStyle'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputField from '../../commonComponents/InputField';
import ComButton from '../../commonComponents/ComButton';
import { Link } from 'react-router-dom';


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
          style={styles.form}
          // method="post"
        >
         <InputField type='text' label='User Name' name='userName' />
         <InputField type='password' label='Password' name='password' />
         <ComButton type='submit' bText='Login' />
         <Typography variant="body1" gutterBottom component="span">
            Not have an account? <Typography component="span" style={styles.loginLinkText}>
              <Link to="/signup" style={styles.loginLink}>Sign Up</Link> </Typography>
          </Typography>
        </Box>


      </div>
    </div>
  )
}