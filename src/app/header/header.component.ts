import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    infinite: true,
    autoplay: true,
    // width:180,
    //   autoplaySpeed: 1000,
    // speed: 1400,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  rightItems(event: any) {
    $(event).siblings('a.active').removeClass('active');
    $(event).addClass('active');
    var index = $(event).index();
    $('div.bhoechie-tab>div.bhoechie-tab-content').removeClass('active');
    $('div.bhoechie-tab>div.bhoechie-tab-content').eq(index).addClass('active');

    let sector_item: any = document.getElementsByClassName('sector-item');
    let slick_track: any = document.getElementsByClassName('slick-track');
    for (let i = 0; i < sector_item.length || slick_track.length; i++) {
      // const element = array[i];
      sector_item[i].style.width = '171px';
      slick_track[i].style =
        'opacity: 1; width: 4104px; transform: translate3d(-855px, 0px, 0px);';
    }
  }

  dropdownSectors() {
    // $(".dropdown").on("click", function() {
    // alert('ok');
    // $('.sector-slider').slick('setPosition');
    // });
    // $('.slide').slick('setPosition').slick();
    // $('.sector-slider').slick('setPosition').slick();
  }
}
