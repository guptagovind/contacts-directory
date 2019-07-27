import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addContact from '../actions/Actions';
import countryPhoneCode from '../../config/contants/constants';

const initialState = {
  name: '',
  addrHouseNo: '',
  addrStreet: '',
  addrCity: '',
  addrState: '',
  addrPincode: undefined,
  addrCountry: '',
  phoneCountryCode: '',
  phoneNo: undefined,
  email: '',
  note: '',
  isAgree: false,
  error: '',
  success: ''
};

class ContactFormContainer extends Component {
  state = {
    ...initialState
  };

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState(() => ({ [fieldName]: fieldValue }));
  };

  onAgree = (e) => {
    const isAgree = e.target.checked;
    this.setState(() => ({
      isAgree
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.props.addContact(this.state);
      this.setState(() => ({
        success: 'Contact Information added successfully!'
      }));
    }
  };

  isFormValid() {
    let isValid = false;
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

    if (this.state.name === null || this.state.name === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter the name'
      }));
      return isValid;
    } if (this.state.email === '' || !re.test(this.state.email)) {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct email address'
      }));
      return isValid;
    } if (this.state.addrHouseNo === null || this.state.addrHouseNo === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct house number'
      }));
      return isValid;
    } if (this.state.addrStreet === null || this.state.addrStreet === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct street'
      }));
      return isValid;
    } if (this.state.addrCity === null || this.state.addrCity === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct city'
      }));
      return isValid;
    } if (this.state.addrState === null || this.state.addrState === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct state'
      }));
      return isValid;
    } if (this.state.addrPincode === null || typeof this.state.addrPincode === 'undefined' || this.state.addrPincode === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct pincode'
      }));
      return isValid;
    } if (this.state.addrCountry === null || this.state.addrCountry === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter select country'
      }));
      return isValid;
    } if (this.state.phoneCountryCode === null || this.state.phoneCountryCode === '') {
      isValid = false;
      this.setState(() => ({
        error: 'Please select phone country code'
      }));
      return isValid;
    } if (this.state.phoneNo === null || this.state.phoneNo === '' || !(this.state.phoneNo.length === 10)) {
      isValid = false;
      this.setState(() => ({
        error: 'Please enter correct phone number'
      }));
      return isValid;
    } if (!this.state.isAgree) {
      isValid = false;
      this.setState(() => ({
        error: 'Please agree to the terms and conditions'
      }));
      return isValid;
    }
    isValid = true;
    this.setState(() => ({
      error: ''
    }));
    return isValid;
  }

  render() {
    return (
      <form className="contact-form-container" onSubmit={this.onSubmit}>
        <div className="field-gap">
          <div className="field-label">
            Name
            <span className="asterisc">*</span>
          </div>
          <div>
            <input
              className="input-text"
              type="text"
              placeholder="Please enter name"
              name="name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
          </div>
        </div>
        <div className="field-gap">
          <div className="field-label">
            Email
            <span className="asterisc">*</span>
          </div>
          <div>
            <input
              type="text"
              className="input-text"
              placeholder="Please enter email"
              name="email"
              value={this.state.email}
              onChange={this.onFieldChange}
            />
          </div>
        </div>
        <div className="field-gap">
          <div className="field-gap">
            <div className="field-label">
              <h4 className="address-text">
                Address
              </h4>
            </div>
            <div className="field-label">
              House No
              <span className="asterisc">*</span>
            </div>
            <div>
              <input
                type="text"
                className="input-text"
                placeholder="Please enter House Number"
                name="addrHouseNo"
                value={this.state.addrHouseNo}
                onChange={this.onFieldChange}
              />
            </div>
          </div>
          <div className="field-gap">
            <div className="field-label">
              Street
              <span className="asterisc">*</span>
            </div>
            <div>
              <input
                type="text"
                className="input-text"
                placeholder="Please enter Street"
                name="addrStreet"
                value={this.state.addrStreet}
                onChange={this.onFieldChange}
              />
            </div>
          </div>
          <div className="field-gap">
            <div className="field-label">
              City
              <span className="asterisc">*</span>
            </div>
            <div>
              <input
                type="text"
                className="input-text"
                placeholder="Please enter City"
                name="addrCity"
                value={this.state.addrCity}
                onChange={this.onFieldChange}
              />
            </div>
          </div>
          <div className="field-gap">
            <div className="field-label">
              State
              <span className="asterisc">*</span>
            </div>
            <div>
              <input
                type="text"
                className="input-text"
                placeholder="Please enter State"
                name="addrState"
                value={this.state.addrState}
                onChange={this.onFieldChange}
              />
            </div>
          </div>
          <div className="field-gap">
            <div className="field-label">
              Pincode
              <span className="asterisc">*</span>
            </div>
            <div>
              <input
                type="number"
                className="input-text"
                placeholder="Please enter Pincode"
                name="addrPincode"
                value={this.state.addrPincode}
                onChange={this.onFieldChange}
              />
            </div>
          </div>
          <div className="field-gap">
            <div className="field-label">
              Select Country
              <span className="asterisc">*</span>
            </div>
            <select
              className="input-text"
              name="addrCountry"
              onChange={this.onFieldChange}
            >
              <option
                value=""
                selected="selected"
                hidden="hidden"
              >
                Choose here
              </option>
              {countryPhoneCode.map(country => (
                <option key={country.code} value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field-gap">
          <div className="field-label">
            Phone
            <span className="asterisc">*</span>
          </div>
          <select
            className="country-code"
            name="phoneCountryCode"
            onChange={this.onFieldChange}
          >
            <option
              value=""
              selected="selected"
              hidden="hidden"
            >
              Code
            </option>
            {countryPhoneCode.map(country => (
              <option key={country.code} value={country.dial_code}>{country.dial_code}</option>
            ))}
          </select>
          <input
            type="number"
            className="input-text input-text-phone"
            placeholder="Please enter phone number"
            name="phoneNo"
            value={this.state.phoneNo}
            onChange={this.onFieldChange}
          />
        </div>
        <div className="field-gap">
          <div className="field-label">
            Note
          </div>
          <div>
            <textarea
              className="input-text input-text-area"
              placeholder="Please enter note"
              name="note"
              value={this.state.note}
              onChange={this.onFieldChange}
            />
          </div>
        </div>
        <div className="checkbox-field">

          <label
            htmlFor="isAgree"
            className="checkbox-text"
          >
            <input
              type="checkbox"
              name="agree"
              id="isAgree"
              value={this.state.isAgree}
              onChange={this.onAgree}
            />
            <span className="agree-label">I agree to the terms and conditions.</span>
          </label>
        </div>
        <div className="error">
          {this.state.error}
        </div>
        {
          this.state.success !== '' && <div className="success">{this.state.success}</div>
        }
        <div>
          <button type="submit" className="submit-btn">Add Contact</button>
        </div>
      </form>
    )
  }
}

ContactFormContainer.propTypes = {
  addContact: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact))
});


export default connect(null, mapDispatchToProps)(ContactFormContainer);
