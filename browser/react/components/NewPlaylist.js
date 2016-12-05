import React from 'react';

const NewPlaylist = (props) => {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          {props.inputValue.length > 16 ? <div className="alert alert-warning">Name can not be longer than 16 characters!!</div> : ""}
          {props.tooShort ? <div className="alert alert-warning">Please enter a name</div> : ""}
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" value={props.inputValue} onChange={props.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={props.disabled}>Create Playlist</button>

            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default NewPlaylist;
