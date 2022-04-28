import { View, Text } from "react-native";
import React from "react";

const TabNavigations = ({ Tab }) => {
  return (
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#EA5C2B",
        headerTitle: "Favoritos XD",
      }}
    />
  );
};

export default TabNavigations;
