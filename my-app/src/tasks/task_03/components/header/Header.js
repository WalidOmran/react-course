import Logo from "./Logo";
import Search from "./Search";
import NavbarContent from "./NavbarContent";
import Button from "../common/Button";
import Categores from "./Categores";

function Header() {
    function handleClick(e){
      e.stopPropagation();
      e.preventDefault();
      console.log('handleClick')
    }
    return(
    <header className="main-header">
      <nav className="main-header_navbar ">
          <div className="container wo_row wo_content-space-between">
              <Logo />
              <Search />
              <NavbarContent />
              <Button className="main-header_bar btn" addEvent={handleClick}>
                <i className="fa-solid fa-bars fa-2x"></i>
              </Button >
          </div>
      </nav>
      <Categores />
    </header>
    )
}
export default Header