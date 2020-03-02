import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/clouds.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="backgroundWrap" style={{position: "fixed", width: "-webkit-fill-available", zIndex: 0}}>
    <div className="x3">
            <div className="cloud"></div>
          </div>
          <div className="x2">
            <div className="cloud"></div>
          </div>
          <div className="x1">
            <div className="cloud"></div>
          </div>
      </div>
    <div style={{display: `flex`, height: `49vh`, width: `100%`, background:`skyBlue`}}>
      
      <div style={{height: `100%`, width: `33%`}}></div>
      <div style={{height: `100%`, width: `33%`, display: "flex", alignItems: "flex-end"}}>
        <div style={{zIndex: "3"}}>
          <h1 style={{fontSize: "5rem"}}>BEAUTIFUL</h1>
          <h1 style={{fontSize: "5rem"}}>NORTH</h1>
        </div>
      </div>
      <div style={{height: `100%`, width: `33%`}}>
        <div style={{ zIndex:"5", position: "absolute", marginLeft: "1.5rem"}}>
          <h1>About The Book</h1>
          {/* <p><Link to="/about" style={{ 
            color: `black`,           
            textDecoration: `none`,
            fontSize: `1rem`,           
          }}>
            Setting
            </Link>
          </p>  */}
          <h2><Link to="/about" style={{ 
            color: `black`,           
            textDecoration: `none`,
            fontSize: `1rem`,           
          }}>
            Characters
            </Link>
          </h2>   
        </div>  
      </div> 
    </div>
    <div style={{display: `flex`, height: `49vh`, width: `100%`, background:`white`}}>
       <div style={{height: `100%`, width: `33%`, display: "flex", flexFlow: "row-reverse", backgroundColor: `green`}}>
          <div style={{transform: "rotate(-90deg)", position: "absolute"}}>
            <div style={{ textAlign: "end"}}>
              <h1 style={{fontSize: "5rem"}}>INTO</h1>
              <h1 style={{fontSize: "5rem"}}>THE</h1>
            </div>
        </div>
      </div>      
      <div style={{height: `100%`, width: `36%`}}></div>
      <div style={{height: `100%`, width: `33%`, backgroundColor: `red`}}>
        <div style={{textAlign: "center", width: "80%", margin: "auto"}}>
          <h2>Summary</h2>
          <p>Into the beautiful north is about the quest of a young group of Sinaloans. They journey North into the U.S. from their small town of Tres Camarones in search of the men who have gone searching for work in the “Beautiful North”. </p>
        </div>
        
      </div>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
