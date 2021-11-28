import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const HomeScreen = ({ navigation }: any) => {
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
			>
				<Text>Go to map view Screen</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
