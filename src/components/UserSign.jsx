import React from 'react';
import "../style/usersign.css"

const UserSign = () => {
  return (
    <>
        <h2 className='m-5' style={{color:"whitesmoke",letterSpacing:"0.3rem"}}>Please Sign up !!</h2>
       <div class="main-login "> 
      
       <div className="background-div"></div> 	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form>
					<label for="chk" >Sign up </label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login </label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div>
	</div>
    </>
  )
}

export default UserSign