import {Button, Form, Input, Item, Label, Text, Picker, Icon} from "native-base";
import React from "react";
import {chatsScreenName} from "../screens/constants";

export default function SignUpPage (props){
    return(
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
                👨🏻‍💻 Please fill this form to create an account 👩🏻‍💻
            </Text>
            <Item floatingLabel>
                <Label>Name</Label>
                <Input/>
            </Item>
            <Item floatingLabel>
                <Label>ID</Label>
                <Input/>
            </Item>
            <Item floatingLabel>
                <Label>Email</Label>
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
                        borderRadius: 20,
                        marginBottom: 16
                    }}
                    onPress={() => props.navigator.push(chatsScreenName)}
            >
                <Text>Sign up</Text>
            </Button>
        </Form>
    );
}