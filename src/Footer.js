import React from 'react';
import './Footer.css';

const Footer = (props) => {
  let data = props.data[0];
    return(
        <>
        <footer>
            <div className="top-post-container">
              <div className="main-image">
                 <img src= {data.image} alt="" />
                 <div className="text-main">{data.mheading}<br />
                 <p className="timeline-main">{data.type} {data.timeline}</p>
                </div>
              </div>
              <div className="top-post">
                     Top Posts 
                    <div className="border-bottom"></div>
              </div>
              <div className="tp1 tp">
                 <div className="tpimage-1">
                     <img src={data.image} alt="" height="100%" width="100%" />
                     <div className="tp1-text">
                       <h4>{data.h2}</h4>
                       <p><span>{data.type}</span>{data.timeline}</p>
                     </div>
                     <span className="num">1</span>
                 </div>
              </div>
              <div className="tp2 tp">
                <div className="tpimage-2">
                   <img src={data.image} alt="" height="100%" width="25%" />
                     <div className="tp2-text">
                       <h4>{data.h2}</h4>
                       <p><span>{data.type}</span>{data.timeline}</p>
                     </div>
                     <span className="num">2</span>
                </div>
              </div>
              <div className="tp3 tp">
              <div className="tpimage-3">
                   <img src={data.image} alt="" height="100%" width="25%" />
                     <div className="tp3-text">
                       <h4>{data.h2}</h4>
                       <p><span>{data.type}</span>{data.timeline}</p>
                     </div>
                     <span className="num">3</span>
                </div>
              </div>
              <div className="tp4 tp">
              <div className="tpimage-4">
                   <img src={data.image} alt="" height="100%" width="25%" />
                     <div className="tp4-text">
                       <h4>{data.h2}</h4>
                       <p><span>{data.type}</span>{data.timeline}</p>
                     </div>
                     <span className="num">4</span>
                </div>
              </div>
            </div>

            <div className="latest-stories">
              <div className="l-stories">
                Latest Stories 
                <div className="border-bottom-l"></div>
              </div>

              <div className="latest-story-container">
              <div className="ls-1 ls">
                <h4>{data.h2}</h4>
                <p>{data.story}
                </p>
                <p><b>{data.type}</b>{data.timeline}</p>
              </div>
              <div className="ls-2 ls">
              <h4>{data.h2}</h4>
                <p>{data.story}
                </p>
                <p><b>{data.type}</b>{data.timeline}</p>
              </div>
              <div className="ls-3 ls">
              <h4>{data.h2}</h4>
                <p>{data.story}
                </p>
                <p><b>{data.type}</b>{data.timeline}</p>
              </div>
              </div>
            </div>

            <div className="view-more"><span className="arrow"><i class="fas fa-arrow-down"></i></span>VIEW MORE</div>
        </footer>
        </>
    );
}

export default Footer;
