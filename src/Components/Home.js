// Home.js

import React from 'react';
import '../Style.css';
import HeroSection from './Hero_section';


const Home = () => {
  return (
    <>
       
       
       <div className="back">
       <div className="container">
       <div style={{ alignItems: "center" }} className="row">
       
    
          <div className="col-md-6">
 
             <h1>
             <span style={{color: "#1B2F75"}}>The classroom of</span> <span style={{color: "#FFA761"}}> the future is here.</span>
              </h1> 
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>    

                <button>Explore Courses</button>       
 
          </div>

           <div className="col-md-6">
            
            <div className="side-img">

             <img src={process.env.PUBLIC_URL+"/side-img.png"} alt='img' />
            
             </div>
           </div>
           </div>

        </div>
       </div>


       <div className="container">
           <div className="row">
            <div className="book">
           <img className='line' src={process.env.PUBLIC_URL+"/line.png"} alt="line-img" />
          <h1> <span style={{color:"#1B2F75"}}>Book</span><span style={{color:"#FFA761"}}> Classes</span> </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.</p>

</div>
</div>
         <div className="boxes">

        <div className="row">

         <div className="col-md-3">
        
         <div className="box-1">
          

<div className="img-bx">
  <img src={process.env.PUBLIC_URL+"/img1.png"} alt='img' />
</div>

<div className="txt-bx">

  <div className="txt">
    <h3>Mathematics</h3>
    <p>Teacher: James</p>
    <p>Location: USA</p>
  </div>

  <div className="bk-btn">
    <button>Book Us</button>
  </div>

</div>

</div>

         </div>

         <div className="col-md-3">
         <div className="box-1">

<div className="img-bx">
  <img src={process.env.PUBLIC_URL+"/img2.png"} alt='img' />
</div>

<div className="txt-bx">

  <div className="txt">
    <h3>Mathematics</h3>
    <p>Teacher: James</p>
    <p>Location: USA</p>
  </div>

  <div className="bk-btn">
    <button>Book Us</button>
  </div>

</div>

</div>

          
         </div>

         <div className="col-md-3">
         <div className="box-1">

<div className="img-bx">
  <img src={process.env.PUBLIC_URL+"/img3.png"} alt='img' />
</div>

<div className="txt-bx">

  <div className="txt">
    <h3>Mathematics</h3>
    <p>Teacher: James</p>
    <p>Location: USA</p>
  </div>

  <div className="bk-btn">
    <button>Book Us</button>
  </div>

</div>

</div>

         </div>



         <div className="col-md-3">
         <div className="box-1">

<div className="img-bx">
  <img src={process.env.PUBLIC_URL+"/img4.png"} alt='img' />
</div>

<div className="txt-bx">

  <div className="txt">
    <h3>Mathematics</h3>
    <p>Teacher: James</p>
    <p>Location: USA</p>
  </div>

  <div className="bk-btn">
    <button>Book Us</button>
  </div>

</div>

</div>

         </div>





        </div>


      <div className="see">
        <button>See more</button>
      </div>


         </div>


          </div>

        <div className="subjects">

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left">
                  <img src={process.env.PUBLIC_URL+"/left1.png"} alt='img' />
                </div>
              </div>

        <div className="col-md-6">
        <div className="row">
            <div className="book1">
           <img className='line' src={process.env.PUBLIC_URL+"/line.png"} alt="line-img" />
          <h1> <span style={{color:"#1B2F75"}}>Subjects</span><span style={{color:"#FFA761"}}> we teach</span> </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text.</p>

          <div className="row">
            <div className="col-md-6">
              <div className="side1 ">
              <div className="sub1 hv1">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/math.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>Mathematics</h3>
                </div>
              </div>


              <div className="sub1 hv2">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/Biology.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>Biology</h3>
                </div>
              </div>

              <div className="sub1 hv3">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/English.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>English</h3>
                </div>
              </div>

              <div className="sub1 hv4">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/French.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>French</h3>
                </div>
              </div>




              


            </div>
          </div>


          <div className="col-md-6">
              <div className="side1 ">
              <div className="sub1 hv5">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/Chemistry.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>Chemistry</h3>
                </div>
              </div>


              <div className="sub1 hv6">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/Physics.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>Physics</h3>
                </div>
              </div>

              <div className="sub1 hv7">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/German.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>German</h3>
                </div>
              </div>

              <div className="sub1 hv8">
                <div className="icon1">
                  <img src={process.env.PUBLIC_URL+"/Chinese.png"} alt='img'/>
                </div>
                <div className="txts1">
                    <h3>Chinese</h3>
                </div>
              </div>




              


            </div>
          </div>



          </div>
</div>
</div>
        </div>


            </div>
          </div>

        </div>


    {/* /////--Tutor-Section---/////// */}

      <div className="container">

        <div className="tut">
          <h3>Tutors</h3>
          <h1>Meet the Heroes</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

        </div>


         <div className="herosection">
           <HeroSection/>
         



         </div>




      </div>





    </>



 

  );
};

export default Home;
