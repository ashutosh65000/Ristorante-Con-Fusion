import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log(comment);
            // cannot change the initial state but concat() is an immutable operation
            return state.concat(comment) 
        default: return state
    }
} 