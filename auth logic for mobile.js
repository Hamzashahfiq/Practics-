import {Alert} from 'react-native';
import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {
  LOGIN,
  SIGN_UP,
  GET_USER_ON_APP_REOPENED,
  UPDATE_PROFILE,
  LOGOUT,
} from '../types/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const doLogin =
  (email, password, setLoginLoading, navigation) => async dispatch => {
    try {
      setLoginLoading(true);
      const user = await axios.post(`${endPoint}/userWeb/signIn`, {
        email,
        password,
      });
      await AsyncStorage.setItem('token', user.data.data.token);
      dispatch({
        type: LOGIN,
        payload: user.data.data,
      });
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(error?.response?.data?.message);
    } finally {
      setLoginLoading(false);
    }
  };

// Above Code for Login Action

export const doSignUp =
  (userData, setSignUpLoading, navigation) => async dispatch => {
    try {
      setSignUpLoading(true);
      const user = await axios.post(`${endPoint}/userWeb/signUp`, {
        name: userData.name,
        email: userData.email,
        userName: userData.userName,
        mobile: userData.mobile,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      });
      navigation.navigate('Login');
      dispatch({
        type: SIGN_UP,
        payload: user?.data?.data,
      });
    } catch (error) {
      Alert.alert(error?.response?.data?.message);
    } finally {
      setSignUpLoading(false);
    }
  };

// // Above Code for SignUp Action

export const doLogout = navigation => async dispatch => {
  try {
    navigation.closeDrawer();
    await AsyncStorage.removeItem('token');
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    Alert.alert(error.toString());
  }
};

// // Above Code for Logout Action

export const doGetUserOnAppReopened = setLoading => async dispatch => {
  try {
    setLoading(true);
    const token = await AsyncStorage.getItem('token');
    const user = await axios.post(`${endPoint}/userWeb/getActiveStudent`, {
      token: token,
    });
    dispatch({
      type: GET_USER_ON_APP_REOPENED,
      payload: user.data.data,
    });
  } catch (error) {
    // if (token) {
    //   Alert.alert(error?.response?.data?.message);
    // }
  } finally {
    setLoading(false);
  }
};

// // Above Code for GetUserOnAppReopened Action

export const doUpdateProfile = (data, setLoading) => async dispatch => {
  try {
    setLoading(true);
    let formData = new FormData();
    formData.append('name', data?.name);
    formData.append('userName', data?.userName);
    formData.append(
      'photo',
      data?.image
        ? {
            uri: data?.image,
            name: 'image.png',
            fileName: 'image',
            type: 'image/png',
          }
        : null,
    );
    formData.append('mobile', data?.mobile);
    formData.append('id', data?.id);
    let request = {
      method: 'put',
      url: `${endPoint}/userWeb/updateStudent`,
      headers: {
        'Content-Type': 'application/form-data',
      },
      data: formData,
    };
    let user = await axios(request);
    dispatch({
      type: UPDATE_PROFILE,
      payload: user.data.data,
    });
  } catch (error) {
    Alert.alert(error?.response?.data?.message);
  } finally {
    setLoading(false);
  }
};
