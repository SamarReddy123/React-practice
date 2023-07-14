import React,{useContext} from 'react';
import Subchild from './Subchild';
import { MainUserContext } from './Contextdata2';
const Child=()=>{
    const maindata=useContext(MainUserContext)
    
    
    return(
        <>
        <h1 style={{color:"red"}}>I am from child component</h1>
         <table className='table table-striped text-center table-hover table-border'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Designation</th>
            </tr>
            </thead>
           <tbody>
           <tr>
                <td>{maindata[0].name}</td>
                <td>{maindata[0].age}</td>
                <td>{maindata[0].designation}</td>
            </tr>
            <tr>
                <td>{maindata[1].name}</td>
                <td>{maindata[1].age}</td>
                <td>{maindata[1].designation}</td>
            </tr>
            <tr>
                <td>{maindata[2].name}</td>
                <td>{maindata[2].age}</td>
                <td>{maindata[2].designation}</td>
            </tr>
           </tbody>
         </table>
        <Subchild></Subchild>
        </>
    )
}
export default Child;