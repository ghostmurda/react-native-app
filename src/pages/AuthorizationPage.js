import React from 'react';
import {Form, Item, Label, Input, Button, Text} from "native-base";
import {chatsScreenName, signUpScreenName} from "../screens/constants";

export default function AuthorizationPage(props) {
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
                    onPress={() => props.navigator.push(chatsScreenName)}
            >
                <Text>Sign in</Text>
            </Button>
            <Text style={{
                    textAlign: "center",
                    marginTop: 16,
                    textDecorationLine: 'underline',
                    marginBottom: 4
                }}
                  onPress={() => props.navigator.push(signUpScreenName)}
            >
                or register
            </Text>
        </Form>
    );
}