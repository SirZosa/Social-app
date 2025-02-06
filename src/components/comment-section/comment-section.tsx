import WriteComment from "../write-comment/write-comment";
import userPic from '../../assets/user.svg'
import back from '../../assets/back.svg'
import Comment from "../comment/comment";
import './comment-section.css'
type CommentSectionProps = {
    postId?: string;
}
export default function CommentSection({postId}: CommentSectionProps){

    return(
        <section className="comment-section">
            <button className="comments-close-btn">
                <img src={back} alt="back button" className="close-btn-img" />
            </button>
            <div className="comments">
            <Comment imgSrc={userPic} username="ososa" comment="lorem impsum omar es el mejor de todo el universo digan lo que digan malditas putas" date="9:48 2/4/2025" />
            <Comment
            imgSrc={userPic}
            username="johndoe"
            comment="This is such an insightful post! Thanks for sharing."
            date="10:15 3/4/2025"
            />

            <Comment
            imgSrc={userPic}
            username="techlover22"
            comment="I completely agree with your points. Keep up the great work!"
            date="14:30 4/4/2025"
            />

            <Comment
            imgSrc={userPic}
            username="coding_ninja"
            comment="This tutorial saved me hours of work. You're a lifesaver!"
            date="08:00 5/4/2025"
            />

            <Comment
            imgSrc={userPic}
            username="design_guru"
            comment="Love the design tips! Can't wait to try them out in my next project."
            date="19:45 6/4/2025"
            />

            <Comment
            imgSrc={userPic}
            username="travel_bug"
            comment="Your travel stories are so inspiring. Where are you off to next?"
            date="12:10 7/4/2025"
            />
            <Comment
            imgSrc={userPic}
            username="design_guru"
            comment="Love the design tips! Can't wait to try them out in my next project."
            date="19:45 6/4/2025"
            />

            <Comment
            imgSrc={userPic}
            username="travel_bug"
            comment="Your travel stories are so inspiring. Where are you off to next?"
            date="12:10 7/4/2025"
            />
            </div>
            <WriteComment onSubmit={(comment: string) => console.log(comment)} />
        </section>
    )
}