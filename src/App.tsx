import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Validators from './lib/validators';
import { boolean } from 'yargs';

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [npi, setNpi] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");



  
  const validateForm = (): boolean => {
    if (!Validators.hasValue(firstName))
      return false;
    
    return true;
  }


  return (
    <div className="App">
      <form>
        <div>
          <label>First Name</label>
          <input type="text" onChange={(evt) => { setFirstName(evt.target.value) }} placeholder="First Name" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={(evt) => setLastName(evt.target.value)} placeholder="Last Name" />
        </div>
        <div>
          <label>National Provider ID</label>
          <input type="text" onChange={(evt) => setNpi(evt.target.value)} placeholder="National Provider ID" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" onChange={(evt) => setAddress(evt.target.value)} placeholder="Address" />
        </div>
        <div >
          <label>Phone Number</label>
          <input type="text" onChange={(evt) => setPhone(evt.target.value)} placeholder="Phone Number" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" onChange={(evt) => setEmail(evt.target.value)} placeholder="Email Address" />
        </div>
      </form>
    </div>

  );
}

export default App;