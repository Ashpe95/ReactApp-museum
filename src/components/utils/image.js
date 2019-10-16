import React from 'react';


const MyImage = (props) => {

    const images = () => {
        let template = '';
        switch (props.type) {

            case "default":
                template =
                    <div className={'image'}>
                        <img className={'image-source'} src={props.source}/>
                        <p className={'image-title'}>
                            {props.title}
                        </p>
                    </div>
                break;

            default:
                template = '';
        }

        return template;
    }

    return (
        <div className="my_image">
            {images()}
        </div>
    )
}

export default MyImage;