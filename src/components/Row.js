import React, { Component } from 'react';
import MobApp from './MobApp';

export default class Row extends Component {

    style = {
        width: 100,
        height: 130,
    };

    render() {

        return <div>
            <MobApp name='خروس جنگی' author='نوید سافت' >App1</MobApp>
            <MobApp name='آی قصه' author='محمد رازی' ></MobApp>
        </div>
            ;
    }
}