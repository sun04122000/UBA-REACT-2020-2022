import React from "react";
import "../css/Work.css";

export const Work = () => {
  return (
    <div>
      {/* <!--======= HOW CAN YOU HELP =========--> */}
      <section className="how-can-help what-we">
        <div className="container">
          <ul className="row">
            {/* <!--======= HOW CAN YOU HELP =========--> */}
            <li className="col-md-8 with-map">
              {" "}
              <span className="big-text font-lora">
                HOW <small> DO WE WORK?</small>
              </span>
              <hr />
              <h6>
                Putting young minds at work. Inspiring social innovation.{" "}
              </h6>
              <p align="justify">
                One of the main problems for rural India is not being at the
                same pace of development as the urban counterpart. This is due
                to the lack of schemes, that involve the participation from all
                the stakeholders. There is a gap between the government policies
                and its beneficiaries. The gap widens with every initiative of
                the government that fails to reach the remotest parts of the
                country. However, in a country with a population of over 1.25
                billion, it is overwhelmingly difficult to design an initiative
                that benefits all. Therefore, there is a need to synergize the
                efforts of Academia- Government-Industries & Society in every
                area to orchestrate ground level models for technological,
                social as well as administerial betterment of rural India.
              </p>
            </li>

            {/* <!--======= OUR PROGRAM =========--> */}
            <li className="col-md-4">
              <div className="program">
                <div className="inner">
                  <h3>
                    Check out the latest <br /> <br /> issue of our biannual{" "}
                    <br /> <br />
                    newsletter! <br /> <br />
                    <span>
                      {" "}
                      6 months <br />
                      15 initiatives{" "}
                    </span>
                  </h3>
                  <a href="docs/Newsletter2.pdf" className="btn">
                    Latest Issue
                  </a>{" "}
                  <a href="docs/Newsletter1.pdf" className="btn btn-1">
                    Previous Issue
                  </a>{" "}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
