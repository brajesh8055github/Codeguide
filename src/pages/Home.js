import CodingWiz from '../image/codingwiz.gif';
import video from '../image/best-video.png';
import certificate from '../image/certificate.png';
import doubt from '../image/doubt.png';
import interview from '../image/interview.png';
import teacher from '../image/teacher.png';
import project from '../image/project.png';
import user from '../image/circle-cropped.png';
import Courses from './Courses';
import Footer from './Footer';
function Home() {
  return (
    <div className="">
      <div className="container header-top">
        <div className="row justify-content-evenly align-items-center hero-row flex-wrap-reverse">
          <div className="row-header">
            <div className="ca-header">
              <h1>Start your Dream</h1>
              <h1>Career with CodeGuide</h1>
              <p>Be job ready by learning top & trending technologies used by leading MNCs at just starting price from ₹499!</p>
              <a href='/course-page'><button className="btn-h me-2">Explore Courses</button></a>
              <a href="tel:+91-3224358950" className="callTutors"><button className="btn-h2">Call Tutors</button></a>
            </div>
            <div className="ca-header">
              <img src={CodingWiz} className="logo-img" loading='lazy' alt=''></img>
            </div>
          </div>
        </div>
      </div>

      {/* Overview  */}
      <div className="container overview">
        <div className="row-o">
          <div className="ca-o">
            <div className="d-flex align-items-center justify-content-between">
              <h4>Live Classes</h4>
              <img src={teacher} className="over-img" alt=''></img>
            </div>
            <p>Live classes by Experts working as professional developers!</p>
          </div>
          <div className="ca-o">
            <div className="d-flex  align-items-center justify-content-between">
              <h4>3+ Projects</h4>
              <img src={project} className="over-img" alt=''></img>
            </div>
            <p className="card-text">We believe in practical knowledge, so how can we forgot about projects!</p>
          </div>
          <div className="ca-o">
            <div className="d-flex align-items-center justify-content-between">
              <h4>Many:1 Doubt Solving</h4>
              <img src={doubt} className="over-img" alt=''></img>
            </div>
            <p className="card-text">Yet not 1:1 but many students and experts try to solve on one students!</p>
          </div>
        </div>
        <div className=" row-o">
          <div className="ca-o">
            <div className="d-flex  align-items-center justify-content-between">
              <h4>Life Time Access</h4>
              <img src={video} className="over-img" alt=''></img>
            </div>
            <p className="card-text">Get lifetime access to recording that help you to have edge on revision!</p>
          </div>
          <div className="ca-o">
            <div className="d-flex  align-items-center justify-content-between">
              <h4>Free Internship</h4>
              <img src={interview} className="over-img" alt=''></img>
            </div>
            <p className="card-text">Get guaranteed free internship after every courses completion!</p>
          </div>
          <div className="ca-o">
            <div className="d-flex  align-items-center justify-content-between">
              <h4>Shareable Certificate</h4>
              <img src={certificate} className="over-img" alt=''></img>
            </div>
            <p className="card-text">Get LinkedIn sharable certificate after successfully completion of courses!</p>
          </div>
        </div>

      </div>


      {/*---------------------------------------- Courses----------------------------------------- */}

      <Courses />

      {/*------------------------------------------- Feedback------------------------------------------------------- */}

      <div className="feed">
        <h1>Why learners choose us</h1>
        <p>An experience learners love to talk about</p>
      </div>


      <div className="feedback">
        <div className="feedback-row">
          <div className="card">
            <p className="card-text"><mark>A lot of advanced web dev topics taught at </mark> taught by sir gave me an edge over
              my peers, and I ultimately absorbed more here than I ever did anywhere else.The courses is very well
              organized.And now as a developer, I feel much confident.</p>
            <div className="student-feedback">
              <div className="d-flex text-center align-items-center justify-content-between">
                <img src={user} className="student-img" alt=''></img>
                <div className="desc">
                  <b>Alok</b>
                  <p>Student</p>
                </div>
              </div>
              <div className="right ">
              </div>
            </div>
          </div>
          <div className="card">
            <p className="card-text"><mark>It was great learnig with .</mark> It helped in gaining enough experience to get my
              internship</p>
            <div className="student-feedback">
              <div className="d-flex text-center align-items-center justify-content-between">
                <img src={user} className="student-img" alt=''></img>
                <div className="desc">
                  <b>Adarsh</b>
                  <p>Student</p>
                </div>
              </div>
              <div className="right ">
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-row">
          <div className="card">
            <p className="card-text">The courses material was well-organized and easy to follow, and the instructor was
              knowledgeable and engaging. The online format allowed for flexibility in my schedule and provided resources,
              such as recorded lectures and interactive discussions, that enhanced my learning experience. <mark>Overall, I highly
                recommend this courses for anyone looking to further their knowledge and skills in a convenient and effective
                manner.</mark></p>
            <div className="student-feedback">
              <div className="d-flex text-center align-items-center justify-content-between-h">
                <img src={user} className="student-img" alt=''></img>
                <div className="desc">
                  <b>Chandan Kumar</b>
                  <p>Student</p>
                </div>
              </div>
              <div className="right ">
              </div>
            </div>
          </div>
          <div className="card">
            <p className="card-text"><mark>Best courses to learn coding</mark> And very helpful courses with real and practical examples.</p>
            <div className="student-feedback">
              <div className="d-flex text-center align-items-center justify-content-between">
                <img src={user} className="student-img" alt=''></img>
                <div className="desc">
                  <b>Dheeraj Kumar</b>
                  <p>Student</p>
                </div>
              </div>
              <div className="right ">
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-row">
          <div className="card">
            <p className="card-text"><mark>It's an amazing interactive courses.</mark> It always feel great learning in this courses. Sir is
              great I have to tell this, he is very helpful, he is always ready to solve our any kind of doubt and that has
              helped me a lot to learn and improve in myself, I just look forward to myself of becoming a great frontend
              developer so that i can make him proud.</p>
            <div className="student-feedback">
              <div className="d-flex text-center align-items-center justify-content-between-h">
                <img src={user} className="student-img" alt=''></img>
                <div className="desc">
                  <b>Deepak Singh</b>
                  <p>Student</p>
                </div>
              </div>
              <div className="right ">
                {/* <a href="https://www.instagram.com/"><i className="bi bi-instagram" style="font-size: 30px; "></i></a> */}
              </div>
            </div>
          </div>
          <div className="card">
            <p className="card-text">All concepts of HTML, CSS and JavaScript is explained in easy way and <mark>real life
              related projects help us a lot in experimenting.</mark></p>
            <div className="student-feedback">
              <div className="d-flex text-center align-items-center justify-content-between">
                <img src={user} className="student-img" alt=''></img>
                <div className="desc">
                  <b>Satyam Chy</b>
                  <p>Student</p>
                </div>
              </div>
              <div className="right ">
                {/* <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*------------------------------------------- Footer---------------------------------- */}


      <Footer />
    </div>

  )
}
export default Home;