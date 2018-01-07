import { combineReducers } from 'redux';
import { users } from "./admin_user_manager";
import { articles } from "./admin_article_manager";
import { newArticle } from "./admin_new_article";
import { tags } from "./admin_tags_manager";

export const actionTypes = {
    ADMIN_URI_LOCATION:"ADMIN_URI_LOCATION"
};

const initialState = {
    url:"/"
};

export const actions = {
    change_location_admin:function (url) {
        return{
            type:actionTypes.ADMIN_URI_LOCATION,
            data:url
        }
    }
};

export function reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.ADMIN_URI_LOCATION:
            return {
                ...state,url:action.data
            };
        default:
            return state
    }
}

const admin = combineReducers({
    adminGlobalState:reducer,
    users,
    tags,
    newArticle,
    articles
});

export default admin;