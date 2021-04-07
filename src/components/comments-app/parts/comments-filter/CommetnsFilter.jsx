import React, {Component} from 'react';

import styles from './styles.scss';

export class CommentsFilter extends Component {
    state = {
        inputValue: '',
        selectValue: 'coconut'
    }

    onInputChange = (e) => {
        const {value} = e.target;
        const inputValue = value.toUpperCase(); // в инпуте всегда будут только буквы в верхнем регистре

        this.setState({inputValue});
    }

    onInputFocus = (e) => {
        console.log(e);
    }

    selectHandler = (e) => {
        const {value} = e.target;

        this.setState({selectValue: value});
    }

    render() {
        const {inputValue, selectValue} = this.state;

        return (
            <div>
                <p><input className={styles.input} value={inputValue} onChange={this.onInputChange} onFocus={this.onInputFocus} type='text'/></p>
                <p>Значение: {inputValue}</p>
                <select value={selectValue} onChange={this.selectHandler}>
                    <option value='grapefruit'>Грейпфрут</option>
                    <option value='lime'>Лайм</option>
                    <option value='coconut'>Кокос</option>
                    <option value='mango'>Манго</option>
                </select>
                <p>Значение: {selectValue}</p>
            </div>
        );
    }
}