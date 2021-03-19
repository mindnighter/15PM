const playloadedState = {
    valid: false,
    forms: {
        1:{
            institution: '',
            specialty: '',
            dateStart: '',
            dateEnd:'',
            flag: false,
            id: 1
        }
    }
};

export const setValid = (bool) =>({
    type: 'set_valid_education',
    playload: bool
})

export const setValues = (values) =>({
    type: 'set_education',
    playload: values
})

export const deleteItem = (id) =>({
    type: 'delete_education',
    playload: id
})

export const educationReducer = (state = playloadedState, action) => {
    switch(action.type){
        case 'set_education': 
            let newforms = state.forms;
            newforms[action.playload.id] = action.playload;
            return {...state, forms: newforms}
        case 'delete_education':
            delete state.forms[action.playload];
            return{...state}
        case 'set_valid_education': return{...state, valid: action.playload}
        default: return state
    }
}