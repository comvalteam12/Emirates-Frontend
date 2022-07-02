import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  // slideConfig = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   nextArrow: "<div class='nav-btn next-slide'></div>",
  //   prevArrow: "<div class='nav-btn prev-slide'></div>",
  //   dots: false,
  //   infinite: true,
  //   autoplay:false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  constructor() { }
  slideConfig:any;
  ngOnInit(): void {
    this.slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: "<div class='nav-btn next-slide'></div>",
      prevArrow: "<div class='nav-btn prev-slide'></div>",
      dots: false,
      infinite: true,
      autoplay:true,
    //   autoplaySpeed: 1000,
    // speed: 1400,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }

  rightItems(event:any){
        $(event).siblings('a.active').removeClass("active");
        $(event).addClass("active");
        var index = $(event).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
  }

  dropdownSectors(){
  // $(".dropdown").on("click", function() {
    // alert('ok');
    // $('.sector-slider').slick('setPosition');
  // });
}

}
