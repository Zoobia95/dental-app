import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  show = true;
  whiteArrow = false;
  orangeArrow = false;
  showMainText = false;
  ngOnInit(): void {
    setTimeout(() => {
      let elem = document.getElementsByClassName('pillClass1')[0];
      elem.classList.add('pillClass1Extended');

      let elem2 = document.getElementsByClassName('paddingClass2')[0];
      elem2.classList.add('paddingClass2Extended');

      let elem3 = document.getElementsByClassName('pillClass2')[0];
      elem3.classList.add('pillClass2Extended');

      let elem4 = document.getElementsByClassName('circleClass1')[0];
      elem4.classList.add('circleClass1Extended');

      let elem5 = document.getElementsByClassName('paddingClass1')[0];
      elem5.classList.add('paddingClass1Extended');

      let elem6 = document.getElementsByClassName('paddingClass3')[0];
      elem6.classList.add('paddingClass3Extended');

      let elem7 = document.getElementsByClassName('orangeArrow')[0];
      elem7.classList.add('orangeArrowExtended');
    }, 2000);

    setTimeout(() => {
      this.whiteArrow = true;
      this.orangeArrow = true;
      let elem8 = document.getElementsByClassName('pillClass1Extended')[0];
      elem8.classList.add('pillClass1Extended2');

      let elem9 = document.getElementsByClassName('pillClass2Extended')[0];
      elem9.classList.add('pillClass2Extended2');

      let elem10 = document.getElementsByClassName('circleClass1Extended')[0];
      elem10.classList.add('circleClass1Extended2');

      let elem11 = document.getElementsByClassName('paddingClass1Extended')[0];
      elem11.classList.add('paddingClass1Extended2');
    }, 2700);

    setTimeout(() => {
      let elem12 = document.getElementsByClassName('whiteArrow')[0];
      elem12.classList.add('whiteArrowExtended');

      let elem13 = document.getElementsByClassName('orangeArrow')[0];
      elem13.classList.add('orangeArrowExtended');

      let elem14 = document.getElementsByClassName('arrowRightSVG')[0];
      elem14.classList.add('arrowRightSVGExtended');
    }, 2800);

    setTimeout(() => {
      let elem15 = document.getElementsByClassName('whiteArrowExtended')[0];
      elem15.classList.add('whiteArrowExtended2');

      let elem16 = document.getElementsByClassName('arrowRightSVGExtended')[0];
      elem16.classList.add('arrowRightSVGExtended2');
    }, 3400);

    setTimeout(() => {
      let elem17 = document.getElementsByClassName('whiteArrowExtended2')[0];
      elem17.classList.add('whiteArrowFinal');

      let elem18 = document.getElementsByClassName('pillClass1Extended2')[0];
      elem18.classList.add('pillClass1Final');

      let elem19 = document.getElementsByClassName('pillClass2Extended2')[0];
      elem19.classList.add('pillClass2Final');

      let elem20 = document.getElementsByClassName('arrowRightSVGExtended2')[0];
      elem20.classList.add('arrowRightSVGFinal');

      let elem21 = document.getElementsByClassName('circleClass1Extended2')[0];
      elem21.classList.add('circleClass1Final');
    }, 3800);

    setTimeout(() => {
      let elem22 = document.getElementsByClassName('arrowRightSVGFinal')[0];
      elem22.classList.add('arrowRightSVGFinal2');

      let elem23 = document.getElementsByClassName('pillClass2Final')[0];
      elem23.classList.add('pillClass2Final2');

      let elem24 = document.getElementsByClassName('whiteArrowFinal')[0];
      elem24.classList.add('whiteArrowFinal2');

      let elem25 = document.getElementsByClassName('pillClass1Final')[0];
      elem25.classList.add('pillClass1Final2');
    }, 3800);

    setTimeout(() => {
      let elem26 = document.getElementsByClassName('logoName')[0];
      elem26.classList.add('logoNameExtended');
    }, 4200);

    setTimeout(() => {
      let elem27 = document.getElementsByClassName('logo')[0];
      elem27.classList.add('logoExtended');

      let elem28 = document.getElementsByClassName('main-div')[0];
      elem28.classList.add('main-div-Extended');
    }, 5000);

    setTimeout(() => {
      this.showMainText = true;
    }, 5500);

    setTimeout(() => {
      let elem29 = document.getElementsByClassName('mainTextClass')[0];
      elem29.classList.add('mainTextClass2');

      let elem30 = document.getElementsByClassName('imageClass1')[0];
      elem30.classList.add('imageClass1Extended');

      let elem35 = document.getElementsByClassName('imageClass2')[0];
      elem35.classList.add('imageClass2Extended');

      let elem40 = document.getElementsByClassName('imageClass3')[0];
      elem40.classList.add('imageClass3Extended');

      let elem44 = document.getElementsByClassName('imageClass4')[0];
      elem44.classList.add('imageClass4Extended');
    }, 5600);

    setTimeout(() => {
      let elem31 = document.getElementsByClassName('roundedFirst')[0];
      elem31.classList.add('roundedFirst2');

      let elem32 = document.getElementsByClassName('imageIconFirst')[0];
      elem32.classList.add('imageIconFirst2');

      let elem33 = document.getElementsByClassName('pillFirst')[0];
      elem33.classList.add('pillFirst2');

      let elem34 = document.getElementsByClassName('textFirst')[0];
      elem34.classList.add('textFirst2');

      let elem36 = document.getElementsByClassName('roundedSecond')[0];
      elem36.classList.add('roundedSecond2');

      let elem37 = document.getElementsByClassName('imageIconSecond')[0];
      elem37.classList.add('imageIconSecond2');

      let elem38 = document.getElementsByClassName('pillSecond')[0];
      elem38.classList.add('pillSecond2');

      let elem39 = document.getElementsByClassName('textSecond')[0];
      elem39.classList.add('textSecond2');

      let elem40 = document.getElementsByClassName('roundedThird')[0];
      elem40.classList.add('roundedThird2');

      let elem41 = document.getElementsByClassName('imageIconThird')[0];
      elem41.classList.add('imageIconThird2');

      let elem42 = document.getElementsByClassName('pillThird')[0];
      elem42.classList.add('pillThird2');

      let elem43 = document.getElementsByClassName('textThird')[0];
      elem43.classList.add('textThird2');

      let elem45 = document.getElementsByClassName('roundedFourth')[0];
      elem45.classList.add('roundedFourth2');

      let elem46 = document.getElementsByClassName('imageIconFourth')[0];
      elem46.classList.add('imageIconFourth2');

      let elem47 = document.getElementsByClassName('pillFourth')[0];
      elem47.classList.add('pillFourth2');

      let elem48 = document.getElementsByClassName('textFourth')[0];
      elem48.classList.add('textFourth2');

      let elem49 = document.getElementsByClassName('menuButton')[0];
      elem49.classList.add('menuButtonExtended');

      let elem50 = document.getElementsByClassName('circularMenu')[0];
      elem50.classList.add('circularMenuExtended');

      let elem51 = document.getElementsByClassName('menuSVG')[0];
      elem51.classList.add('menuSVGExtended');

      let elem52 = document.getElementsByClassName('textLogo')[0];
      elem52.classList.add('textLogo2');

      let elem53 = document.getElementsByClassName('circleClass1Again')[0];
      elem53.classList.add('circleClass1AgainExtended');

      let elem54 = document.getElementsByClassName('logInButton')[0];
      elem54.classList.add('logInButtonExtended');

      let elem55 = document.getElementsByClassName('SignUpButton')[0];
      elem55.classList.add('SignUpButtonExtended');

      let elem60 = document.getElementsByClassName('bindingClass')[0];
      elem60.classList.add('bindingClassExtended');

      let elem61 = document.getElementsByClassName('instagramIcon')[0];
      elem61.classList.add('instagramIconExtended');

      let elem62 = document.getElementsByClassName('youtubeIcon')[0];
      elem62.classList.add('youtubeIconExtended');
      
      let elem63 = document.getElementsByClassName('facebookSVG')[0];
      elem63.classList.add('facebookSVGExtended');

      let elem64 = document.getElementsByClassName('cornerText2')[0];
      elem64.classList.add('cornerText2Extended');

    }, 8000);

    setTimeout(() => {
      let elem56 = document.getElementsByClassName('div4')[0];
      elem56.classList.add('div4Extended');
    }, 10000);

    setTimeout(() => {
      let elem57 = document.getElementsByClassName('div3')[0];
      elem57.classList.add('div3Extended');
    }, 12000);

    setTimeout(() => {
      let elem58 = document.getElementsByClassName('div2')[0];
      elem58.classList.add('div2Extended');
    }, 14000);

    setTimeout(() => {
      let elem59 = document.getElementsByClassName('div1')[0];
      elem59.classList.add('div1Extended');
    }, 16000);
  }
}
