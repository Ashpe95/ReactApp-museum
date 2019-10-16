import React, {Component} from 'react';
import MyImage from "../utils/image";
import MySearch from "../utils/search";

class Collections extends Component {

    render() {
        return (
            <div>
                <div className={'collections-TITLE'}>
                    Collections
                </div>
                <MySearch
                    type="default"
                    value="Explore the Collection"
                />
                <MyImage
                    type="default"
                    source="/images/1.jpg"
                    title="DECORATIVE ARTS & CRAFTS"
                />

                <MyImage
                    type="default"
                    source="/images/2.jpg"
                    title="AMERICAN IMPRESSIONISM"
                />

                <MyImage
                    type="default"
                    source="/images/3.jpg"
                    title="DE STIJL"
                />

                <MyImage
                    type="default"
                    source="/images/4.jpg"
                    title="CUBISM"
                />

                <MyImage
                    type="default"
                    source="/images/5.jpg"
                    title="AMERICAN PHOTOGRAPHY"
                />

                <MyImage
                    type="default"
                    source="/images/6.jpg"
                    title="GREEK ANTIQUITIES"
                />
            </div>

        );
    }
}

export default Collections;
