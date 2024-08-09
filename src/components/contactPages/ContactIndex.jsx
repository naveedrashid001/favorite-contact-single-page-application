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
                    phone: "0313-0345792",
                    email:"ishfaqali55@gmail.com",
                    isFavorite: true,
                },
                {
                    id:2,
                    name:"Awais Saleem",
                    phone: "0314-5687937",
                    email:"awais1212@gmail.com",
                    isFavorite: true,
                },
                {
                    id:3,
                    name:"Abid Jan",
                    phone: "0316-0465340",
                    email:"abidjan55@gmail.com",
                    isFavorite: false,
                }
            ]
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

    //  rendering 

    render(){
        return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-3 offset-3">
                            <AddRandomContact/>
                        </div>
                        <div className="col-3 ">
                            <RemoveAllContact/>
                        </div>
                    </div>
                    {/* add contact */}
                    <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <AddContact HandleAddContact = {this.HandleAddContact}/>
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
                             />
                       </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ContactIndex;