import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import userSWR from "swr";



export default function useUser(){
    const {data, error} = userSWR("/api/users/me")
    const router = useRouter();
    useEffect(()=>{
        if(data && !data.ok){
            router.replace("/enter");
        }
    },[data, router])
    return {user:data?.profile, isLoading:!data && !error};
}