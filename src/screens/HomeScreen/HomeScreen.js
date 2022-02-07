<<<<<<< HEAD
import IdentityCard from "../../components/Javascript/IdentityCard";
import { InitCard } from "../../components/Javascript/InitCard";

import {Footer} from "../../components/Javascript/Footer.js"

import food_kit from "../../Images/Beladi/CycleDonation/covid.jpg";
import cycle_donation from "../../Images/Beladi/CycleDonation/i.jpg";
import swacchta_hi_seva from "../../Images/Chharba/PlasticFreeIndia_Chharba/i.jpeg";
import director from "../../Images/patron/director.JPG";
import mparida from "../../Images/patron/mprdaf.jpg";
import ap from "../../Images/patron/Ap.jpeg";
import bhanu from "../../Images/patron/bhanu.jpg";
import Inspiration from "./Javascript/Inspiration";
import { BsFillHeartFill } from "react-icons/bs";
import { Work } from "./Javascript/Work";
import "./css/App.css";
import About from "./Javascript/About";
import "./css/Carousel.css";
=======
import IdentityCard from '../../components/Javascript/IdentityCard'
import { InitCard } from '../../components/Javascript/InitCard'
import { Images_sequence } from '../HomeScreen/Javascript/Images_sequence'
import food_kit from '../../Images/Beladi/CycleDonation/covid.jpg'
import cycle_donation from '../../Images/Beladi/CycleDonation/i.jpg'
import swacchta_hi_seva from '../../Images/Chharba/PlasticFreeIndia_Chharba/i.jpeg'
import director from '../../Images/patron/director.JPG'
import mparida from '../../Images/patron/mprdaf.jpg'
import ap from '../../Images/patron/Ap.jpeg'
import bhanu from '../../Images/patron/bhanu.jpg'
import Inspiration from './Javascript/Inspiration'
import { BsFillHeartFill } from 'react-icons/bs';
import { Work } from './Javascript/Work'
import "./css/App.css"
import About from './Javascript/About'
import './css/Carousel.css';
>>>>>>> sarveshwar
import ImageSlider from "./Javascript/Slider";

export const HomeScreen = () => {
  return (
    <>
      <About />

      <div className="container">
        <section>
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            <h2>
              Our Recent <span>Initiatives </span>
            </h2>
            <p>
              BrighInitCard <span className="underline">minds at work</span>{" "}
              here
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard
                  image={food_kit}
                  village="All Adopted villages |"
                  date="April 07, 2020"
                  init="Food kit distribution"
                  initiative="COVID19: Team UBA IIT Roorkee distributed food kits"
                />
                <br />
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard
                  image={cycle_donation}
                  village="Beladi |"
                  date="October 12, 2019"
                  init="Cycle Donation"
                  initiative="Donating unused cycles at IITR to village students in Beladi."
                />
                <br />
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard
                  image={swacchta_hi_seva}
                  village="Chharba |"
                  date="September 29, 2019"
                  init="Swacchta Hi Seva"
                  initiative="A step towards greener and cleaner India promoted through a campaign.."
                />
                <br />
              </center>
            </div>
          </div>
        </section>
      </div>
      <Work />

      <br />
      <br />
      <h2>
        <center>
          Our <b>Patrons</b>
        </center>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <IdentityCard
              name="Prof. Ajit K. Chaturvedi"
              designation="Director, IIT Roorkee"
              image={director}
              link="https://www.iitr.ac.in/institute/pages/Director_IIT_Roorkee.html"
            />
          </div>
          <div className="col-md-5">
            <IdentityCard
              name="Prof. Manoranjan Parida"
              designation="Dy Director, IIT Roorkee"
              image={mparida}
              link="https://www.iitr.ac.in/departments/CE/pages/People+Faculty+Parida_M_.html"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <IdentityCard
              name="Dr.Bhanu Prakash Vellanki"
              designation="Co-ordinator, UBA IIT Roorkee"
              image={bhanu}
              link="https://civil.iitr.ac.in/CE?Uid=bhanufce"
            />
          </div>
          <div className="col-md-5">
            <IdentityCard
              name="Prof. Ashish Pandey"
              designation="Regional Cordinator, UBA"
              image={ap}
              link="https://www.iitr.ac.in/departments/WRT/pages/People+Faculty+ashisfwt.html"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container">
        {/* <!--======= TITTLE =========--> */}
        <div className="tittle">
          <h2>
            Fresh From The <span>Blog</span>
          </h2>
          <p>Work. Innovation. Fun.</p>
        </div>
        <div className="row mt-5 carousel-blog carousel">
          <ImageSlider />
        </div>
      </div>
      <Inspiration />
      {/* <!--======= PROUD =========--> */}
      <section>
        <br />
        <center>
          <h2>
            Be the change{" "}
            <span className="Heart">
              <BsFillHeartFill />
            </span>{" "}
            <strong>You wish to see</strong>.
          </h2>
        </center>
      </section>
      <Footer/>
    </>
  );
};
