import image_one from "../assets/images/image1.jpg"
import image_two from "../assets/images/image2.jpg"
import image_three from "../assets/images/image3.jpg"
import image_four from "../assets/images/image4.jpg"

export default Recommended

function Recommended(){
    return (
        <div className="recommended">
      <h1 className="recommended_title">Recommended For You</h1>
      <p className="recommended_instruction">Pick the Best Fit</p>
      <div className="recommended_container">
        <div className="course_card">
        <img src={image_one} alt="Data Science Course"></img>
        <h3>2023 Python Data Visualization Masterclass</h3>
        <p>Course by: Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>₹499 <del>₹1999</del></p>
      </div>
      <div className="course_card">
        <img src={image_two} alt="Advanced Course"></img>
        <h3>Basic to Advanced programming with EMC</h3>
        <p>Course by: Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>₹499 <del>₹1999</del></p>
      </div>
      <div className="course_card">
        <img src={image_three} alt="Web dev Course"></img>
        <h3>Web Development Bootcamp</h3>
        <p>Course by: Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>₹499 <del>₹1999</del></p>
      </div>
      <div className="course_card">
        <img src={image_four} alt="UI/UX Course"></img>
        <h3>Master UI/UX Designing with Figma</h3>
        <p>Course by: Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>₹499 <del>₹1999</del></p>
      </div>
      </div>
    </div>
    )
}