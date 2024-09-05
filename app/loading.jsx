'use client'
import Cliploader from 'react-spinners/ClipLoader';
const overide={
  display: 'block',
  margin:'100px auto'
}
const LoadingPage = () => {
  return <Cliploader color="#3b82f6" cssOverride={overide} size={150} ariel-label='Loading spinner' />;
}
 
export default LoadingPage;