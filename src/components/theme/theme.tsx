import axios from 'axios';
import React from 'react';
import * as yup from 'yup';
import { Config } from '../../util/config';
import { Formik } from 'formik';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { Check, Trash } from 'react-bootstrap-icons';
import { AddThemeFormValues, ThemeData } from '../../util/types/data-types';

export interface ListThemeProps {
  themes: ThemeData[];
  addTopic: (theme: AddThemeFormValues) => void;
}

/**
 * Composant themes's 
 */
export const ThemeComponent: React.FC<ListThemeProps> = (props) => {

  const AddThemeValidationSchema = yup.object<AddThemeFormValues>({
    name: yup.string().required('Tu dois donner un nom à ton thème.').typeError('Nom invalide')
  });

  const handleDeleteTheme = async (topic: ThemeData) => {
    // TODO APPEL DE LA VERIFICATION AVANT DE KICK UN TRUC
    console.log(topic.id);

    try {
      await axios.delete(`${Config.API_URL}/topics/${topic.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='margin-bottom-high'>
        <ListGroup>
          {props.themes.map((theme, index) => (
            <div key={index} className='list-group-perso'>
              <ListGroup.Item className='list-group-item'>
                {theme.name}
              </ListGroup.Item>
              {/* style={{ display: 'block', textAlign: 'center' }} */}
              <div className='list-group-icon'>
                <Trash color='white' onClick={() => handleDeleteTheme(theme)} />
              </div>
            </div>
          ))
          }
        </ListGroup >
      </div>
      <div className='margin-low'>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={AddThemeValidationSchema}
          onSubmit={values => props.addTopic(values)}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group >
                <div className='form'>
                  <Form.Control
                    placeholder="Nouveau thème"
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.name != null} />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  <Button className='button-primary' type="submit">
                    <Check />
                  </Button>
                </div>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
