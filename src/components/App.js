import React, { Component } from 'react';
import Filter from './Filter'
import CardList from './CardList'

export default class App extends Component {

    state = {
        cards: [],
        filter: '',
        filterCard: [],
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=1')

            .then(data => data.json())
            .then(({ data }) => {
                this.setState(() => {
                    return {
                        cards: data
                    }
                })
            })
    }

    onTypeHandler = ({ target }) => {
        const cardFiltered = this.state.cards.filter((card) => {
            return card.first_name.toLowerCase().includes(target.value)
        })

        console.log(cardFiltered);
        console.log(this.state.cards.length);
        this.setState(() => {
            return {
                filterCard: cardFiltered,
            }
        })
    }

    render() {
        return (
            <div id='app'>
                <h1>My friends</h1>
                <div>{this.state.filter}</div>
                <Filter onTypeHandler={this.onTypeHandler} value={this.state.filter} />
                <CardList cards={this.state.cards.length > this.state.filterCard
                    ? this.state.cards
                    : this.state.filterCard} />
            </div>
        );
    }
}


