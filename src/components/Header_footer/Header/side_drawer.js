import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';


import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

class SideDrawer extends Component {

    state = {
        page:[
            {
                name:'Exhibitions & Events',
                linkTo:'/exhibitions_events',
                icon:'/images/Icon2.png',
                public:true
            },
            {
                name:'Artists & Artworks',
                linkTo:'/artists_artworks',
                icon:'/images/Icon3.png',
                public:true
            },
            {
                name:'Collections',
                linkTo:'/collections',
                icon:'/images/Collections.png',
                public:true
            },
            {
                name:'Plan Your Visit',
                linkTo:'/plan_your_visit',
                icon:'/images/Subtract.png',
                public:true
            },
            {
                name:'Become a Member',
                linkTo:'/become_a_member',
                icon:'/images/member.png',
                public:true
            },
            {
                name:'Shop',
                linkTo:'/shop',
                icon:'/images/Shop.png',
                public:true
            }
        ],
    };

    closeMenu = () => {
        this.props.onClose(false)
    };

    defaultLink = (item,i) => (
            <Link to={item.linkTo} key={i}>
                <ListItem onClick={()=> this.closeMenu()}>
                    <ListItemIcon className={'list-item-icon'}>
                        <img src={item.icon}></img>
                    </ListItemIcon>
                    <ListItemText>
                        {item.name}
                    </ListItemText>
                </ListItem>
            </Link>
    )

    showLinks = (type) => {
        return type.map((item,i)=>{
            return this.defaultLink(item,i);
        })
    }

    render() {
        return (
            <Drawer anchor="left" open={this.props.open} onClose={()=> this.props.onClose(false)}>
                <div className="menu-nav">
                    <List component="nav">
                        <img className={'menu-search-icon'} src={'/images/Icon1.png'}/> <input className={'menu-search'} type={'search'} placeholder={'Search'}/>
                        {this.showLinks(this.state.page)}
                    </List>
                </div>
            </Drawer>
        );
    }
}


export default connect()(withRouter(SideDrawer));
