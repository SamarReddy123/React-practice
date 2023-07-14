import React, { useContext } from "react";
import { Usercontext2 } from "./Usecontext2";
const Ucsubchild=()=>{
    const data2=useContext(Usercontext2);
    return(
        <>
        <h1>I Am from Ucsubchild.....</h1>
        <div>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>COURSE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data2[0].name}</td>
                        <td>{data2[0].age}</td>
                        <td>{data2[0].course}</td>
                    </tr>
                    <tr>
                        <td>{data2[1].name}</td>
                        <td>{data2[1].age}</td>
                        <td>{data2[1].course}</td>
                    </tr>
                    <tr>
                        <td>{data2[2].name}</td>
                        <td>{data2[2].age}</td>
                        <td>{data2[2].course}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Ucsubchild