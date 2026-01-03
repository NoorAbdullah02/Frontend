import React from 'react'
import { useState } from 'react'

const secondPage = () => {

    const [user, setUser] = useState({ name: "Noor", age: 10 })

    const [num, Setnum] = useState(10)



    //Batch Update

    const btnClicked = () => {
        Setnum(prev => (prev + 18))
    }


    function Change() {
        const newUser = { ...user };
        newUser.age = 50;
        console.log(newUser);
        setUser(newUser)
    }

    function nonChange() {
        console.log({ name: user.name, age: user.age });
    }





    return (
        <div className='w-full text-4xl font-bold px-6 py-10 h-screen h-[60vh] bg-amber-500'>


            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <button onClick={Change} className='text-blue-400 bg-black' >Change</button>

            <h1>{user.name}</h1>
            <h1>{user.age}</h1>

            <button onClick={nonChange} className='text-blue-400 bg-black' >Not Change</button>


        </div>
    )
}

export default secondPage