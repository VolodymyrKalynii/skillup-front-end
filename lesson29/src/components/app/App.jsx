import React from 'react';

import {Comments} from './parts';

export class App extends React.Component {
    state = {
        commentsList: [
            {
                id: 2,
                avatar: '..../',
                text: 'cooment1',
                author: 'Ivan',
                isLikeed: false
            },
            {
                id: 22,
                avatar: '..../',
                text: 'cooment1213',
                author: 'Ivan 123',
                isLikeed: true
            },
            {
                id: 52,
                avatar: '..../',
                text: 'cooment1444444',
                author: 'Vova',
                isLikeed: false
            }
        ]
    }

    toggleCommentLikee = (inputId) => {
        console.log('toggleCommentLikee', inputId);

        // commentsList.forEach(item => {
        //     const {id, isLikeed} = item;

        //     if (inputId === id) {
        //         item.isLikeed = !isLikeed;
        //     }
        // });

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

    render() {
        const {commentsList} = this.state;
        console.log(commentsList);
        return (
            <div>
                {/* <ClickCounter initClicksQty={5} /> */}
                {/* <Title /> */}
                <Comments commentsList={commentsList} toggleCommentLikee={this.toggleCommentLikee} />
            </div>
        );
    }
}

