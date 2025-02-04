import './post.css';
type PostProps = {
    imgSrc?: string;
    username: string;
    content: string;
    date: string;
}
export default function Post({imgSrc="", username, content, date}: PostProps){
    return(
        <article className="post">
            <header className="post-header">
                <img src={imgSrc} alt="profile pic" />
                <span>{username}</span>
            </header>
            <p className="post-content">{content}</p>
            <span className="date">{date}</span>
        </article>
    )
}