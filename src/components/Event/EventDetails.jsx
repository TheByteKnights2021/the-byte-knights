import React , { useState , useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Animation
import Fade from 'react-reveal/Fade';

// Data
import EventsObj from '../../data/events';

// Images
import { ReactComponent as Chatting } from '../../assets/chatting.svg';

const EventDetails = ({ match }) => {

    const id = match.params.id;

    const events = EventsObj.activeEvents;
    const event = events[id - 1];

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(event.markdown).then(res => res.text()).then(text => {
            setMarkdown(text);
        })
    } , []);

    return (
        <div className='event-details'>
            {event &&
                <main>
                    <div className="left">
                        <Fade left>
                            <img src={event.img} alt={event.title} />
                        </Fade>
                    </div>
                    <div className='right'>
                        <Fade up cascade>
                            <h1>{event.title}</h1>
                            <p>{event.description}</p>
                            <div className="btns">
                                <a href={event.formLink} target='_blank' rel="noreferrer">
                                    <button>
                                        Register Now
                                    </button>
                                </a>
                                <a href='#contact' className='contact-btn'>
                                    <button>
                                        Contact Us for any Queries
                                    </button>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </main>
            }
            <section className='guidelines'>
                <Fade left>
                    <h2>Competition Guidelines</h2>
                </Fade>
                <div className='guidelines-list'>
                    <Fade left>
                        <ReactMarkdown children={markdown}/>
                    </Fade>
                </div>
            </section>
            <a name='contact'>
                <section className='queries'>
                    <Fade left>
                        <div className="left">
                            <h2>{EventsObj.discord.headline}</h2>
                            <p>{EventsObj.discord.para1}</p>
                            <p>{EventsObj.discord.para2}</p>
                            <a href={EventsObj.discord.link} target='_blank' rel="noreferrer">{EventsObj.discord.btnText}</a>
                        </div>
                    </Fade>
                    <div className="right">
                        <Fade right>
                            <Chatting />
                        </Fade>
                    </div>
                </section>
            </a>
        </div>
    )
}

export default EventDetails;
