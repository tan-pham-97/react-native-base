import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { ChatScreen, HomeScreen, SettingsScreen } from '../screens';
const BottomNavigator = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'HomeScreen', title: 'Home', icon: 'home', barColor: 'red' },
		{ key: 'ChatScreen', title: 'Chat', icon: 'chat', barColor: 'green' },
		{
			key: 'SettingsScreen', title: 'Settings', icon: 'heart', barColor: 'gold'
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		HomeScreen,
		ChatScreen,
		SettingsScreen
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
			barStyle={{ backgroundColor: routes[index].barColor }}
		/>
	);
};

export default BottomNavigator;