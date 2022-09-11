import { IconButton } from "@mui/material";
import { AppBarContainer, AppBarHeader } from "../../styles/theme/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Action from "./action";

export default function AppBarMobile({ matches }) {
  return (
    <AppBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppBarHeader textAlign={'center'} variant="h4">RRTrader </AppBarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Action matches={matches}/>
    </AppBarContainer>
  );
}
