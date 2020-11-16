import DefaultPage from "../components/DefaultPage";
import AuthorizationPage from "../components/content/AuthorizationPage";
import {Text} from "native-base";
import React from "react";

export const AuthScreen = ({navigator}) => {
    return (
        <DefaultPage
            pageTitle="Authorization"
            isFooter={false}
            contentPage={<AuthorizationPage />}
            isContentHasNav={true}
            navigator={navigator}
        />
    );
}

export const ChatsScreen = ({navigator}) => {
    return (
        <DefaultPage
            pageTitle="Chats"
            isFooter={true}
            contentPage={<Text>Test</Text>}
            isContentHasNav={false}
            navigator={navigator}
        />
    );
}