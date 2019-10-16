import React, {Component} from 'react';
import MyButton from "../utils/button";
import MyTitle from "../utils/title";
import MyTicket from "../utils/ticket";

class Tickets extends Component {

    render() {
        return (
            <div>
                <div className={'tickets-TITLE'}>
                    Plan Your Visit
                </div>
                <MyTitle
                    type="default"
                    title="Skip the Line. Purchase Tickets."
                    content="All exhibitions, audio tours, and films included in the price of admission."
                />
                <div className={'timeline-title'}>
                    <div className={'timeline-title-left'}>
                        Today
                    </div>
                    <div className={'timeline-title-center'}>
                        Tomorrow
                    </div>
                    <div className={'timeline-title-right'}>
                        Other
                    </div>
                    <div className={'timeline-line'}>
                    </div>
                    <div className={'timeline-title-underline'}>
                        March 22, 2016 <br/>Open 10:30am-5:30pm
                    </div>
                </div>
                <MyTicket
                    type="default"
                    title="Adults"
                    className="ticket-counter-text ticket-counter-text-first"
                    count="2"
                />
                <MyTicket
                    type="default"
                    title="Seniors"
                    className="ticket-counter-text"
                    underText="65+ with ID"
                    count="0"
                />
                <MyTicket
                    type="default"
                    title="Students"
                    className="ticket-counter-text"
                    underText="with ID"
                    count="0"
                />
                <div className={'timeline-line'} style={{borderColor: '#FF473A', marginTop: '40px', marginLeft: '12px', marginRight: '15px'}}>
                </div>
                <div className={'random-text-tickets'}>
                    Total
                </div>
                <div className={'random-count-tickets'}>
                    $16
                </div>
                <MyButton
                    type="default"
                    title="Continue to payment"
                    altClass="button-simple button-tickets"
                    linkTo={`/`}
                />
            </div>

        );
    }
}

export default Tickets;
