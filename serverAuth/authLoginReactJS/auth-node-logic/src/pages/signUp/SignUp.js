import React from 'react'
import { styles } from './SignUpStyle'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputField from '../../commonComponents/InputField';
import ComButton from '../../commonComponents/ComButton';
import { Link } from 'react-router-dom';
import useSignUp from './useSignUp';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function SignUp() {
  const { userDetail, statesHandler, signUpHandler, phoneNoHandler} = useSignUp()
  return (
    <div style={styles.mainDiv}>
      <div style={styles.innerDiv}>
        <Typography style={styles.innerDivText} variant="h4" gutterBottom component="div">
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={signUpHandler}
          style={styles.form}
        // method="post"
        >
          <InputField type='text' label='User Name' name='userName' value={userDetail.userName} onChange={(e) => statesHandler(e)} />
          <InputField type='password' label='Password' name='password' value={userDetail.password} onChange={(e) => statesHandler(e)} />
          {/* <InputField type='number' label='Mobile No' name='mobileNo'  value={userDetail.mobileNo} onChange={(e) => statesHandler(e)}/> */}
          <InputField type='text' label='Address' name='address' value={userDetail.address} onChange={(e) => statesHandler(e)} />
          <PhoneInput
            style={styles.phoneInput}
            name='mobileNo'
            height='50px'
            placeholder="Mobile No"
            value={userDetail.mobileNo}
            onChange={(val) => phoneNoHandler(val)}
            defaultCountry="PK"
            />
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