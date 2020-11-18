import DefaultPage from "../components/DefaultPage";
import AuthorizationPage from "../pages/AuthorizationPage";
import React from "react";
import ChatsListPage from "../pages/ChatsListPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";

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

export const HomeScreen = ({navigator}) => {
    return (
        <DefaultPage
            pageTitle="Home"
            isFooter={true}
            contentPage={<HomePage />}
            isContentHasNav={false}
            navigator={navigator}
        />
    );
}