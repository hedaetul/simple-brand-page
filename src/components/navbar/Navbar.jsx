const Navbar = () => {
  return (
    <div className='nav-container'>
      <div>
        <img src='/images/brand_logo.png' alt='brand-logo' />
      </div>

      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className='login-btn'>Login</button>
    </div>
  );
};

export default Navbar;
