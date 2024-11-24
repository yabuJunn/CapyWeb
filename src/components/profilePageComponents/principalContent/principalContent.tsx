import React from 'react';
import './principalContent.css';

export const PrincipalContent = () => {
  return (
    <main className="settingsPage">
      <section className="inputsSection">
        {/* Sección de Usuario y Correo */}
        <div className="inputRow">
          <div className="inputGroup">
            <label htmlFor="username" className="inputLabel">User</label>
            <input id="username" className="inputField" type="text" defaultValue="Isabela Salazar" />
          </div>
          <div className="inputGroup">
            <label htmlFor="email" className="inputLabel">Email Address</label>
            <input id="email" className="inputField" type="email" defaultValue="isasasalazar09@gmail.com" />
          </div>
        </div>

        {/* Sección de Contraseña */}
        <div className="passwordSection">
          <h3 className="sectionTitle">Password</h3>
          <p className="sectionSubtitle">Modify your current password</p>
          <div className="inputRow">
            <div className="inputGroup">
              <label htmlFor="currentPassword" className="inputLabel">Current password</label>
              <div className="passwordInputWrapper">
                <input id="currentPassword" className="inputField" type="password" defaultValue="***********" />
                <button className="visibilityToggle">👁️</button>
              </div>
            </div>
            <div className="inputGroup">
              <label htmlFor="newPassword" className="inputLabel">New password</label>
              <input id="newPassword" className="inputField" type="password" placeholder="Enter new password" />
            </div>
          </div>
        </div>

        {/* Sección de Avatar */}
        <div className="avatarSection">
          <h3 className="sectionTitle">Change Avatar</h3>
          <div className="avatarUpload">
            <img src="https://via.placeholder.com/60" alt="Current Avatar" className="avatarImage" />
            <div className="uploadBox">
              <p className="uploadText">
                <span className="clickHere">Click here</span> to upload your file or drag
              </p>
              <p className="uploadFormat">Supported Format: SVG, JPG, PNG</p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="buttonsRow">
          <button className="discardButton">Discard</button>
          <button className="saveButton">Save changes</button>
        </div>
      </section>
    </main>
  );
};
