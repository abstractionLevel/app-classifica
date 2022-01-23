import React  from "react";
import CardTopPlayer from '../../components/CardTopPlayer'
import NavBar from "../../components/NavBar";
import './style.css'





const Home = (props) => {

    return  (
        <body>
            <header>
                <NavBar/>
            </header>
            <div class=" container ">
                <section>
                    <div class="mt-4">
                        <CardTopPlayer/>
                    </div>
                </section>
            </div>
           
        </body>
    );
}




export default Home

