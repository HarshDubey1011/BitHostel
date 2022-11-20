import {Link} from "react-router-dom";
import BitImage from '../bit7.png'
import MainImage from '../MainImage.jpg'


const Navigation = () => {
	return (
			<div>
				<img src={MainImage} alt="Image is not available" className="mainImage" />
     						 <div className="nav">
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
