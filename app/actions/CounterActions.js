
export const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
export const DECREMENT_NUMBER = 'DECREMENT_NUMBER';


export function increaseCount(){
    return{
        type:INCREMENT_NUMBER
    }
}

export function decreaseCount(){
    return{
        type:DECREMENT_NUMBER
    }
}