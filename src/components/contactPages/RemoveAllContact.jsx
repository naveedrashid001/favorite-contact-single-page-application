const RemoveAllContact = (props)=>{
    return(
        <div>
        <button className="btn btn-danger form-control" onClick={()=>props.HandleRemoveAllContact()}>Remove All Contact</button>
    </div>
    )
}

export default RemoveAllContact;