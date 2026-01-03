// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, Setnum] = useState(10)

//   function Change() {

//     Setnum(20);
//   }

//   return (
//     <div>
//       the number is {num}
//       <button onClick={Change}>Change VAlue</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react'
import SecondPage from './secondPage.jsx'

const App = () => {
  const [set, SetValue] = useState(0);

  function incress() {
    SetValue(set + 1);
  }
  function decress() {
    if (set === 0) {
      return;
    }
    SetValue(set - 1);
  }
  function reset() {
    SetValue(0);
  }

  return (
    <div>
      <div className='py-15 px-20 h-[90vh] justify-center items-center flex gap-30 bg-gray-600'>

        <h1 className="text-3xl font-bold h-[4.5rem] w-54rem] text-white px-6 py-4 bg-red-600 rounded-lg shadow-lg">
          {set}
        </h1>

        <div>
          <button onClick={incress} className='bg-black text-3xl rounded-2xl h-[4rem] w-[8rem] text-white'>Incress</button>
        </div>
        <div>
          <button onClick={decress} className='bg-black text-3xl rounded-2xl h-[4rem] w-[8rem] text-white'>Decress</button>
        </div>
        <div>
          <button onClick={reset} className='bg-black text-3xl rounded-2xl h-[4rem] w-[8rem] text-white'>Reset</button>
        </div>

      </div>

      <SecondPage />
    </div>

  )
}

export default App