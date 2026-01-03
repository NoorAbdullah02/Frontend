import React from 'react'
import RightCardDes from './RightCardContent.jsx'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 w-80 relative overflow-auto bg-red-500 rounded-4xl'>

            <img className='h-full w-full object-cover' src={props.img} alt="" />

            <RightCardDes id={props.id} tag={props.tag} color={props.color} />

        </div>
    )
}

export default RightCard