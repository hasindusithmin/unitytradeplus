import Header from "../components/Header";
import Head from "next/head";
export default function About(){
    return(
        <>  
            <Head>
                <title>unitytrade+ | about</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/info.png" />
            </Head>
            
            <Header 
             quote="The privilege of a lifetime is to become who you truly are."
             author="Carl Jung"
            />

            <div className="w3-row w3-padding w3-border">
            <div className="w3-display-container w3-margin">
            <img className="w3-image" src="/about-us.jpg" alt="ABOUT US" style={{ width: '100%' }} />
            <div className="w3-text-white w3-display-middle">
              <span className="w3-xlarge"><b>INTRODUCING OUR SELFES</b> </span>
              
              
            </div>
          </div>
 
            <div className="w3-white w3-margin">             
              <div className="w3-container w3-black">
              <h4>WHO ARE WE</h4>
              </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>

            <div className="w3-white w3-margin">             
              <div className="w3-container w3-black">
              <h4>OUR MISSION</h4>
              </div>
              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            
            <div className="w3-white w3-margin">             
              <div className="w3-container w3-black">
              <h4>OUR VISION</h4>
              </div>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>

            </div>
        </>
    )

}