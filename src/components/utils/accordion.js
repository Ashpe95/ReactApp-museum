import React from 'react';


const MyAccordion = (props) => {

    const accordions = () => {
        let template = '';
        switch(props.type){

            case "default":
                template = <div className={'accordion'}>
                    <p className={'accordion-category'}>
                        {props.category}
                    </p>
                    <img className={'accordion-category-dropdown'} src={'/images/drop-down.png'}>
                    </img>
                    <p className={'accordion-content'}>
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
        <div className="my_accordion">
            {accordions()}
        </div>
    )
}

export default MyAccordion;