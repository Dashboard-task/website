import React from "react";
import * as yup from 'yup';
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { Priority, TaskData, UpdateTaskFormData } from "../../util/types/data-types";

interface TaskUpdateModalProps {
    show: boolean;
    task: TaskData;
    onHide: () => void;
    onUpdateTask: (task: UpdateTaskFormData) => void;
}
export const TaskUpdateModal: React.FC<TaskUpdateModalProps> = (props) => {

    const UpdateTaskValidationSchema = yup.object<UpdateTaskFormData>({
        title: yup.string().required('Tu dois donner un titre à ta tâche.').typeError('Title invalide'),
        description: yup.string().required('Tu dois donner une description à ta tâche.').typeError('Description invalide'),
        state: yup.string(),
        priority: yup.string(),
        deadline: yup.date()
    });

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier une tâche</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            title: props.task?.title,
                            description: props.task?.description,
                            state: props.task?.state,
                            priority: props.task?.priority,
                            deadline: props.task?.deadline
                        }}
                        validationSchema={UpdateTaskValidationSchema}
                        onSubmit={(values: UpdateTaskFormData) => props.onUpdateTask(values)}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        value={values.title}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        value={values.description}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Etat</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="state"
                                        onChange={handleChange}
                                        value={values.state}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Priority</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="priority"
                                        onChange={handleChange}
                                        value={values.priority}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Date de fin</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="deadline"
                                        onChange={handleChange}
                                        value={values.deadline.toLocaleString()}
                                    />
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Modifier</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
