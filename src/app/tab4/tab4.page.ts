import { Component, OnInit } from '@angular/core';
declare let AgoraUIKit: any, document: any;
// import * as AgoraUIKit from 'agora-react-uikit';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  appId: string = "fd01ba99948742e2816e54d453dc6e46"
  // role = 'audience' || 'host'
  role = 'host';
  token = "007eJxTYDi8ZbHJ4TlR5WWPuddPOBpXzPWPMzWUP3e6uJ6oelfTakcFhrQUA8OkREtLSxMLcxOjVCMLQ7NUU5MUE1PjlGSzVBOzr8Z7kxsCGRkyrvMyMTJAIIjPxlCSWlxSlszAAAAgFx6e";
  // token = '367252ea-ee7e-4dbf-a5a8-b43c35ff8c5e@testMOOD@8640@1642871231'
  channel = 'testvc'

  constructor() {
   }

  ngOnInit() {
    const el = document.querySelector('agora-react-web-uikit');
    el.addEventListener(' ', (e) => {
      console.log('hello from html')
      // handle endcall event
      el.remove();
    });
    console.log(el)
  }

}
