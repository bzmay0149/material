import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import MenuAppBar from './componentes/MenuAppBar';
import CardApp from './componentes/CardApp';
import Box from '@mui/material/Box';
import BotonImg from './componentes/BotonImg';
import Cambio from './componentes/Cambio';
import Oculto from './componentes/Oculto';
import Footer from './componentes/Footer';
import Transfe from './componentes/Footer';

const theme = createTheme({
  typography: {
    h1: {
      color: blue[600],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MenuAppBar />

        <Box textAlign="center" marginTop={4}>
          <h1 style={{ margin: 0, color: blue[600] }}>
            Los mejores postres caseros
          </h1>
        </Box>

        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" marginTop={4} marginBottom={4}>
          <CardApp />

        <Box marginTop={8} marginLeft={12} width="80%" height={300}>
           <BotonImg />
       </Box>
       <Cambio />

          
        <Oculto />
        </Box>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


