import React from 'react'
import { useState } from 'react'



// Two Way Binding


const App = () => {


  const [title, SetTitle] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    // alert("Form Submitted")
    SetTitle('')
  }



  return (
    <div className='h-screen flex justify-center items-center bg-gray-500'>
      <div >
        <form onSubmit={(e) => {
          // e.preventDefault()
          submitHandler(e)
        }}>
          <input className='mb-4 px-5 text-black py-5 border placeholder: font-black' type="text"
            placeholder='Enter YOur Name'
            value={title}
            onChange={(e) => {
              SetTitle(e.target.value)
            }}
          />
          <button className='p-10 m-10 text-2xl text-white bg-black py-2 px-5'>Submit</button>
        </form>
      </div>
    </div >
  )
}

export default App