import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
});

const CustomBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const CustomBottomNavigationAction = styled(BottomNavigationAction)(({ theme, selected }) => ({
  '& .MuiSvgIcon-root': {
    color: selected ? grey[800] : '#fff',
  },
  '& .MuiBottomNavigationAction-label': {
    color: selected ? grey[800] : '#fff',
  },
}));

function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomBottomNavigation value={value} onChange={handleChange} showLabels>
        <CustomBottomNavigationAction label="Home" icon={<HomeIcon />} selected={value === 0} />
        <CustomBottomNavigationAction label="Explore" icon={<ExploreIcon />} selected={value === 1} />
        <CustomBottomNavigationAction label="Favorite" icon={<FavoriteIcon />} selected={value === 2} />
      </CustomBottomNavigation>
    </ThemeProvider>
  );
}

export default Footer;
