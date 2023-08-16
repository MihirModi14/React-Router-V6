import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    setTimeout(()=> {
      // navigate('/');
      // GO BACK TO PREVIOUS URL
      navigate(-1);
    }, 1000)
  },[]);

  return (
    <div>Not Found</div>
  )
}
