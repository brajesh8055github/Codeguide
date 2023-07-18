import Footer from "./Footer";
import SyllabusAccordion from "./SyllabusAccordion";
import { useLocation } from "react-router-dom";

function Coursedetails() {
    const location = useLocation();
    
    return (
        <div>
            <div className=" header-top">
                <div className="row-header">
                    <div className="ca-header">
                        <h3>{location.state.title}</h3>
                        <p className="course-detail-desc">{location.state.desc}</p>
                        <p>Course Duration : {location.state.coursedur} </p>
                        <p className="star">4.5 <i className="bi bi-star-fill star"></i> <i className="bi bi-star-fill star"></i> <i className="bi bi-star-fill star"></i> <i className="bi bi-star-fill star"></i> <i className="bi bi-star-half star"></i></p>
                        <a href='/error'><button className="btn-p">View Expert Profile</button></a>
                    </div>
                    <div className="ca-header">
                        <div className="ca">
                            <div className='parent-img'>
                                <img src={location.state.img} className='card-img' alt=""></img>
                            </div>
                            <h4>{location.state.title}</h4>
                            <p><span className="text-499">{location.state.oprice}</span> <del>{location.state.sprice}</del> {location.state.off}</p>

                            <a href="/error"><button className='course-btn'>{location.state.btn}</button></a>
                            <p className="text-center fw-lighter money-text">Guaranteed free Internship <br></br>Life time access</p>
                        </div>
                    </div>
                </div>
            </div>

        

            <div className="courses">
                <div className="col-md-6 ">
                    <h4 className="fw-bolder">This Course Includes</h4>
                    <div className="row justify-content-between">
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-tv"></i> Daily Live Interactive Classes</p>
                        </div>
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-cloud-download"></i> All classes are downloadable</p>
                        </div>
                    </div>

                    <div className="row justify-content-between ">
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-phone"></i> Access from any device</p>
                        </div>
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-credit-card-2-front"></i> Weekly Live Project</p>
                        </div>
                    </div>

                    <div className="row justify-content-between ">
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-trophy"></i> Certificate of Completion</p>
                        </div>
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-laptop"></i> Live Doubt Solving</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cc">
                <h4>Course Curriculum</h4>
            </div>
            <div className="courses">
                <SyllabusAccordion syllabus={location.state.syllabus} />
            </div>
            <div className="courses">
                <div className="col-md-8 ps-3 pe-2">
                    <h4 className="fw-bolder">Requirements</h4>
                    <ul className="course-detail-list">
                        {/* <li>{location.state.require}</li> */}
                        <li>A computer with access to the internet</li>
                        <li>No paid software or any other things are required</li>
                        <li>We'll walk you through, step-by-step how to get all the software installed and set up</li>
                        <li>And lastly your support!</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Coursedetails;