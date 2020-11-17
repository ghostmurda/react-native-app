import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Thumbnail} from "native-base";
import {Image} from 'react-native'

export default function OnBoardingPage() {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-screen-1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }
            ]}
        />
    );
}