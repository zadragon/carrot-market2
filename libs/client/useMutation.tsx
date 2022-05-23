import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useState } from "react";

interface UseMutaionState {
    loading:boolean;
    data?:object;
    error?:object;
}
type UseMutaionResult = [(data:any)=>void, UseMutaionState];

export default function useMutation(url:string):UseMutaionResult{
    const [state, setState] = useState({
        loading:false,
        data:undefined,
        error:undefined
    })

    function mutation(data?:any){
        setState((prev)=>({...prev, loading:true}));
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json().catch(()=>{}))
        .then((data)=> setState((prev)=>({...prev, data})))
        .catch((error)=>setState((prev)=>({...prev, error})))
        .finally(()=>setState((prev)=>({...prev, loading:true})))
    }
    return [mutation,{...state}];
}