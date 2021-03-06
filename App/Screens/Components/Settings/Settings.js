import React, {useState, useContext} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, CommonActions} from '@react-navigation/native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {userLogout} from '../../../Actions/UserActions';
import {SettingHeader, SettingRow} from '../../SubComponents';
import {removeStoreItem} from '../../../Utils/Storage';

// const LANGUAGES = [
//   {title: 'Hindi', value: 'hi'},
//   {title: 'English', value: 'en'},
//   {title: 'German', value: 'de'},
// ];

const Settings = props => {
  const {appTheme, setAppTheme} = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(appTheme.type === 'dark');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onValueChange = () => {
    setAppTheme((!darkMode && 'dark') || 'light');
    setDarkMode(!darkMode);
  };

  const logout = () => {
    Alert.alert(
      '',
      'Do you want to logout?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: onLogout,
        },
      ],
      {cancelable: true},
    );
  };

  const onLogout = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
    dispatch(userLogout());
    await removeStoreItem('token');
  };

  // const onSelectLanguage = value => {
  //   setAppLanguage(value);
  // };

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        {backgroundColor: appTheme.background},
      ]}>
      <SettingHeader title={'Theme'} />
      <SettingRow
        isSwitch={true}
        title={'Dark Mode'}
        onPress={onValueChange}
        value={darkMode}
      />

      {/* {LANGUAGES.map(obj => {
        return (
          <SettingRow
            {...obj}
            onPress={onSelectLanguage}
            isSelected={appLanguage === obj.value}
            key={obj.value}
          />
        );
      })} */}
      <SettingRow
        title={'Logout'}
        onPress={logout}
        value={darkMode}
        textStyle={{color: appTheme.red}}
      />
    </SafeAreaView>
  );
};

export default Settings;
