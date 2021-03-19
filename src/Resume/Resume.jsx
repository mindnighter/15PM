import {connect} from 'react-redux';
import style from './Resume.module.css';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import {setPath} from '../Navigation/duckNavigation';

const Resume = ({profile, education, experience, validExperience, validEducation, validProfile, setPath}) =>{
    const history = useHistory();
    useEffect(()=>{
      setPath('/resume');
      if(!validExperience || !validEducation || ! validProfile){
        setPath('/experience');
        history.push('/experience')
      }
    },[])
    const educationA = Object.values(education);
    const experienceA = Object.values(experience);
    return <div>
        <h1 className ={style.title}>Resume</h1>
        <br/>
        <div className ={style.container}>
            <div className ={style.name}>{profile.name} {profile.lastName}</div>
            <div>Post: {profile.post}</div>
            <div>Phone: {profile.phone}</div>
            <div>E-mail: {profile.email}</div>
        </div>

        <h2 className ={style.title}>Education</h2>
        {educationA.map((item) =>
            <div key ={item.id} className ={style.container}>
                <div>Institution: {item.institution}</div>
                <div>Specialty: {item.specialty}</div>
                <div>dateStart: {item.dateStart}</div>
                <div>dateEnd: {item.dateEnd}</div>
            </div>
        )}

        <h2 className ={style.title}>Work Experience</h2>
        {experienceA.map((item) =>
            <div key ={item.id} className ={style.container}>
                <div>Post: {item.post}</div>
                <div>Company: {item.companyName}</div>
                <div>dateStart: {item.dateStart}</div>
                <div>dateEnd: {item.dateEnd}</div>
            </div>
        )}
    </div>
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    education: state.education.forms,
    experience: state.experience.forms,
    validExperience: state.experience.valid,
    validEducation: state.education.valid,
    validProfile: state.profile.valid
});

const mapDispatchToProps = (dispatch) =>({
    setPath: (path) => dispatch(setPath(path))
 })

export default connect(mapStateToProps,mapDispatchToProps)(Resume);