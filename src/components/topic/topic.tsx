import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Config } from '../../util/config';
import { TopicData } from '../../util/types/data-types';
import { FormTopicComponent } from './form-topic';
import { ListTopicComponent } from './list-topic';

/**
 * Composant topic's 
 * CRUD topic.
 */
export const TopicComponent: React.FC = () => {
  const [topics, setTopics] = useState<TopicData[]>([]);

  /**
   * Method : GET all topics
   */
  useEffect(() => {
    axios.get(`${Config.API_URL}/topics`).then((res) => setTopics(res.data.topics)).catch(console.log);
  }, []);

  /**
   * Method : POST topic.
   */
  const handleCreateTopic = async (topic: TopicData) => {
    console.log(topic);
    // TODO Check si le thème est pas déjà dans la liste.
    try {
      await axios.post(`${Config.API_URL}/topics`, { name: topic.name });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Method : POST topic.
   */
  const handleDeleteTopic = async (topic: TopicData) => {
    // TODO APPEL DE LA VERIFICATION AVANT DE KICK UN TRUC
    console.log(topic.id);
    try {
      await axios.delete(`${Config.API_URL}/topics/${topic.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ListTopicComponent topics={topics} deleteTopic={handleDeleteTopic} />
      <FormTopicComponent addTopic={handleCreateTopic} />
    </>
  )
}
