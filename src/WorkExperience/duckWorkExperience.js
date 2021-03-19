const playloadedState = {
    valid: false,
    forms: {
        1:{
            post: '',
            companyName: '',
            dateStart: '',
            dateEnd:'',
            flag: false,
            id: 1
        }
    }
};

export const setValid = (bool) =>({
    type: 'set_valid_experience',
    playload: bool
})

export const setValues = (values) =>({
    type: 'set_experience',
    playload: values
})

export const deleteItem = (id) =>({
    type: 'delete_experience',
    playload: id
})

export const experienceReducer = (state = playloadedState, action) => {
    switch(action.type){
        case 'set_experience': 
            let newforms = state.forms;
            newforms[action.playload.id] = action.playload;
            return {...state, forms: newforms}
        case 'delete_experience':
            delete state.forms[action.playload];
            return{...state}
        case 'set_valid_experience': return{...state, valid: action.playload}
        default: return state
    }
}