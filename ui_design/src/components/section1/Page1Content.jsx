import React from 'react'
import LeftCon from './LeftText.jsx'
import RightCon from './RightText.jsx'

const Page1Content = (props) => {
    console.log(props.users);
    return (
        <div className='py-15 px-20 h-[90vh]  flex gap-30'>

            <LeftCon />
            <RightCon users={props.users} />

        </div>
    )
}

export default Page1Content