
interface TimeStamps {
    createdAt: Date;
    updatedAt: Date;
}

// Values used for post an theme
export interface AddThemeFormValues {
    name: string;
}

export interface PostTaskFormData {
    title: string,
    description: string;
    state: State;
    priority: Priority;
    deadline: Date;
}

export interface UpdateTaskFormData {
    title: string,
    description: string;
    state: State;
    priority: Priority;
    deadline: Date;
}

// Theme data interface.
export interface ThemeData extends TimeStamps {
    id: string;
    name: string;
    tasks: TaskData[];
}

// Topic data interface.
export interface TaskData extends TimeStamps {
    id: string;
    title: string;
    description: string;
    state: State;
    priority: Priority;
    deadline: Date;
}

export interface ErrorData {
    header: string;
    body: string;
}

// Priority enumeration.
export enum Priority {
    LOW = 'Faible', MEDIUM = 'Moyen', HIGH = 'Haute',
}

// State enumeration.
export enum State {
    WAITING = 'En attente', IN_PROGRESS = 'En cours', FINISHED = 'Terminée'
}
