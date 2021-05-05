import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {getComments} from './comments-getter';
import {setCommentsDispatcher, setInputFilterValueDispatcher} from '../../../store/dispatchers/comments-dispatchers';
import {Loader} from '../loader';

import {Comments} from './parts';

import styles from './styles.scss';

const filterComments = (inputFilterValue, commentsList) => {
    if (inputFilterValue === '') return commentsList;

    return commentsList.filter((item) => item.text.toLowerCase().includes(inputFilterValue.toLowerCase()));
};

export const CommentsAppRedux = () => {
    const {commentsList, isLoaded, inputFilterValue} = useSelector((store) => store.commentsReducer);

    useEffect(() => {
        getComments().then((data) => {
            setCommentsDispatcher(data);
        });
    }, []);

    if (!isLoaded) {
        return <Loader/>;
    }

    const inputHandler = (e) => {
        const {value} = e.target;

        setInputFilterValueDispatcher(value);
    };

    const filteredCommentsList = filterComments(inputFilterValue, commentsList);

    return (
        <div>
            <p>
                 <input className={styles.input} value={inputFilterValue} type='text' onChange={inputHandler}/>
            </p>
            {filteredCommentsList.length <= 0
                ? <p>Комментов нету</p>
                : <Comments commentsList={filteredCommentsList}/>}
        </div>
    );
};

// export class CommentsAppRedux extends React.Component {
//     state = {
//         commentsList: null,
//         isLoaded: false,
//         inputFilterValue: ''
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount');
//
//         setTimeout(() => {
//             const commentsList = getComments();
//
//             this.setState({
//                 commentsList,
//                 isLoaded: true
//             });
//
//         }, 1);
//     }
//
//     toggleCommentLike = (inputId) => {
//         const stateCb = (preState) => {
//             const {commentsList} = preState;
//
//             const newCommentsList = commentsList.map((item) => {
//                 const {id, isLiked} = item;
//
//                 return {
//                     ...item,
//                     isLiked: inputId === id ? !isLiked : isLiked
//                 };
//             });
//
//             return {
//                 commentsList: newCommentsList
//             };
//         };
//
//         this.setState(stateCb);
//
//     }
//
//     inputHandler = (e) => {
//         const {value} = e.target;
//
//         this.setState({inputFilterValue: value});
//     }
//
//     delHandler = (inputId) => {
//         const stateCb = (preState) => {
//             const {commentsList} = preState;
//
//             const newCommentsList = commentsList.filter((item) => item.id !== inputId);
//
//             return {
//                 commentsList: newCommentsList
//             };
//         };
//
//         this.setState(stateCb);
//     }
//
//     render() {
//         const {commentsList, inputFilterValue, isLoaded} = this.state;
//
//         if (!isLoaded) {
//             return <Loader/>;
//         }
//
//         const filteredCommentsList = filterComments(inputFilterValue, commentsList);
//
//         return (
//             <div>
//                 <p>
//                     <input className={styles.input} value={inputFilterValue} type='text' onChange={this.inputHandler}/>
//                 </p>
//                 <Comments commentsList={filteredCommentsList} />
//             </div>
//         );
//     }
// }