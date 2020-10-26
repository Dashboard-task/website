import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TaskComponent } from '../task/task';
import { TopicComponent } from '../topic/topic';

/**
 * Page d'accueil.
 */
export const HomePage: React.FC = () => {
    return (
        <div>
            <Container style={{ marginTop: '1%' }}>
                <Row>
                    <Col md={3}>
                        <div className='topic-component'>
                            <TopicComponent />
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
