import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import profile from './profile.css'


class Profile extends Component {
    render() {
        return (
            <>
                <h1 >User Info</h1>
                <section>
                    <h3 class="" class="nameM" >
                        Name: jhony deep
                    </h3>
                    <h3 id="firstH" class="nameM" >
                        Email:zxy@mail.com
                    </h3>
                    <img class="ImgH" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308458-stock-illustration-unknown-person-silhouette-profile-picture.jpg" alt="person" />

                </section>
                <br />
                <br />
                <br />
                <br />
                <section>
                    <form  id="formP">
                        <h3>Apply For Promotion</h3>
                        <label for="fname">Name</label><br/>
                        <input type="text" id="fname" name="firstname" placeholder="Your name:" />
                            <br/>
                            <label for="lname">Skills</label><br/>
                            <input type="text" id="fname"  placeholder="Your Skills:" />
                            <br/>                            
                            <label for="country">Bio</label><br/>
                            <input type="text" id="fname"  placeholder="Bio:" />
                            <br/>
                            <input type="submit" value="Submit"/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h3>Work Samples</h3>

                            <a href="https://react-bootstrap.github.io/">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7XHu3wnZsZ1J_8gZ9hAVCke3xaxM4QBI1w&usqp=CAU"/>
                            
                            </a>
                            <a href="https://react-bootstrap.github.io/">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7XHu3wnZsZ1J_8gZ9hAVCke3xaxM4QBI1w&usqp=CAU"/>
                            
                            </a>  <a href="https://react-bootstrap.github.io/">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7XHu3wnZsZ1J_8gZ9hAVCke3xaxM4QBI1w&usqp=CAU"/>
                            
                            </a>
                            <br/>
                            <br/>
                            <label for="fname">Contact Info</label><br/>
                        <input type="text" id="fname" name="firstname" placeholder="Contact Info" />
                        <br/>

                        <label for="fname">Phone</label><br/>
                        <input type="text" id="fname" name="firstname" placeholder="Phone #" />
                        <br/>

                        <label for="fname">Website Url</label><br/>
                        <input type="text" id="fname" name="firstname" placeholder="Website Url" />
                        <br/>
                            <br/>
                        <input type="submit" value="Submit"/>

                    </form>
                    </section>
            </>
                        )
    }
}

export default Profile
