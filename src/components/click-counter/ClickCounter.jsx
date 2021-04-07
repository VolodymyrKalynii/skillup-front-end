import React, {Component} from 'react';

import styles from './styles.scss';

export class ClickCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     const {initClicksQty} = props;
    //     console.log('constructor');
    //     this.state = {
    //         clicksQty: initClicksQty
    //     };
    // }

    state = {
        clicksQty: this.props.initClicksQty,
        randNumber: null,
        isDataLoaded: false,
        data: null
    }

    // static getDerivedStateFromProps(props) {
    //     console.log('getDerivedStateFromProps', props);
    // }

    componentDidMount() {
        console.log('componentDidMount');

        // const doneCb = () => {
        //     console.log('done');
        // };

        // setTimeout(() => {
        //     this.setState({
        //         isDataLoaded: true,
        //         data: Math.random()
        //     }, doneCb);
        // }, 2000);
    }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');

    //     return true;
    // }

    // getSnapshotBeforeUpdate() {
    //     console.log('getSnapshotBeforeUpdate');
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    btnHanlder = () => {
        // this.state.clicksQty = 10; // не правильно!!!
        // this.setState({clicksQty: 10});
        // const {clicksQty} = this.state;

        // this.setState({clicksQty: clicksQty + 1});
        // this.setState((prevState) => ({
        //     clicksQty: prevState.clicksQty + 1
        // }));

        const callback = (prevState) => {
            const {clicksQty} = prevState;

            return {
                clicksQty: clicksQty + 1
            };
        };

        this.setState(callback);
    }

    btn2Hanlder = () => {
        const randNumber = Math.random();

        this.setState({randNumber});
    }

    render() {
        console.log('render');

        const {
            clicksQty, randNumber, isDataLoaded, data
        } = this.state;
            // console.log(isDataLoaded, data);
        return (
            <div>
                <p>Количество кликов: {clicksQty}</p>
                <p><button className={styles.button} type='button' onClick={this.btnHanlder}>click</button></p>
                <p>Случайное число: {randNumber}</p>
                <p><button className={styles.button} type='button' onClick={this.btn2Hanlder}>getRandNumber</button></p>
                {/* <p>{isDataLoaded ? <span>Данные с сервера: {data}</span> : <span>Загрузка...</span>}</p> */}
            </div>
        );
    }
}