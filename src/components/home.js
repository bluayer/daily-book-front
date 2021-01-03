import React from "react"
import DiaryCards from './cards'
import InputForm from './input'
import HideAppBar from './appBar'

export default function Home () {
    const titleStyle = {
        "font-family": `"Times New Roman", Times, serif`,
        "font-size": "300%",
        "display": "flex",
        "justify-content": "space-around",
        "marginTop": "7%"
    }
    const subTitleStyle = {
        "font-family": `"Times New Roman", Times, serif`,
        "font-size": "200%",
        "display": "flex",
        "justify-content": "space-around"
    }

    const userName = localStorage.getItem('name')

    return (
        <div>
            <HideAppBar />
            <h1 style={titleStyle}> Welcome, {userName}</h1>
            <p style={subTitleStyle}> 😃 Please enjoy daily books 📚 </p>
            <InputForm/>
            <DiaryCards />
        </div>
    )
}
