import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ErrorData } from "../../util/types/data-types";

interface ErrorProps {    
    message: ErrorData;
    show: boolean;
    onHide: () => void;
}

export const ErrorModal: React.FC<ErrorProps> = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.message?.header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.message?.body}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    )
}