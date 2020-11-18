import React from 'react';
import {Container, Header, Title, Content} from "native-base";
import {StyleSheet} from "react-native";
import DefaultFooter from "./DefaultFooter";
import mainColor, {bgColor} from "../styles";

export default function DefaultPage(props){
    const navigator = props.navigator;
    return (
        <Container>
            <Header style={styles.header} androidStatusBarColor={mainColor}>
                <Title style={{color: 'white'}}>{props.pageTitle}</Title>
            </Header>
            <Content style={{backgroundColor: bgColor}}>
                {props.isContentHasNav ? React.cloneElement(props.contentPage, {navigator}) : props.contentPage}
            </Content>
            {props.isFooter && <DefaultFooter navigator={navigator} />}
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: mainColor,
    }
});