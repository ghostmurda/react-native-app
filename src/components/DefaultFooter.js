import React from 'react';
import {StyleSheet} from "react-native";
import {Button, Footer, FooterTab, Text, Icon} from "native-base";
import mainColor from '../styles';

export default function DefaultFooter(){
    return (
        <Footer style={styles.footer}>
            <FooterTab style={{backgroundColor:"white"}}>
                <Button vertical>
                    <Icon name="md-chatboxes" style={{color: mainColor}} />
                    <Text style={{color: mainColor}}>Chats</Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: "white"}}>
                <Button vertical>
                    <Icon name="contact" style={{color: mainColor}} />
                    <Text style={{color: mainColor}}>Contacts</Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: "white"}}>
                <Button vertical>
                    <Icon name="home" style={{color: mainColor}} />
                    <Text style={{color: mainColor}}>Home</Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: "white"}}>
                <Button vertical>
                    <Icon name="ios-apps" style={{color: mainColor}} />
                    <Text style={{color: mainColor}}>Apps</Text>
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