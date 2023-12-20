import PropTypes from 'prop-types'

export const TopBar = ({ setShow }) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button className="btn btn-outline-dark border-0" onClick={() => setShow(0)}><i className="fas fa-bars"></i></button>
      <ul className="navbar-nav ml-auto">
        <li>
          <img
            style={{ "height": "50px" }}S
            src="/images/logoLetrasBlancaModPixeles.png"
            alt="Logo"W
          />
        </li>


        <div className="topbar-divider d-none d-sm-block"></div>

      </ul>
    </nav>
  );
};

TopBar.propTypes = {
  setShow: PropTypes.func
}
