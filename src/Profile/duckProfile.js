const playloadedState = {
    name: '',
    lastName: '',
    post: '',
    phone: '',
    email: '',
    valid: false
};

export const setValues = (values) =>({
    type: 'set_profile',
    playload: values
})

export const setValidation = (bool) =>({
    type: 'set_validation',
    playload: bool
})

export const profileReducer = (state = playloadedState, action) => {
    switch(action.type){
        case 'set_profile': return {...action.playload}
        case 'set_validation': return {...state, valid: action.playload}
        default: return state
    }
}