import Footer from '../pages/Footer'
import mission from '../image/mission.jpg';
import vision from '../image/vision.jpg';
import user from '../image/circle-cropped.png';

function About() {
  return (
    <div>
      <div className="about">
        <p>CodeGuide is registered company under Ministry of Micro, Small & Medium Enterprises (MSME) and has a team of passionate educators, entrepreneurs, and technology experts who believe in the power of online education to transform lives and communities.We are committed to breaking down the barriers to traditional education by offering courses and programs that are flexible, self-paced, and tailored to the unique needs and interests of each learner.</p>
        <p>At our online educational startup, we believe that education should be a lifelong pursuit, and we are dedicated to supporting learners at every stage of their journey. Whether you are a student, a professional, or someone who simply wants to learn something new, we are here to help you achieve your goals and unlock your full potential.</p>
      </div>
      <div className="small-container">
        <div className=" row-header text-center mb-2">
          <div className="ca-header">
            <img src={mission} className="about-img" loading='lazy' alt=''></img>
          </div>
          <div className="ca-header">
            <h4>Our Mission</h4>
            <p>Our mission at our educational startup is to provide high-quality and innovative learning experiences that empower individuals to reach their full potential. We believe that everyone deserves access to education, regardless of their background, age, or location.Ultimately, our mission is to create a more equitable and just society by providing access to education and opportunities for all individuals to grow and thrive.</p>
          </div>
        </div>
        <div className=" row-header text-center">
          <div className="ca-header">
            <h4>Our Vision</h4>
            <p>Our vision at codingwiz is to create a world where learning is accessible, engaging, and effective for all. We believe that technology can be a powerful tool for transforming education, and we are committed to leveraging it to its fullest potential.Ultimately, our vision is to empower learners of all ages and backgrounds to achieve their full potential, to unlock their creativity and curiosity, and to become lifelong learners and leaders in their communities and beyond.</p>
          </div>
          <div className="ca-header">
            <img src={vision} className="about-img" loading='lazy' alt=''></img>
          </div>
        </div>
      </div>

      <h4 className='text-center'>Our Team</h4>
      <div className=" row-header">
        <div className="ca-header team-header">
          <img src={user} className="team-img" alt=''></img>
          <div className="ms-4">
            <h4>Brajesh Kumar</h4>
            <p>Founder</p>
            <p>A veteran and enthusiastic software developer immersed with skills like Full-stack development, team building and leadership.</p>
            <a href='https://www.linkedin.com'><button className='btn-h'>LinkedIn</button></a>
          </div>
        </div>
        <div className="ca-header team-header">
        <img src={user} className="team-img" alt=''></img>
          <div className="ms-4">
            <h4>Satyam Kumar</h4>
            <p>Co-Founder</p>
            <p>An experienced Python and Machine Learning expert, has been teaching for last 3 years in various renowned educational platforms.</p>
            <a href='https://www.linkedin.com'><button className='btn-h'>LinkedIn</button></a>
          </div>
        </div>
      </div>
      

      <Footer />
    </div>

  )
}
export default About;

