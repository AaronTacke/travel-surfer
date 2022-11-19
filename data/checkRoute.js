
import { gatheredData } from './data';

export default function checkRoute(startPoint, endPoint, placeholder) {
    const end = endPoint['endPoint']
    const start = startPoint['startPoint']
    const old = placeholder['placeholder']
    if (typeof endPoint === 'undefined') return 'undefined';
    if (start === old){
        return 'Please enter a starting point!';
    } else if (end === old){
        return 'Please enter a destination!';
    } else if (start == end){
        return 'Please don\'t select the same place twice!';
    }else if (gatheredData.map(JSON.stringify).includes(JSON.stringify({'src':start, 'dest':end}))){
        return '';
    }else{
        return 'Not enough data for reliable analysis (yet)! Please try U6 ;)';
    }
}