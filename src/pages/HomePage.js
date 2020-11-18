import React from 'react';
import {Body, Left, ListItem, Text, Thumbnail, List} from "native-base";
import {selectorUserInfo} from "../store/auth/selectors";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        userInfo: selectorUserInfo(state)
    }
);

function HomePage(props){
    return (
        <List>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: props.userInfo.photoUrl}} />
                </Left>
                <Body>
                    <Text>{props.userInfo.name}</Text>
                    <Text note>Id: @testid</Text>
                </Body>
            </ListItem>
            <ListItem >
                <Text>Email: {props.userInfo.email}</Text>
            </ListItem>
        </List>
    );
}

export default connect(mapStateToProps)(HomePage);