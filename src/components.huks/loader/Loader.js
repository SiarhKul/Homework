import React from 'react'

export default function Loader() {
  return (
    <div >
      <img src="./Rolling.gif" alt="rolling" />
    </div>
  )
}


// const { useState, useEffect } = React;

// const Counter = () => {
//   const [count, setCount] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 3000);
//   }, []); // here

//   return (
//     <div>
//       {
//         isLoaded &&
//         <div>
//           <p>You clicked {count} times</p>
//           <button onClick={() => setCount(count + 1)}>
//             Click me
//           </button>
//         </div>
//       }
//     </div>
//   )
// }

// ReactDOM.render(<Counter />, document.getElementById('app'))