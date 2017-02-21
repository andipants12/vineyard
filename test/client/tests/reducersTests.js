import 'babel-polyfill';
import chai from 'chai';
import { userLoginReducer } from '../../../client/src/reducers/login';
import { userSignupReducer } from '../../../client/src/reducers/signup';
import { noteFormReducer } from '../../../client/src/reducers/noteForm';

var expect = chai.expect;

describe('Reducers', () => {
  describe('Login Reducer', () => {

    it('should return the initial state', () => {
      expect(userLoginReducer(undefined, {}))
        .to.deep.equal({
          username: '',
          password: ''
        });
    });

    it('should return the new username', () => {
      expect(userLoginReducer(undefined, 
        { 
          type: "SET_LOGIN_USERNAME",
          value: "username"
        })).to.deep.equal({
          username: 'username',
          password: ''
        });
    });

    it('should return the new password', () => {
      expect(userLoginReducer(undefined, 
        { 
          type: "SET_LOGIN_PASSWORD",
          value: "password"
        })).to.deep.equal({
          username: '',
          password: 'password'
        });
    });
  });

  describe('Signup Reducer', () => {
    var defaults;

    before(() => {
      defaults = {
        username: '',
        password: '',
        'confirm_password': '',
        email: '',
        'first_name': '',
        'last_name': '',
        'birth_day': '',
        'birth_month': '',
        'birth_year': ''
      };
    });

    it('should return the initial state', () => {
      expect(userSignupReducer(undefined, {}))
        .to.deep.equal(defaults);
    });

    it ('should return new state with changed username', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_USERNAME",
        value: 'username'
      })).to.deep.equal({ ...defaults, username: 'username' });
    });

    it ('should return new state with changed password', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_PASSWORD",
        value: 'password'
      })).to.deep.equal({ ...defaults, password: 'password' });
    });
    
    it ('should return new state with changed confirm password', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_CONFIRM_PASSWORD",
        value: 'confirm_password'
      })).to.deep.equal({ ...defaults, 'confirm_password': 'confirm_password' });
    });
    
    it ('should return new state with changed email', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_EMAIL",
        value: 'email'
      })).to.deep.equal({ ...defaults, email: 'email' });
    });
    
    it ('should return new state with changed last name', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_LAST_NAME",
        value: 'last_name'
      })).to.deep.equal({ ...defaults, 'last_name': 'last_name' });
    });
    
    it ('should return new state with changed first name', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_FIRST_NAME",
        value: 'first_name'
      })).to.deep.equal({ ...defaults, 'first_name': 'first_name' });
    });
    
    it ('should return new state with changed birth day', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_BIRTH_DAY",
        value: 'birth_day'
      })).to.deep.equal({ ...defaults, 'birth_day': 'birth_day' });
    });
    
    it ('should return new state with changed birth month', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_BIRTH_MONTH",
        value: 'birth_month'
      })).to.deep.equal({ ...defaults, 'birth_month': 'birth_month' });
    });
    
    it ('should return new state with changed birth year', () => {
      expect(userSignupReducer(undefined, {
        type: "SET_SIGNUP_BIRTH_YEAR",
        value: 'birth_year'
      })).to.deep.equal({ ...defaults, 'birth_year': 'birth_year' });
    });
  });

  describe('noteFormReducer', () => {
    var defaults;

    before(() => {
      defaults = {
        title: '',
        username:'',
        vineyard: '',
        block: '',
        row: '',
        rowStart: '',
        rowEnd: '',
        lat: '',
        lon: '',
        textArea: '',
        currentlyRecording: ''
      };
    });

    it('should return the inital state', () => {
      expect(noteFormReducer(undefined, {}))
      .to.deep.equal(defaults);
    });

    it('should update the title', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_TITLE',
        value: 'new title'
      })).to.deep.equal({...defaults, title: 'new title'});
    });

    it('should update the username', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_USERNAME',
        value: 'new username'
      })).to.deep.equal({...defaults, username: 'new username'});
    });

    it('should update the vineyard', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_VINEYARD',
        value: 'new vineyard'
      })).to.deep.equal({...defaults, vineyard: 'new vineyard'});
    });

    it('should update the block', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_BLOCK',
        value: 'new block'
      })).to.deep.equal({...defaults, block: 'new block'});
    });

    it('should update the row', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_ROW',
        value: 'new row'
      })).to.deep.equal({...defaults, row: 'new row'});
    });

    it('should update the rowStart', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_ROWSTART',
        value: 'new rowStart'
      })).to.deep.equal({...defaults, rowStart: 'new rowStart'});
    });

    it('should update the rowEnd', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_ROWEND',
        value: 'new rowEnd'
      })).to.deep.equal({...defaults, rowEnd: 'new rowEnd'});
    });

    it('should update the lat', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_LAT',
        value: 'new lat'
      })).to.deep.equal({...defaults, lat: 'new lat'});
    });

    it('should update the lon', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_LON',
        value: 'new lon'
      })).to.deep.equal({...defaults, lon: 'new lon'});
    });

    it('should update the textArea', () => {
      expect(noteFormReducer(undefined, {
        type: 'SET_NOTE_FORM_TEXTAREA',
        value: 'new textArea'
      })).to.deep.equal({...defaults, textArea: 'new textArea'});
    });

  });

   
});