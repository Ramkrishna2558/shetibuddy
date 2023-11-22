import React from 'react'

export default function Forgot() {
  return (
    <div className="forgotPasswordForm" style={{display: none}}>
    <h2>Forgot Password</h2>
    <div>
        <label for="forgotUsername">Username:</label>
        <br/>
    <input type="text" className="forgotUsername" required/>
<br/>
<label for="security-answer">Security Answer:</label>
<br/>
    <input type="text" className="security-answer" required/>
    <br/>
    <button type="button" onclick="">Recover Password</button>
    </div>
</div>

  )
}
