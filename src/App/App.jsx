import {Provider} from 'react-redux';

import store from '../store/store';
import Profile from '../Profile/Profile';

const App = () =>{
    return(
    <Provider store ={store}>
            <Profile />
    </Provider>
    )
}

export default App;