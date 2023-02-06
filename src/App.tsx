import Grid from '@mui/joy/Grid';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import Logo from './components/logo/logo';
import Copyright from './components/copyright/copyright';
import SubjectCard from './components/subject-card/subject-card';

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
        <Grid pb={2} container spacing={1}>
          {/* next portion */}
          <Grid xs={3}>
            <SubjectCard
              title="Maths 6th - 8th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1601397922721-4326ae07bbc5"
              info="Classes on Alternate days"
              fees="Rs. 3000 / month"
            />
          </Grid>
          <Grid xs={3}>
            <SubjectCard
              title="Maths 9th - 10th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1560785477-d43d2b34e0df"
              info="Classes on Alternate days"
              fees="Rs. 3000 / month"
            />
          </Grid>
          <Grid xs={3}>
            <SubjectCard
              title="Science 6th - 8th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1534643960519-11ad79bc19df"
              info="Classes on Alternate days"
              fees="Rs. 3000 / month"
            />
          </Grid>
          <Grid xs={3}>
            <SubjectCard
              title="Science 9th - 10th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1532634993-15f421e42ec0"
              info="Classes on Alternate days"
              fees="Rs. 3000 / month"
            />
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
