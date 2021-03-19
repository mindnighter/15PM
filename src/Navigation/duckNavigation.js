const playloadedState = {
    path: '/'
};

export const setPath = (path) =>({
    type: 'set_path',
    playload: path
})
    
export const navigationReducer = (state = playloadedState, action) => {
    switch(action.type){
        case 'set_path': return Object.assign({}, state, {
            path: action.playload
        })
        default: return state
    }
}