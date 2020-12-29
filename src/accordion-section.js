import React from 'react';

export default function AccordionSection(props) {
    const style = {
        display: props.open ? 'initial' : 'none'
    };
    return (
        <section className="accordion-section">
            <div className="accordion-header"
                onClick={() => props.onHeaderClick()}>
                {props.title}
            </div>
            <div className="accordion-body" style={style}>
                {props.body}
            </div>
        </section>
    );
}
