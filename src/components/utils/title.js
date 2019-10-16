import React from 'react';


const MyTitle = (props) => {

    const titles = () => {
        let template = '';
        switch(props.type){

            case "default":
                template = <div className={'title'}>
                    <p className={'title-name'}>
                        {props.title}
                    </p>
                    <p className={'title-content'}>
                        {props.content}
                    </p>
                </div>
                break;

            default:
                template='';
        }

        return template;
    }

    return(
        <div className="my_title">
            {titles()}
        </div>
    )
}

export default MyTitle;