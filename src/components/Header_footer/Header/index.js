import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './side_drawer';

class Header extends Component {

    state = {
        drawerOpen: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    };

    render() {
        return (
            <header className="header">
                <AppBar position="fixed" style={{background: 'rgba(255, 255, 255, 1)', boxShadow:'none', padding:'2px 0px', color:'black'}}>
                    <Toolbar>
                        <div className="container-fluid">
                            <div className="left">
                                <div className="logo">
                                    <div className="logo-line">The</div>
                                    <div className="logo-line">art</div>
                                    <div className="logo-line">museum</div>
                                </div>
                            </div>
                            <div className="right">
                                <IconButton className="menu-button" aria-label="Menu" color="inherit" onClick={()=> this.toggleDrawer(true)}>
                                    <MenuIcon/>
                                </IconButton>

                                <SideDrawer open={this.state.drawerOpen} onClose={(value)=> this.toggleDrawer(value)}/>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

// function mapStateToProps(state){
//     return{
//         user:state.user
//     }
// }

export default Header;