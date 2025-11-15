import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icon-arrow-back-ios.png';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="header-container">
      <button className="back-button" type="button" onClick={handleBack}>
        <img src={backIcon} alt="뒤로가기" className="back-icon" />
      </button>
    </div>
  );
};

export default Header;

