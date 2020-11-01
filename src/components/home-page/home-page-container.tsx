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

    /**
      * Method : GET all topics
      */
    useEffect(() => {
        axios.get(`${Config.API_URL}/topics`).then((res) => setThemes(res.data.topics)).catch(console.log);
    }, []);


    const handleCreateTheme = async (theme: AddThemeFormValues) => {
        console.log(theme);
        // TODO Check si le thème est pas déjà dans la liste.
        try {
            await axios.post(`${Config.API_URL}/topics`, { name: theme.name });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Container style={{ marginTop: '1%' }}>
                <Row>
                    <Col md={3}>
                        <div className='theme-component'>
                            <ThemeComponent themes={themes} addTopic={handleCreateTheme}/>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className='task-component'>
                            <TaskComponent />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
