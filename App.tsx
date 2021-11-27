import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { FONTS } from "./src/constants";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={{ ...FONTS.h3 }}>This is font Roboto Bold</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
