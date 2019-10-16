import React from 'react';


const MyForm = (props) => {

    const forms = () => {
        let template = '';
        switch(props.type){

            case "default":
                template = <div className={'form'}>
                    <input className={'form-email'} placeholder={'Email address'}>
                    </input>
                    <input className={'form-password'} placeholder={'Password'}>
                    </input>
                </div>
                break;

            default:
                template='';
        }

        return template;
    }

    return(
        <div className="my_form">
            {forms()}
        </div>
    )
}

export default MyForm;