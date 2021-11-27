import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FONTS } from "./src/constants";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  function themMotDonVi() {
    setCount(count + 1);
  }

  function giamMotDonVi() {
    setCount(count - 1);
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity onPress={() => giamMotDonVi()}>
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text>Tru</Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center", padding: 75 }}>
          <Text style={{ ...FONTS.h3 }}>{count}</Text>
        </View>
        <TouchableOpacity onPress={() => themMotDonVi()}>
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text>Cong</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
