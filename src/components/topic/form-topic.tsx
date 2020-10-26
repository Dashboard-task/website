import React, { useRef, useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { Check } from "react-bootstrap-icons"
import { TopicData } from "../../util/types/data-types";

export interface FormTopicProps {
    addTopic: (topic: TopicData) => void;
}

/**
 * Composant ajout d'un thème.
 */
export const FormTopicComponent: React.FC<FormTopicProps> = ({ addTopic }) => {
    const newTopic = useRef<HTMLInputElement>(null);
    const [t, setT] = useState<TopicData>(null);

    const handleNewTheme = () => {

    }
    
    return (
        <div className='margin-low'>
            <Form>
                <Form.Group controlId=''>
                    <div className='form'>
                        <Form.Control
                            placeholder="Nouveau thème"
                            type='text'
                            ref={newTopic}
                            required /> {/* TODO <-- Je veux récupéré ce text et le balancer dans ma méthode du props. */}
                        <Form.Control.Feedback type="invalid">
                            Le thème n'est pas valide.
                    </Form.Control.Feedback>
                        <Button onClick={handleNewTheme} className='button-primary'>
                            <Check />
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}
