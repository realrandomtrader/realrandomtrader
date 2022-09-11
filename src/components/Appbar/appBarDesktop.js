import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppBarContainer, AppBarHeader, Mylist } from "../../styles/theme/appbar";
import Search from '@mui/icons-material/Search'
import Action from "./action";
export default function AppBarDesktop({ matches }) {
  return (
    <AppBarContainer>
      <AppBarHeader>RRTrader</AppBarHeader>
      <Mylist type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
            <ListItemIcon>
                <Search />
            </ListItemIcon>
        </ListItemButton>
      </Mylist>
        <Action matches={matches}/>
    </AppBarContainer>
  );
}
