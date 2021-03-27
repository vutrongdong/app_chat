import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, Button, Image } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'locale';
import { SIGN_UP_SCREEN, LOGIN_SCREEN } from 'constants/screens';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <View style={styles.containerLogo} testID={LOGIN_SCREEN}>
        <Image
          style={styles.logo}
          source={require('media/images/logo.png')}
        />
      </View>
      <LoginForm onSubmit={loginRequest}/>
      <Button 
        testID="sign-up-button"
        title={strings.SIGN_UP.title}
        onPress={handleLogin}
        style={styles.button}
      />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.navigationOption = {
  title: strings.SIGN_IN.title,
};

export default memo(LoginScreen);
