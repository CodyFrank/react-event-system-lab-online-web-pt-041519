// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{

    handlePasswordInput = ()=>{
        console.log('Entering password...')
    }
    render (){
        return (
            <input onKeyUp={this.handlePasswordInput} type="password"></input>
        )
    }
}