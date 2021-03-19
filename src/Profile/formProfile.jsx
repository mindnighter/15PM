import { Formik, Field, Form, ErrorMessage } from 'formik'
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import {useEffect} from 'react'
import style from './Profile.module.css';
import {setValues, setValidation} from './duckProfile'
import {setPath} from '../Navigation/duckNavigation';

const FormProfile = ({name, lastName, post, phone, email, valid, setValues, setPath, setValidation}) =>{
    let history = useHistory();
    useEffect(()=>{
        setPath('/');
      },[])

    const initialValues ={
        name: name,
        lastName: lastName,
        post: post,
        phone: phone,
        email: email
    }

    const submit = (values) =>{
        values.valid = true;
        setValues(values);
        history.push("/education");
        setPath("/education");
    }

    const validateNotEmpty = (values) =>{
        const errors = {};

        Object.keys(values).forEach((key) => {
            if(!values[key]){
                setValidation(false);
               errors[key] = 'It mustn`t be empty!';
            }
        })
        return errors
    }

    const phoneValidate = (value) =>{
        const error = 'Right format: +XXXXXXXXXXXX'
        if(value.length === 13){
            const regPhone = /\+\d{12}/g;
            const result = value.match(regPhone);
            if(!result){
                setValidation(false);
                return error;
            }
        } else{
            setValidation(false);
            return error;
        }
    }

    return <div className ={style.wrap}>
            <div className ={style.wrapper}>
                <h1 className ={style.title}>Profile</h1>
                <Formik initialValues ={initialValues} onSubmit ={submit} validate ={validateNotEmpty} >
                    {()=>
                        <Form className = {style.main}>
                            <div className = {style.item}>
                                <label>Name</label>
                                <Field name="name" type="text" />
                                <span className ={style.error}><ErrorMessage name ="name"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Last Name</label>
                                <Field name="lastName" type="text"/>
                                <span className ={style.error}><ErrorMessage name ="lastName"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Post</label>
                                <Field name="post" type="text"/>
                                <span className ={style.error}><ErrorMessage name ="post"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>Phone</label>
                                <Field name="phone" type="text" validate ={phoneValidate}/>
                                <span className ={style.error}><ErrorMessage name ="phone"/></span>
                            </div>
                            <div className = {style.item}>
                                <label>E-mail</label>
                                <Field name="email" type="email"/>
                                <span className ={style.error}><ErrorMessage name ="email"/></span>
                            </div>
                            <input type="submit" value ="Submit" />
                        </Form>
                    }
                </Formik>
            </div>
        </div>
}

const mapStateToProps = (state) => ({
    name: state.profile.name,
    lastName: state.profile.lastName,
    post: state.profile.post,
    phone: state.profile.phone,
    email: state.profile.email,
    flag: state.profile.flag,
});

const mapDispatchToProps = (dispatch) =>({
   setValues: (values) => dispatch(setValues(values)),
   setValidation: (bool) => dispatch(setValidation(bool)),
   setPath: (path) => dispatch(setPath(path))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormProfile);