import './post.css';
import {useState} from 'react';
import LottiePlayer from '../lottie-player/lottie-player.tsx';
import heart from '../../assets/heart.json';
import save from '../../assets/save.json';
import comment from '../../assets/comment.json';
import send from '../../assets/send.svg';
type PostProps = {
    imgSrc?: string;
    username: string;
    content: string;
    date: string;
    likes?: number;
    commemtsNumber: number;
}
export default function Post({imgSrc="", username, content, date, likes=0, commemtsNumber=0}: PostProps){
    const [liked, setLiked] = useState(false);
    return(
        <article className="post">
            <header className="post-header">
                <img src={imgSrc} alt="profile pic" />
                <span>{username}</span>
            </header>
            <p className="post-content">{content}</p>
            <span className="date">{date}</span>
            <div className="icons">
                <div className="likes">
                    <span className="num-of-likes">{likes}</span>
                    <LottiePlayer animationDataSrc={heart} startFrame={5} endFrame={10} isActive={true} width={30} height={30}/>
                </div>
                <div className="comments">
                    <span className='num-of-comments'>{commemtsNumber}</span>
                    <LottiePlayer animationDataSrc={comment} startFrame={1} endFrame={0} isActive={false} width={40} height={40} autoplay={true} loop={true}/>
                </div>
                <LottiePlayer animationDataSrc={save} startFrame={1} endFrame={0} isActive={false} width={30} height={30}/>
            </div>
        </article>
    )
}