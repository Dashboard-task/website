import { Button, List } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TopicData } from '../../util/topic-types';

/**
 * Composant des thèmes. 
 * Créée une liste des thèmes.
 */
export const TopicComponent: React.FC = () => {
  const [topics, setTopics] = useState<TopicData[]>([]);

  // Récupère la liste des thèmes.
  useEffect(() => {
    axios.get('http://localhost/topics').then((res) => setTopics(res.data.topics)).catch(console.log);
  });

  return (
    <List
      header={<div>Liste des thèmes</div>}
      dataSource={topics}
      renderItem={(topic: TopicData) => (
        <List.Item>
          {topic.name}
        </List.Item>
      )}
      size="small"
    />
  )
}
