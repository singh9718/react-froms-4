import './App.css';
import { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  return (
    <div className='flex flex-col items-center mt-2'>
      <form>

        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder='firstName'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder='lastName'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'
        />
        <br />

        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder='email'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />
        <br />

        <label htmlFor="country">Country</label>
        <br />

        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >
          <option>India</option>
          <option>United States Of America</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder='streetAddress'
          value={formData.streetAddress}
          onChange={changeHandler}
          className='outline'
        />
        <br />


        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder='city'
          value={formData.city}
          onChange={changeHandler}
          className='outline'
        />
        <br />


        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder='state'
          value={formData.state}
          onChange={changeHandler}
          className='outline'
        />
        <br />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder='postal code'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />
        <br />
        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>

          <div className='flex'>
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex'>
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex'>
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
        </fieldset>

        <br />
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS on your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>

          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as Email"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Same as email</label>

          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}
          />

          <label htmlFor="pushNothing">No Push Notification</label>

        </fieldset>











      </form>
    </div>
  );
}

export default App;
