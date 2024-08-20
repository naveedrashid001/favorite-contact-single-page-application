import React from "react";

class AddContact extends React.Component{

    constructor(props){
        super(props)
        this.state={
            errorMessage:undefined,
            successMessage:undefined
        }
    }
    handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.contactName.value.trim();
        const email = e.target.elements.contactEmail.value.trim();
        const phone = e.target.elements.contactPhone.value.trim();
        const id = e.target.elements.contactId.value.trim();
        
        console.log('Form data:', { name, email, phone, id });
    
        let response;
    
        if (this.props.IsUpdated) {
            response = this.props.UpdatededContact({
                name,
                email,
                phone,
                id
            });
        } else {
            response = this.props.HandleAddContact({
                name,
                email,
                phone
            });
        }
    
        console.log(response);
    
        if (response.status === "success") {
            this.setState({ errorMessage: undefined, successMessage: response.msg });
            document.querySelector(".form-1").reset();
        } else {
            this.setState({ errorMessage: response.msg, successMessage: undefined });
        }
    };
    
    
// cancle 
HandleCancle=(()=>{
this.props.CancleUpdateContact()
})
// rendering form 
    render(){
  return(

    <div className="border col-12 text-white p-2" style={{borderRadius:"10px"}}>
        <form onSubmit={this.handleAddContactFormSubmit} className="form-1">

        <input hidden  name="contactId" defaultValue={this.props.IsUpdated ? this.props.SelectedContact.id :""} />

        <div className="row p-2">
            
            <div className="col-12 text-white-50 "> {this.props.IsUpdated ?"Update Contact":"Create Contact"} </div>
            <div className="col-12 col-md-4 p-1">
                <input type="text" className="form-control form-control-sm" name="contactName" placeholder="Name.." defaultValue={this.props.IsUpdated ? this.props.SelectedContact.name :""} />
            </div>

            <div className="col-12 col-md-4 p-1">
                <input type="email" className="form-control form-control-sm" name="contactEmail" placeholder="Email.."  defaultValue={this.props.IsUpdated ? this.props.SelectedContact.email :""} />
            </div>

            <div className="col-12 col-md-4 p-1">
                <input type="text" className="form-control form-control-sm" name="contactPhone" placeholder="Phone No.." defaultValue={this.props.IsUpdated ? this.props.SelectedContact.phone :""} />
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

            <div className={`col-12 p-1 ${this.props.IsUpdated ? "col-md-4 offset-md-2": "col-md-6 offset-md-3"}`}> 
            <button className="btn btn-primary btn-sm  form-control">{this.props.IsUpdated ? "Updated":"Create"}</button>
            </div>
            <div className="col-12 col-md-4 p-1">
            {this.props.IsUpdated && (
                <button className="btn btn-secondary btn-sm  form-control" onClick={this.HandleCancle}>Cancel</button>
            )}
            
            </div>
        <div>
            
        
    </div>
    
    </div>
    </form>
    </div>
       
    )
}}

export default AddContact;