import React from 'react';
import './postList.css';
import { useState } from 'react';

export const posts = [
    {
        name: '오주현',
        comment: '안녕하세요. 오주현입니다.',
        time: '2시간 전',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png', // 기본 아바타 이미지 URL
        like: 0
    },
    {
        name: '문소정',
        comment: '리액트로 프로젝트 만들고 있습니다.',
        time: '3시간 전',
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png', // 기본 아바타 이미지 URL
        like: 0
    },
    {
        name: '황지영',
        comment: '리액트 재미있어요.',
        time: '5시간 전',
        avatar: ' https://www.w3schools.com/w3images/avatar6.png', // 기본 아바타 이미지 URL
        like: 0
    },
    {
        name: '공덕현',
        comment: '리액트 벌써 3주차라니........',
        time: '5시간 전',
        avatar: ' https://www.w3schools.com/w3images/avatar5.png', // 기본 아바타 이미지 URL
        like: 0
    }
];

const Post = ({ name, comment, time, avatar, onLike, like, onDelete}) => (

    <div className="comment">
        <img className="avatar" src={avatar} alt="user-avatar" />
        <div className="comment-details">
        <div className="user-name">{name}</div>
        <div className="comment-text">{comment}</div>
        <div className="comment-time">{time}</div>
        <span onClick={onLike}>하트하트: {like}</span>
        <button onClick={onDelete}>delete</button>
        </div>
    </div>
);

export default function PostList2() {

    // const [lists, setLists] = useState(['a', 'b', 'c']);
    // const result = lists.filter((item, index)=>index != 2);
    const [lists, setLists] = useState(posts)

    function handleLike(index){
        const newComments = [...lists];
        newComments[index].like += 1;
        setLists(newComments);
    }

    return (
        <div className="comment-list">
            {/* {lists.map((item, index)=><li key={index}>{item}</li>)}
            <br />
            {result.map((item, index)=><li key={index}>{item}</li>)} */}

        {lists.map((comment, index) => (
            <Post
            key={index}
            name={comment.name}
            comment={comment.comment}
            time={comment.time}
            avatar={comment.avatar}
            like={comment.like}
            onLike={()=>handleLike(index)}
            onDelete={()=>{
                const result2 = lists.filter((item, i)=> index !== i);
                setLists(result2)
            }}
            />
        ))}
        </div>
    );
}