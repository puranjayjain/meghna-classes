import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

import Call from '@mui/icons-material/Call';

export default function Component() {
  return (
    <Card variant="outlined" sx={{ minWidth: 300 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Any other inquiry?
      </Typography>
      <Typography level="body2">Open: Monday - Friday (10 AM - 6PM)</Typography>
      <IconButton
        aria-label="map drop pin"
        variant="plain"
        color="danger"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <Call />
      </IconButton>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Not urgent? Please drop a message on whatsapp</Typography>
          <Typography fontSize="lg" fontWeight="lg"></Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="warning"
          component="a"
          href="tel:+917976382056"
          aria-label="call meghna classes"
          sx={{ minWidth: 80, ml: 'auto', fontWeight: 600 }}
        >
          Call Now
        </Button>
      </Box>
    </Card>
  );
}
