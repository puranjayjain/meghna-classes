import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

function Component() {
  return (
    <Typography px={3} py={2} className="copyright-container" level="body1">
      Copyright &copy;{' '}
      <Link color="neutral" href="https://meghnaclasses.com">
        meghna classes
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default Component;
