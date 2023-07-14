import React, { useState } from "react";
import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';

let Imgcards=()=>{
    const [state,setState]=useState("")
    const[data,setData]=useState("")
    const read1=()=>{
        setState("my name is samarasimha reddy i am living here....")
    }
    const read2=()=>{
        setData("my name is samarasimha reddy i am living here....")
    }
    const read3=()=>{
        setState("my name is samarasimha reddy i am living here....")
    }
    const read4=()=>{
        setState("my name is samarasimha reddy i am living here....")
    }
    return(
        <React.Fragment>
            <h2>Image Cards In React</h2>
           {/* <img src={image5} alt="" height={200} width={200}/> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image1} alt=""/>
                            <div className="card-body">
                                <h4>Home</h4>
                                <p>Thi is my home</p> 
                                <p>{state}</p>
                                <button className="btn btn-dark" onClick={read1}>Readmore</button> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image2} alt=""/>
                            <div className="card-body">
                                <h4>County</h4>
                                <p>Favorite Place</p> 
                                <p>hhreuihkjnijghrutyyiooj  teut uhteyyr ieiuyeyyt ytueiuuere iretgrerie rytry4y5 i4iy7y9ryiht y74y5iuiuhiu4uyi7 r74y4r7yt 7y u4y45754y5 74y594y5 87</p>
                                <p>{data}</p>
                                <button className="btn btn-primary" onClick={read2}>Readmore</button> 
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image3} alt=""/>
                            <div className="card-body">
                                <h4>Location</h4>
                                <p>This is awesome right</p>
                                <p>{state}</p> 
                                <button className="btn btn-dark" onClick={read3}>Readmore</button> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <img src={image4} alt=""/>
                            <div className="card-body">
                                <h3>Paris</h3>
                                <p>Evening view</p> 
                                <p>{state}</p>
                                <button className="btn btn-success" onClick={read4}>ReadMore</button> 
                            </div>
                        </div>
                    </div>
                
                
                </div>
            </div>           
        </React.Fragment>
    );
}
export default Imgcards