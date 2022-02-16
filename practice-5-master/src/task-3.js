import React from "react";

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        console.log("props");
        console.log(props);
    }

    afds() {
        this.props.Tabs.tabs;

    }

    active(e) {
        console.log(e.target.parentElement);
    }
   
    render() {
        
        let content = this.props.tabs.map(cur => {
            return <div class="col-9">
                <div class = "d-none">{cur.content}</div>
                {/* <div class="d-none">Content 2</div>
                <div class="d-none">Content 3</div> */}
            </div>
        })
        let header = (
            <ul class="col-3 list-group">
                {this.props.tabs.map(cur=> {
                    return (
                        <li class="list-group-item">
                            {cur.header}
                        </li>
                )})}
            </ul>
        );
        
        return (
            <div class="row" onClick={this.active.bind(this)}>
                {header}
                {content}
            </div>
        );
    }
}

Tabs.defaultProps = {
    headerTpl: tab => `${tab.index}. ${tab.item.header}`,
    contentTpl: tab => <h4>{tab.item.content}</h4>
}