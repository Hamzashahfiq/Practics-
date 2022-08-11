import TextField from '@mui/material/TextField';

export default function InputField({type,label,name}) {
  return (
    <TextField  type= {type||'text'} size='medium' sx={{width:'300px',margin:'10px 5px'}} id="outlined-basic" label={label||"Outlined"} name={name||''} variant="outlined" />
  )
}
