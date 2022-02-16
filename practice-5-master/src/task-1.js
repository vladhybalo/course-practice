import React from "react";
import PropTypes from "prop-types";
import { read } from "fs";

export default class Accordion extends React.Component {

    constructor(props) {
        super(props);
    }

    change(e) {
        console.log(this.props.tabs);
        e.target.classList.toggle('active');
        e.target.nextSibling.classList.toggle('d-none');
        
    }

    render() {
        let i = 0;
        return this.props.tabs.map(cur => {
            return (
                <div class="card" key={cur.id = i++}>
                    <div class="card-header text-white bg-info" onClick={this.change.bind(this)} >
                        {cur.header}
                    </div>
                    <div class="card-body d-none">
                        {cur.content}
                    </div>
                </div>
            );
        });
    }
}

Accordion.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            content: PropTypes.string
        })
    )
};
