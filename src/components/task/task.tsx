import { Table } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import TopicContext from '../../contexts/topic-contexts';
import { Config } from '../../util/config';
import { TaskData } from '../../util/types/data-types';

const columns = [
  {
    title: 'Titre',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Etat',
    dataIndex: 'state',
    key: 'state'
  },
  {
    title: 'Priorité',
    dataIndex: 'priority',
    key: 'priority'
  },
  {
    title: 'Date limite',
    dataIndex: 'deadline',
    key: 'deadline'
  },
  {
    title: 'Date de début',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }
]

/**
 * Composant des tâches. 
 * Toutes les tâches d'un thèmes y seront stoquées.
 */
export const TaskComponent: React.FC = () => {
  const topicContexte = useContext(TopicContext);
  const [tasks, setTasks] = useState<TaskData[]>([]);

  // Récupère la liste des thèmes.
  useEffect(() => {
    if (topicContexte.topic != null) {
      axios.get(Config.API_URL + `/topics/` + topicContexte.topic).then((res) => setTasks(res.data.topic.tasks)).catch(console.log);
      console.log(tasks);
    }
  }, [topicContexte.topic]); // Si un topic arrive, ça reset (normalement)

  return (
     <Table columns={columns} dataSource={tasks} pagination={false} />
     
    // <></>
  )
}
