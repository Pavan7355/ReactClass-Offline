
import './Login.css';

function Login(){
  return (
    <>
    <div className='Login-heading'>
        <h1>Login Page</h1>
    </div>
    <div className="login-container">
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
   name="email"
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" name="password"
            required 
          />
        </div>
        <div style={{textAlign:"center",marginTop: "10px",padding:"10px"}}>
    <a href="login.html">Forgot Password?</a>
  </div>
        <button className="btn" type="submit">Login</button>
      </form><div style={{textAlign:"center",marginTop: "10px"}}>
    <a href="login.html">Don't have an account? Signup here</a>
  </div>
    </div>
    </>
  );
};

export default Login;
