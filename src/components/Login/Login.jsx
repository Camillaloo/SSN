import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
// import s from './Login.module.css';


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} 
                    validate={[required]} component={Input} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                    validate={[required]} component={Input} />
                </div>
                <div>
                    <Field component={Input} type={'checkbox'}
                     name={'rememberMe'} /> remember me
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (FormData) => {
        console.log(FormData)
    }
    return (
        <div>
            <h1>Welcome to SSN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login