import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
  }

  
  onAddContact = event => {
    event.preventDefault()
    const {name, mobileNo} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      mobileNo: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container" align="center">
        <div className="responsive-container">
          <h1 className="heading" >Contacts</h1><br/>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />&nbsp;&nbsp;
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />&nbsp;&nbsp;
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <br/><br/>
          <table className="contacts-table">
              <th className="table-header-cell name-column">Name</th>
              <th className="table-header-cell">Mobile Number</th>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
              />
            ))}
          </table>
        </div>
      </div>
    )
  }
}

export default App