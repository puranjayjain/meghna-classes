import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Alert from '@mui/joy/Alert';

type ComponentProps = {
  title: string;
  subtitle: string;
  info: string;
  fees: string;
  imageSrc: string;
  imgAlt?: string;
};

export default function Component({ title, subtitle, imageSrc, imgAlt = '', info, fees }: ComponentProps) {
  const imgSrc = `https://images.unsplash.com/${imageSrc}?auto=format&fit=crop&w=286`;
  const imgSrcSet = `https://images.unsplash.com/${imageSrc}?auto=format&fit=crop&w=286&dpr=2 2x`;

  return (
    <Card variant="outlined" sx={{ width: '80%', minWidth: 300 }}>
      <Typography level="h1" fontSize="lg" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography level="body1">{subtitle}</Typography>
      <Alert color="info" size="sm" sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
        CBSE
      </Alert>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={imgSrc} srcSet={imgSrcSet} loading="lazy" alt={imgAlt} />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">{info}:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {fees}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="warning"
          component="a"
          href="https://wa.me/+917976382056"
          aria-label="Contact on whatsapp"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Contact
        </Button>
      </Box>
    </Card>
  );
}
