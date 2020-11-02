import { Table } from 'react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Config } from '../../util/config';
import { TaskData, ThemeData } from '../../util/types/data-types';

interface ListTaskProps {  
  theme: ThemeData;
}
/**
 * Composant des tâches. 
 * Toutes les tâches d'un thèmes y seront stoquées.
 */
export const TaskComponent: React.FC<ListTaskProps> = (props) => {
  // const themeContexte = useContext(ThemeContext);
  const [tasks, setTasks] = useState<TaskData[]>([]);

  // Récupère la liste des thèmes.
  useEffect(() => {
    if (props.theme != null) {
      console.log(`${Config.API_URL}/topics/${props.theme.id}`);
      axios.get(`${Config.API_URL}/topics/${props.theme.id}`)
        .then((res) => setTasks(res.data.topic.tasks))
        .catch(console.log);
    }
  }, [props.theme]); // Si un thème arrive, ça reset (normalement)

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
          <tr key={index}>
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
