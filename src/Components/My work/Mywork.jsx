import React  from "react";
import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'
import mywork_data from "../../assets/mywork_data";
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return( 
    <div id="work" className="my-works">
        <div className="title">
            <h1>My Latest work</h1>
            <img src={theme} alt="" />
        </div>
          <div className="wrk-container">
            {mywork_data.map((work,index) => { 
             return <img key={index} src={work.w_img} alt="" />
            })
            }
          </div>
          <div className="show-more">
            <p>Show More</p>
            <img src={arrow} alt="" />
          </div>


    </div>
    )
}

export default MyWork