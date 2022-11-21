
import './Header.css'

const Header = () => {
	return (
			<div className="Header">
				<div className = "box">
					<p className="text">Welcome To <small><br />BIT Raipur Boys Hostel</small></p>
					{/* <p className="text text2">Be A Catalyst And Create Change In The Lives Of Academically Brilliant Students With High Potential</p> */}
				</div>
				<div className="links">
					<button>Submit</button>
					<button>Submit</button>
					<button>Apply Now</button>
					<button>Login</button>
				</div>
			</div>
			)
}

export default Header;