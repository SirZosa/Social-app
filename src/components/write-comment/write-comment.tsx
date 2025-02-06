import send from '../../assets/send.svg';
import './write-comment.css';

type WriteCommentProps = {
    onSubmit: (comment: string) => void;
}

export default function WriteComment({ onSubmit }: WriteCommentProps) {
    return (
        <form className="write-comment" onSubmit={(e) => {
            e.preventDefault();
            const elements = e.currentTarget.elements;
            const commentInput = elements.namedItem('comment') as HTMLInputElement;
            onSubmit(commentInput.value);
            e.currentTarget.reset(); // Optionally reset the form after submission
        }}>
            <input type="text" name="comment" placeholder="Write a comment..." />
            <button type="submit">
                <img src={send} alt="send" />
            </button>
        </form>
    )
}