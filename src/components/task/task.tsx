import { Table } from 'react-bootstrap';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../contexts/theme-contexts';
import { Config } from '../../util/config';
import { TaskData } from '../../util/types/data-types';

/**
 * Composant des tâches. 
 * Toutes les tâches d'un thèmes y seront stoquées.
 */
export const TaskComponent: React.FC = () => {
  const themeContexte = useContext(ThemeContext);
  const [tasks, setTasks] = useState<TaskData[]>([]);

  // Récupère la liste des thèmes.
  useEffect(() => {
    if (themeContexte.theme != null) {
      axios.get(`${Config.API_URL}/topics/${themeContexte.theme.id}`)
        .then((res) => setTasks(res.data.topic.tasks))
        .catch(console.log);
    }
  }, [themeContexte.theme]); // Si un topic arrive, ça reset (normalement)

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
            <td>{new Date(task.createdAt).toLocaleString()}</td>
            <td>{new Date(task.deadline).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
