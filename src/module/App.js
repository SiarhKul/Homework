import React, { useState } from 'react'
import ButtonOK from '../components/ButtonOK'
import ButtonRandom from '../components/ButtonRandom'
import InputLists from '../components/InputLists'
import ListItems from '../components/ListItems'
import RandomResult from '../components/RandomResult'

export default function App() {
   const [inputValue, setInputValue] = useState('')
   const [lists, setLists] = useState([])
   const [randomElem, setRandomElem] = useState('')

   const changeHandler = ({ target: { value } }) => {
      setInputValue(value)
   }

   const clickHandler = (e) => {
      e.preventDefault()
      setLists([...lists, inputValue])
      setInputValue('')
   }

   const clickHandlerRandom = (e) => {
      e.preventDefault()
      setRandomElem(lists[Math.floor(Math.random() * lists.length)])
      // const randomElem = 
      // console.log(randomElem);
   }

   console.log(lists);

   return (
      <>
         <InputLists value={inputValue} change={changeHandler}></InputLists>
         <ButtonOK click={clickHandler}></ButtonOK>
         <ButtonRandom click={clickHandlerRandom}></ButtonRandom>
         <ul>
            {lists.map((list, index) => { return <ListItems key={index} text={list} /> })}
         </ul>
         <RandomResult randomElem={randomElem} />
      </>
   )

}
