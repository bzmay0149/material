import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9zWZMZ48owVorNr4aahqAjVhrKXt1oczhA&usqp=CAU'
          alt="Postre casero"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tartaleta de frambuesa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum necessitatibus, aliquid accusamus illo iure est in commodi enim fugit voluptas molestiae eveniet eos pariatur vitae autem quam dicta sunt?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Aceptar
        </Button>
      </CardActions>
    </Card>
  );
}
