import Link from 'next/link';


const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
     <div className="container">
       <Link href="/"><a className="navbar-brand">ClassifyIt</a></Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="nav navbar-nav ml-auto">
           <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="download">Manage <span className="caret"></span></a>
             <div className="dropdown-menu" aria-labelledby="download">
               <Link href="/login"><a className="dropdown-item">Login</a></Link>
               <div className="dropdown-divider"></div>
                <Link href="/categories"><a className="dropdown-item">Categories</a></Link>
                <Link href="/users"><a className="dropdown-item">Admins</a></Link>
               <Link href="/lists"><a className="dropdown-item">word lists</a></Link>
               <Link href="/posts"><a className="dropdown-item">saved posts</a></Link>

               <div className="dropdown-divider"></div>
               <Link href="/logout"><a className="dropdown-item">Log out</a></Link>
             </div>
           </li>
         </ul>
       </div>
     </div>
   </nav>
 );

export default Header;
