import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';
import {getData, getIsLoading} from '../../modules/User';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data, isLoading } = this.props;
    if(!data) {
      return <p> Информация о пользователе не найдена </p>
    }
    if (isLoading) {
      return <p> Загрузка информации о пользователе </p>  
    }
    return (
      <div className={styles.root}>
        {/* Отобразите данные о пользователе */}
        <div className={styles.imageWrapper}>
            <img className={styles.image} src={data.avatar_url} alt="user info" />
        </div>
        <div>
            <p className='t-user-name'>{data.name}</p>
            <p className='t-user-bio'>{data.bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({data: getData(state),isLoading: getIsLoading(state)}))(UserInfo);
