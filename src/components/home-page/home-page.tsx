import { Row, Layout, Col } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';
import { TaskComponent } from '../task/tast';
import { TopicComponent } from '../topic/topic';

const { Content, Sider } = Layout;

/**
 * Page d'accueil.
 */
export const HomePage: React.FC = () => {
    return (<Row justify="center">
        <Layout>
            <Col span={3} style={{ backgroundColor: '#fadb14' }}>
                <Sider theme='light'>
                    <Route path="/">
                        <TopicComponent />
                    </Route>
                </Sider>
            </Col>
            <Col span={18} style={{ backgroundColor: 'blue' }}>
                <Content>
                    <Route path="/">
                        <TaskComponent />
                    </Route>
                </Content>
            </Col>
            <Col span={3} style={{ backgroundColor: 'green' }}>
                <Sider>
                    <Route path="/">
                        Du texte.
                    </Route>
                </Sider>
            </Col>
        </Layout>
    </Row>)
}
