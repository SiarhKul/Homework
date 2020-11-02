import React from 'react'

export default function InputLists({ change, value }) {
   return (
      <div>
         <input type="text" onChange={change} value={value} />
      </div>
   )
}
