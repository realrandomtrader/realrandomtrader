import { ThemeProvider} from '@mui/system'
import { Container } from "@mui/system";
import { useEffect } from "react";
import AppBar from './components/Appbar'
import Banner from "./components/banner";
import theme from './styles/theme'
function App() {
  useEffect(() => {
    document.title ="react web app and mobile responsive"
  } , [])
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <AppBar />
      <Banner/>
      {/* Appbar
      banner
      promitions
      title 
      products
      footer
      searchbox
      apdrawer */}
     
    </Container>
    </ThemeProvider>
  );
}

export default App;
