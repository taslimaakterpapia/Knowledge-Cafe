import React from "react";



const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mt-3">
        <div className="container px-md-5">
          <div className="px-md-5">
            <a className="navbar-brand fs-2 fw-bolder" href="#">
            Knowledge Cafe
            </a>
          </div>
          <div className="px-md-5">
            <div
              className="d-md-flex justify-content-md-end gap-3"
              id="navbarNav"
            >
              <div>
                <img
                  src="https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2022/07/Agnes3-e1658741047364.jpg"
                  className="card-img-top rounded-circle"
                  alt="razib"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container px-md-5 w-75">
        <hr />

      </div>
    </>
  );
};

export default Header;
