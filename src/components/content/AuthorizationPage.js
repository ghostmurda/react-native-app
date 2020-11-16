import React from 'react';
import {Form, Item, Label, Input, Button, Text} from "native-base";
import {chatsScreenName} from "../../screens/constants";

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
                <Label>Username</Label>
                <Input/>
            </Item>
            <Item floatingLabel last>
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
                <Text>Sign in (Sign up)</Text>
            </Button>
        </Form>
    );
}