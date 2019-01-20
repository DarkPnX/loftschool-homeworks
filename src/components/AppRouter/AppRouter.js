// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, { Component } from 'react';
import style from './AppRouter.module.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

const mapAliasRoute = [
    {
        component:Home,
        path:'/app',
        exact:true
    },
    {
        component:InboxList,
        path:'/app/inbox',
        exact:true
    },
    {
        component:InboxMail,
        path:'/app/inbox/:id',
        exact:false
    },
    {
        component:OutboxList,
        path:'/app/outbox',
        exact:true
    },
    {
        component:OutboxMail,
        path:'/app/outbox/:id',
        exact:false
    }
]

const mapLink = [
    {
        name:'home',
        path:'/app',
        text:'Home'
    },
    {
        name:'inbox',
        path:'/app/inbox',
        text:'Inbox'
    },
    {
        name:'outbox',
        path:'/app/outbox',
        text:'Outbox'
    }
]

class AppRouter extends Component{
    render(){
        return(
            <div className={style.wrapper}>
                <div className={style.container}>
                    <nav className={style.nav}>
                        <ul className={`${style.navList} t-nav-list`}>
                            {
                                mapLink.map(link=>{
                                    return(
                                    <li key={link.name} className={style.navElement}>
                                        <Link 
                                        to={link.path} 
                                        className={`${style.link} t-link-${link.name}`}
                                        >
                                            {link.text}
                                        </Link>
                                    </li>)
                            })}
                        </ul>
                    </nav>
                    <div className={style.content}>
                        <h3 className={style.title}>Home</h3>
                        <Switch>
                            {
                                mapAliasRoute.map(route=>{
                                    return(
                                    <Route 
                                        path={route.path} 
                                        component={route.component}
                                        key={route.path} 
                                        exact={route.exact}
                                    />
                                    )
                                    
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRouter;