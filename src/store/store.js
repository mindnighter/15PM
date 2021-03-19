import {createStore, combineReducers} from 'redux';
import {profileReducer} from '../Profile/duckProfile';
import {educationReducer} from '../Education/duckEducation';
import {experienceReducer} from '../WorkExperience/duckWorkExperience'
import {navigationReducer} from '../Navigation/duckNavigation';

const reducer = combineReducers({
    profile: profileReducer,
    education: educationReducer,
    experience:experienceReducer,
    navigation: navigationReducer
})

const store = createStore(reducer, {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;