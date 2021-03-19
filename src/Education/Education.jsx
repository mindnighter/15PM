import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from "react-router-dom";

import style from './Education.module.css';
import Form from './formEducation';
import {setPath} from '../Navigation/duckNavigation';
import Next from './Next';

const Education = ({formsStore, validProfile, setPath}) => {
  const history = useHistory();
    useEffect(()=>{
      setPath('/education');
      if(!validProfile){
        setPath('/');
        history.push('/')
      }
    },[])
    const init = () =>Object.keys(formsStore).map((key) => ({id: key, flag: formsStore[key].flag}))

    let [forms, setForms] = useState(init());
    let counter = forms.length ?  forms[forms.length-1].id : 0;

    const handleAdd = () =>{
        counter++;
        setForms(forms.concat({id:counter, flag: false}));
    }

    const setValid = (i,valid) =>{
      forms[i].flag = valid
    }

    const deleteForm = (i) =>{
      const clone = [...forms]
      clone.splice(i,1);
      setForms(forms = clone);
    }

    return <div className ={style.title}>
        <h1 className ={style.title}>Education</h1>
            {forms.map((item,i) =>
              <Form 
                  key ={item.id} id ={item.id} 
                  i ={i} setValid ={setValid} deleteForm ={deleteForm}>
              </Form>
            )}
          <button onClick ={handleAdd} className ={style.addButton}>Add Institution</button>
          <br/>
          {console.log(forms)}
        <Next forms ={forms}/>
    </div>
}

const mapStateToProps = (state) => ({
  formsStore: state.education.forms,
  validProfile: state.profile.valid
});

const mapDispatchToProps = (dispatch) =>({
  setPath: (path) => dispatch(setPath(path))
})

export default connect(mapStateToProps,mapDispatchToProps)(Education);