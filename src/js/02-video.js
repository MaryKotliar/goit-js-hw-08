import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('play', function() {
    console.log('played the video!');
});

const LOCALE_STORAGE = "videoplayer-current-time"
const onPlay = function({seconds}) {
    // data is an object containing properties specific to that event
    const saveData = localStorage.setItem(LOCALE_STORAGE, seconds);

};
const throttledOnPlay = throttle(onPlay, 1000);


const saveDataTimeNumber = localStorage.getItem(LOCALE_STORAGE);
console.log(saveDataTimeNumber);
player.on('timeupdate', throttledOnPlay);

player.setCurrentTime(saveDataTimeNumber).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
