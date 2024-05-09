import { useNavigate } from 'react-router-dom'
import img1 from '../Images/Brunel.png'
import img2 from '../Images/Girl1.jpeg'
// import img3 from '../Images/gray.avif'
import img4 from '../Images/cIcon.png'
import img5 from '../Images/greenlogo.jpg'
import img6 from "../Images/fourty.jpg"
import '../Styles/FirstPage.css'
const FirstPage = () => {
    let navigate = useNavigate();
    function secondpage() {
        navigate("/secondpage")
    }
    return (
        <div className="firstpage">
            <div className="navbar">
                <img src={img1} alt="" />
                <button onClick={secondpage} id='a'>Get Projects</button>
                <button id='b'>Onboard Talent</button>
            </div>
            <div className="hero">
                <p id='c'>success stories</p>
                <h1>Every success journey</h1>
                <h1>We've encountered.</h1>
                <div className="first">
                    <img height={500} width={500} src={img2} alt="" />
                    <h1>Enhance fortune 50 <br />company's insights <br /> team research <br />capabilities </h1>
                </div>
                <div className="second">
                    <img height={70} width={70} src={img6} alt="" />
                    <p>Achieved reduction in <br />project execution time <br />by optimising team <br /> availability</p>
                </div>
                <div className="third">
                    <div className="greenlogo">
                        <img height={50} width={50} src={img5} alt="" />
                    </div>
                    <div className="10days">
                    <h3>10 DAYS</h3>
                    <p>Staff Deployment</p>
                    </div>
                   
                </div>
                <div className="fourth">
                    <div className="million">
                    <h1>$0.5</h1>
                    <h2 id="million1">MILLION</h2>
                    </div>
                    <p>Reduced client expenses <br />by saving on hiring and <br /> employee costs .</p>
                </div>
                <button id='d'>Explore More→ </button>
            </div>
            <div className="end">
                {/* <img src={img3} alt="" /> */}
                <div className="left">
                    <p>What's on your mind</p>
                    <h1>Ask Questions</h1>
                </div>
                <div className="right">
                    <div className="r1">
                        <h3>Do you offer freelances?</h3>
                        <h3>+</h3>
                    </div>
                    <hr />
                    <div className="r2">
                        <h3>What's the guarantee that i will be satisfied <br />with the hired talent?</h3>
                        <h3>+</h3>
                    </div>
                    <hr />
                    <div className="r3">
                        <h3>Can I hire multiple talents at once?</h3>
                        <h3>-</h3>
                    </div>
                    <p>If unhappy with a project,communicate with the freelancer,allow for revisions.and <br /> refer to the agreement.Escalate to platform support if needed,considering <br /> meditation.Review policies,seek collaborative solutions for resolution.</p>
                    <hr />
                    <div className="r4">
                        <h3>Why should I not to go to an agency directly?</h3>
                        <h3>+</h3>
                    </div>
                    <hr />
                    <div className="r5">
                        <h3>Why should I not to go to an agency directly?</h3>
                        <h3>+</h3>
                    </div>
                    <hr />
                    <div className="r6">
                        <h3>Who can help me pick a right skillset <br />and duration for me?</h3>
                        <h3>+</h3>
                    </div>
                    <hr />

                </div>
            </div>
            <div className="final">
                <img height={15} width={15} src={img4} alt="" />
                <p>Thalup 2023.All rights reserved</p>
                <a id="e" href="">Terms and Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    )
}
export default FirstPage;