import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressLoader({size}) {
  return (
      <CircularProgress size={size ||'20'}  />
  );
}