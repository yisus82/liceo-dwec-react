import { Link } from 'react-router-dom';
import './Error.css';

const Error: React.FC = () => (
  <div id='error'>
    <h1>ERROR</h1>
    <p>There was an unexpected error. Please try again later.</p>
    <Link to='/'>Go back to the main page</Link>
  </div>
);

export default Error;
