import './comment.css'
type CommentProps = {
    username: string;
    comment: string;
    imgSrc: string;
    date: string;
}
export default function Comment({username, comment, imgSrc, date}: CommentProps){
    return(
        <div className="comment">
            <img src={imgSrc} alt="profile pic" className="comment-profile-pic" />
            <div className="comment-content">
                <div className="comment-info">
                    <span className="comment-username">{username}</span>
                    <p className="comment-text">{comment}</p>
                </div>
                <span className="comment-date">{date}</span>
            </div>
        </div>
    )
}