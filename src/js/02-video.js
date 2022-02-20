import Player from '@vimeo/player';
import { throttle } from 'lodash';

const vimeoPlayer = document.querySelector('iframe');
const player = new Player(vimeoPlayer);
const parameter = 'videoplayer-current-time';

const onPlay = function (e) {
  const seconds = e.seconds;
  localStorage.setItem(parameter, seconds);
};

const throttleFunc = throttle(onPlay, 1000);

player.on('timeupdate', throttleFunc);

const storedTime = localStorage.getItem(parameter);
if (storedTime !== null && storedTime !== undefined) {
  player.setCurrentTime(storedTime);
}
