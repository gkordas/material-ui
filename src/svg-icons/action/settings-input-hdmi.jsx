let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionSettingsInputHdmi = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionSettingsInputHdmi;