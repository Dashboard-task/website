import React from "react"
import { Navbar } from 'react-bootstrap'

export const NavbarComponent: React.FC = () => {
    return (
        <Navbar variant='dark'>
            <Navbar.Brand href="#home">Dashboard-Tasks</Navbar.Brand>
        </Navbar>
    )
}
