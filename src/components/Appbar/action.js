import { ActionIconsContainerDesktop, ActionIconsContainerMobile, Mylist } from "../../styles/theme/appbar";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import Person from "@mui/icons-material/Person";
import { Colors } from "../../styles/theme/colors";
export default function Action({ matches }) {
  const Container = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Container>
      <Mylist type="row">
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ justifyContent: "center", display: "flex", color: matches && Colors.secondary }}>
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ justifyContent: "center", display: "flex" , color: matches && Colors.secondary }}>
            <Favorite />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ justifyContent: "center", display: "flex", color: matches && Colors.secondary  }}>
            <Person />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </Mylist>
    </Container>
  );
}
