import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Same text</h1>
                <span>Fill field</span>
                <input type="text" />
            </div>
        )
    }
}

// 1. Создать инпут (текст)
// 2. Создать кнопку (отдельный компонент (отдельный джс файл))
// 3. Когда пишем текст в инпуте, этот текст появляется на названии кнопки
// 4. При нажатии на кнопку в главном компоненте должен появится <h1></h1> с текстом взятым из кнопки