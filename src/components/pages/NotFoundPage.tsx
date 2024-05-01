import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(-1), 2000);
  });
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        color: 'red',
        fontSize: '10rem'
      }}>
      404 NotFoundPage
    </div>
  );
}
