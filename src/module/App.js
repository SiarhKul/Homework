import React, { Component } from 'react'
import Button from './button/Button.js'

export default class App extends Component {
    state = {
        btnName: null,
        btnNameText: "Button"
    }

    btnClickHandler = (btnN) => {
        this.setState({ btnName: btnN })
    }
    inputChangeHandler = ({ target }) => {
        this.setState({ btnNameText: target.value })
    }

    render() {
        return (
            <div>
                <h1>{this.state.btnName}</h1>
                <span>Fill field</span>
                <input onChange={this.inputChangeHandler} type="text" />
                <Button onClick={this.btnClickHandler} btnName={this.state.btnNameText} />
            </div>
        )
    }
}

// 1. Создать инпут (текст)
// 2. Создать кнопку (отдельный компонент (отдельный джс файл))
// 3. Когда пишем текст в инпуте, этот текст появляется на названии кнопки
// 4. При нажатии на кнопку в главном компоненте должен появится <h1></h1> с текстом взятым из кнопки