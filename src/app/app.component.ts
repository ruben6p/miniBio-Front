import { Component, Renderer2 } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'Bio';
  twitter=faTwitter;
  linkedin=faLinkedin;
  sun=faSun;
  moon=faMoon;

  user={
    name:"Rubén Prado",
    description:"Apasionado del sci-fi, las tecnologías<br> y fan de lo absurdo 🐱‍🚀",
    links:[{
    link:"https://twitter.com",
    title:"Twitter",
    icon:faTwitter
  },
  {link:"https://www.linkeding.com",
  title:"Linkedin",
  icon:faLinkedin}
  ]}


  isDarkMode=false;

  changeMode(){
    this.isDarkMode=!this.isDarkMode

    if(this.isDarkMode){
      this.render.addClass(document.body,'dark');
  
    }else{

    }
  }
}