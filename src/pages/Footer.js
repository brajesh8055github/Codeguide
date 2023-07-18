function Footer(){
    return(
        <div>
        <div className="footer">
        <div className="footer-d">
          <h4 className="b">Courses</h4>
          <a href="/course-page">Frontend</a><br></br>
          <a href="/course-page">Backend</a><br></br>
          <a href="/course-page">App Development</a><br></br>
          <a href="/course-page">Machine Learning</a>
        </div>
        <div className="footer-d">
          <h4 className="b">Technologies</h4>
          <a href="/technology">Python</a><br></br>
          <a href="/technology">Javascript</a><br></br>
          <a href="/technology">ExpressJS</a><br></br>
          <a href="/technology">Java/C++</a>
        </div>
        <div className="footer-d">
          <h4 className="b">Social Media</h4>
          <a href="https://www.linkedin.com" rel="noreferrer" target={"_blank"}>LinkedIn</a><br></br>
          <a href="https://www.facebook.com" rel="noreferrer" target={"_blank"}>Facebook</a><br></br>
          <a href="https://www.Instagram.com" rel="noreferrer" target={"_blank"}>Instagram</a><br></br>
          <a href="https://www.whatsapp.com" rel="noreferrer" target={"_blank"}>Whatsapp</a>
        </div>
        <div className="footer-d">
          <h4 className="b">Legal</h4>
          <a href="/privacy-policy">Privacy Policy</a><br></br>
          <a href="/terms & conditions">Terms & Conditions</a><br></br>
          <a href="/about">About us</a><br></br>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="copy">
        <p>Copyright &#169; codeguide 2023. All rights reserved.</p>
      </div>

    </div>
    )
}
export default Footer;