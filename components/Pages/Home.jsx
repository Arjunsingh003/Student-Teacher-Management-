import React from 'react'
// import Sidebar from '../Sidebar'
// import Navbar from '../Navbar'
// import logo from '../../assets/TechCademy-logos.jpeg'
// import homeImage from '../../assets/homeImage.jpg'
import Footer from '../Footer';


const Home = ({ inactive, toggleoff }) => {
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >

        <div className="container">
          <div className="heading d-flex my-2">
            <h1 style={{ fontFamily: 'Arvo' }}>Welcome to Student Teacher Management</h1>
          
          </div>
          <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
            <p>
          
              <br />
              Introducing our student-teacher management app, designed to streamline the educational experience 
              for both students and teachers. Our app allows teachers to easily create and manage their classes,
               assignments, and student grades in one centralized location. Students can access all their course 
               materials, submit assignments, and track their progress in real-time. With a user-friendly interface
                and intuitive features, our app helps to enhance collaboration and communication between teachers 
                and students, making education more efficient and effective for everyone involved. Try it today
                 and see the difference it can make in your learning experience!
            </p>
            <img src={"https://th.bing.com/th?id=OIP.B9Ci0gCBzvp48tk9G-jygAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} id="homeImage" alt=""/>
            {/* https://cdn.dribbble.com/users/1235346/screenshots/3252385/job.gif */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home