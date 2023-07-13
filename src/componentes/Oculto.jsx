import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import CardMedia from '@mui/material/CardMedia';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Oculto() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>
          <CardMedia
            component="img"
            sx={{ m: 1 }}
            height={100}
            image="https://i.ytimg.com/vi/2_FUW8y2J1M/maxresdefault.jpg"
            alt="Descripción de la imagen 1"
          />
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <CardMedia
            component="img"
            sx={{ m: 1 }}
            height={100}
            image="https://canalcocina.es/medias/images/0001047778PostresCaserosDeNavidadS01E008SemifrioDeCocoHR0201.jpg"
            alt="Descripción de la imagen 2"
          />
        </Grow>
      </Box>
    </Box>
  );
}
