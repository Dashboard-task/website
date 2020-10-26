import React, { useContext } from "react"
import TopicContext from '../../contexts/topic-contexts';
import { ListGroup } from "react-bootstrap"
import { Trash } from "react-bootstrap-icons"
import { TopicData } from "../../util/types/data-types"

export interface ListTopicProps {
    topics: TopicData[];
    deleteTopic: (topic: TopicData) => void;
}

/**
 * Composant liste des thèmes.
 */
export const ListTopicComponent: React.FC<ListTopicProps> = ({ topics, deleteTopic }) => {
    const topicContext = useContext(TopicContext);

    return (
        <div className='margin-bottom-high'>
            <ListGroup>
                {topics.map((topic, index) => (
                    <div key={index} className='list-group-perso'>
                        <ListGroup.Item onClick={() => topicContext.setTopic(topic)} className='list-group-item'>
                            {topic.name}
                        </ListGroup.Item>
                        {/* style={{ display: 'block', textAlign: 'center' }} */}
                        <div className='list-group-icon'>
                            <Trash color='white' onClick={() => deleteTopic(topic)} />
                        </div>
                    </div>
                ))
                }
            </ListGroup >
        </div>
    )
}
