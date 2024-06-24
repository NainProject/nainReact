import React, { useState, useEffect } from 'react';
import CommunityAxios from "../../api/CommunityAxios";
import RadiusButton from '../designTool/RadiusButton';
import CommentDetail from './CommentDetail';

const Comment = ({communityNo, styles}) => {
    const [comments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState('');


    useEffect(() => {
        CommunityAxios.getCommentList(communityNo)
            .then(res => {
                setComments(res.data);
                console.log(comments);
            })
            .catch(error => {
                console.error('Error fetching comment:', error);
            });
    }, [communityNo]);

    const handleComment = (event) => {
      setContent(event.target.value);
    };


    const insertComment = () =>{
      const newComment = {
        communityNo: communityNo,
        writer: '',
        content: content,
      }
      console.log(newComment);
      if(content){
        CommunityAxios.createComment(newComment).then(res => {
            window.location.reload();
      })}else{
          alert('내용을 입력해주세요.');
      }
    };

    return (
    <div>
        <div className={styles.commentEnroll}>
          <textarea className={styles.commentBox} placeholder="댓글 입력" 
          value={content} onChange={handleComment}/>
          <RadiusButton color="#77AAAD" text="댓글 등록" onClick={insertComment}></RadiusButton>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h5>댓글을 등록하였습니다.</h5>
                    </div>
                </div>
            )}
        </div>
        <div>
          {comments.map(comment => {
            console.log("comment 1개 : ", comment);
            <CommentDetail key={comment.commentNo} comment={comment} styles={styles}/>
          })}
        </div>  
    </div>
    );
};
export default Comment;