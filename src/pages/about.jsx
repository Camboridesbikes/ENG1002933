import React from "react"
import { Link } from "gatsby"
import Character from "../components/char"

import Layout from "../components/layout"
import SEO from "../components/seo"

const character = {
  "Tacho": "Tacho is the gay proprietor and cook of the village restaurant, La Mano Caída (The Fallen Hand), a frequent hangout for Nayeli and her girlfriends. Tacho and Nayeli are kindred spirits, both dreaming of a cosmopolitan life in a big city. They sometimes climb up on the roof of the restaurant to look at the sky, “making believe that clouds were the Manhattan skyline.",
  "Matt" : "A young missionary once stationed in Tres Camarones, Matt is the first “real live blond boy”  Nayeli and her friends have ever seen. AFter his return to San Diego, Matt lives aimlessly, until he receives a phone call from Nayeli and the true extent of his generosity is revealed.",
  "Atomico" : "Raised in the dumps of Tijuana and armed with a bamboo rod, Atomico  brings his unique sense of justice to the journey. His scrappy and maniacal exterior hides a mixture of pride, loyalty, and humble nobility.",
  "Vampi" : "Veronica, known as Vampi, is the only goth girl in the state of Sinaloa. Her look is distinctive: black hair dyed even blacker, pale makeup, black lips and nails, and a long black skirt. Despite her appearance, Vampi’s experience with goth culture is limited, derived from Youtube where she worships bands such as The 69 Eyes and Type O Negative.",
  "Yolo" : "Yolo is short for Yoloxochitl.  She is a very beautiful girl who is from Tres Camarones.  Yolo has short hair that she cut for the summer.   Yolo is also very smart.  It is referenced many times in the book how she was a straight A student.  She played soccer and was good, but not as good as Nayeli. She is an avid reader.  She works at a bowling alley as a pin setter.",
  "Naylie" : "She is known as a very bright, strong,athletic character who is extremely admired by loyal friends. They all just graduated high school but all share a bleak future in the poor Mexican village of Tres Camarones.,"

}

const dispChar = Object.keys(character).forEach(
  (key, ind) =>{
     console.log(key);
     console.log(ind);
    return(
      <>
        <Character name={key} sum={ind}/>
      </>
    );
  }
);

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    {/* <h1 id="setting">Setting</h1> */}
    <h1>Characters</h1>
    {dispChar}
    <div style={{marginLeft: "1.5rem", width: "45%"}}>
      <h2 id="">Naylie</h2>
      <p>She is known as a very bright, strong,athletic character who is extremely admired by loyal friends. They all just graduated high school but all share a bleak future in the poor Mexican village of Tres Camarones. 
</p>
      <h2>Yolo</h2>
      <p>Yolo is short for Yoloxochitl.  She is a very beautiful girl who is from Tres Camarones.  Yolo has short hair that she cut for the summer.   Yolo is also very smart.  It is referenced many times in the book how she was a straight A student.  She played soccer and was good, but not as good as Nayeli. She is an avid reader.  She works at a bowling alley as a pin setter.  Yolo, like Nayeli, has a crush on Matt, the missionary.    </p>
      <h2>Vampi</h2>
      <p>Veronica, known as Vampi, is the only goth girl in the state of Sinaloa. Her look is distinctive: black hair dyed even blacker, pale makeup, black lips and nails, and a long black skirt. Despite her appearance, Vampi’s experience with goth culture is limited, derived from Youtube where she worships bands such as The 69 Eyes and Type O Negative. No parent in Tres Camarones would allow their child to dress that way but Vampi’s grandma was old and too tired to tell her anything. Only the notorious girlfriends noticed that Vampi went goth after her parents died. Behind the front is a girl who still has a lot to learn about the world. An example of this is shown when Nayeli and Yolo had to help her use a tampon because her grandma never let her use one or when she didn’t know who the president of her country was. However, she has street smarts to an extent and this is shown when she translated what the cholos at the border told them about crossing, or when she sat on the old cowboy on the bus because she took advantage of the fact that she was a young teenage girl and the man was elderly. 
</p>
      <h2>Tacho</h2>
      <p></p>
      <p>Tacho is the gay proprietor and cook of the village restaurant, La Mano Caída (The Fallen Hand), a frequent hangout for Nayeli and her girlfriends. Tacho and Nayeli are kindred spirits, both dreaming of a cosmopolitan life in a big city. They sometimes climb up on the roof of the restaurant to look at the sky, “making believe that clouds were the Manhattan skyline.</p>
      <h2>Matt</h2>
      <p>A young missionary once stationed in Tres Camarones, Matt is the first “real live blond boy”  Nayeli and her friends have ever seen. After his return to San Diego, Matt lives aimlessly, until he receives a phone call from Nayeli and the true extent of his generosity is revealed.
</p>
      <h2>Atomico</h2>
      <p> Raised in the dumps of Tijuana and armed with a bamboo rod, Atomiko  brings his unique sense of justice to the journey. His scrappy and maniacal exterior hides a mixture of pride, loyalty, and humble nobility. Former Mexican soldier.</p>
    </div>
    
  </Layout>
)

export default SecondPage
