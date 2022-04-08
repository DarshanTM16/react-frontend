import React from 'react';
import './hero.css';

const Hero = (props) => {
    let data = props.data[0];
    return(
        <>
         <div className="hero">
             <div className="left">
                <img src={data.image} alt="" height="100%" width="100%" />
                <div className="text">{data.mheading} <br />
                 <p className="timeline">{data.type}{data.timeline} </p>
                </div>
             </div>
             <div className="right-top">
                <img src={data.image} alt="" height="100%" width="100%" />
             </div>
             <div className="right-bottom">
                <img src={data.image} alt="" height="100%" width="100%" />
             </div>
         </div>

         <div className="the-latest">
                 The Latest 
                 <div className="border-bottom"></div>
             </div>

         <div className="article">
             <div className="a1 a">
                 <img src={data.image} alt=""  height="55%" width="100%" />
                 <div className="a-info">
                     <h4>{data.h1} </h4>
                     <p>{data.h1description} </p>

                     <p><b>{data.type}</b>{data.timeline}</p>
                 </div>
             </div>
             <div className="a2 a">
             <img src={data.image} alt=""  height="55%" width="100%" />
                 <div className="a-info">
                     <h4>{data.h1}</h4>
                     <p>{data.h1description}</p>

                     <p><b>{data.type}</b>{data.timeline}</p>
                 </div>
             </div>
             <div className="a3 a">
             <img src={data.image} alt=""  height="55%" width="100%" />
                 <div className="a-info">
                     <h4>{data.h1}</h4>
                     <p>{data.h1description}</p>

                     <p><b>{data.type}</b>{data.timeline}</p>
                 </div>
             </div>
         </div>

         <div className="latest-articles">
             Latest Articles 
             <div className="border-bottom"></div>
         </div>

         <div className="article-2">
             <div className="latest-1 latest">
             <img src={data.image} alt="" height="70%" width="50%" />
                 <div className="art-1 art">
                     <h4>{data.h2} </h4>
                     <p>{data.h2description} </p>
                     <br />
                     <span>{data.type}</span>{data.timeline}
                 </div>
             </div>
             <div className="latest-2 latest">
             <img src={data.image} alt="" height="70%" width="50%" />
                 <div className="art-2 art">
                     <h4>{data.h2}</h4>
                     <p>{data.h2description}</p>
                     <br />
                     <p><span>{data.type}</span>{data.timeline}</p>
                 </div>
             </div>
             <div className="latest-3 latest">
             <img src={data.image} alt="" height="70%" width="50%" />
                 <div className="art-3 art">
                     <h4>{data.h2}</h4>
                     <p>{data.h2description}</p>
                     <br />
                     <p><span>{data.type}</span>{data.timeline}</p>
                 </div>
             </div>
             <div className="latest-4 latest">
             <img src={data.image} alt="" height="70%" width="50%" />
                 <div className="art-4 art">
                     <h4>{data.h2}</h4>
                     <p>{data.h2description}</p>
                     <br />
                     <p><span>{data.type}</span>{data.timeline}</p>
                 </div>
             </div>
             <div className="advertisement">
                 Advertisement
             </div>
         </div>

         <div className="load-more"><span className="arrow"><i class="fas fa-arrow-down"></i></span>LOAD MORE</div>
        </>
    )
}

export default Hero;