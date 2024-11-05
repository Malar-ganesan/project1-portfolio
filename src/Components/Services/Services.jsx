import React from 'react'
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import arrow from '../../assets/arrow_icon.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
    return(
        <div id='services' className='Servies'>
            <div className="service-title">
                <h1>MY Services</h1>
                <img src={theme} alt="" />
            </div>
            <div className="my-services">
                {Services_Data.map((service, index) => {
                 return <div key={index} className="box">
                    <h2>{service.s_no}</h2>
                    <h1>{service.s_name}</h1>
                    <p>{service.s_desc}</p>
                    <div className="read">
                        <p>read More</p>
                        <img src={arrow} alt="" /> 
                    </div>
                  </div>
                })
                }
            </div>

        </div>
    )
}

export default Services