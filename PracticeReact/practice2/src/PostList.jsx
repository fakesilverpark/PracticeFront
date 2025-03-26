import React from "react";
import { useState } from "react";

const post = [
    {
        name: "a",
        comment: "jhel",
        time: "fdjsa"
    },
    {
        name: "ㅠ",
        comment: "jhㅁㅇㄴㄹel",
        time: "fdjsㅇㅁㄴㄹa"
    }
];

function Post(props){
    const {name, comment, time} = props;
    const [heart, increase] = useState(0);
    return(
        <div>
            <div>
                <div>name: {name}</div>
                <div>comment: {comment}</div>
                <div>tiem: {time}</div>
                <button onClick={()=>increase(heart+1)}>하트~~{heart}</button>
                <hr />
            </div>
        </div>
    );
}

function PostList() {

    return(
        <div>
            {post.map((comments, index)=>(
                <Post key = {index} name={comments.name} comment={comments.comment} time={comments.time}/>
            ))}
        </div>
    );

}

export default PostList
