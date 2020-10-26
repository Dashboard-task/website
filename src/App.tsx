import { MainRouter } from './navigation/route';
import React from 'react';
import TopicContextProvider from './components/context-providers/topic-context-provider';

export const App: React.FC = () => (
  <TopicContextProvider>
    <MainRouter />
  </TopicContextProvider>
)
