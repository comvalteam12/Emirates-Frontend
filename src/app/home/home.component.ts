import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  slide1 = true;
  slide2 = false;
  slide3 = false;
  slide4 = false;
  slide5 = false;
  slide6 = false;
  getStart = true;
  fname:any;

  constructor() {}

  ngOnInit(): void {
    $('.img-2, .img-3').hide();
  }

  selectDiselect(event: any) {
    event.preventDefault();
    event = event.currentTarget;
    if ($(event).hasClass('active')) {
      $(event).removeClass('active');
    } else {
      $(event).addClass('active');
    }
  }

  accordian(event: any) {
    console.log(event);
    if (event.id == 'heading-1') {
      $('.img-1').show();
      $('.img-2, .img-3').hide();
    } else if (event.id == 'heading-2') {
      $('.img-2').show();
      $('.img-1, .img-3').hide();
    } else if (event.id == 'heading-3') {
      $('.img-3').show();
      $('.img-1, .img-2').hide();
    }
  }

  registerSlide(type:any){
    if(type == 1){
      this.slide1 = false;
      this.slide2 = true;
      this.slide3 = false;
      this.slide4 = false;
      this.slide5 = false;
      this.slide6 = false;
    } else if(type == 2){
      this.slide1 = false;
      this.slide2 = false;
      this.slide3 = true;
      this.slide4 = false;
      this.slide5 = false;
      this.slide6 = false;
    } else if(type == 3){
      this.slide1 = false;
      this.slide2 = false;
      this.slide3 = false;
      this.slide4 = true;
      this.slide5 = false;
      this.slide6 = false;
    } else if(type == 4){
      this.slide1 = false;
      this.slide2 = false;
      this.slide3 = false;
      this.slide4 = false;
      this.slide5 = true;
      this.slide6 = false;
    } else if(type == 5){
      this.slide1 = false;
      this.slide2 = false;
      this.slide3 = false;
      this.slide4 = false;
      this.slide5 = false;
      this.slide6 = true;
    }
  }

  getStarted(){
    alert("Please select products");
  }
  services(event:any, type:any){
    // console.log(event.target.checked);

    if(event.target.checked == true) {
      // if(type == 1 || type == 2 || type == 3 || type == 4 || type == 5 || type == 6 || type == 7 || type == 8 || type == 9){}
      this.getStart = false;
    } else {
      this.getStart = true;
    }
  }

  // public captchaIsLoaded = false;
  // public captchaSuccess = false;
  // public captchaIsExpired = false;
  // public captchaResponse?: string;

  // public theme: 'light' | 'dark' = 'light';
  // public size: 'compact' | 'normal' = 'normal';
  // public lang = 'en';
  // public type!: 'image' | 'audio';
  // handleSuccess(data:any) {
  //   console.log(data);
  // }
}
