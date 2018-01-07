
import {fork} from 'redux-saga/effects'
import {loginFlow, registerFlow, user_auth} from './login'
import {get_all_users_flow} from './admin_user_manager'
import {getAllTagsFlow, addTagFlow, delTagFlow} from './admin_tags_manager'
import {saveArticleFlow} from './admin_new_article'
import {getArticleListFlow,deleteArticleFlow,editArticleFlow} from './admin_article_manager'
import {getArticlesListFlow,getArticleDetailFlow} from './home'

export default function* rootSaga() {
    yield  fork(loginFlow);
    yield  fork(registerFlow);
    yield  fork(user_auth);
    yield fork(get_all_users_flow);
    yield fork(getAllTagsFlow);
    yield fork(addTagFlow);
    yield fork(delTagFlow);
    yield fork(saveArticleFlow);
    yield fork(getArticleListFlow);
    yield fork(deleteArticleFlow);
    yield fork(getArticlesListFlow);
    yield fork(getArticleDetailFlow);
    yield fork(editArticleFlow);
}