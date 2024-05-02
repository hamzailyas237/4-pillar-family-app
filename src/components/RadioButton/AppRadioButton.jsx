import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Colors} from '../../assets/theme';
import {LockIcon} from '../../assets/theme/svgimages';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AppRadioButton = props => {
  const lockIcon = require('../../assets/Images/lock.png');
  const [handleCheck, setHandleCheck] = useState(props.isChecked);

  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 5,
        marginBottom: 5,
      }}>
      <TouchableOpacity
        // onPress={onPressbtn}
        onPress={() => setHandleCheck(!handleCheck)}
        style={{
          paddingHorizontal: 10,
          height: 46,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: Colors.white,
          borderRadius: 10,
          backgroundColor: Colors.shadow1,
          borderWidth: 1,
        }}>
        {props.radioType === 'completed' ? (
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 50,
              backgroundColor: '#1AC042',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="check" size={18} color="#000" />
          </View>
        ) : (
          <RadioButton
            onPress={() => setHandleCheck(!handleCheck)}
            value={props.text}
            status={handleCheck ? 'checked' : 'unchecked'}
            color={handleCheck ? Colors.text.tertiary : Colors.text.tertiary}
          />
        )}
        <Text
          style={{
            color: handleCheck ? Colors.text.tertiary : Colors.gray11,
            paddingLeft: 15,
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppRadioButton;
