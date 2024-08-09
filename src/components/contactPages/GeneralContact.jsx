import Contact from "./Contact";
const GeneralContact = (props)=>{

    return(
        <div className="col-12 py-2" style={{
            borderRadius:"10px", backgroundColor:"#323637"
        }}> 
        <div className="text-center text-white-50">Other Contact</div>
        <div className="p-2">
        {props.contacts.map((contact,index)=>(
                <Contact 
                contact={contact} 
                key={index}
                FavriotClick ={props.FavriotClick}
                ClickDelete = {props.ClickDelete}
                >
                   
               </Contact>
            ))}
    </div>
    </div>
    )
}

export default GeneralContact;