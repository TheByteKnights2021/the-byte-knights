import React , { useEffect } from 'react';

// Components
import Event from '../components/Event/Event';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

// Hooks
import useFetch from '../hooks/useFetch';

const Events = () => {
    const { data: events, isPending, error } = useFetch('http://localhost:5000/api/events');

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    } , [])

    return (
        <div className='events'>
            <h1>&lt;Events/&gt;</h1>
            {error &&
                <div className="error">
                    <h1>Some Error occured 😭</h1>
                </div>
            }
            {isPending &&
                <div className="pending">
                    <h1>Loading.... </h1>
                </div>
            }
            {events &&
                <div className="events-list" data-aos="fade-up" data-aos-delay="600">
                    {events.map(event => (
                        <Event event={event} key={event.id} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Events
