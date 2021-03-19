import {useHistory} from "react-router-dom";
import style from './WorkExperience.module.css';
import {connect} from 'react-redux';
import {setPath} from '../Navigation/duckNavigation';
import {setValid} from './duckWorkExperience'

const Next = ({forms,setPath,setValid}) =>{
    const history = useHistory();

    const goNext = (path) =>{
        setValid(true);
        history.push(path);
        setPath(path);
    }

    const next = () =>{
        if(forms.length){
            forms.every((item) =>item.flag) ? goNext("/resume"): alert("Not all forms are submitted")
        } else{
            alert("You must submit at least one form");
        }
     }

    return  <button onClick ={next} className ={style.nextButton}>Next</button>
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) =>({
   setPath: (path) => dispatch(setPath(path)),
   setValid: (bool) => dispatch(setValid(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(Next);