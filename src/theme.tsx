import { deepmerge } from '@mui/utils';
import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';
import colors from '@mui/joy/colors';
import { extendTheme as extendJoyTheme } from '@mui/joy/styles';

const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using
  // `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: colors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: colors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});

const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendJoyTheme();

// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
export const mergedTheme = deepmerge(muiTheme, joyTheme) as unknown as ReturnType<typeof extendJoyTheme>;

mergedTheme.unstable_sxConfig = {
  ...muiSxConfig,
  ...joySxConfig,
};

// example from https://mui.com/joy-ui/guides/using-joy-ui-and-material-ui-together/#typescript-setup
// export default function App() {
//   return (
//     <CssVarsProvider
//       theme={mergedTheme}
//       shouldSkipGeneratingVar={(keys) => muiShouldSkipGeneratingVar(keys) || joyShouldSkipGeneratingVar(keys)}
//     >
//       ...Material UI and Joy UI components
//     </CssVarsProvider>
//   );
// }
