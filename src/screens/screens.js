import DefaultPage from "../components/DefaultPage";
import AuthorizationPage from "../components/pages/AuthorizationPage";
import React from "react";
import ChatsListPage from "../components/pages/ChatsListPage";
import SignUpPage from "../components/pages/SignUpPage";

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

export const SignUpScreen = ({navigator}) => {
    return (
        <DefaultPage
            pageTitle="Sign up"
            isFooter={false}
            contentPage={<SignUpPage />}
            isContentHasNav={true}
            navigator={navigator}
        />
    );
}