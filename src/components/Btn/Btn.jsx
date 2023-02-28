import { useNavigate, useLocation } from 'react-router-dom';
import s from './Btn.module.css';

export default function Btn({ text }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);
  return (
    <button className={s.btn} onClick={goBack}>
      <span>{text}</span>
    </button>
  );
}
