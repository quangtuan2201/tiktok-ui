import actionType from './actionTypes';

export const increaseCounter = () => {
    return {
        type: actionType.INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: actionType.DECREMENT,
    };
};
