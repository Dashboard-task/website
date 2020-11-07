import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ThemeData } from "../../util/types/data-types";

interface ThemeDeleteModalProps {
    show: boolean;
    theme: ThemeData;
    onHide: () => void;
    onDelete: (theme: ThemeData) => void;
}

export const ThemeDeleteModal: React.FC<ThemeDeleteModalProps> = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Supprimer une tâche</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Voulez-vous réellement supprimer le thème ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => props.onDelete(props.theme)}>Supprimer</Button>
            </Modal.Footer>
        </Modal>
    )
}
