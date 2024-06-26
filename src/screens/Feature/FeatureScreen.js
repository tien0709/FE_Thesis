
import React, { useLayoutEffect, useRef, useState } from "react";
import { FlatList, Text, View, Animated, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
import { Devices } from "../../data/dataArrays";
import NavigationBar from "../../components/NaviBar/navibar";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Toggle from "../../components/Toggle/Toggle";

export default function FeatureScreen(props) {
  const { navigation, route } = props;
  const email = route?.params?.email;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitleStyle: { opacity: 0 },
    });
  }, [navigation]);

  const handlePressButton = (buttonName) => {
    if(buttonName === 'Discovery'){
      navigation.navigate("Discovery", {email});
    }
    else if(buttonName === 'Home'){
      navigation.navigate("Home", {email});
    }
    else if(buttonName === 'Function'){
      navigation.navigate("Function", {email});
    }
    else if(buttonName === 'Info'){
      navigation.navigate("Info", {email});
    }
  };

  return (
    <View style={styles.Viewcontainer}>
      <View style={styles.container}>
        <Text style={styles.centeredText}>Feature</Text>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.ItemContainer1} onPress={() => navigation.navigate('Rooms', {email, subject: 'Conditions'})}>
          <ImageBackground
              source={require('../../../assets/condition.png')}
              style={styles.bgImage}
          >
                  <View style={styles.textContainer}>
                    <Text style={styles.Text}>Conditions</Text>
                  </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ItemContainer1} onPress={() => navigation.navigate('DeviceList', {email})}>
            <ImageBackground
              source={require('../../../assets/device.png')}
              style={styles.bgImage}
            >
                    <View style={styles.textContainer}>
                      <Text style={styles.Text}>Devices</Text>
                    </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>  
          <TouchableOpacity style={styles.ItemContainer2}  onPress={() => navigation.navigate('Rooms', {email, subject: 'Analysis'})}>
            <ImageBackground
                source={require('../../../assets/analysis.png')}
                style={styles.bgImage}
            >
                    <View style={styles.textContainer}>
                      <Text style={styles.Text}>Analysis</Text>
                    </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ItemContainer2} onPress={() => handlePressButton('Home')}>
            <ImageBackground
                  source={require('../../../assets/ai.png')}
                  style={styles.bgImage}
            >
              <Text style={styles.text}></Text>
            </ImageBackground>
          </TouchableOpacity>  
        </View>
      </View>
      <View>      
          <NavigationBar onPressButton={handlePressButton} type = "application"/> 
      </View>
    </View>
  );
}
