import classes from './PostCreator.module.css'
import {useState} from "react";
import {useMessages} from "../../contexts/MessagesProvider";
import {useUserInfo} from "../../contexts/UserProvider";

const PostCreator = () => {
    const [postText, setPostText] = useState('')
    const {user} = useUserInfo()

    const {sendPost} = useMessages()

    const handlePostSending = (name) => {
        sendPost(postText, name)
        setPostText('')
    }

    const handleTextArea = e => {
        setPostText(e.target.value)
    }

    return (
        <div className={classes.newPost}>
            <p>Write your post</p>
            <div className={classes.newPostInput}>
                <textarea
                    value={postText}
                    onChange={handleTextArea}
                    className={classes.newPostArea}
                />
            </div>
            <button onClick={() => handlePostSending(user.name)}>Post</button>
        </div>
    )
}

export default PostCreator
