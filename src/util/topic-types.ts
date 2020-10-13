/**
 * Paramètre utilisées dans tous les modèles.
 */
interface TimeStamps {
    createdAt: string;
    updatedAt: string;
}

/**
 * Modèle des données d'un thème.
 */
export interface TopicData extends TimeStamps {
    name: string,
    task: TaskData[]
}

/**
 * Modèle des données d'une tâche.
 */
export interface TaskData extends TimeStamps {
    title: string,
    content: string,
    priority: string,
    deadline: Date
}