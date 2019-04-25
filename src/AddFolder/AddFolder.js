import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import { withRouter } from 'react-router-dom'
import './AddFolder.css'
import AppContext from '../Context/AppContext';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  addFolderRequest = (callback) => {
    const folderName = this.nameInput.current.value;

    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: folderName})
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => {
        throw error
        })
      }
      return res.json()
    })
    .then(newFolder => {
      callback(newFolder)
    })
    .catch(error => alert(error))
  };

  render() {
    return (
      <AppContext.Consumer>
        {(context) => ( 
          <section className='AddFolder'>
            <h2>Create a folder</h2>
            <NotefulForm onSubmit={(e) => {
              e.preventDefault();
              this.addFolderRequest(context.addFolder);
              this.props.history.push('/')
            }}>
              <div className='field'>
                <label htmlFor='folder-name-input'>
                  Name
                </label>
                <input type='text' id='folder-name-input' ref={this.nameInput} defaultValue={"New Folder"}/>
              </div>
              <div className='buttons'>
                  <button type='submit'>
                    Add Folder
                  </button>
              </div>
            </NotefulForm>
          </section>
      )}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(AddFolder);
