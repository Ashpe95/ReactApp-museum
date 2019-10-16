import React, {Component} from 'react';
import Header from '../components/Header_footer/Header';

class Layout extends Component {

    render() {
        return (
            <div className="img-background">
                <Header/>
                <div>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Layout;
