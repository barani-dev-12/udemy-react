import saleimage from "../assets/images/sale-image.png"

function Saleimage(){
    return (
        <div className="sale-image">
      <img src={saleimage} alt="Sale advertisement"></img>
      <div className="sale-image_ad">
      <h1>Confidently Build Your Career</h1>
      <p>Take your next step with the skills of Today(and Tommorow).</p>
      <p>Courses from ₹519 ends Feb 28.</p>
    </div>
    </div>
    )
}

export default Saleimage