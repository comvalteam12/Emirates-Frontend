import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.img-2, .img-3').hide();
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
}
