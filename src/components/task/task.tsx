import { Table } from 'react-bootstrap';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import TopicContext from '../../contexts/topic-contexts';
import { Config } from '../../util/config';
import { TaskData } from '../../util/types/data-types';

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
      axios.get(`${Config.API_URL}/topics/${topicContexte.topic.id}`)
        .then((res) => setTasks(res.data.topic.tasks))
        .catch(console.log);
    }
  }, [topicContexte.topic]); // Si un topic arrive, ça reset (normalement)

  return (
    <Table variant="white" size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Etat</th>
          <th>Priorité</th>
          <th>Date de début</th>
          <th>Date d'expiration</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.state}</td>
            <td>{task.priority}</td>
            <td>{task.createdAt}</td>
            <td>{new Intl.DateTimeFormat("fr-Fr", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(task.deadline)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
