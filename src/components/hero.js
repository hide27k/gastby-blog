import React from "react"
import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog! <br />
        Enjoy lots of posts. <br />
      </h1>
      <div className="hero-author">
        <img src="https://lh3.googleusercontent.com/a-/AOh14GhTFpuDJhNxdKlHP8fRPEdPpD9WOKl7sOS4bkKT=s250-c" className="hero-author-image" alt="avatar"></img>
        <p className="hero-author-text">
            Written by Hideyuki Komaki.<br />
            Senior student at the University of Washington. Love TypeScript & Go.
        </p>
      </div>
    </div>
  )
}