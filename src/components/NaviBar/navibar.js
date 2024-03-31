import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from "prop-types";
import styles from './styles';

const NavigationBar = ({ onPressButton, type }) => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressButton('Home')}
      >
        <View style={styles.buttonContent}>
          <Icon style={styles.logo} name="home" size={20} color={type === 'home' ?  '#FFB267'  : '#000'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressButton('Discovery')}
      >
        <View style={styles.buttonContent}>
          <Icon style={styles.logo} name="search" size={20} color={type === 'search' ?  '#FFB267'  : '#000'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressButton('Function')}
      >
        <View style={styles.buttonContent}>
          <Icon style={styles.logo} name="grip-vertical" size={20} color={type === 'application' ?  '#FFB267'  : '#000'}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressButton('Info')}
      >
        <View style={styles.buttonContent}>
          <Icon style={styles.logo} name="user" size={20} color={type === 'user' ?  '#FFB267'  : '#000'} />
        </View>
      </TouchableOpacity>

      {/* Thêm các nút khác nếu cần */}
    </View>
  );
};

NavigationBar.propTypes = {
  onPressButton: PropTypes.func,
  type: PropTypes.string, // Add type prop
};

export default NavigationBar;
