import { useState } from "react"

const userData = {
    userName: '',
    password: '',
    mobileNo: '',
    address:''
}
export default function useSignUp() {
    const [userDetail, setUserDetail] = useState(userData)
    const statesHandler = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }
    const signUpHandler = (e) =>{
        e.preventDefault();
        if (!userDetail.userName ||!userDetail.password || !userDetail.mobileNo ||!userDetail.address){
            alert('First input all required data.')
        }
    }
    const phoneNoHandler = (value) =>{
        setUserDetail({ ...userDetail,mobileNo :value })
    }

  
    return (
        {
            userDetail,
            statesHandler,
            signUpHandler,
            phoneNoHandler
        }
    )
}
