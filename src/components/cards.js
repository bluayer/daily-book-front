import React, { useEffect, useState } from "react"
import axios from 'axios'

import DiaryCard from './card'

export default function DiaryCards () {
    const [diaries, setDiaries] = useState([])
    useEffect(() => {
        async function getDiaries () {
            const result = await axios.get(
                'http://localhost:8000/diaries'
            )
            setDiaries(result.data)
        }
        getDiaries()
    },[])

    return (
        <div style={{ display: "flex", justifyContent: "space-around",  "flex-wrap": "wrap", margin: "1% 3%"}}>
            {diaries.map((diary) => {
                return <DiaryCard
                    name={diary.name}
                    writer={diary.writer}
                    content={diary.content}
                    author={diary.author}
                    img= {diary.img}
                />
            })}
        </div>
    )
}
