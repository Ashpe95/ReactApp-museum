import React from 'react';


const MyGroup = (props) => {

    const groups = () => {
        let template = '';
        switch (props.type) {

            case "home":
                template = <div className={'group-home'}>
                    <p className={'group-home-category'}>
                        {props.category}
                    </p>
                    <p className={'group-home-title'}>
                        {props.title}
                    </p>
                    <p className={'group-home-date'}>
                        {props.date}
                    </p>
                    <p className={'group-home-floor'}>
                        {props.floor}
                    </p>
                </div>
                break;

            case "exhibition":
                template = <div className={'group-exhibition'}>
                    <p className={'group-exhibition-category'}>
                        {props.category}
                    </p>
                    <p className={'group-exhibition-title'}>
                        {props.title}
                    </p>
                    <p className={'group-exhibition-date'}>
                        {props.date}
                    </p>
                    <p className={'group-exhibition-floor'}>
                        {props.floor}
                    </p>
                </div>
                break;

            case "login":
                template = <div className={'group-login'}>
                    <p className={'group-login-title'}>
                        {props.title}
                    </p>
                    <p className={'group-login-address'}>
                        {props.address}
                    </p>
                </div>
                break;

            default:
                template = '';
        }

        return template;
    }

    return (
        <div className="my_group">
            {groups()}
        </div>
    )
}

export default MyGroup;