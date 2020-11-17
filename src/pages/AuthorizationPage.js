import React from 'react';
import {Form, Item, Label, Input, Button, Text} from "native-base";
import {chatsScreenName, signUpScreenName} from "../screens/constants";
import * as Google from "expo-google-app-auth";
import {androidOAuthKey} from '../../config';
import {connect} from "react-redux";
import {setAuthCreator, setUserInfoCreator} from "../store/auth/actions";

const mapStateToProps = (state) => (
    {
        auth: state.authState.auth,
        userInfo: state.authState.userInfo
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
                accessToken
            });
        }
    }

    return (
        <Form style={{
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
        }}>
            <Text style={{
                textAlign: 'center',
            }}>
                🛸 Welcome to this app 🚀
            </Text>
            <Item floatingLabel>
                <Label>ID or email</Label>
                <Input/>
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input/>
            </Item>
            <Button full
                    bordered
                    style={{
                        marginTop: 32,
                        borderRadius: 20
                    }}
                    onPress={() => googleSignIn()}//props.navigator.push(chatsScreenName)}
            >
                <Text>Sign in with Google</Text>
            </Button>
        </Form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);