/// <reference types="nativewind/types" />

declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}

declare module "*.jpg" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}

declare module "*.jpeg" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}
