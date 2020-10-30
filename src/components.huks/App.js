import React, { useState, useEffect } from 'react'
import Loader from './loader/Loader.js'
import Button from './Button/Button.js'

export default function App() {
   // const [header, setheader] = useState({
   //    name: ''
   // })

   const [isLoaded, setIsLoaded] = useState({
      show: false
   });

   // useEffect(() => {
   //    setTimeout(() => {
   //       setIsLoaded(true)
   //    })

   // }, [])

   // const changeHeader = () => {
   //    setTimeout(() => {
   //       setheader({
   //          name: 'hi Angular'
   //       })
   //    }, 3000);

   // }

   const pushButton = () => {
      setIsLoaded({
         show: true
      })
      console.log(isLoaded);
   }

   return (
      <>
         {/* <h1>{header.name}</h1> */}
         <Loader />
         <Button click={pushButton}></Button>
      </>
   )
}

