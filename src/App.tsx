import Grid from '@mui/joy/Grid';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import Logo from './components/logo/logo';
import Copyright from './components/copyright/copyright';

import './app.scss';

function App() {
  return (
    <>
      <Box p={2}>
        <Grid pb={2} container spacing={2}>
          <Grid xs={4}>
            <Logo />
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={2}>
            <Button color="warning" component="a" size="sm" href="https://wa.me/+917976382056">
              Contact Now
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {/* next portion */}
          <Grid xs={4}>
            <Typography level="h5">Maths is Fun</Typography>
          </Grid>
          <Grid xs={8}>normal</Grid>
        </Grid>
      </Box>
      <Copyright />
    </>
  );
}

export default App;
