import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import { NavBar } from '../shared/components/navbar';

const { Header, Footer, Sider, Content } = Layout;
/*
* Routing page:
TODO Faire la distribution des routes
*/
export const MainRouter: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                <Route path='/'>
                    <NavBar />
                </Route>

                <Row justify="center">
                    <Layout>
                        <Col span={3} style={{ backgroundColor: 'red' }}>
                            <Sider>
                                <Route path="/">

                                </Route>
                            </Sider>
                        </Col>
                        <Col span={18} style={{ backgroundColor: 'blue' }}>
                            <Content>
                                <Route path="/">

                                </Route>
                            </Content>
                        </Col>
                        <Col span={3} style={{ backgroundColor: 'green' }}>
                            <Sider>
                                <Route path="/">

                                </Route>
                            </Sider>
                        </Col>
                    </Layout>
                </Row>

                <Route path='/'>
                    <Footer>
                        {/* <FooterPage /> */}
                    </Footer>
                </Route>
            </Layout>
        </Switch>
    </BrowserRouter>
)
