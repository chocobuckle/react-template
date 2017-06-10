var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./index.css');

ReactDOM.render(<App />, document.getElementById('app'));

function test(num1, num2) {
	return num1 + num2;
}

const result = test(2, 1);
console.log(result);
