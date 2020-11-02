import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

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
                    {/* <Formik
                        initialValues={{ search: '', limit: 10 }}
                        onSubmit={handleFormSubmit}
                    >
                        {({ handleSubmit, handleChange, submitForm }) => (
                            <>
                                <Form noValidate onSubmit={handleSubmit}>

                                    <Form.Group controlId="">
                                        <Form.Label>Titre</Form.Label>
                                        <Form.Control type="title" onChange={e => { handleChange(e); submitForm() }}/>
                                    </Form.Group>
                                    <Form.Group controlId="ControlContent">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="description" as="textarea" rows={3} onChange={e => { handleChange(e); submitForm() }}/>
                                    </Form.Group>
                                    <Form.Group controlId="">
                                        <Form.Label>Etat</Form.Label>
                                        <Form.Control as="select" onChange={e => { handleChange(e); submitForm() }}>
                                            <option>1</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="">
                                        <Form.Label>Date de fin</Form.Label>
                                        <Form.Control type="date" onChange={e => { handleChange(e); submitForm() }}/>
                                    </Form.Group>
                                </Form></>
                        )}
                    </Formik> */}
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
