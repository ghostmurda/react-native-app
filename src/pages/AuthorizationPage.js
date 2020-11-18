import React, {useEffect} from 'react';
import {Body, Button, Text, Thumbnail, Title} from "native-base";
import {homeScreenName} from "../screens/constants";
import * as Google from "expo-google-app-auth";
import {androidOAuthKey} from '../../config';
import {connect} from "react-redux";
import {setAuthCreator, setUserInfoCreator} from "../store/auth/actions";
import {StyleSheet} from "react-native";
import mainColor from "../styles";
import {selectorAuth, selectorUserInfo} from "../store/auth/selectors";

const mapStateToProps = (state) => (
    {
        auth: selectorAuth(state),
        userInfo: selectorUserInfo(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        setAuth: (payload) => dispatch(setAuthCreator(payload)),
        setUserInfo: (payload) => dispatch(setUserInfoCreator(payload))
    }
)

function AuthorizationPage(props) {
    const googleSignIn = async () => {
        const { type, accessToken, user } = await Google.logInAsync({
            androidClientId: androidOAuthKey,
        });

        if (type === 'success') {
            props.setAuth(true);
            props.setUserInfo({
                name: user.name,
                photoUrl: user.photoUrl,
                accessToken,
                email: user.email
            });
        }
    }

    useEffect(() => {
        if (props.auth){
            props.navigator.push(homeScreenName);
        }
    }, [props.auth])

    return (
        <Body style={styles.body}>
            <Thumbnail square large source={require('../assets/logo.png')} />
            <Title style={styles.title}>OpenApps</Title>
            <Button primary bordered style={styles.button} onPress={() => googleSignIn()}>
                <Thumbnail small
                           source={{uri: "https://img.icons8.com/color/96/000000/google-logo.png"}}
                           style={{marginLeft: 12}}
                />
                <Text>Sign in with Google</Text>
            </Button>
        </Body>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        marginTop: 32,
        padding: 16,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 9.51,
        elevation: 1,
        maxHeight: 500
    },
    title: {
        textAlign: 'center',
        color: mainColor,
        marginLeft: 2
    },
    button: {
        marginTop: 16,
        borderRadius: 20,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);