import React, { useLayoutEffect, useRef } from "react";
import { FlatList, Text, View, Animated } from "react-native";
import styles from "./styles";
import { Logs } from "../../data/dataArrays";
import NavigationBar from "../../components/NaviBar/navibar";

export default function SystemLogScreen(props) {
  const { navigation, route } = props;
  const email = route?.params?.email;

  const scrollY = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitleStyle: { opacity: 0 },
    });
  }, [navigation]);


  const handlePressButton = (buttonName) => {
     if(buttonName === 'Home'){
       navigation.navigate("Home", {email});
    }
      if(buttonName === 'Discovery'){
       navigation.navigate("Discovery", {email});
     }
     else if(buttonName === 'Function'){
       navigation.navigate("Function", {email});
     }
     else if(buttonName === 'Info'){
       navigation.navigate("Info", {email});
     }

 };

  const renderLog = ({ item }) => (
    <View style={styles.ItemContainer}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.Name}>{item.Name}</Text>
      <Text style={[styles.status, item.status === 'Over-bound' ? { color: 'red' } : null]}>
          {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.Viewcontainer}>

        <Text style={styles.centeredText}>System Logs</Text>

      <FlatList
        data={Logs}
        renderItem={renderLog}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.bodyImageContainer}
      />

      <NavigationBar onPressButton={handlePressButton} />
    </View>
  );
}
