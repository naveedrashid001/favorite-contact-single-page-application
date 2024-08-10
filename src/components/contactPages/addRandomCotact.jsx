import { getRandom } from "../../utility/api";

const GetrandomContact = async (props)=>{
   const ResponseFromApi= await getRandom();
   console.log(ResponseFromApi)

   return props.HandleAddRandomContact({
    name:   ResponseFromApi.data.first_name +" " + ResponseFromApi.data.last_name,
    email: ResponseFromApi.data.email,
    phone: ResponseFromApi.data.phone_number.replace(/\s*x\d+$/, '')
   })
}
const AddRandomContact = (props)=>{
    return(
        <div>
        <button className="btn btn-success form-control"
         onClick={()=>GetrandomContact(props)}
         >Add Random Contact</button>
    </div>
    )
}

export default AddRandomContact;