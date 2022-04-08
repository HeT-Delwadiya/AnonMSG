import Link from "next/link";

function Header(props) {
       return (
              <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
                     <div className="container px-4">
                            <Link href="/"><a className="navbar-brand" style={{fontSize: "2rem", fontWeight: "700"}}>
                                   <span className="theme-text">Anon</span>MSG
                            </a></Link>
                            <button
                                   className="navbar-toggler"
                                   type="button"
                                   data-bs-toggle="collapse"
                                   data-bs-target="#navbarResponsive"
                                   aria-controls="navbarResponsive"
                                   aria-expanded="false"
                                   aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                   <ul className="navbar-nav ms-auto">
                                          <li className="nav-item ms-4">
                                                 <Link href="/create"><a className="nav-link theme-text py-0 my-2" style={{fontSize: "1.5rem", fontWeight: "800", backgroundColor:"white", borderRadius:"5px"}}>
                                                        <i className="fa-solid fa-plus"></i> New MSG
                                                 </a></Link>
                                          </li>
                                          <li className="nav-item ms-4">
                                                 <a className="nav-link text-white" rel="noreferrer" href="https://github.com/HeT-Delwadiya" target="_blank" style={{fontSize: "1.5rem", fontWeight: "600"}}>
                                                        About
                                                 </a>
                                          </li>
                                   </ul>
                            </div>
                     </div>
              </nav>
              </div>
       );
}

export default Header;