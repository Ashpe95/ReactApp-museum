import React from 'react';


const MySearch = (props) => {

    const searches = () => {
        let template = '';
        switch(props.type){

            case "default":
                template = <div>
                    <input type="search" className={'image-search'} placeholder={props.value}>
                    </input>
                    <img src="/images/Ellipse.png" className={'image-search-icon'}></img>
                    <p className={'image-search-advanced'}>
                        Advanced Search
                    </p>
                </div>
                break;

            default:
                template='';
        }

        return template;
    }

    return(
        <div className="my_search">
            {searches()}
        </div>
    )
}

export default MySearch;