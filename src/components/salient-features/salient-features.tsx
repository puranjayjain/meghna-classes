import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

export default function Component() {
  return (
    <List
      size="md"
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        // bgcolor: 'background.body',
        bgcolor: '#eac54f',
      }}
    >
      <ListItem>
        <ListItemDecorator></ListItemDecorator>
        <Typography level="h4">What can you expect?</Typography>
      </ListItem>
      {[
        'Free demo class',
        'Weekend quiz for stimulating the mind',
        'One-to-one attention',
        'Regular and surprise tests',
        'Daily homework and self learning focus',
        'Interactive classes',
        'Online / Offline classes available',
      ].map((text) => (
        <ListItem key={text}>
          <ListItemDecorator>
            <CheckBoxRoundedIcon color="success" />
          </ListItemDecorator>
          <Typography level="h5">{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
