import {MdEmojiEmotions,MdMenuBook,MdTv,MdGroup} from "react-icons/md"


import "./index.css"
import RequestCall from "../RequestCall"


const FirstComponent = () => {
  return (
    <div className='main-container'>
        <div className="content">
            <h1 className='head'>Become ACCA in 18 months</h1>
            <p className='paragraph'>Acquire globally recognized 
                accountancy qualification, 
                ACCA (also called as Global CA), 
             and get placed in top MNCs & Big4s.
            Begin ACCA prep with 1FIN now.</p>
       <div className='cards-container'>
       
        <div className='card'>
            <div className="emoji">
                <MdEmojiEmotions/>
                <p className="title">Registered Users</p>
            </div>
            <p className="num">222,120</p>
            <div>

            </div>

        </div>


        <div className='card'>
            <div className="emoji">
                <MdMenuBook/>
                <p className="title">Courses Enrolled</p>
            </div>
            <p className="num">65,410</p>
            <div>

            </div>

        </div>



        <div className='card'>
            <div className="emoji">
                <MdTv/>
                <p className="title">Minutes Watched</p>
            </div>
            <p className="num">2,850,333,104</p>
            <div>

            </div>

        </div>



        <div className='card'>
            <div className="emoji">
                <MdGroup/>
                <p className="title">Faculty</p>
            </div>
            <p className="num">10 Experts</p>
            <div>

            </div>

        </div>



      
      
      
       </div>
       
       <div className="button-container">
        <button className="btn btn-primary mr-2"> Download Brochure </button>
       <div className="bg-danger p-2 text-center">

        <p className="text-light">SILVER LEARNING PARTNER</p>
        <p className="text-light">ACCA</p>
       </div>
       
       </div>
      
       
        </div>

        <RequestCall/>


    </div>
  )
}

export default FirstComponent