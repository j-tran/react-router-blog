import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: postReducer,
  form: formReducer,
});

export default rootReducer;
