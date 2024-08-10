import React from "react";

import AddRandomContact from "./addRandomCotact";
import Header from "../layout/header";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./addContact";
import FavrioutContact from "./FavrioutContact";
import GeneralContact from "./GeneralContact";


class ContactIndex extends React.Component{

    constructor(props){
        super(props)
        this.state={
            contactlist :[
                {
                    id:1,
                    name:"Ishfaq Ali",
                    phone: "+92 320345792",
                    email:"ishfaqali55@gmail.com",
                    isFavorite: true,
                },
                {
                    id:2,
                    name:"Awais Saleem",
                    phone: "+92 145687937",
                    email:"awais1212@gmail.com",
                    isFavorite: true,
                },
                {
                    id:3,
                    name:"Abid Jan",
                    phone: "+92 3160465340",
                    email:"abidjan55@gmail.com",
                    isFavorite: false,
                }
            ],
            SelectedContact:undefined,
            IsUpdated:false,
        }

    }
    // HandleAddContact function 

    HandleAddContact =(newContact)=>{
        if(newContact.name===""){
            return{
                status:"failure", msg:"the name can't be empty"
            }
        } else if(newContact.phone ===""){
            return{
                status:"failure", msg:"the phone can't be empty"
            }
        }

        const duplicateRecord = this.state.contactlist.filter((x) => {
            return x.name === newContact.name && x.phone === newContact.phone;
        });

        if(duplicateRecord.length>0){
            return {
                status:"failure", msg:"duplacte record"
            }
        }
        else {

        
       const finalContact ={
        ...newContact,
        id: this.state.contactlist[this.state.contactlist.length-1].id+1,
        isFavorite:false,
       }
       this.setState((prevState)=>{
        return{
            contactlist : prevState.contactlist.concat([finalContact])
        }
       })}
       return{
        status:"success", msg:"Contact was added successfully"
       }
    }
    // update single contact 
    UpdatededContact = (updatedContact) => {
        // Ensure ID is a number
        const contactId = Number(updatedContact.id);
    
        if (updatedContact.name === "") {
            return {
                status: "failure",
                msg: "the name can't be empty"
            };
        } else if (updatedContact.phone === "") {
            return {
                status: "failure",
                msg: "the phone can't be empty"
            };
        }
    
        this.setState((prevState) => {
            const updatedList = prevState.contactlist.map((obj) => {
                if (obj.id === contactId) {
                    return {
                        ...obj,
                        name: updatedContact.name,
                        email: updatedContact.email,
                        phone: updatedContact.phone
                    };
                }
                return obj;
            });
    
            return {
                contactlist: updatedList,
                SelectedContact: undefined,
                IsUpdated: false
            };
        });
    
        return {
            status: "success",
            msg: "Contact was Updated successfully"
        };
    };

    
    //  handle toggle function 
    HandleToggleFavroit = (contact)=>{
        this.setState((prevState)=>{
           return{
            contactlist: prevState.contactlist.map((obj)=>{
                if(obj.id===contact.id){
                    return {
                        ...obj, isFavorite: !obj.isFavorite
                    }
                    
                } else {
                    return obj
                }
            })
           }
        })
    }
    
    //  delete contact 
    DeleteContact = (contactId)=>{
        this.setState((prevState)=>{
           return{
            contactlist: prevState.contactlist.filter((obj)=>{
                return obj.id !== contactId
             })
           }
        })
    }

    // handle random contact
    HandleAddRandomContact = (newcontact)=>{
        const finalContact ={
            ...newcontact,
            id: this.state.contactlist[this.state.contactlist.length-1].id+1,
            isFavorite:false,
           }
           this.setState((prevState)=>{
            return{
                contactlist : prevState.contactlist.concat([finalContact])
            }
           })
    }

    //  remove  all contact
    HandleRemoveAllContact = ()=>{
        this.setState(()=>{
           return{
            contactlist:[]
           }
        })
    }
    //  update contact
    HandleUpdateContact = (contact)=>{
        this.setState(()=>{
            
           return{
            SelectedContact:contact,
            IsUpdated:true,
            
           }
        })
    }
    //  cancle update button
    HandleCancleUpdateContact = (contact)=>{
        this.setState(()=>{
            console.log(contact)
           return{
            SelectedContact:undefined,
            IsUpdated:false,
            
           }
        })
    }

    //  rendering 

    render(){
        return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        {/* add random contact */}
                        <div className="col-3 offset-3">
                            <AddRandomContact HandleAddRandomContact = {this.HandleAddRandomContact}/>
                        </div>
                        {/* remove all contact */}
                        <div className="col-3 ">
                            <RemoveAllContact HandleRemoveAllContact ={this.HandleRemoveAllContact}/>

                        </div>
                    </div>
                    {/* add contact */}
                    <div className="row py-2">
                        <div className="col-8 offset-2 row">
                        <AddContact 
    HandleAddContact={this.HandleAddContact}
    IsUpdated={this.state.IsUpdated}
    SelectedContact={this.state.SelectedContact}
    CancleUpdateContact={this.HandleCancleUpdateContact}
    UpdatededContact={this.UpdatededContact}
/>

                            </div>
                    </div>

                    {/* Favriout Contact */}
                    <div className="row py-2">
                    <div className="col-8 offset-2 row">
                            <FavrioutContact contacts={this.state.contactlist.filter(
                                (u)=>u.isFavorite===true
                            )} 
                            FavriotClick = {this.HandleToggleFavroit}
                            ClickDelete = {this.DeleteContact}
                            updatedclick= {this.HandleUpdateContact}
                             />
                            
                            </div>
                    </div>

                    {/* Gneral Contact */}
                    <div className="row py-2">
                    <div className="col-8 offset-2 row">
                            <GeneralContact  contacts={this.state.contactlist.filter((u)=>
                               u.isFavorite===false
                            )}
                             FavriotClick = {this.HandleToggleFavroit}
                             ClickDelete = {this.DeleteContact}
                             updatedclick= {this.HandleUpdateContact}
                             />
                       </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ContactIndex;