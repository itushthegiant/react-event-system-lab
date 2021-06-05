// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    onFocusFunction = () => {
        console.log('Good!')
    }

    onBlurFunction = () => {
        console.log('Hey! Eyes on me!')
    }


    render() {
        return (
            <div>
                <button
                onFocus={this.onFocusFunction}
                onBlur={this.onBlurFunction}
                >
                </button>
            </div>
        )
    }
}
