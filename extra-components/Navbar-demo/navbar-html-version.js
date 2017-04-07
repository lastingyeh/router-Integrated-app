<div>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/" onlyActiveOnIndex>首頁</Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">

        <ul className="nav navbar-nav">
          <li className="active"><Link to="/" onlyActiveOnIndex>登入範例</Link></li>
          <li><Link to="/test_01">測試範例一</Link></li>
          <li><Link to="/test_02">測試範例二</Link></li>
        </ul>

      </div>
    </div>
  </nav>
  {children}
</div>
