import React from 'react'
import RightCar from './RightCard.jsx'

const RightText = (props) => {
    return (
        <div id='right' className='h-full flex rounded-4xl gap-5 overflow-x-auto p-6 w-2/3 '>


            {props.users.map(function (element, idx) {
                return < RightCar key={idx} id={idx} img={element.img}
                    tag={element.tag} color={element.color}
                />
            })}


        </div>
    )
}

export default RightText