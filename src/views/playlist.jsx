var React = require('react');
var Layout = require('./layout.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout title="OauthCallback" {...this.props} >
                <h1>Playlist</h1>
                <p>{this.props}</p>
            </Layout>
        );
    }
});


module.exports = Component;