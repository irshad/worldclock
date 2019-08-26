// Indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#indian-time').innerText = time;
    document.querySelector('#indian-date').innerText = date;
};
setInterval(indianWatch,1000); // 1000 msec - 1 sec

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#usa-time').innerText = time;
    document.querySelector('#usa-date').innerText = date;
};
setInterval(usaWatch,1000); // 1000 msec - 1 sec

// CHINA Watch
let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#china-time').innerText = time;
    document.querySelector('#china-date').innerText = date;
};
setInterval(chinaWatch,1000); // 1000 msec - 1 sec

// Atlantic Watch
let atlanticWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Canada/Atlantic'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#atlantic-time').innerText = time;
    document.querySelector('#atlantic-date').innerText = date;
};
setInterval(atlanticWatch,1000); // 1000 msec - 1 sec

// London Watch
let londonWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Europe/London'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#london-time').innerText = time;
    document.querySelector('#london-date').innerText = date;
};
setInterval(londonWatch,1000); // 1000 msec - 1 sec

// Africa Watch
let africaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'HongKong'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    document.querySelector('#africa-time').innerText = time;
    document.querySelector('#africa-date').innerText = date;
};
setInterval(africaWatch,1000); // 1000 msec - 1 sec