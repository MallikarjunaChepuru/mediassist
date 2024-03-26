import { MdMenuBook } from "react-icons/md"
import {GiAlarmClock} from "react-icons/gi"
import {BsLaptop,BsCalendarCheck} from "react-icons/bs"
import "./index.css"

const SecondComponent = () => {
  return (
    <div className='second-container'>
        <h1>Why Choose Us?</h1>
        <hr/>
        <div className='card-container'>
            <div className='card-sub'>
                <img className="card-image" alt='concept' src="https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672193042/ca_concept_qcvflm.png"/>
                <h1 className='card-head'>Expert Faculty</h1>
               
               
                <p className='card-para'>Our Faculty are subject matter expertise with practical experience.
                     They believe in #StudentFirst principle</p>

            </div>

          

            <div className='card-sub'>
                    <img
                     alt='faculties'
                     className="card-image"
                    src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672193065/ca_top_faculties_z7mwyw.png'
                   
                    />
                    <h1 className='card-head'>Complete Success Package</h1>
                    <p className='card-para'>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums,
                     E-notes from Kaplan, MCQs, Practice tests, Webinars.</p>
                </div>


                <div className='card-sub'>
                    <img

                     alt='views'
                     className="card-image"
                    src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672193054/ca_unlimited_views_t8jw1w.png'
                   
                    />
                    <h1 className='card-head'>Placements</h1>
                    <p className='card-para'>Resume building workshops, mock interviews and placement drives will help you 
                    impress the top employers and get the dream job.</p>
                </div>
       
       
       
       
        </div>

         <div className="card-mini-container">
            <div className="card">
                <p className="tit">Levels</p>
                <div className="emoji">
                    <MdMenuBook/>
                    <p className="num">Three (13 papers)</p>

                </div>
            </div>



            <div className="card">
                <p className="tit">Duration</p>
                <div className="emoji">
                    <GiAlarmClock/>
                    <p className="num">6-30 months</p>

                </div>
            </div>



            <div className="card">
                <p className="tit">Exams</p>
                <div className="emoji">
                    <BsLaptop/>
                    <p className="num">6-30 months</p>

                </div>
            </div>




            <div className="card">
                <p className="tit">Exemptions</p>
                <div className="emoji">
                    <BsCalendarCheck/>
                    <p className="num">Upto 9 months</p>

                </div>
            </div>
        
        
        
        
         </div>


    </div>
  )
}

export default SecondComponent