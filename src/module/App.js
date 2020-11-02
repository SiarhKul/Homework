import React, { useState } from 'react'
import ButtonOK from '../components/ButtonOK'
import ButtonRandom from '../components/ButtonRandom'
import InputLists from '../components/InputLists'
import ListItems from '../components/ListItems'

export default function App() {
   const [inputValue, setInputValue] = useState('')
   const [lists, setLists] = useState([])

   const changeHandler = ({ target: { value } }) => {
      setInputValue(value)
   }

   const clickHandler = () => {
      setLists([...lists, inputValue])
      setInputValue('')
   }

   console.log(lists);

   return (
      <>
         <InputLists value={inputValue} change={changeHandler}></InputLists>
         <ButtonOK click={clickHandler}></ButtonOK>
         <ButtonRandom></ButtonRandom>
         <ul>
            {lists.map((list, index) => { return <ListItems key={index} text={list} /> })}
         </ul>
      </>
   )

}
