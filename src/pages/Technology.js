import CSS from '../image/css.png';
import HTML from '../image/html.png';
import Git from '../image/git.png';
import Bootstrap from '../image/bootstrap.png';
import Github from '../image/github.png';
import Javascript from '../image/javascript.png';
import Mongodb from '../image/mongodb.png';
import React from '../image/react.png';
import Node from '../image/nodejs.png';
import Footer from './Footer';
function Technology() {
  return (
    <div className='technology'>
      <div className='tech'>
        {/* <div className='row-t'> */}
          <div className='ca-t'>
            <img src={Git} className="css" alt=''></img>
            <h2>Git</h2>
          </div>
          <div className='ca-t'>
            <img src={Github} className="css" alt=''></img>
            <h2>Github</h2>
          </div>
          <div className='ca-t'>
            <img src={HTML} className="css" alt=''></img>
            <h2>HTML</h2>
          </div>
          <div className='ca-t'>
            <img src={CSS} className="css" alt=''></img>
            <h2>CSS</h2>
          </div>
          <div className='ca-t'>
            <img src={Bootstrap} className="css" alt=''></img>
            <h2>Bootstrap</h2>
          </div>
          <div className='ca-t'>
            <img src={Javascript} className="css" alt=''></img>
            <h2>JavaScript</h2>
          </div>
          
        {/* </div> */}
        {/* <div className='row-t'> */}
          
          <div className='ca-t'>
            <img src={React} className="css" alt=''></img>
            <h2>ReactJS</h2>
          </div>
          <div className='ca-t'>
            <img src={Node} className="css" alt=''></img>
            <h2>NodeJS</h2>
          </div>

          <div className='ca-t'>
            <img src={Mongodb} className="css" alt=''></img>
            <h2>MongoDB</h2>
          </div>
          
          
        {/* </div> */}
      </div>

      <Footer/>


    </div>

  )
}
export default Technology;