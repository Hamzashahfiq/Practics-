import Button from '@mui/material/Button';

export default function ComButton({type,bText}) {
  return (
    <Button type={type || null} sx={{margin:'15px 0'}} variant="contained">{bText || 'text'}</Button>
  )
}
