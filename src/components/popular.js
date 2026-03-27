import Popular_1 from "../assets/images/popular1.jfif"
import Popular_2 from "../assets/images/popular2.jfif"
import Popular_3 from "../assets/images/popular3.jfif"
import Popular_4 from "../assets/images/popular4.jfif"
import Popular_5 from "../assets/images/popular5.jfif"
import Popular_6 from "../assets/images/popular6.jfif"
import Popular_7 from "../assets/images/popular7.jfif"
import Popular_8 from "../assets/images/popular8.jfif"

export default Popular

function Popular(){
    return (
    <div className="popular">
      <h1 className="popular_heading">Most Popular</h1>
      <p className="popular_content">Pick the best Fit</p>

      <div className="popular-container">

        <div className="course_card">
          <img src={Popular_1} alt="Python Course Image" />
          <h3>The Complete Python Bootcamp From Zero to Hero in Python</h3>
          <p>Course by: Jose Portilla, Pierian Training</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>₹1499 <del>₹5000</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_2} alt="Bootcamp Course Image" />
          <h3>100 Days of Code™: The Complete Python Pro Bootcamp</h3>
          <p>Course by: Dr. Angela Yu</p>
          <p>4.7 ⭐⭐⭐⭐</p>
          <p>₹3109 <del>₹5000</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_3} alt="Redux Course Image" />
          <h3>React - The Complete Guide (incl. Next.js, Redux)</h3>
          <p>Course by: Maximilian Schwarzmüller</p>
          <p>4.7 ⭐⭐⭐⭐</p>
          <p>₹3459 <del>₹5000</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_4} alt="Zero to Expert Course Image" />
          <h3>The Complete JavaScript Course 2025: From Zero to Expert!</h3>
          <p>Course by: Jonas Schmedtmann</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>₹3459 <del>₹5000</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_5} alt="AI Engineer Course Image" />
          <h3>The AI Engineer Course 2026: Complete AI Engineer Bootcamp</h3>
          <p>Course by: 365 Coders</p>
          <p>4.8 ⭐⭐⭐⭐</p>
          <p>₹4199 <del>₹10000</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_6} alt="Graphic Course Image" />
          <h3>Graphic Design Masterclass - Learn GREAT Design</h3>
          <p>Course by: Lindsay Marsh</p>
          <p>4.5 ⭐⭐⭐⭐</p>
          <p>₹2199 <del>₹5999</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_7} alt="Angular Course Image" />
          <h3>Redux in Angular (2 and 4+)</h3>
          <p>Course by: Mosh Hamedani</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>₹4199 <del>₹10999</del></p>
        </div>

        <div className="course_card">
          <img src={Popular_8} alt="React Course Image" />
          <h3>Custom React Hooks Crash Course: Learn Hooks Through 6 Apps</h3>
          <p>Course by: Akos Komuves</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>₹1509 <del>₹8999</del></p>
        </div>

      </div>
    </div>
  );
}


    
