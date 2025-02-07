import { useParams } from "react-router";

export default function UserPage(){
    let params = useParams()
    return(
        <h1>{params.id}</h1>
    )
}