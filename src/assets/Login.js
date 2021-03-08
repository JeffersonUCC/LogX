import React from 'react';
import {
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text, Button, StyleService, useStyleSheet} from '@ui-kitten/components';

const Login = ({navigation}) => {
  const styles = useStyleSheet(LoginStyleSheet);
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>LogX</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button
                style={styles.loginButton}
                onPress={() => this.onLoginPress()}>
                Log In
              </Button>
              <Button
                style={styles.fbLoginButton}
                onPress={() => this.onGLoginPress()}>
                Login with Google
              </Button>
              <Button
                style={styles.fbLoginButton}
                onPress={() => navigation.navigate('Register')}>
                Register Page
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const LoginStyleSheet = StyleService.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
    alignItems: 'center',
  },
  loginFormTextInput: {
    height: 43,
    width: '90%',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: 'color-primary-default',
    width: '70%',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    backgroundColor: '#3897f1',
    height: 45,
    width: '70%',
    marginTop: 10,
  },
});
export default Login;