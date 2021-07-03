import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'

import '../styles/login.css';
import userServices from '../Api/users';

class Login extends Component{
    render(){
        return(
            <div id="my-container" className="ui grid  middle aligned">
                <div className="ui centered card" id="card">
                    <div className="content">
                        <div className="center aligned header">WorkBox Login</div>
                        <div className="description">
                            <Formik 
                                initialValues={{username: "", password: ""}}
                                validate={values => {
                                    const errors = {};
                                    if (!values.username) {
                                        errors.username = "Veuillez insérer le nom d'utilisateur";
                                    } else if(!values.password){
                                        errors.password = "Veuillez entrer le mot de passe";
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) =>{
                                    userServices.loginPost(values.username, values.password)
                                    .then(response =>{
                                        
                                    })
                                    setSubmitting(false);
                                }}
                            >
                                <Form className="ui form middle aligned" method="POST">
                                    <div className="field">
                                        <label className="red">Nom d'utilisateur</label>
                                        <Field type="text" name="username"/>
                                        <ErrorMessage name="username" component="div" className="ui red message"/>
                                    </div>
                                    <div className="field">
                                        <label>Mot de passe</label>
                                        <Field type="password" name="password" />
                                        <ErrorMessage name="password" component="div" className="ui red message"/>
                                    </div>
                                    <div className="field">
                                        <label>Vous n'avez pas de compte? <a href="/register">Créer un compte</a></label>
                                    </div>
                                    <button type="submit" className="fluid ui button primary">Envoyer</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;