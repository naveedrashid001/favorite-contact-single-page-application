import Contact from "./Contact";

const FavrioutContact = (props)=>{
    return(
        <div className="col-12 py-2" style={{
            borderRadius:"10px", backgroundColor:"#323637"
        }}> 
        <div className="text-center text-white-50">Favrouit  Contact</div>
        <div className="p-2">
        {props.contacts.map((contact,index)=>(
                <Contact 
                contact={contact}
                 key={index} 
                 FavriotClick ={props.FavriotClick}
                 ClickDelete = {props.ClickDelete}
                 updatedclick={props.updatedclick}
                  ></Contact>
            ))}
    </div>
    </div>
    
    )
}

export default FavrioutContact;