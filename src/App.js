
import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Container } from '@mui/system';
import Header from './Header';

function App() {
  return (
      <>
      <AppBar position='relative' color='primary'>
      <Toolbar>
      <PhotoCamera/>
        <Typography variant='h6'>hello world</Typography>
      </Toolbar>
      </AppBar>
      <Container>
      <Typography variant='h2' gutterBottom align='center'>programming language</Typography>
       <Container display='flex'>
       <Header/>
      <Header/>
       </Container>
      </Container>
      </>
    
  );
}

export default App;
