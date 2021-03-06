import React, {useEffect} from 'react';
import {Body, Left, ListItem, Text, Thumbnail, List, Icon, Separator, Right, Button} from "native-base";
import {selectorUserInfo} from "../store/auth/selectors";
import {connect} from "react-redux";
import mainColor from "../styles";
import {selectorActivePage} from "../store/footer/selectors";
import {setActivePageCreator} from "../store/footer/actions";
import {homePage} from "../store/footer/types";

const mapStateToProps = (state) => (
    {
        userInfo: selectorUserInfo(state),
        activePage: selectorActivePage(state)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        setActivePage: (payload) => dispatch(setActivePageCreator(payload))
    }
)

function HomePage(props){
    useEffect(() => {
        props.setActivePage(homePage);
    }, [])

    return (
        <List>
            <Separator bordered>
                <Text style={{fontSize: 16}}>My profile</Text>
            </Separator>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: props.userInfo.photoUrl}} />
                </Left>
                <Body>
                    <Text>{props.userInfo.name}</Text>
                    <Text note>Test status</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Icon name="mail" style={{color: mainColor}} />
                <Text style={{marginLeft: 16}}>{props.userInfo.email}</Text>
            </ListItem>
            <ListItem last>
                <Icon name="md-at" style={{color: mainColor}} />
                <Text style={{marginLeft: 16}}>testid</Text>
            </ListItem>

            <Separator bordered>
                <Text style={{fontSize: 16}}>My apps</Text>
            </Separator>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square style={{borderRadius: 10}} source={{ uri: props.userInfo.photoUrl }} />
                </Left>
                <Body>
                    <Text>Hardcode app name</Text>
                    <Text note>Game</Text>

                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square style={{borderRadius: 10}} source={{ uri: props.userInfo.photoUrl }} />
                </Left>
                <Body>
                    <Text>Hardcode app name</Text>
                    <Text note>Game</Text>

                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square style={{borderRadius: 10}} source={{ uri: props.userInfo.photoUrl }} />
                </Left>
                <Body>
                    <Text>Hardcode app name</Text>
                    <Text note>Game</Text>

                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        </List>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);