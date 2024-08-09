import React from "react";

class AddContact extends React.Component{

    constructor(props){
        super(props)
        this.state={
            errorMessage:undefined,
            successMessage:undefined
        }
    }
   handleAddContactFormSubmit=(e)=>{
    e.preventDefault()
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const response =this.props.HandleAddContact({name:name, email:email, phone:phone})

    if(response.status==="success"){
        this.setState({errorMessage:undefined, successMessage: response.msg})
        document.querySelector(".form-1").reset();
    } else{
        return this.setState({errorMessage:response.msg, successMessage: undefined})
    }
   }


// rendering form 
    render(){
  return(

    <div className="border col-12 text-white p-2" style={{borderRadius:"10px"}}>
        <form onSubmit={this.handleAddContactFormSubmit} className="form-1">

        
        <div className="row p-2">
            
            <div className="col-12 text-white-50 "> Add New Contact</div>
            <div className="col-12 col-md-4 p-1">
                <input type="text" className="form-control form-control-sm" name="contactName" placeholder="Name.." />
            </div>

            <div className="col-12 col-md-4 p-1">
                <input type="text" className="form-control form-control-sm" name="contactEmail" placeholder="Email.." />
            </div>

            <div className="col-12 col-md-4 p-1">
                <input type="text" className="form-control form-control-sm" name="contactPhone" placeholder="Phone No.." />
            </div>
               {/* apply viiladation  */}
{ this.state.errorMessage === undefined ? (<div></div>):
    (
    <div className="text-center text-danger col-12">
        {this.state.errorMessage}
    </div>
    )
}
{ this.state.successMessage === undefined ? (<div></div>):
    (
    <div className="text-center text-success col-12">
        {this.state.successMessage}
    </div>
    )
}

            <div className="col-12 col-md-6 offset-3 p-1">
            <button className="btn btn-primary btn-sm  form-control">Add Contact</button>
            </div>
        <div>
            
        
    </div>
    
    </div>
    </form>
    </div>
       
    )
}}

export default AddContact;