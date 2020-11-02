import React from "react"
import { Container } from "react-bootstrap"

export const FooterComponent: React.FC = () => {
    return (
        <div className='margin-bottom-low'>
            <Container>
                <hr className="solid" />
                <div className='footer'>
                    Copyright @ Dashboard-tasks 2020
                    <br />
                    Made by Théo Schmidt
                </div>
            </Container>
        </div>
    )
}
