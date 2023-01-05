import { PaletteMode, Theme } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'

export const lightStyles = {
  primary: amber,
  divider: amber[200],
  text: {
    primary: grey[900],
    secondary: grey[800]
  }
}

export const darkStyles = {
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900]
  },
  text: {
    primary: '#fff',
    secondary: grey[500]
  }
}

export type CustomTheme = PaletteMode & typeof lightStyles

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightStyles : darkStyles)
  }
})

export default { getDesignTokens }
