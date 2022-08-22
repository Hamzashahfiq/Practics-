import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
const CH = {
   HLink : styled(NavLink)(({  }) => ({
        textDecoration: 'none',
        color: 'white',
          '&:hover': {
            color: '#a4c3b2',
          },
          '&:focus': {
            color: '#a4c3b2',
          }
        
      })),
   HDLink : styled(NavLink)(({  }) => ({
        textDecoration: 'none',
        color: 'black',
        width:'100%',
          '&:hover': {
            color: '#a4c3b2',
          },
          '&:focus': {
            color: '#a4c3b2',
          }
        
      })),
      activeStyle : {
        textDecoration: "none",
        color: '#6b9080',
      }
}

export default CH