import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#9F353A",
    },
    secondary: {
      main: "#052b48",
    },
    info: {
      main: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    }
  }
})

export default theme
