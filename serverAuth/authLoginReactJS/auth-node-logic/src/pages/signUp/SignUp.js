import React from 'react'
import { styles } from './SignUpStyle'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputField from '../../commonComponents/InputField';
import ComButton from '../../commonComponents/ComButton';
import { Link } from 'react-router-dom';



export default function SignUp() {
  return (
    <div style={styles.mainDiv}>
      <div style={styles.innerDiv}>
        <Typography style={styles.innerDivText} variant="h4" gutterBottom component="div">
          Sign Up
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
          <InputField type='number' label='Mobile No' name='mobileNo' />
          <ComButton type='submit' bText='Sign Up' />
          <Typography variant="body1" gutterBottom component="span">
            Already have an account. <Typography component="span" style={styles.loginLinkText}>
              <Link to="/login" style={styles.loginLink}>Login</Link> </Typography>
          </Typography>
        </Box>


      </div>
    </div>
  )
}