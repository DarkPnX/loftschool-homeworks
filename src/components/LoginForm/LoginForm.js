// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React,{Component} from 'react';
import { withAuth } from '../../context/Auth';
import style from './LoginForm.module.css';
import {Route,Redirect,Switch } from 'react-router-dom';

const mapInp=[
    {
        name:"email",
        label:"Почта",
        type:"text"
    },
    {
        name:"password",
        label:"Пароль",
        type:"password"
    }
]

class LoginForm extends Component{
    state={
        email:'',
        password:''
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }

    buttonClick = () => {
        const {email,password} = this.state;
        const {authorize} = this.props;
        authorize(email,password);
    }

    render(){
        const {isAuthorized,authError,path,component}=this.props;
        if(!isAuthorized){
            return (
                <div className={style.bg}>
                    <div className={`${style.form} t-form`}>
                        {
                            mapInp.map(inp=>{
                                return (<p key={inp.name}>
                                    <label htmlFor={inp.name}>
                                        <span className={style.labelText}>{inp.label}</span>
                                    </label>
                                    <input 
                                    type={inp.type} 
                                    name={inp.name} 
                                    className={`${style.input} t-input-${inp.name}`}
                                    onChange={this.handleChange} 
                                    value={this.state[inp.name]}/>
                                </p>);
                            })
                        }
                        {authError && <p className={style.error}>{authError}</p>}
                        <div className={style.buttons}>
                         <button className={`${style.button} t-login`} onClick={this.buttonClick}>Войти</button>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
            <Redirect to="/app"/>
            );
        }
    }
}

export default withAuth(LoginForm);