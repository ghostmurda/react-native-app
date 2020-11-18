import React from 'react';
import {StyleSheet} from "react-native";
import {Button, Footer, FooterTab, Text, Icon} from "native-base";
import mainColor from '../styles';

export default function DefaultFooter(){
    return (
        <Footer style={styles.footer}>
            <FooterTab style={{backgroundColor: mainColor}}>
                <Button vertical>
                    <Icon name="ios-apps" style={{color: 'white'}}/>
                    <Text style={{color: 'white'}}>Apps</Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: mainColor}}>
                <Button vertical>
                    <Icon name="home"/>
                    <Text>Home</Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: mainColor}}>
                <Button vertical>
                    <Icon name="md-chatboxes"/>
                    <Text>Chats</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}

const styles = StyleSheet.create({
    footer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 9.51,
        elevation: 15,
    }
});