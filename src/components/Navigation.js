import {Link} from "react-router-dom";
import Logo from '../logo.png'



const Navigation = () => {
	return (
		<div className="nav">
			<div className="navigation">
					<h3 className="logotext">boys Hostel Bit Raipur </h3>
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