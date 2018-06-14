export function filterArray(numbers, min, max){
    var counter = 0;
    var result = [];    
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > min && numbers[i] < max){            
            result[counter] = numbers[i];
            counter++;
        }
    }
    return result;
}

export function isEmpty(object){
    if (Object.keys(object).length > 0){
        return false;
    }
    else {
        return true;
    }
}

export function objKeys(object){
    return Object.keys(object);
}

export function showIsEmptyResult(result){
    if(result){
        console.log("Object is empty");
    }
    else{
        console.log("Object is`t empty");
    }
}

