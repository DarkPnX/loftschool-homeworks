import React, {Component } from 'react';
import './Show.css';
import {getShowInfo} from '../../api.js'

class Show extends Component{
    state = {
        showId:'',
        data:''
    }


    componentDidMount = () => {
        const {showId} = this.props;
        if(showId){
            getShowInfo(showId)
                .then(data =>{
                    this.setState({showId,data});
                });
        }
    }
    render(){
        const {data} = this.state;
        if(!data){
            return (
                <p className="t-show-info show-information">Шоу не выбрано</p>
            );
        }else{
            return (
                <div className="show">
                    <img 
                        src={data.image.medium}
                        alt={data.name}
                    />
                    <h2 className="show-label t-show-name">{data.name}</h2>
                    <p className="show-text t-show-genre">
                        <b>Жанр: </b>
                        {data.genres.join(', ')}
                    </p>
                    <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: data.summary }}></p>{/*Documentation(API REFERENCE/DOM Elements)*/}
                </div>
            );
        }
        
    }
}

export default Show;