import HIcon from "react-native-vector-icons/AntDesign";
import CIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from "react-native-vector-icons/Fontisto";
import UIcon from "react-native-vector-icons/AntDesign";

import React from "react";

const HomeIcon = ({ color, size }) => {
  return <HIcon name="home" color={color} size={size} />;
};
const CategoriesIcon = ({ color, size }) => (
  <CIcon name="hamburger" color={color} size={size} />
);
const FavoriteIcon = ({ color, size }) => (
  <FIcon name="favorite" color={color} size={size} />
);
const UserIcon = ({ color, size }) => (
  <UIcon name="user" color={color} size={size} />
);

export { HomeIcon, CategoriesIcon, FavoriteIcon, UserIcon };
