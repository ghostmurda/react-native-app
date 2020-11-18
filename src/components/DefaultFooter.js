import React from 'react';
import {StyleSheet} from "react-native";
import {Button, Footer, FooterTab, Text, Icon} from "native-base";
import mainColor from '../styles';
import {selectorActivePage} from "../store/footer/selectors";
import {connect} from "react-redux";
import {appsPage, chatsPage, homePage} from "../store/footer/types";
import {chatsScreenName, homeScreenName} from "../screens/constants";

const mapStateToProps = (state) => (
    {
        activePage: selectorActivePage(state)
    }
)

function DefaultFooter(props){
    return (
        <Footer style={styles.footer}>
            <FooterTab style={{backgroundColor: mainColor}}>
                <Button vertical>
                    <Icon name="ios-apps"
                          style={(props.activePage === appsPage) ? {color: 'white'} : null}
                    />
                    <Text style={(props.activePage === appsPage) ? {color: 'white'} : null}>
                        Apps
                    </Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: mainColor}}>
                <Button vertical onPress={() => props.navigator.push(homeScreenName)}>
                    <Icon name="home"
                          style={(props.activePage === homePage) ? {color: 'white'} : null}
                    />
                    <Text style={(props.activePage === homePage) ? {color: 'white'} : null}>
                        Home
                    </Text>
                </Button>
            </FooterTab>
            <FooterTab style={{backgroundColor: mainColor}}>
                <Button vertical onPress={() => props.navigator.push(chatsScreenName)}>
                    <Icon name="md-chatboxes"
                          style={(props.activePage === chatsPage) ? {color: 'white'} : null}
                    />
                    <Text style={(props.activePage === chatsPage) ? {color: 'white'} : null}>
                        Chats
                    </Text>
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

export default connect(mapStateToProps)(DefaultFooter);