import React, { Component } from 'react'
import Card from '../Card/Card'

export default class CardList extends Component {
   render() {
      return (

         <div className='card-list'>
            {this.props.cards.map((carObj) => {
               return (
                  <Card
                     key={carObj.id}
                     imgSrc={carObj.avatar}
                     email={carObj.email}
                     userName={carObj.first_name}
                     userLastName={carObj.last_name}
                  />
               )
            }
            )
            }
         </div>

      )
   }
}
