import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function Component() {
  return (
    <Card variant="outlined" sx={{ minWidth: 300 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Offline Classes
      </Typography>
      <Typography level="body2">Open: Monday - Friday (10 AM - 6PM)</Typography>
      <IconButton
        aria-label="map drop pin"
        variant="plain"
        color="danger"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <LocationOnRoundedIcon />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src=""
          srcSet="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=IN&markers=color:0x5f9bce|26.9007001,75.7542059&zoom=16&client=google-presto&signature=HSEpsKz6rZlzZROL8JcquLUDCvc"
          loading="lazy"
          alt="Location of meghna classes on google maps"
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">41, Vidyut Nagar B, Jaipur, Rajasthan 302021</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {/* 41, Vidyut Nagar B, Vidhyut Nagar, Jaipur, Rajasthan 302021  */}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="warning"
          component="a"
          href="https://www.google.com/maps/place/Meghna+classes/data=!3m1!4b1!4m2!3m1!1s0x396db5d3fb257339:0x8a20b381ed539083"
          aria-label="Open google maps location"
          sx={{ minWidth: 80, ml: 'auto', fontWeight: 600 }}
        >
          View in Map
        </Button>
      </Box>
    </Card>
  );
}
