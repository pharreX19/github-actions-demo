import {joke} from './joke';
import './styles/main.scss'
import laughing from './assets/laughing.svg';

console.log(1);

const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

try{
    document.getElementById('day').innerText = dayOfTheWeek();
    const laugh = document.getElementById('laughImg');
    laugh.src = laughing;
    
}catch(ex){

}

module.exports.dayOfTheWeek = dayOfTheWeek;