import React from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text} from "native-base";

export default function ChatsListPage(){
    return (
        <List>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df69dc8410591a269e117c602796648200618b0a.jpg'}} />
                </Left>
                <Body>
                    <Text>Name</Text>
                    <Text note>message</Text>
                </Body>
                <Right style={{borderBottomWidth: 0}}>
                    <Text note>16:20</Text>
                </Right>
            </ListItem>
        </List>
    );
}