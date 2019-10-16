import React, {Component} from 'react';
import MyGroup from "../utils/group";
import MyButton from "../utils/button";

class Home extends Component {

    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="user_container">
                        <img src={'/images/image.png'} alt={'home-image'}>
                        </img>
                        <MyGroup
                            type="home"
                            title="MASTERS OLD AND NEW"
                            category="EXHIBITION"
                            date="APRIL 15 - SEMPTEMBER 20"
                            floor="FLOOR 5"
                        />
                        <MyButton
                            type="default"
                            title="Plan your Visit"
                            altClass="button-simple"
                            linkTo={`/plan_your_visit`}
                        />
                        <div className="bottom-status-bar">
                            <div>
                                <img className={'random-image-home'} src={'/images/mark.png'} alt={'mark-image'}>
                                </img>
                                <span className={'random-content-home-left'}>
                                    151 3rd St San Francisco, CA 94103
                                </span>
                            </div>
                            <div>
                                <img className={'random-image-home'} src={'/images/time.png'} alt={'time-image'}>
                                </img>
                                <span className={'random-content-home-right'}>
                                Open today 10:00am — 5:30pm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
