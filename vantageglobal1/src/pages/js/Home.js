import Welcome from '../../components/Welcome';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Contact from '../../components/Contact';


import '../css/home.css';



export default function Home() {
    return (
        <div className="container-fluid homeContainer" >
           <Header></Header> 

            <Welcome></Welcome>
            <Services></Services>
            <Contact></Contact>
        </div>
    )
}

