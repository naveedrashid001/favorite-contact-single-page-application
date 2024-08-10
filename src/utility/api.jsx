import axios from "axios";
 
const getRandom = async ()=>{
    const resonse = await axios.get(
        "https://random-data-api.com/api/v2/users?size=2&is_xml=true",
        {
            headers:{},
            params:{
                size:1
            }
        }
    )
    return resonse;
}
export {getRandom}