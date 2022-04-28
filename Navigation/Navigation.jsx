import React from "react";
import { Home, Categories, Favorites, Random, Users } from "../Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, CategoriesIcon, FavoriteIcon, UserIcon } from "../Icons";

const Tab = createBottomTabNavigator();

const stylesDef = {
  tabBarLabelStyle: {
    fontSize: 13,
    marginBottom: 5,
  },
  tabBarActiveTintColor: "#EA5C2B",
  headerTitle: "Favoritos XD",
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#F6D860",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
          ...stylesDef,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => (
            <CategoriesIcon color={color} size={size} />
          ),
          ...stylesDef,
        }}
      />
      <Tab.Screen name="Random" component={Random} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FavoriteIcon color={color} size={size} />
          ),
          ...stylesDef,
          tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
          ...stylesDef,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
