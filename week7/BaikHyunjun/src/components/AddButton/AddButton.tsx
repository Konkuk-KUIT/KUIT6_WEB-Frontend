import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import './AddButton.css';

const AddButton = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/Cart');
  };

  return (
    <Button onClick={handleAdd} type="button" size="sm">
      담기
    </Button>
  );
};

export default AddButton;

