import React from 'react';

import {Loader} from '../loader';

import {CommentsAppContext} from './context';

import {Comments} from './parts';

import styles from './styles.scss';

const getComments = () => [
    {
        id: 2,
        avatar: '..../',
        text: 'Привет мир',
        author: 'Ivan',
        isLiked: false
    },
    {
        id: 22,
        avatar: '..../',
        text: 'Аллоха',
        author: 'Антон',
        isLiked: true
    },
    {
        id: 52,
        avatar: '..../',
        text: 'Добрый вечер',
        author: 'Vova',
        isLiked: false
    }
];

const filterComments = (inputFilterValue, commentsList) => {
    if (inputFilterValue === '') return commentsList;

    return commentsList.filter((item) => item.text.toLowerCase().includes(inputFilterValue.toLowerCase()));
};

export class CommentsApp extends React.Component {
    state = {
        commentsList: null,
        isLoaded: false,
        inputFilterValue: '',
        inputValue: ''
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

    toggleCommentLike = (inputId) => {
        const stateCb = (preState) => {
            const {commentsList} = preState;

            const newCommentsList = commentsList.map((item) => {
                const {id, isLiked} = item;

                return {
                    ...item,
                    isLiked: inputId === id ? !isLiked : isLiked
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

    input2Handler = (e) => {
        const {value} = e.target;

        this.setState({inputValue: value});
    }

    delHandler = (inputId) => {
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
        const {commentsList, inputFilterValue, isLoaded, inputValue} = this.state;

        if (!isLoaded) {
            return <Loader/>;
        }

        const filteredCommentsList = filterComments(inputFilterValue, commentsList);

        const contextValue = {
            inputValue,
            delHandler: this.delHandler,
            toggleCommentLike: this.toggleCommentLike
        };

        return (
            <CommentsAppContext.Provider value={contextValue}>
                <div>
                    <p>
                        <input className={styles.input} value={inputFilterValue} type='text' onChange={this.inputHandler}/>
                    </p>
                    <p>
                        <input className={styles.input} value={inputValue} type='text' onChange={this.input2Handler}/>
                        {inputValue}
                    </p>
                    <Comments commentsList={filteredCommentsList} />
                </div>
            </CommentsAppContext.Provider>
        );
    }
}