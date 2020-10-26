import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const ModalTask: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ajouter une tâche
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une tâche</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="title" />
                        </Form.Group>
                        <Form.Group controlId="ControlContent">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="description" as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Etat</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label>Date de fin</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant="primary">Ajouter</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
