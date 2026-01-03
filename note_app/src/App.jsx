import React from 'react'
import { useState } from 'react';

const App = () => {


  const [title, SetTile] = useState('')
  const [detail, SetDetail] = useState('')

  const [task, SetTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const Copytask = [...task];
    Copytask.push({ title, detail })

    SetTask(Copytask);
    console.log(Copytask);


    SetTile('')
    SetDetail('')
  }

  const SubmitDelete = (idx) => {
    const copyTask = [...task];
    console.log(copyTask[idx])

    copyTask.splice(idx,1);
    SetTask(copyTask)



  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 items-start p-10  '>
        <div className='flex gap-4  w-1/2 flex-col outline-none items-start'>

          {/* Heading */}

          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) => {
              SetTile(e.target.value)
            }}
          />

          {/* NOte Details */}

          <textarea
            type="text"
            placeholder='Enter Details'
            className='px-5 w-full h-32 py-2 flex flex-row  border-2 rounded'
            value={detail}
            onChange={(e) => {
              SetDetail(e.target.value);
            }}
          />
          <button className='bg-white active:bg-gray-200 w-full outline-none text-black px-5 py-2 rounded'>Add Notes</button>
        </div>
        <img className='h-52' src="https://imgs.search.brave.com/-Nakbz6WCbZDvAYdOhGQz5dV0uWDpOlxTJ6cjcTQJjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/YjA2YzFhNWZhZDFj/YWUwNDUzOWFmZTEu/cG5n" alt="" />
      </form>

      <div className='lg:w-1/2 lg:border-l-2 flex-wrap p-10'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>

          {task.map(function (elem, idx) {
            return <div id={idx} className='h-52 w-40 text-black rounded-2xl bg-white'>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='leading-tight text-xl font-bold'>{elem.detail}</p>
              <button onClick={(e) => {
                SubmitDelete(idx);
              }} className='bg-red-500 mb-3 text-xl rounded '>Delete</button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App