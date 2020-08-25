import React from 'react';
import Spinner from '../../../utils/Spinner';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Form,Button } from 'react-bootstrap';
import radioSelector from '../../../utils/forms/radioSelector';

const StoryForm = ({ handleSubmit,dirty,submitting,initialValues }) => {
	//TODO: Make the emojis animated and selectable.
	return (
		<Form onSubmit={handleSubmit} className='story-form'>
			<Form.Group>
				<Field 
          name='message'
          component='textarea'
          rows='4'
          cols='26'
          className='story-form-message'/>
			</Form.Group>
			<Form.Row>
        <Field
          name='mood'
          component={radioSelector}/>
				<Button variant="primary" disabled={!dirty || submitting} type='submit'>
					{ submitting ?
						<React.Fragment>
							Sending <Spinner animation='border' size='sm'/>
						</React.Fragment> : 
						'Sincerely, Anonymous'
					}
				</Button>
			</Form.Row>
		</Form>
	)
}

const enhance = compose(
	connect(
		state => {
			const form = `storyForm`;
			return {
        form,
        initialValues: {
          mood: 'happy'
        },
        enableReinitialize: true,
			}
		},
		dispatch => ({})
	),
	reduxForm()
)

export default enhance(StoryForm);