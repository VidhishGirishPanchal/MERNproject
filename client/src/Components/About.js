import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"

function About() {
  const history = useHistory();
    const callAboutPage = async ()=>{
        try {
          const res = await fetch("http://localhost:5000/about", {
            method: "GET",
            headers:{
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            withCredentials: true,
            credentials: 'include'
          })
          const data = await res.json();
          console.log(data);
          if (!res.status===200) {
            const error = new Error(res.error)
            throw(error)
          }
        } catch (err) {
          console.log(err);
          history.push("/signin");
        }
    }
    useEffect(() => {
      callAboutPage();
    }, [])

    return (
       
        <>
          <div className="about_div">
          <form method="GET">
          <div className="about_inner_div">
          <div className="row">
                <div className="col-lg-4 col-sm-12 about_img_div">
                    <img class="about_img" src="https://pixomatic.us/blog/wp-content/uploads/2019/11/pixomatic_1572877223091.png" alt="profile-pic" />
                </div>
                <div className="col-lg-8 col-sm-12 about_img_div">
                        <h3>Vidhish Panchal</h3>
                        <h4 style={{color: 'blue'}}>Web Developer</h4>
                        <div>
                        <h4>About</h4>
                        <table class="table">
  
  <tbody>
    <tr>
      <td>User ID</td>
      <td>43646433335</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Vidhish Panchal</td>
    </tr>
    <tr>
      <td>Email ID</td>
      <td>vidhish@gmail.com</td>
    </tr>
    <tr>
      <td>User ID</td>
      <td>43646433335</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>56433335</td>
    </tr>
    <tr>
      <td>Profession</td>
      <td>Web Developer</td>
    </tr>
    
  </tbody>
</table>
                        </div>
               </div>
             

          </div>
          
                
                </div>  
             </form>   
          </div>  
        </>
    )
}

export default About
