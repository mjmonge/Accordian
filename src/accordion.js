import React from 'react';
import AccordionSection from './accordion-section';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openIndex: 0
        };
    }

    setOpen(index) {
        this.setState({
            openIndex: index
        });
    }

    render() {
        const items = this.props.items.map((item, index) =>
            <AccordionSection title={item.title} body={item.body}
                open={this.state.openIndex === index} key={index}
                onHeaderClick={() => this.setOpen(index)}/>
        );
        return (
            <div className="accordion">
                {items}
            </div>
        );
    }
}
