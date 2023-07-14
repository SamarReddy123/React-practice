import React, { useState } from "react";
let Product=()=>{
 let[state,setState]=useState(
   {
    products:{
        pno:100,
        pname:"watch",
        pimg:'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_jaztso3_AhXUE3IKHQ3FB_IYABAOGgJzZg&ohost=www.google.com&cid=CAESbOD2v4-wceJzkJ6HQoMxjLiryEEyHpBY_BjVKPnhIfPy78WegfI62qUF5HyCpVKSP6H4euXx73uyGdCc5eQJHt4sikFJckITdKgGpveljBw5ZyenRMd73_TYMh3e6L01jHF70dm9C3nTF3bZSA&sig=AOD64_1zMRb94dsxSE5aaKaE2GZBBffMuA&ctype=5&q=&ved=2ahUKEwiAxqTtso3_AhUiSmwGHeE3CGQQ9aACKAB6BAgHEDI&adurl=',
        pcost:1500,
        pquty:1,
        
   }
   }
 )
 let{products}=state;

 let incre=()=>{
    setState((state)=>({
         products:{
            ...state.products,
           pquty: state.products.pquty+1
         }
    }))
 }

 let decre=()=>{
    setState((state)=>({
         products:{
            ...state.products,
           pquty: state.products.pquty-1>0?state.products.pquty-1:1
         }
    }))
 }
    return(
        <>
     
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">Product Item</p>
                    <p>this product is good for all and this product is sold in online very well and features are very well and one more thing is gaming proccesser is better try it once
                    </p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-striped text-center table-hover">
                        <thead className="bg-primary">
                            <tr>
                                <th>pno</th>
                                <th>pname</th>
                                <th>pimg</th>
                                <th>pcost</th>
                                <th>pquty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{products.pno}</td>
                                <td>{products.pname}</td>
                                <td>
                                   <img src={products.pimg} alt="" width={40} height={40}/>
                                </td>
                                <td>{products.pcost}</td>
                                <td>
                                    <i onClick={decre} className="fa fa-minus-circle mx-1"></i>
                                    {products.pquty}
                                    <i onClick={incre} className="fa fa-plus-square mx-1"></i>
                                </td>
                                <td>{products.pquty*products.pcost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
export default Product