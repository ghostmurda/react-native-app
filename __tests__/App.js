import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Application} from "../index";

it('renders correctly', () => {
  renderer.create(<Application />);
});
