'use client';
import { getMyDiaries } from "@/services/DiaryService"
import { useEffect } from "react"


const DiaryPage = () => {
    useEffect(() => {
        const getMyDiary = async() => {
            const response = await getMyDiaries('10');
            console.log(response);
        }
        getMyDiary();        
    })

    return (<>asdfasdf</>)
}


export default DiaryPage