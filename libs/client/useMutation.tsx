import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useState } from "react";

interface UseMutaionState {
    loading:boolean;
    data?:object;
    error?:object;
}
type UseMutaionResult = [(data:any)=>void, UseMutaionState];

export default function useMutation(url:string):UseMutaionResult{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<undefined|any>(undefined);
    const [error, setError] = useState<undefined|any>(undefined);
    function mutation(data?:any){
        setLoading(true);
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json().catch(()=>{}))
        .then(setData)
        .catch(setError)
        .finally(()=>setLoading(false));
    }
    return [mutation,{loading, data, error}];
}