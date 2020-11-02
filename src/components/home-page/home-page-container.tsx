import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Config } from '../../util/config';
import { AddThemeFormValues, TaskData, ThemeData } from '../../util/types/data-types';
import { TaskUpdateModal } from '../task/modal-task';
import { TaskComponent } from '../task/task';
import { ThemeDeleteModal } from '../theme/modal-delete-theme';
import { ThemeComponent } from '../theme/theme';

/**
 * Page d'accueil.
 */
export const HomePage: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = useState<ThemeData>(null); // Thème actif.
    const [showDeleteThemeModal, setShowDeleteThemeModal] = useState<boolean>(false); // Affiche le modal de suppréssion d'un thème.
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
    const handleCreateTask = async (task: TaskData) => {
        try {
            await axios.post(`${Config.API_URL}/topics/${selectedTheme.id}/tasks`, { task });
            const resp = await axios.get(`${Config.API_URL}/topics`);
            setThemes(resp.data.topics);
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
            const resp = await axios.get(`${Config.API_URL}/topics/${selectedTheme.id}/tasks`);
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
    const handleUpdateTask = async (task: TaskData) => {
        console.log('Update tâche: ' + task)
        try {
            await axios.patch(`${Config.API_URL}/topics/${selectedTheme.id}/tasks/${task.id}`, { task });
            const resp = await axios.get(`${Config.API_URL}/topics/${selectedTheme.id}/tasks`);
            setTasks(resp.data.topics.tasks);
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
        // try {
        //     await axios.delete(`${Config.API_URL}/topics/${theme.id}`);
        //     const resp = await axios.get(`${Config.API_URL}/topics`);
        //     setThemes(resp.data.topics);
        // } catch (err) {
        //     console.log(err);
        // }
        setShowDeleteThemeModal(false);
    }

    /************************************
     ************** MODAL ***************
     ************************************/

    /**
     * Modal pour supprimer un thème.
     */
    const handleToggleDeleteThemeModal = () => {
        setShowDeleteThemeModal(!showDeleteThemeModal);
        if (!showDeleteThemeModal) {
            setSelectedTheme(null);
        }
    }
    /**
         * Modal pour modifier une tâche.
         */
    const handleToggleUpdateTaskModal = () => {
        setShowDeleteThemeModal(!showUpdateTaskModal);
        // if (!showUpdateTaskModal) {
        //     setSelected(null);
        // }
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
                        <div className='task-component'>
                            <TaskComponent tasks={tasks} onAddTask={handleCreateTask} onDeleteTask={handleDeleteTask} onSelectTask={handleGetTask} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ThemeDeleteModal
                show={showDeleteThemeModal}
                theme={themeForDelete}
                onHide={handleToggleDeleteThemeModal}
                onDelete={handleDeleteTheme}
            />
            <TaskUpdateModal
                show={showUpdateTaskModal}
                task={taskForUpdate}
                onHide={handleToggleUpdateTaskModal}
                onUpdateTask={handleUpdateTask}
            />
        </div>
    )
}
