// function bases component 

import logo from "../../images/react.png"

const  Header= () => {
return(
    <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}>
    <img src={logo} alt="" style={{height:"35px", verticalAlign:"top"}}/>
   <span className="h2 pt-4 text-white-50">Contact-Opedia</span>
  </div>
)
}

export default Header;