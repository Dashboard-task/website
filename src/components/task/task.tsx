import { Table } from 'react-bootstrap';
import React from 'react';
import { TaskData } from '../../util/types/data-types';

interface ListTaskProps {
  tasks: TaskData[];
  onAddTask: (task: TaskData) => void;
  onDeleteTask: (task: TaskData) => void;
  onSelectTask: (task: TaskData) => void;
}

/**
 * Composant des tâches. 
 * Toutes les tâches d'un thèmes y seront stoquées.
 */
export const TaskComponent: React.FC<ListTaskProps> = (props) => {

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
        {props.tasks.map((task, index) => (
          <tr key={index} onClick={() => props.onSelectTask(task)}>
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
