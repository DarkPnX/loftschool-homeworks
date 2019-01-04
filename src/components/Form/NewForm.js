import React,{Component} from 'react'
import bond from './assets/bond_approve.jpg';
import './Form.css';
const niceValueForm = {
    firstName:'james',
    lastName:'bond',
    pas:'007'
}

const errorsForm = {
    firstName:{
        emptyInp:'Нужно указать имя',
        notValid:'Имя указано не верно'
    },
    lastName:{
        emptyInp:'Нужно указать фамилию',
        notValid:'Фамилия указана не верно'
    },
    pas:{
        emptyInp:'Нужно указать пароль',
        notValid:'Пароль указан не верно'
    }

}
class Form extends Component{
    state = {
        firstName:'',
        lastName:'',
        pas:'',
        errors:{},
        flag:false
    }

    changeInp = e =>{
        const localName = e.target.name;
        if(this.state.errors[localName]){
            this.setState({errors:{}});
        }
        this.setState({[localName]:e.target.value});
    }

    formSubmit = e =>{
        e.preventDefault();
        const errors = {};
        let flag = true;
        for(const key in niceValueForm){
            if(this.state[key]===''){
                errors[key] = errorsForm[key].emptyInp;
            }else if(niceValueForm[key] !== this.state[key].toLowerCase()){
                errors[key] = errorsForm[key].notValid;
            }
        }
        Object.keys(errors).length !== 0 ? flag = false : flag = true;
        this.setState({errors,flag});
    }

    render(){
        const { firstName, lastName, pas, errors, flag } = this.state;
        if (!flag){
          return (
            <div className="app-container">
              <form className="message-list" onSubmit={this.formSubmit}  > 
                <h1>Введите свои данные, агент</h1>
                <p className="field">
                  <label className="field__label" htmlFor="firstName">
                    <span className="field-label">Имя</span>
                  </label>
                  <input 
                    className="field__input field-input t-input-firstname" 
                    onChange={this.changeInp}  
                    type="text" 
                    name="firstName" 
                    value={firstName}
                    ></input>
                  <span className="field__error field-error t-error-firstname">{errors.firstName}</span>
                </p>     
                <p className="field">
                  <label className="field__label" htmlFor="lastName">
                    <span className="field-label">Фамилия</span>
                  </label>
                  <input 
                    className="field__input field-input t-input-lastname" 
                    onChange={this.changeInp} 
                    type="text" 
                    name="lastName" 
                    value={lastName}
                    ></input>
                  <span className="field__error field-error t-error-lastname">{errors.lastName}</span>
                </p>     
                <p className="field">
                  <label className="field__label" htmlFor="password">
                    <span className="field-label">Пароль</span>
                  </label>
                  <input 
                    className="field__input field-input t-input-password" 
                    onChange={this.changeInp} 
                    type="text" 
                    name="pas" 
                    value={pas}
                    ></input>
                  <span className="field__error field-error t-error-password">{errors.pas}</span>
                </p>     
                  
                <div className="form__buttons">
                  <input 
                  type="submit"
                  className="button t-submit"                        
                  value="Проверить" 
                  />   
                </div>                    
              </form>        
            </div>     
          )
        }  else {
          return (
            <div className="app-container">
             <img src={bond} alt="bond approve" className="t-bond-image" />
            </div>       
          )
        }   
      }
}

export default Form;