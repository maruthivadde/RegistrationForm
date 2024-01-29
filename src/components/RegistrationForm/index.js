// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  render() {
    return (
      <div className="container">
        <h1>RegistrationForm</h1>
        <form className="form">
          <label htmlFor="image" className="names">
            Photo
          </label>
          <input type="file" id="branch" className="input" />
          <label htmlFor="firstName" className="names">
            FirstName
          </label>
          <input
            type="text"
            id="firstName"
            className="inputs"
            placeholder="EnterFirstName"
          />
          <label htmlFor="secondName" className="names">
            LastName
          </label>
          <input
            type="text"
            id="secondName"
            className="inputs"
            placeholder="EnterLastName"
          />
          <label htmlFor="email" className="names">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="inputs"
            placeholder="EnterEmail"
          />
          <label htmlFor="dateOfBirth" className="names">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            className="inputs"
            placeholder="EnterDateOfBirth"
          />{' '}
          <label htmlFor="male" className="names">
            Gender
          </label>
          <div className="hi">
            <div className="radio">
              <input type="radio" id="male" className="mm" />
              <label htmlFor="male" className="names">
                Male
              </label>
            </div>
            <div className="radio">
              <input type="radio" id="feMale" className="mm" />
              <label htmlFor="feMale" className="names">
                FeMale
              </label>
            </div>
          </div>
          <label htmlFor="phone" className="names">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            className="inputs"
            placeholder="EnterPhoneNumber"
          />
          <label htmlFor="education" className="names">
            Education
          </label>
          <input
            type="text"
            id="education"
            className="inputs"
            placeholder="EnterEducation"
          />
          <label htmlFor="branch" className="names">
            Branch
          </label>
          <input
            type="text"
            id="branch"
            className="inputs"
            placeholder="EnterBranch"
          />
          <label htmlFor="resume" className="names">
            Resume
          </label>
          <input type="file" id="branch" className="input" />
          <button className="btn" type="button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
