import { useLocation, Link } from 'react-router';
import {UserCardFollowers, UserCardFollowing} from '../../components/user-card/user-card';
import './follow.css'
export default function Follow() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  return (
    <>
        <div className='follow-nav'>
            <span className={type == 'followers' ? 'follow-active' : ''}><Link to={`${location.pathname}?type=followers`}>Followers</Link></span>
            <span className={type == 'following' ? 'follow-active' : ''}><Link to={`${location.pathname}?type=following`}>Following</Link></span>
        </div>
        <UserCardFollowers username='ososa'/>
        <UserCardFollowing username='ososa'/>
    </>
  );
}