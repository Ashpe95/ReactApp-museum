import React, {Component} from 'react';
import MyGroup from "../utils/group";
import MyAccordion from "../utils/accordion";

class Exhibition extends Component {

    render() {
        return (
            <div>
                <div className={'exhibition-TITLE'}>
                    Exhibition Preview
                </div>
                <MyGroup
                    type="exhibition"
                    title="DOROTHEA LANGE"
                    category="RETROSPECTIVE"
                    date="OCTOBER 15 - MARCH 20"
                    floor="FLOOR 3"
                />
                <img src={'/images/house1.png'} style={{margin: '20px auto 0 auto', display: 'block'}}>
                </img>
                <img className={'guy1'} src={'/images/guy1.png'}>
                </img>
                <img className={'guy2'} src={'/images/guy2.png'}>
                </img>
                <img className={'guy3'} src={'/images/guy3.png'}>
                </img>
                <div className={'dots'}></div>
                <p className={'random-image-content'}>
                    “Abandoned Dust Bowl Home” Gelatin silver print <br/> about 1935 - 1940
                </p>
                <MyAccordion
                    type="default"
                    category="BIOGRAPHY"
                    content="Dorothea Lange (May 26, 1895 – October 11, 1965) was an influential American documentary
                    photographer and photojournalist, best known for her Depression-era work for the Farm Security
                    Administration (FSA). Lange's photographs humanized the consequences of the Great Depression and
                    influenced the development of documentary photography. "
                />
            </div>

        );
    }
}

export default Exhibition;
