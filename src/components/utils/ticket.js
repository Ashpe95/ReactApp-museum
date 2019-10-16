import React from 'react';


const MyTicket = (props) => {

    const tickets = () => {
        let template = '';
        switch(props.type){

            case "default":
                template = <div>
                    <div className={'ticket-title'}>
                        {props.title}
                    </div>
                    <div className={'ticket-counter'}>
                        <img src={'/images/minus.png'}/>
                        <span className={props.className}>{props.count}</span>
                        <img src={'/images/plus.png'}/>
                    </div>
                    <div className={'ticket-title-under'}>{props.underText}</div>

                </div>
                break;

            default:
                template='';
        }

        return template;
    }

    return(
        <div className="my_ticket">
            {tickets()}
        </div>
    )
}

export default MyTicket;