import DefaultPage from "../components/DefaultPage";
import AuthorizationPage from "../components/pages/AuthorizationPage";
import {Text} from "native-base";
import React from "react";
import ChatsListPage from "../components/pages/ChatsListPage";

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
            contentPage={<ChatsListPage />}
            isContentHasNav={false}
            navigator={navigator}
        />
    );
}