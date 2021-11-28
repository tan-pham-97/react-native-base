import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, MapViewScreen } from "../screens";
const Stack = createNativeStackNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="MapView" component={MapViewScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
