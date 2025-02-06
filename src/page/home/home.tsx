import Post from "../../components/post/post";
import user from '../../assets/user.svg';
import WriteComment from "../../components/write-comment/write-comment";
import './home.css';
export default function Home(){
    return(
        <section className="feed">
            <WriteComment onSubmit={(comment) => console.log(comment)} />
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