import React from 'react'
import NavBar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const section1 = (props) => {
    console.log(props.users);
    return (
        <div>
            <NavBar />
            <Page1Content users={props.users}/>

        </div>
    )
}

export default section1