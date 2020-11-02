import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Config } from '../../util/config';
import { AddThemeFormValues, ThemeData } from '../../util/types/data-types';
import { TaskComponent } from '../task/task';
import { ThemeComponent } from '../theme/theme';

/**
 * Page d'accueil.
 */
export const HomePage: React.FC = () => {
    const [themes, setThemes] = useState<ThemeData[]>([]); // Hook méthode GET list themes. 
    const [selectedTheme, setSelectedTheme] = useState<ThemeData>(null);

    /**
      * Method : GET all topics
      */
    useEffect(() => {
        axios.get(`${Config.API_URL}/topics`).then((res) => setThemes(res.data.topics)).catch(console.log);
    }, []);


    const handleCreateTheme = async (theme: AddThemeFormValues) => {
        try {
            await axios.post(`${Config.API_URL}/topics`, { name: theme.name });
            const resp = await axios.get(`${Config.API_URL}/topics`);
            setThemes(resp.data.topics);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeleteTheme = async (topic: ThemeData) => {
        try {
            await axios.delete(`${Config.API_URL}/topics/${topic.id}`);
            const resp = await axios.get(`${Config.API_URL}/topics`);
            setThemes(resp.data.topics);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSelectedTheme = (theme: ThemeData) => {
        setSelectedTheme(theme);
    }

    return (
        <div>
            <Container style={{ marginTop: '1%' }}>
                <Row>
                    <Col md={3}>
                        <div className='theme-component'>
                            <ThemeComponent themes={themes} addTopic={handleCreateTheme} onDeleteTheme={handleDeleteTheme} onSelectTheme={handleSelectedTheme} />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className='task-component'>
                            <TaskComponent theme={selectedTheme} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
