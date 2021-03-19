import { Formik, Field, Form, ErrorMessage } from 'formik'
import {connect} from 'react-redux';
import {useState} from 'react';

import style from './WorkExperience.module.css';
import {setValues, deleteItem, setValid} from './duckWorkExperience'

const FormExperience = ({setValues, deleteItem, deleteForm, id, i, setValid, forms, setValidExperience}) =>{
    let [flag, setFlag] = useState(false);

    let valid;

    const initialValues ={
        post: forms[id] ? forms[id].post : '',
        companyName: forms[id] ? forms[id].companyName : '',
        dateStart: forms[id] ? forms[id].dateStart : '',
        dateEnd: forms[id] ? forms[id].dateEnd : '',
        id: id
    }

    const submit = (values) =>{
        values.flag = true;
        setValues(values);
        setFlag(flag = false);
    }

    const deleteThis = () =>{
        deleteForm(i);
        deleteItem(id);
    }

    const validateNotEmpty = (values) =>{
        setFlag(flag = true);
        setValid(i,valid);
        const errors = {};

        Object.keys(values).forEach((key) => {
            if(!values[key]){
                setValidExperience(false);
               errors[key] = 'It mustn`t be empty!';
            }
        })
        return errors
    }

    return <div className ={style.wrap}>
            <div className ={style.wrapper}>
                <div><span onClick ={deleteThis} className ={style.cancel}>&#10007;</span></div>
                <Formik initialValues ={initialValues} onSubmit ={submit} validate ={validateNotEmpty} >
                    {({isValid})=>
                        <Form className = {style.main}>
                            <div className = {style.item}>
                                <label>Post</label>
                                <Field name="post" type="text" />
                                <span className ={style.error}><ErrorMessage name ="post"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Company Name</label>
                                <Field name="companyName" type="text"/>
                                <span className ={style.error}><ErrorMessage name ="companyName"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Date of start</label>
                                <Field name="dateStart" type="date"/>
                                <span className ={style.error}><ErrorMessage name ="dateStart"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Date of ending</label>
                                <Field name="dateEnd" type="date"/>
                                <span className ={style.error}><ErrorMessage name ="dateEnd"/></span>
                            </div>
                            {!flag ? isValid = false : isValid}
                            <input type="submit" value ="Submit" hidden ={!isValid}/>
                            {valid = isValid}
                        </Form>
                    }
                </Formik>
            </div>
        </div>
}

const mapStateToProps = (state) => ({
    forms: state.experience.forms
});

const mapDispatchToProps = (dispatch) =>({
   setValues: (values) => dispatch(setValues(values)),
   deleteItem: (id) => dispatch(deleteItem(id)),
   setValidExperience: (bool) => dispatch(setValid(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormExperience);