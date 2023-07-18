import {useNavigate} from 'react-router-dom';
import React from "react";


function Coursecard(props)
{
    const navigate=useNavigate();
    function CardHandler()
    {
        navigate('/course-details',{
            state:{
                title:props.title,
                desc:props.desc,
                oprice:props.oprice,
                sprice:props.sprice,
                off:props.off,
                btn:props.btn,
                img:props.img,
                syllabus: props.syllabus,
                require:props.require,
                coursedur:props.coursedur,
                linkin:props.linkin,
                bestsell:props.bestsell,
            }
        });
    };
    return(
                <div class="ca-d">
                <img src={props.img} className='card-img' alt=''></img>
                <div class="card-body">
                <h4>{props.title}</h4>
                <p>{props.price} <span className='bestselling-btn'>{props.bestsell}</span></p>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <a href='/course-details'><button className='course-btn' onClick={CardHandler}>Check Details!</button></a>
            </div>
            </div>
    )
}

export default Coursecard;