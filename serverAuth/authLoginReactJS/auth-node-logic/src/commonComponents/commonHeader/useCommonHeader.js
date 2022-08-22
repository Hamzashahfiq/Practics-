import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../store/AuthSlice';
export default function useCommonHeader() {
    const [logoutLoading, setLogoutLoading] = useState(false);
    const dispatch = useDispatch();

    const LogoutHandler = () => {
        dispatch(LogoutUser({ setLogoutLoading }))
    }
        return (
            {
                logoutLoading,
                LogoutHandler
            }
        )
    }
