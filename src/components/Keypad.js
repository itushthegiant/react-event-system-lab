// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    handleKeyPress = () => {
            console.log('Entering password...')
    }



    render() {
        return (
            <div>
                 <input
                  onKeyUp={this.handleKeyPress}
                  type="password"
                  />
            </div>
        )
    }
}
