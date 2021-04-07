import React from 'react';
import {Loader} from '../loader';

import {Comments} from './parts';

import styles from './styles.scss';

const getComments = () => [
    {
        id: 2,
        avatar: '..../',
        text: 'Привет мир',
        author: 'Ivan',
        isLikeed: false
    },
    {
        id: 22,
        avatar: '..../',
        text: 'Аллоха',
        author: 'Антон',
        isLikeed: true
    },
    {
        id: 52,
        avatar: '..../',
        text: 'Добрый вечер',
        author: 'Vova',
        isLikeed: false
    }
];

const filterComments = (inputFilterValue, commentsList) => {
    if (inputFilterValue === '') return commentsList;

    return commentsList.filter((item) => item.text.toLowerCase().includes(inputFilterValue.toLowerCase()));
    // return commentsList.filter((item) => item.text.startsWith(inputFilterValue));
};

export class CommentsApp extends React.Component {
    state = {
        commentsList: null,
        isLoaded: false,
        inputFilterValue: ''
    }

    componentDidMount() {
        console.log('componentDidMount');

        setTimeout(() => {
            const commentsList = getComments();

            this.setState({
                commentsList,
                isLoaded: true
            });

        }, 1);
    }

    toggleCommentLikee = (inputId) => {
        const stateCb = (preState) => {
            const {commentsList} = preState;

            const newCommentsList = commentsList.map((item) => {
                const {id, isLikeed} = item;

                return {
                    ...item,
                    isLikeed: inputId === id ? !isLikeed : isLikeed
                };
            });

            return {
                commentsList: newCommentsList
            };
        };

        this.setState(stateCb);

    }

    inputHandler = (e) => {
        const {value} = e.target;

        this.setState({inputFilterValue: value});
    }

    delHandler = (inputId) => {
        // const result = confirm('realy???');
        // console.log('result', result);

        // if (!result) return null;

        const stateCb = (preState) => {
            const {commentsList} = preState;

            const newCommentsList = commentsList.filter((item) => item.id !== inputId);

            return {
                commentsList: newCommentsList
            };
        };

        this.setState(stateCb);
    }

    render() {
        const {commentsList, inputFilterValue, isLoaded} = this.state;

        if (!isLoaded) {
            return <Loader/>;
        }

        const filteredCommentsList = filterComments(inputFilterValue, commentsList);

        return (
            <div>
                <input className={styles.input} value={inputFilterValue} type='text' onChange={this.inputHandler}/>
                {/* <CommentsFilter /> */}
                {/* <Loader/> */}
                {/* <ClickCounter initClicksQty={5} /> */}
                {/* <Title /> */}
                <Comments 
                commentsList={filteredCommentsList} 
                delHandler={this.delHandler} 
                toggleCommentLikee={this.toggleCommentLikee} />
            </div>
        );
    }
}
