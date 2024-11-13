declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }

declare module "@env" {
    export const REACT_APP_GOOGLE_MAPS_APIKEY: string;
}

declare module "*.jpeg";
declare module "*.png";