import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AddThemeFormValues, TaskData, ThemeData, UpdateTaskFormData } from '../../util/types/data-types';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Config } from '../../util/config';
import { TaskComponent } from '../task/task';
import { TaskPostModal } from '../task/modal-post-task';
import { TaskUpdateModal } from '../task/modal-update-task';
import { ThemeComponent } from '../theme/theme';
import { ThemeDeleteModal } from '../theme/modal-delete-theme';

/**
 * Page d'accueil.
 */
export const HomePage: React.FC = () => {
    // const [messageError, setMessageError] = useState<ErrorData>(null); // Message qui sera affiché dans un modal lorsqu'il y a une erreur.
    const [filter, setFilter] = useState<string>('');
    const [selectedTheme, setSelectedTheme] = useState<ThemeData>(null); // Thème actif.
    // const [showErrorModal, setShowErrorModal] = useState<boolean>(false); // Affiche le modal d'erreur.
    const [showDeleteThemeModal, setShowDeleteThemeModal] = useState<boolean>(false); // Affiche le modal de suppréssion d'un thème.
    const [showPostTaskModal, setShowPostTaskModal] = useState<boolean>(false); // Affiche le modal de la création d'une tâche.
    const [showUpdateTaskModal, setShowUpdateTaskModal] = useState<boolean>(false); // Affiche le modal de modification d'une tâche.
    const [tasks, setTasks] = useState<TaskData[]>([]); // Liste des tâches actives.
    const [taskForUpdate, setTaskForUpdate] = useState<TaskData>(null); // Hook pour une modification de tâche. 
    const [themes, setThemes] = useState<ThemeData[]>([]); // Liste des thèmes.
    const [themeForDelete, setThemeForDelete] = useState<ThemeData>(null);  // Hook pour une suppréssion d'un thème.

    useEffect(() => {
        axios.get(`${Config.API_URL}/topics`).then((res) => setThemes(res.data.topics)).catch(console.log);
    }, []);

    /************************************
     *************** TASK ***************
     ************************************/

    /**
    * Méthode GET a tasks.
    * Récupère une tâche afin de la modifier dans un modal.
    * @param task 
    */
    const handleGetTask = async (task: TaskData) => {
        setShowUpdateTaskModal(true);
        setTaskForUpdate(task);
    }

    /**
     * Méthode GET all tasks.
     * Mets à jour le hook des tâches.
     * @param theme 
     */
    const handleGetTasks = async (theme: ThemeData) => {
        setSelectedTheme(theme);
        if (theme != null) {
            axios.get(`${Config.API_URL}/topics/${theme.id}`)
                .then((res) => setTasks(res.data.topic.tasks))
                .catch(console.log);
        }
    }

    /**
     * Méthode POST a task.
     * Créée une tâche.
     * @param task 
     */
    const handlePostTask = async (theme: ThemeData, values: TaskData) => {
        const body = {
            title: values.title,
            description: values.description,
            state: values.state,
            priority: values.priority,
            deadline: values.deadline
        }
        try {
            await axios.post(`${Config.API_URL}/topics/${theme.id}/tasks`, body);
            const resp = await axios.get(`${Config.API_URL}/topics`);
            setThemes(resp.data.topics);
            setShowPostTaskModal(false);
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Méthode DELETE a task.
     * Supprime une tâche.
     * @param task 
     */
    const handleDeleteTask = async (task: TaskData) => {
        try {
            await axios.delete(`${Config.API_URL}/topics/${selectedTheme.id}/tasks/${task.id}`);
            const resp = await axios.get(`${Config.API_URL}/topics/${selectedTheme.id}`);
            setTasks(resp.data.topics.tasks);
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Méthode PATCH a task.
     * Modifie une tâche.
     * @param theme  
     */
    const handleUpdateTask = async (task: TaskData, values: UpdateTaskFormData) => {
        try {
            const body = {
                title: values.title,
                description: values.description,
                state: values.state,
                priority: values.priority,
                deadline: values.deadline
            }
            await axios.patch(`${Config.API_URL}/topics/${selectedTheme.id}/tasks/${task.id}`, body);
            const resp = await axios.get(`${Config.API_URL}/topics/${selectedTheme.id}`);
            setTasks(resp.data.topic.tasks);
            setShowUpdateTaskModal(false);
        } catch (err) {
            console.log(err);
        }
    }

    /************************************
     ************** THEME ***************
     ************************************/
    const handleSetThemeForDelete = (theme: ThemeData) => {
        setShowDeleteThemeModal(true);
        setThemeForDelete(theme);
    }

    /**
    * Méthode POST a Theme.
    * Créée un thème.
    * @param theme 
    */
    const handleCreateTheme = async (theme: AddThemeFormValues) => {
        try {
            await axios.post(`${Config.API_URL}/topics`, { name: theme.name });
            const resp = await axios.get(`${Config.API_URL}/topics`);
            setThemes(resp.data.topics);
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Méthode DELETE a Theme.
     * Supprime un thème.
     * @param theme 
     */
    const handleDeleteTheme = async (theme: ThemeData) => {
        try {
            await axios.delete(`${Config.API_URL}/topics/${theme.id}`);
            const resp = await axios.get(`${Config.API_URL}/topics`);
            setThemes(resp.data.topics);
        } catch (err) {
            console.log(err);
        }        
        setShowDeleteThemeModal(false);
    }

    /************************************
     ************** MODAL ***************
     ************************************/

    // Modal pour supprimer un thème.
    const handleToggleDeleteThemeModal = () => {
        setShowDeleteThemeModal(!showDeleteThemeModal);
        if (!showDeleteThemeModal) {
            setSelectedTheme(null);
        }
    }

    // Modal qui enlève le modal après un post de tâche.
    const handleToggleAfterPostTaskModal = () => {
        setShowPostTaskModal(!showPostTaskModal);
        if (!showPostTaskModal) {
            setSelectedTheme(null);
        }
    }

    // Modal qui affiche le modal avant un post de tâche. 
    const handleToggleBeforePostTaskModal = () => {
        // if (!selectedTheme) {
        //     setMessageError({
        //         header: 'Pas de thème sélectionné !',
        //         body: 'Vous devez sélectionner un thème avant d\'ajouter une tâche.'
        //     });
        //     setShowErrorModal(true);
        // } 
        setShowPostTaskModal(true);
    }

    // Modal qui enlève le modal après un update de tâche. /
    const handleToggleUpdateTaskModal = () => {
        setShowDeleteThemeModal(!showUpdateTaskModal);
    }

    // // Modal d'erreur. /
    // const handleToggleErrorModal = () => {
    //     setShowErrorModal(false);
    // }

    const handleFilter = (filter: string) => {
        setFilter(filter);
    }

    return (
        <div>
            <Container style={{ marginTop: '1%' }}>
                <Row>
                    <Col md={3}>
                        <div className='theme-component'>
                            <ThemeComponent themes={themes} onAddTheme={handleCreateTheme} onDeleteTheme={handleSetThemeForDelete} onSelectTheme={handleGetTasks} />
                        </div>
                    </Col>
                    <Col md={9}>
                        {selectedTheme != null ? (<div className='task-component'>
                            <div className='task-header'>
                                <label>{selectedTheme?.name ? `Thème sélectionné : ${selectedTheme.name}.` : ''}</label>
                                <Button variant='light' onClick={handleToggleBeforePostTaskModal}>Ajouter une tâche</Button>
                            </div>
                            <div className='task-body'>
                                <Form.Control onChange={(e) => handleFilter(e.target.value)} type="text" placeholder="Rechercher..." />
                                <TaskComponent tasks={tasks.filter(task => task.title.includes(filter) || task.description.includes(filter))} onDeleteTask={handleDeleteTask} onSelectTask={handleGetTask} />
                            </div>
                        </div>) : <></>}
                    </Col>
                </Row>
            </Container>
            <ThemeDeleteModal
                show={showDeleteThemeModal}
                theme={themeForDelete}
                onHide={handleToggleDeleteThemeModal}
                onDelete={handleDeleteTheme}
            />
            <TaskPostModal
                show={showPostTaskModal}
                theme={selectedTheme}
                onHide={handleToggleAfterPostTaskModal}
                onPostTask={handlePostTask}
            />
            <TaskUpdateModal
                show={showUpdateTaskModal}
                task={taskForUpdate}
                onHide={handleToggleUpdateTaskModal}
                onUpdateTask={handleUpdateTask}
            />
            {/* <ErrorModal
                show={showErrorModal}
                message={messageError}
                onHide={handleToggleErrorModal}
            /> */}
        </div>
    )
}
