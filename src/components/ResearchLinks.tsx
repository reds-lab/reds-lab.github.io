import { Link } from 'react-router-dom';
const dataCentric  = "https://res.cloudinary.com/dqjycckyb/image/upload/v1720823146/ce7c6klrf5jbd7g6x2df.gif";
const ssaImage =  "https://res.cloudinary.com/dqjycckyb/image/upload/v1720823146/ejxmicj4nhlgzz7dz4sq.gif";
import privacyImage from "../assets/content/Research/privacy.webp"

const ResearchLinks = () => {
  return <table className="research-bubble">
  <tbody>
    <tr>
    <Link to="/research/data-centric-ai">
      <td className="rb-img">
        <img src={dataCentric} alt="Data-Centric AI" />
      </td>
      <td className="rb-text">
        Better Data, Better Models
      </td>
      </Link>
    </tr>
    <tr>
      <Link to="/research/safety-security-alignment">
      <td className="rb-img">
         <img src={ssaImage} alt="Safety, Security, and Alignment" />
      </td>
      <td className="rb-text">
        Safety, Security, and Alignment
      </td>
      </Link>
    </tr>
    <tr>
      <Link to="/research/privacy">
      <td className="rb-img">
        <img src={privacyImage} alt="Privacy" />
      </td>
      <td className="rb-text">
        Privacy Risk Assessment
      </td>
      </Link>
    </tr>
  </tbody>
</table>
}

export default ResearchLinks;