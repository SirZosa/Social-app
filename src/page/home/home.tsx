import {useState, useEffect} from 'react';
import SkeletonComponent from '../../components/skeleton/skeleton-component';
import Post from "../../components/post/post";
import user from '../../assets/user.svg';
import WriteComment from "../../components/write-comment/write-comment";
import Comment from '../../components/comment/comment';
import userPic from '../../assets/user.svg';
import './home.css';
export default function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    return(
        <section className="feed">
            <WriteComment onSubmit={(comment) => console.log(comment)} />
            <SkeletonComponent variant="post"/>
            <Comment imgSrc={userPic} username="ososa" comment="lorem impsum omar es el mejor de todo el universo digan lo que digan malditas putas" date="9:48 2/4/2025" />
            <Post imgSrc={user} username="ososa" content="lorem impsum omar es el mejor de todo el universo digan lo que digan malditas putas" date="9:48 2/4/2025" />
            <Post imgSrc={user} username="johndoe" content="Just had a great day at the park!" date="10:15 2/4/2025" />
            <Post imgSrc={user} username="janedoe" content="Loving the new React features!" date="11:30 2/4/2025" />
            <Post imgSrc={user} username="alice" content="Can't wait for the weekend!" date="12:45 2/4/2025" />
            <Post imgSrc={user} username="ososa" content="lorem impsum omar es el mejor de todo el universo digan lo que digan malditas putas" date="9:48 2/4/2025" />
            <Post imgSrc={user} username="johndoe" content="Just had a great day at the park!" date="10:15 2/4/2025" />
            <Post imgSrc={user} username="janedoe" content="Loving the new React features!" date="11:30 2/4/2025" />
            <Post imgSrc={user} username="alice" content="Can't wait for the weekend!" date="12:45 2/4/2025" />
        </section>
    )
}