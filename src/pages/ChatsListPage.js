import React, {useEffect} from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text} from "native-base";
import {selectorActivePage} from "../store/footer/selectors";
import {setActivePageCreator} from "../store/footer/actions";
import {connect} from "react-redux";
import {chatsPage} from "../store/footer/types";

const mapStateToProps = (state) => (
    {
        activePage: selectorActivePage(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        setActivePage: (payload) => dispatch(setActivePageCreator(payload))
    }
)

function ChatsListPage(props){
    useEffect(() => {
        props.setActivePage(chatsPage);
    }, [])

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

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListPage);