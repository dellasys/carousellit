import {POST_TOPIC} from './actions';

const initialState = {
    topicsList:[]
};

export default function (state = initialState, action){
    const {type,data} = action;

    switch(type){
        case POST_TOPIC:
            return {
                ...state,
                topicsList: [...state.topicsList,data]
            };
        default:
            return state;
    }
}