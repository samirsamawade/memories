import {atom} from 'recoil';

export const modalState = atom({
    key: "show",
    default: false, // default value (aka initial value)
});
export const updateState = atom({
    key: "update",
    default: false, // default value (aka initial value)
});

export const currentPostState = atom({
    key: "currentPostState",
    default: {_id:'', title: '', description: '', budget: 0}, // default value (aka initial value)
});

