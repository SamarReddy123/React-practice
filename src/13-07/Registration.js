import React from "react";
const Registration=()=>{
    return(
        <>
         <div>
            <center>
                <h1>Welcome to Registration Page</h1>
                <form>
                    <table>
                        
                      <tbody>
                      <tr>
                        <td>Name : </td>
                        <td><input type="text" name="uname"></input></td>
                      </tr>
                      <tr>
                        <td>Password : </td>
                        <td><input type="password" name="psw"></input></td>
                      </tr>
                      <tr>
                        <td>Email : </td>
                        <td><input type="email" name="mail"></input></td>
                      </tr>
                      <tr>
                        <td>Gender : </td>
                        <td><input type="radio" name="gender" value="male"></input>Male
                        <input type="radio" name="gender" value="female"></input>Female
                        </td>
                      </tr>
                      <tr>
                        <td>MobileNumber : </td>
                        <td><input type="number" name="mno"></input></td>
                      </tr>
                      <tr>
                        <td>Address : </td>
                        <td><input type="textarea" name="addr"></input></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="Register"></input>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                </form>
            </center>
         </div>
        </>
    )
}
export default Registration

