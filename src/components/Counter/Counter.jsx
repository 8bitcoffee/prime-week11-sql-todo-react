import React from 'react';
import { useState } from 'react';
import './Counter.css';

function Counter(props){
    const [overdueCount, setOverdueCount] = useState(0);
    const [todayCount, setTodayCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    return(
        <div>
            <h2>Items due today:</h2>
            <h2>Overdue items:</h2>
        </div>
    )
}
export default Counter;