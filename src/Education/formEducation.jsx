import { Formik, Field, Form, ErrorMessage } from 'formik'
import {connect} from 'react-redux';
import {useState} from 'react';

import style from './Education.module.css';
import {setValues, deleteItem, setValid} from './duckEducation'

const FormEducation = ({setValues, deleteItem, deleteForm, id, i, setValid, forms, setValidEducation}) =>{
    let [flag, setFlag] = useState(false);

    let valid;

    const initialValues ={
        institution: forms[id] ? forms[id].institution : '',
        specialty: forms[id] ? forms[id].specialty : '',
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
                setValidEducation(false);
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
                                <label>Institution</label>
                                <Field name="institution" type="text" />
                                <span className ={style.error}><ErrorMessage name ="institution"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Specialty</label>
                                <Field name="specialty" type="text"/>
                                <span className ={style.error}><ErrorMessage name ="specialty"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Date of entry</label>
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
    forms: state.education.forms,
});

const mapDispatchToProps = (dispatch) =>({
   setValues: (values) => dispatch(setValues(values)),
   deleteItem: (id) => dispatch(deleteItem(id)),
   setValidEducation: (bool) => dispatch(setValid(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormEducation);