import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ActionCreator } from "../store/action"
import Form from "./form"
import { BeatLoader } from "react-spinners"
import { fetchComments, fetchPost, fetchDeletePost } from "../api-actions";

function Post({ param, activeComments, fetchComments, fetchPost, combinedPost }) {

    useEffect(() => {
        fetchComments(param)
        fetchPost(param)
    }, [])


    return <div className="post">
        <div className="post__inner">
            <div className="post__main">
                <h2 className="post__title">POST:</h2>
                <p className="post__author"><pre>{`Name: 
                `}</pre>{combinedPost.name}</p>
                <span className="post__email"><pre>{`Email: 
                `}</pre> {combinedPost.email}</span>
                <p className="post__text"><pre>{`Message: 
                `}</pre> {combinedPost.body}</p>
            </div>
            <div className="post__comments">
                <h2 className="post__title">COMMENTS:</h2>
                <ul className="post__list">
                    {!activeComments.length ? <li className="post__loader"><BeatLoader size={92} /></li> : null}
                    {activeComments.map(comment => {
                        return <li className="post__item" key={comment.id}>
                            <p className="post__item-author">{comment.name}</p>
                            <span className="post__item-email">{comment.email}</span>
                            <p className="post__item-text">{comment.body}</p>
                            <button className="post__btn" onClick={() => { console.log('del') }}>X</button>
                        </li>
                    })}
                </ul>
            </div>
            <Form />
        </div>
    </div >
}

const mapStateToProps = (state) => ({
    activePost: state.activePost,
    activeComments: state.activeComments,
    actualComments: state.actualComments,
    combinedPost: state.combinedPost
})

const mapDispatchToProps = (dispatch) => ({
    handleDeleteComment(id) {
        dispatch(ActionCreator.deleteComment(id))
    },
    fetchComments(id) {
        dispatch(fetchComments(id))
    },
    getActualComments(id) {
        dispatch(ActionCreator.getActualComments(id))
    },
    fetchPost(id) {
        dispatch(fetchPost(id))
    },
    combinePost() {
        dispatch(ActionCreator.combinePost());
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(Post)