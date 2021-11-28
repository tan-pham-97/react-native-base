import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const HomeScreen = ({ navigation }: any) => {
	const onPressMapView = () => {
		navigation.navigate("MapView");
	};
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				onPress={onPressMapView}
				style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
			>
				<Text>Go to map view Screen</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
