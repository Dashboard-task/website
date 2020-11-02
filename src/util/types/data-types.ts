
interface TimeStamps {
    createdAt: Date;
    updatedAt: Date;
}

// Values used for post an theme
export interface AddThemeFormValues {
    name: string;
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

/**
 * Priority enumeration.
 */
export enum Priority {
    LOW = 0, MEDIUM = 1, HIGH = 2,
}

/**
 * State enumeration.
 */
export enum State {
    WAITING = 0, IN_PROGRESS = 1, FINISHED = 2
}
