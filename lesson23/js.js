// webpack.config.js
const webpack = require('webpack')

module.exports = {
	// ...
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
}


// webpack.config.js
module.exports = {
	// ...

	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	}

	// ...
}

console.log('hello peoples');

// index.js
// создание свойства класса без конструктора
class Game {
	name = 'Violin Charades'
}
const myGame = new Game();

// создаем параграф
const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#app');
root.append(heading, p);

const printName = () => {
	console.log('Ivan');
}

printName();

{
	"presets": ["@babel/preset-env"],
		"plugins": ["@babel/plugin-proposal-class-properties"]
}


console.log('hello peoples');

const name = 'Ivan';

const p = document.createElement('p');
p.textContent = `I am ${name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#app');
root.append(heading, p);

const printName = () => {
	console.log(name);
};

printName();


module.exports = (env, options) => {
	const isProd = options.mode === 'production';
	conf.target = isProd ? 'browserslist' : 'web';

	return conf;
};

"browserslist": "> 1%, not dead",

import './styles.scss'


rules: [
	//other rules
	// CSS, PostCSS, Sass
	{
		test: /\.(scss|css)$/,
		use: [
			'style-loader', 
			'css-loader', 
			'postcss-loader', 
			'sass-loader'],
	},
],