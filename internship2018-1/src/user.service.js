import { user } from './user.js';

export function showMessage() {
    alert('Hello ' + user.name);
}

function confirmAge() {
    var result = window.prompt("What's your age?");
    if(result >= 18) {
        showMessage();
    }
    else {
        location.href = 'https://youtu.be/OK03o3BHafk';
        Location.assign(location.href);
    }
}