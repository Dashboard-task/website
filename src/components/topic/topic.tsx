import { List } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Config } from '../../util/config';
import TopicContext from '../../contexts/topic-contexts';
import { TopicData } from '../../util/types/data-types';

/**
 * Composant topic's 
 * CRUD topic.
 */
export const TopicComponent: React.FC = () => {
  const topicContext = useContext(TopicContext);
  const [topics, setTopics] = useState<TopicData[]>([]);
  const [idTopic, setIdTopic] = useState<string>('');
  const [postTopic, setPostTopic] = useState<string>(''); // TODO hook pour post un thème

  /**
   * Method : GET all topics
   */
  useEffect(() => {
    axios.get(Config.API_URL + `/topics`).then((res) => setTopics(res.data.topics)).catch(console.log);
  }, [topics]); // Si un topic arrive, ça reset (normalement)

  /**
   * Update context topic's.
   */
  useEffect(() => {
    topicContext.setTopic(idTopic);
  }, [idTopic]);

  /**
   * Method : POST topic.
   */
  const handleCreateTopic = () => {

  }

  return (
    <>
      <List
        header={<div>Liste des thèmes</div>}
        dataSource={topics}
        renderItem={(topic: TopicData) => (
          <List.Item
            onClick={(e) => setIdTopic(topic.id)} >
            { topic.name}
          </List.Item>
        )}
        size="small"
      />
    </>
  )
}
