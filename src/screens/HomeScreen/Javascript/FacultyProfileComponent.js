import React from 'react';
import "../css/FacultyTeam.css"


export const FacultyProfileComponent = (props) => {
  return <div class="container ">
  
          <div class="row member-contentt">
              <div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
                  <img id='pic' class="img-responsive img-center img-thumbnail img-circle rounded-circle" src={props.FacultyImage}/>
                  <h4>{props.Name}</h4>
                  <p class="title">{props.Title}</p>
              </div>
              <div class="col-sm-7">
                  <div class="detailss">
                      <p>{props.About}</p>
                      <ul class="social-content">
                          <li><a href={props.email}><i class="fa fa-envelope fa-fw"></i></a></li>
                          <li><a href={props.twitter}><i class="fa fa-twitter fa-fw"></i></a></li>
                          <li><a href={props.facebook}><i class="fa fa-facebook fa-fw"></i></a></li>
                          <li><a href={props.linkedin}><i class="fa fa-linkedin fa-fw"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
         
</div>;
};