import { Colors } from "./colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main : Colors.primary
        },
        secondary : {
            main : Colors.secondary
        }
    },
    components: {
        MuiButton : {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        }
    }
})

export default theme;