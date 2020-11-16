import {AppLoading, registerRootComponent} from 'expo';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import Navigator from "react-native-easy-router";
import {authScreenName} from "./src/screens/constants";
import {AuthScreen, ChatsScreen, SignUpScreen} from "./src/screens/screens";

export const Application = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            })
            setLoaded(true);
        })();
    }, [])

    return (
        <>
            {loaded ?
                <Navigator screens={{AuthScreen, ChatsScreen, SignUpScreen}} initialStack={authScreenName}/>
                : <AppLoading/>
            }
        </>
    );
}

registerRootComponent(Application);