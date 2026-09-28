import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          
        </li>
      <li>
        
  <Link to="/domestic" onClick={() => window.scrollTo(0, 0)}>Domestic</Link>
</li>
        {/* Adutha links... */}
      </ul>
    </nav>
  );   
};
export default Navbar;