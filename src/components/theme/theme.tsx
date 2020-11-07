import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { Check, Trash } from 'react-bootstrap-icons';
import { AddThemeFormValues, ThemeData } from '../../util/types/data-types';

interface ListThemeProps {
  themes: ThemeData[];
  onAddTheme: (theme: AddThemeFormValues) => void;
  onDeleteTheme: (theme: ThemeData) => void;
  onSelectTheme: (theme: ThemeData) => void;
}

/**
 * Composant themes's 
 */
export const ThemeComponent: React.FC<ListThemeProps> = (props) => {

  const AddThemeValidationSchema = yup.object<AddThemeFormValues>({
    name: yup.string().required('Tu dois donner un nom à ton thème.').typeError('Nom invalide')
  });

  return (
    <>
      <div className='margin-bottom-high'>
        <ListGroup>
          <ListGroup.Item>Liste des thèmes</ListGroup.Item>
          {props.themes.map((theme, index) => (
            <div key={index} className='list-group-perso'>
              <p className='list-group-item' onClick={() => props.onSelectTheme(theme)}>
                {theme.name}
              </p>
              <div className='list-group-icon'>
                <Trash color='white' onClick={() => props.onDeleteTheme(theme)} />
              </div>
            </div>
          ))}
        </ListGroup >
      </div>
      <div className='margin-low'>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={AddThemeValidationSchema}
          onSubmit={values => props.onAddTheme(values)}
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
                  <Button variant='primary' type="submit">
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
