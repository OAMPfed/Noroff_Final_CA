import React from 'react';

const Accordion = (props) => {
    const { title, text, open, toggleAccordion, index } = props;

    return(
    <div className="accordion">
        <div className="accordion__header">
            <h2 className="accordion__header--title">{title} </h2>
            <button type="button" onClick={() => toggleAccordion(index, open)}
                className="accordion__header--button"> {!open ? 'Open' : 'Close' } </button>
        </div>
        <p style={open === true ? {display: 'block'} : {display: 'none'}}
            className="accordion__content">{text}</p>
    </div>
    )
};

export default Accordion;