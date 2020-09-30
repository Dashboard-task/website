import { List, Menu } from 'antd';
import { Input } from 'antd';
import React, { Component } from 'react';


const { Search } = Input;

const listTopic = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

// Tableau des tâches
export class TopicComponent extends Component {

    render() {
        return (
            <>
                {/* Rechercher un thème */}
                <Search placeholder="Rechercher..." 
                    onSearch={value => 
                    console.log(value)} 
                    enterButton />
                {/* Liste des Thèmes */}
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Ajouter</div>}
                    bordered
                    dataSource={listTopic} // Ajout du datasource lié à la liste
                    renderItem={topic => <List.Item>{topic}</List.Item>} // Boucle de la liste
                    /> 
                </>
        )
    }
}