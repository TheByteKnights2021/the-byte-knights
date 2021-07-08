import React, { useState, useEffect } from 'react';

// Images
import timeSvg from '../assets/time.svg';

const Results = () => {

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const [result_delcared, set_result_delcared] = useState(false);

    function countdown() {
        const lastupdateTime = new Date("July 11, 2021 00:00:00").getTime()
        const now = new Date().getTime();

        const gap = -(now - lastupdateTime);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        setDay(textDay)
        setHour(textHour);
        setMinute(textMinute);
        setSecond(textSecond);
    }

    useEffect(() => {
        let id = setInterval(countdown, 1000)

        if (hour <= 0 && minute <= 0 && second <= 0 && day <= 0) {
            clearInterval(id)
            set_result_delcared(true);
        }
    }, [hour, minute, second, day])

    return (
        <div className='results'>
            {result_delcared &&
                <section>
                    This is the result
                </section>
            }
            {!result_delcared &&
                <section className='comming-soon'>
                        <h1>Results are comming soon !</h1>
                        <div className="countdown">
                            <div>
                                <h2>{day}</h2>
                                <h3>Days</h3>
                            </div>
                            <div>
                                <h2>{hour}</h2>
                                <h3>Hours</h3>
                            </div>
                            <div>
                                <h2>{minute}</h2>
                                <h3>Minutes</h3>
                            </div>
                            <div>
                                <h2>{second}</h2>
                                <h3>Seconds</h3>
                            </div>
                        </div>
                    <img src={timeSvg} alt="comming soon" />
                </section>
            }
        </div>
    )
}

export default Results;