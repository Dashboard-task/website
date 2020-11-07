import React from "react";
import * as yup from 'yup';
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { Priority, State, TaskData, UpdateTaskFormData } from "../../util/types/data-types";

interface TaskUpdateModalProps {
    show: boolean;
    task: TaskData;
    onHide: () => void;
    onUpdateTask: (task: TaskData, val: UpdateTaskFormData ) => void;
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
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
        >
            <Formik
                initialValues={{
                    title: props.task?.title,
                    description: props.task?.description,
                    state: props.task?.state,
                    priority: props.task?.priority,
                    deadline: props.task?.deadline
                }}
                validationSchema={UpdateTaskValidationSchema}
                onSubmit={(values: UpdateTaskFormData) => props.onUpdateTask( props.task, values)}
            >
                {({ handleSubmit, handleChange, errors, touched, values }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modifier une tâche</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Titre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    value={values.title}
                                    isInvalid={touched.title && errors.title != null} 
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
                                    isInvalid={touched.description && errors.description != null} 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Etat</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="state"
                                    onChange={handleChange}
                                    value={values.state}>
                                    <option>{State.WAITING}</option>
                                    <option>{State.IN_PROGRESS}</option>
                                    <option>{State.FINISHED}</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Priority</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="priority"
                                    onChange={handleChange}
                                    value={values.priority}>
                                    <option>{Priority.LOW}</option>
                                    <option>{Priority.MEDIUM}</option>
                                    <option>{Priority.HIGH}</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date de fin</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="deadline"
                                    onChange={handleChange}
                                    value={values.deadline.toLocaleString()}
                                    isInvalid={touched.deadline && errors.deadline != null} 
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">Modifier</Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}
