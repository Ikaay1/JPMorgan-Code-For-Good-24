import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';

const HomeSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='sidebar'>
        <div
          className='profile-icon-wrapper'
          onClick={() => navigate('/chat')}
          style={{cursor: 'pointer'}}
        >
          <img src={logo} alt='Logo' className='profile-icon' />
        </div>

        <div className='sidebar-items-container'>
          <div
            className='sidebar-item'
            onClick={() => navigate('/patient-overview')}
          >
            Patient Page
          </div>
          <div className='sidebar-item' onClick={() => navigate('/hr-report')}>
            Reports
          </div>
          <div className='sidebar-item' onClick={() => navigate('/')}>
            Log Off
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSidebar;
