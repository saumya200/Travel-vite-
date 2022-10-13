import React from 'react'
import data from '../../data'
import './Section.css'


function Section() {
  return (
    <div className="hero">
        {data.map(x=>{
            return(
                <div className='card'>
                  <div className='image--hero'>
                      <img src={x.imageUrl} className="card--image" alt="image"/>
                      </div>
                      <div className='card--stats'>
                      <h2>{x.location}  </h2>
                    <h4>{x.startDate}-{x.endDate}</h4>
                    <p className='description'>{x.description}</p>

                        
                        
                      </div>
                    
                
                        </div>
            )
        })}
    </div>
  )
}

export default Section