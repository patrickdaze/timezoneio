/** @jsx React.DOM */

var React = require('react');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var ActionTypes = require('../actions/actionTypes.js');

module.exports = React.createClass({

  displayName: 'Modal',

  handleClickClose: function(e) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.CLOSE_MODAL
    });
  },

  handleClick: function(e) {
    e.stopPropagation();
  },

  render: function() {
    return (
      <div className="modal"
           onClick={this.handleClick}>
        <a className="modal-close"
           onClick={this.handleClickClose}>
          +
        </a>
        {this.props.children}
      </div>
    );
  }
});
