import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/id'

let timeInterval = null;

const getCurrentTime = () => moment().locale('id').format('dddd, DD MMMM YYYY, HH:mm:ss');

const CurrentTime = () => {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        timeInterval = setInterval(() => { setTime(getCurrentTime()) }, 1000);

        return () => {
            if (timeInterval) clearInterval(timeInterval);
        }
    }, [])

    return time;
}

export default React.memo(CurrentTime);
