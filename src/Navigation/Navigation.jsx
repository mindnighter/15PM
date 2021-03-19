import style from './Navigation.module.css';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setPath} from './duckNavigation';

const Navigation = ({path, setPath}) =>{
    const history = useHistory();

    const handleClick = (e) =>{
        history.push(e.target.attributes.link.value);
        setPath(e.target.attributes.link.value);
    }

    return <div>
            <div className={style.links}>
                <span onClick ={handleClick} 
                    className={classNames({[style.here]: path ==="/" })}
                    link ="/">Profile
                </span>
                <span onClick ={handleClick} 
                    className={classNames({[style.here]: path ==="/education" })} 
                    link ="/education">Education
                </span>
                <span onClick ={handleClick} 
                    className={classNames({[style.here]: path ==="/experience" })} 
                    link ="/experience">Experience
                </span>
                <span onClick ={handleClick} 
                    className={classNames({[style.here]: path ==="/resume" })} 
                    link ="/resume">Resume
                </span>
            </div>
            <hr />
        </div> 

}

const mapStateToProps = (state) => ({
    path: state.navigation.path
});

const mapDispatchToProps = (dispatch) =>({
    setPath: (path) => dispatch(setPath(path))
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);