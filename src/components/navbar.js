export default Navbar
function Navbar(){
    return (
        <div className="navbar">
      <div className="navbar-s1">
        <h1 className="navbar-s1_title">Udemy</h1>
      </div>
      <div className="navbar-s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for anything here.Tech,Business,Art..." />
      </div>
      <div className="navbar-s3">
        <p className="navbar-s3_contents">Courses</p>
        <div className="mylearning">
          <p className="navbar-s3_contents">My Learning</p>
          <div className="mylearning_popup">
            <p>You didn't enroll any courses</p>
          </div>
        </div>
        <div className="navbar-s3_icon">
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
        </div>
       
      </div>
    </div>
    )
}