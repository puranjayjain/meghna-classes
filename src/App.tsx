import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Button from '@mui/joy/Button';

import Logo from './components/logo/logo';
import Copyright from './components/copyright/copyright';
import SubjectCard from './components/subject-card/subject-card';
import SalientFeatures from './components/salient-features/salient-features';
import Map from './components/map/map';
import ContactCard from './components/contact-card/contact-card';

import './app.scss';

function App() {
  return (
    <>
      <Box p={3}>
        <Grid container pb={4} spacing={0}>
          <Grid item sm={4} xs={12}>
            <Logo />
          </Grid>
          <Grid item sm={6} xs={0}></Grid>
          <Grid item sm={2} xs={12} justifyContent="flex-end">
            <Button color="warning" component="a" size="md" href="https://wa.me/+917976382056" sx={{ minWidth: 100 }}>
              Contact Now
            </Button>
          </Grid>
        </Grid>
        <Grid pb={2} container spacing={1} columns={{ xs: 3, sm: 6, md: 8, lg: 12 }} justifyContent="center">
          {/* next portion */}
          <Grid item xs={3}>
            <SubjectCard
              title="Maths 6th - 8th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1601397922721-4326ae07bbc5"
              info="Classes on Alternate days"
              fees="Rs. 2500 / month"
            />
          </Grid>
          <Grid item xs={3}>
            <SubjectCard
              title="Maths 9th - 10th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1560785477-d43d2b34e0df"
              info="Classes on Alternate days"
              fees="Rs. 3000 / month"
            />
          </Grid>
          <Grid item xs={3}>
            <SubjectCard
              title="Science 6th - 8th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1534643960519-11ad79bc19df"
              info="Classes on Alternate days"
              fees="Rs. 2000 / month"
            />
          </Grid>
          <Grid item xs={3}>
            <SubjectCard
              title="Science 9th - 10th"
              subtitle="New Batch Starting Soon"
              imageSrc="photo-1532634993-15f421e42ec0"
              info="Classes on Alternate days"
              fees="Rs. 3000 / month"
            />
          </Grid>
        </Grid>
        <Grid pb={2} container spacing={1} justifyContent="center">
          {/* next portion */}
          <Grid item xs={12}>
            <SalientFeatures />
          </Grid>
        </Grid>
        <Grid pb={2} container spacing={1} columns={{ xs: 4, sm: 6, md: 8, lg: 12 }} justifyContent="center">
          {/* next portion */}
          <Grid item xs={6}>
            <Map />
          </Grid>
          <Grid item xs={6}>
            <ContactCard />
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </>
  );
}

export default App;
