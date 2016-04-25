/* @flow */
'use strict';

import React from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Checkbox from 'react-native-checkbox';

export default class CheckBox extends NativeBaseComponent {

    getInitialStyle() {
        return {
            checkboxLabel: {
              color: 'teal'
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            labelStyle: this.getInitialStyle().checkboxLabel
        };

        console.log(computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }
    
    render() { 
        return(
          <Checkbox {...this.prepareRootProps()}/>
        );
    }

}