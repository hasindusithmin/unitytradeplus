import Header from "../components/Header";
import Head from "next/head";
export default function About(){
    return(
        <>  
            <Head>
                <title>unitytrade+ | about</title>
            </Head>
            <Header></Header>
            <div className="w3-row w3-padding w3-border"> 
            <div className="w3-white w3-margin">             
              <div className="w3-container w3-black">
              <h4>WHO ARE WE</h4>
              </div>
            </div>
            <div className="w3-white w3-margin">             
              <div className="w3-container w3-black">
              <h4>OUR MISSION</h4>
              </div>
            </div>
            
            <div className="w3-white w3-margin">             
              <div className="w3-container w3-black">
              <h4>OUR VISION</h4>
              </div>
            </div>

            </div>
        </>
    )

}