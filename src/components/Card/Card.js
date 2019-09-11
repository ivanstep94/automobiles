import React, { Component } from "react";
import style from "./Card.scss";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { item = {} } = this.props;
        let array = Object.keys(item);
        return(
            <div className={style.cardContainer}>
                <div className={style.textContainer}>
                    {
                        array.map((key, index) => {
                            if (!item[key]) return;
                            return <span key={`key${index}`}>{`${key}: ${item[key]}`}</span>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Card;