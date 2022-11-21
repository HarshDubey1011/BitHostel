import {Link} from "react-router-dom";
import Logo from '../logo.jpg'



const Navigation = () => {
	return (
		<div className="nav">
			<div className="navigation">
				<div className="logoImage">
				<img src={Logo} alt="Image is not available" className="logo" /><h3 className="logotext"><small>B</small>it <small>R</small>aipur <small>B</small>oys <small>H</small>ostel</h3>
				</div>
       							 <ul className="nav-align">
         							 <li>
           								 <Link to="/">Home</Link>
          							 </li>
							         <li>
							             <Link to="/council">Council</Link>
							         </li>
						             <li>
						           		 <Link to="/rooms">Rooms</Link>
						             </li>
							         <li>
							             <Link to="/events">Events</Link>
							         </li>
							         <li>
							             <Link to="/gallery">Gallery</Link>
						             </li>
							         <li>
							             <Link to="/contact">Contact</Link>
						             </li>
   								 </ul>
       				 </div>
       			</div>
		)
}

export default Navigation
//<img src={MainImage} alt="Image is not available" className="mainImage" />