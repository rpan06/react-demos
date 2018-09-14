import React from 'react';

export function FormatTime(props){
    const time = props.time
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const year = time.getFullYear();
    const month = months[time.getMonth()];
    const date = time.getDate();
    const dayOfWeek = days[time.getDay()];
    let hr = time.getHours();
    const min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = "am";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "pm";
    }
    if (sec < 10){
        sec = '0'+sec
    }
    return `${dayOfWeek}, ${month} ${date}, ${year} - ${hr}:${min}:${sec} ${ampm}`
}
