import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Objects.scss";
import { getData } from "../../store/actoin-creators/objects";
import data from "../../../data/data.json";
import Card from "../Card/Card";

class Objects extends Component {
    constructor(props) {
        super(props);
        const { objects = [] } = props;
        this.state = {
            objects
        }
    }

    componentDidMount() {
        let {objects = []} = this.props;
        if (!objects.length) {
            this.props.dispatch(getData(data));
        }
    }

    componentWillReceiveProps({ objects }) {
        if (objects !== this.props.objects) {
            this.setState({
                objects
            });
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { target: { search: { value } } } = event;
        let { objects = [] } = this.props;
        const searchArray = value.split(' ');
        const filteredObjects = objects.filter(item => {
            let keys = Object.keys(item);
           return keys.some(key => searchArray.includes(item[key]))
        });
        this.setState({
           objects: value.length ? filteredObjects: objects
        });
    };


    render() {
        let { objects = [] } = this.state;
        return(
            <div className={style.objectsComponent}>
                <form onSubmit={this.submitHandler} className={style.form}>
                    <input onChange={this.handleChange} name={'search'}/>
                    <button type="submit">Search</button>
                </form>
                <div className={ style.objects }>
                    {
                        objects.map((item, index) => {
                           return <Card item={item} key={`car-${index}`}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect(({objects}) => ({objects}))(Objects);