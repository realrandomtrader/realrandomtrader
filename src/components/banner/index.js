// import {  useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/theme/banner";

export default function Banner() {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerContent>
        <BannerImage src="/images/banner/banner.png" />
        <BannerTitle variant="h6"> collections here</BannerTitle>
        <BannerDescription variant="subtitle"> Site will be live soon !!! </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
