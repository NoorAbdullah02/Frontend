import React from 'react'

const RightCardContent = (props) => {
    return (

        <div className=' 
            absolute top-0 left-0 h-full w-full p-8
            flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full
                h-14 w-14 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, suscipit!</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className='text-white
                        font-bold px-3 py-2 text-lg rounded-full'> {props.tag}</button>
                    <button className=' text-white
                        font-bold px-3 py-2 text-lg rounded-full'><i class="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent