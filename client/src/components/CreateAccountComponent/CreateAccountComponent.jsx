import React from "react";
import "./CreateAccountComponentStyle.css";

const CreateAccountComponent = ({
  handleSubmit,
  handleUsername,
  handlePassword,
  handleImage,
  handleEmail,
  handleFirstName,
  handleLastName,
  handleCountry,
  username,
  password,
  image,
  email,
  firstName,
  lastName,
  country
}) => {
  return (
    <div>
      <h1>Create your account here!</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <ul className="wrapper">
            <li className="form-row">
              <label htmlFor="username">Username:&nbsp;</label>
              <input
                className={"inpStyle"}
                value={username}
                onChange={handleUsername}
                type="text"
                name="username"
              />
            </li>
            <li className="form-row">           
              <label htmlFor="password">Password:&nbsp;</label>
              <input
                className={"inpStyle"}
                value={password}
                onChange={handlePassword}
                type="password"
                name="password"
              />
            </li>
            <li className="form-row">
              <label htmlFor="image">Your Image (URL):&nbsp;</label>
              <input
                className={"inpStyle"}
                value={image}
                onChange={handleImage}
                type="text"
                name="image"
              />
            </li>
            <li className="form-row">
              <label htmlFor="email">E-Mail:&nbsp;</label>
              <input
                className={"inpStyle"}
                value={email}
                onChange={handleEmail}
                type="email"
                name="email"
              />
            </li>
            <li className="form-row">
              <label htmlFor="firstName">First Name:&nbsp;</label>
              <input
                className={"inpStyle"}
                value={firstName}
                onChange={handleFirstName}
                type="text"
                name="firstName"
              />
            </li>
            <li className="form-row">
              <label htmlFor="lastName">Last Name:&nbsp;</label>
              <input
                className={"inpStyle"}
                value={lastName}
                onChange={handleLastName}
                type="text"
                name="lastName"
              />
            </li>
            <li className="form-row">
              <label htmlFor="country">Country:&nbsp;</label>
              <select name="country" value={country} onChange={handleCountry}>
                <option value="argentina">Argentina</option>
                <option value="uruguay">Uruguay</option>
                <option value="azerbaijan">Azerbaijan</option>
                <option value="north_korea">North Korea</option>
                <option value="pakistan">Pakistan</option>
                <option value="soviet_union">Soviet Union</option>
              </select>
            </li>
            <br />
            <label htmlFor="submit"></label>
            <button
              className={"btn btn-primary btnSub"}
              type="submit"
              name="submit">
              Submit!
            </button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountComponent;