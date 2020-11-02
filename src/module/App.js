import React, { Component } from 'react'
import ButtonOK from '../components/ButtonOK'
import ButtonRandom from '../components/ButtonRandom'
import InputLists from '../components/InputLists'


export default class App extends Component {
   render() {
      return (
         <div>
            <InputLists></InputLists>
            <ButtonOK></ButtonOK>
            <ButtonRandom></ButtonRandom>
         </div>
      )
   }
}
