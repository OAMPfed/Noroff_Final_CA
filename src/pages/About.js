import React, {useState} from 'react';
import Accordion from '../components/Accordion';

function About() {
    const [accordion_1, setAccordion_1] = useState(false);
    const [accordion_2, setAccordion_2] = useState(false);

    const toggleAccordion = (index, bool) => {
        switch(index){
            case 1:
                setAccordion_1(!bool)
                break;
            case 2:
                setAccordion_2(!bool)
                break;
            default:
                return null;
        }
    }
        
    return (
        <div className="about">
            <Accordion 
                title="ABOUT"
                text={`First published in 1993 by Wizards of the Coast, Magic was the first trading card game produced and it continues to thrive, with approximately twenty million players as of 2015. Magic can be played by two or more players in various formats, which fall into one of two categories: constructed or limited. Limited formats involve players building a deck spontaneously out of a pool of random cards with a minimum deck size of 40 cards. The other major category of formats is constructed. In constructed, players created decks fro... This text is huge, cutting it off.`}
                open={accordion_1}
                toggleAccordion={toggleAccordion}
                index={1}/>
            <Accordion 
                title="DEFEAT YOUR OPPONENT"
                text={`Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them.
                Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out.
                Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells.`}
                open={accordion_2}
                toggleAccordion={toggleAccordion}
                index={2}/>
        </div>
    );
}

export default About;
