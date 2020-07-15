import React from 'react'
import s from './ProfileInfo.module.css';
import st from '../../common/FormsControls/FormsControls.module.css'
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={ handleSubmit}>
			<div>
          <b>Name</b>: {createField('name', 'fullname', [], Input)}
      </div>
			<div>
				<b>Looking for a job</b>: 
				{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'} )}
			</div>

				<div>
					<b>My skills</b>: {createField('My skills', 'lookingForAJobDescription', [], Textarea)}
				</div>
				<div>
          <b>About</b>: {createField('About me', 'aboutMe', [], Textarea)}
        </div>

			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return (
						<div key={key} className={s.contact}>
							<b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
						</div>
					)
				})}
			</div>
			{error &&
			<div className={st.formSummaryError}>
				<span>{error}</span>
			</div>
			}
			<div><button>save</button></div>
		</form>
	)
}

const ProfileDataFormRedux = reduxForm ({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux