var React = require('react');
var Layout = require('./layout.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout title="About Us">
                <h1>This app allows you to sync music across platforms like youtube</h1>
            </Layout>
        );
    }
});


module.exports = Component;