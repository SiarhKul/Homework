import React, { useState, useEffect } from 'react'
import Loader from './loader/Loader.js'
import Button from './Button/Button.js'

export default function App() {
   const [header, setheader] = useState({
      name: ''
   })

   const [isLoaded, setIsLoaded] = useState({
      show: false
   });

   const pushButton = () => {
      setIsLoaded({
         show: true
      })

      setTimeout(() => {
         setIsLoaded({
            show: false
         })

         setheader({
            name: 'hi Angular'
         })
      }, 3000);
      console.log(isLoaded);
   }

   return (
      <>
         <h1>{header.name}</h1>
         {isLoaded.show ? <Loader /> : null}
         <Button click={pushButton}></Button>
      </>
   )
}

