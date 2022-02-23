import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {

  columnNum: Array<number> = Array(3);
  placeholderElements: Array<number> = Array(12);
  rowNum: Array<number> = Array(4);

  width: number = 250;
  height: number = 250;
  depth: number = Math.sqrt((90*90) + (77*77));
  slope: number = -1.168831168;

  activeUnit: string = 'mm';

  activeTab: number = 0;
  saturation: number = 100;
  brightness: number = 70;
  searchActive: boolean = true;

  constructor() {
   }

  ngOnInit() {
  }

  public selectRadio(event) {
    //console.log(event.target.parentElement.parentElement.firstChild);
    let radio = <HTMLInputElement>(event.target.parentElement.parentElement.firstChild);
    if (radio.value != undefined) {
    radio.checked = true;
    
    this.columnNum = Array(parseInt(radio.value));
    this.rowNum = Array(12/parseInt(radio.value));

    document.getElementsByClassName('icon-dim').item(0).classList.remove('active-ic');
    document.getElementsByClassName('icon-dim').item(1).classList.remove('active-ic');
    document.getElementsByClassName('icon-dim').item(2).classList.remove('active-ic');
    event.target.parentElement.classList.add('active-ic');
    console.log(this.columnNum);
    }
  }

  selectRadio2 (event) {
    let radio = <HTMLInputElement>(event.target.firstChild);
    console.log(radio);
    if (radio.value != undefined) {
    radio.checked = true;
    this.activeUnit = radio.value;

    document.getElementsByClassName('mm-i').item(0).classList.remove('active-checked');
    document.getElementsByClassName('mm-i').item(1).classList.remove('active-checked');

    event.target.classList.add('active-checked');
    }
  }

  getDepth() {
    let rect1 = document.querySelector('#rect1'); 
    let rect2 = document.querySelector('#rect2');

    let x1 = parseInt(rect1.getAttribute('x'));
    let x2 = parseInt(rect2.getAttribute('x'));
    let y1 = parseInt(rect1.getAttribute('y'));
    let y2 = parseInt(rect2.getAttribute('y'));


    return Math.sqrt((Math.pow(Math.abs(x1 - x2), 2)) + (Math.pow(Math.abs(y1 - y2), 2)));
  }

  widthChanged(value) {
    this.width = value;
    let rect1 = document.querySelector('#rect1'); 
    let rect2 = document.querySelector('#rect2');
    rect1.setAttribute('width', this.width.toString());
    rect2.setAttribute('width', this.width.toString());
    let poly1 = rect1.getAttribute('x') + " " + rect1.getAttribute('y') + " " + (+parseInt(rect1.getAttribute('x')) + +this.width) + " " + rect1.getAttribute('y') + " " + (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + rect2.getAttribute('y') + " " + rect2.getAttribute('x') + " " + rect2.getAttribute('y');
    let poly2 = (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + rect2.getAttribute('y') + " " + (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + (+rect2.getAttribute('y') + +this.height) + " " + (+rect1.getAttribute('x') + +this.width) + " " + (+rect1.getAttribute('y') + +this.height) + " " + (+rect1.getAttribute('x') + +this.width) + " " + rect1.getAttribute('y');
    document.querySelector('#poly1').setAttribute('points',  poly1);
    document.querySelector('#poly2').setAttribute('points',  poly2);
  }

  heightChanged(value) {
    console.log(this.getDepth());
    this.height = value;
    let rect1 = document.querySelector('#rect1'); 
    let rect2 = document.querySelector('#rect2');
    rect1.setAttribute('height', this.height.toString());
    rect2.setAttribute('height', this.height.toString());
    let poly1 = rect1.getAttribute('x') + " " + rect1.getAttribute('y') + " " + (+parseInt(rect1.getAttribute('x')) + +this.width) + " " + rect1.getAttribute('y') + " " + (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + rect2.getAttribute('y') + " " + rect2.getAttribute('x') + " " + rect2.getAttribute('y');
    let poly2 = (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + rect2.getAttribute('y') + " " + (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + (+rect2.getAttribute('y') + +this.height) + " " + (+rect1.getAttribute('x') + +this.width) + " " + (+rect1.getAttribute('y') + +this.height) + " " + (+rect1.getAttribute('x') + +this.width) + " " + rect1.getAttribute('y');
    document.querySelector('#poly1').setAttribute('points',  poly1);
    document.querySelector('#poly2').setAttribute('points',  poly2);
  }

  depthChanged(value) {
    this.depth = value;
    let rect1 = document.querySelector('#rect1'); 
    let rect2 = document.querySelector('#rect2');
    let newY = (+this.depth-180 + +(77*this.slope)) / this.slope;
    rect2.setAttribute('x', this.depth.toString());
    rect2.setAttribute('y', newY.toString());
    let poly1 = rect1.getAttribute('x') + " " + rect1.getAttribute('y') + " " + (+parseInt(rect1.getAttribute('x')) + +this.width) + " " + rect1.getAttribute('y') + " " + (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + rect2.getAttribute('y') + " " + rect2.getAttribute('x') + " " + rect2.getAttribute('y');
    let poly2 = (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + rect2.getAttribute('y') + " " + (+parseInt(rect2.getAttribute('x')) + +this.width) + " " + (+rect2.getAttribute('y') + +this.height) + " " + (+rect1.getAttribute('x') + +this.width) + " " + (+rect1.getAttribute('y') + +this.height) + " " + (+rect1.getAttribute('x') + +this.width) + " " + rect1.getAttribute('y');
    document.querySelector('#poly1').setAttribute('points',  poly1);
    document.querySelector('#poly2').setAttribute('points',  poly2);

  }



  setActiveTab(value) {
    console.log(value);
    this.activeTab = value;
  }

  selectRadio3 (event) {
    console.log(event.target);
    let radio = <HTMLInputElement>(event.target.firstChild);
    console.log(radio);
    if (radio.value != undefined) {
    radio.checked = true;

    document.getElementsByClassName('sh-i').item(0).classList.remove('active-checked');
    document.getElementsByClassName('sh-i').item(1).classList.remove('active-checked');
    document.getElementsByClassName('sh-i').item(2).classList.remove('active-checked');

    event.target.classList.add('active-checked');
    }
  }

  changeSaturation(event) {
    this.saturation = event.target.value;
    let els = document.getElementsByClassName('color-button');
    let j = 0;
    for (let i =0; i< els.length;i++) {
      (<HTMLElement>(els[i])).style.background = `hsl(${j}, ${this.saturation}%, ${this.brightness}%)`;
      j = j + 30;
    }
  }

  

  changeBrightness(event) {
    this.brightness = event.target.value;
    let els = document.getElementsByClassName('color-button');
    let j = 0;
    for (let i =0; i< els.length;i++) {
      (<HTMLElement>(els[i])).style.background = `hsl(${j}, ${this.saturation}%, ${this.brightness}%)`;
      j = j + 30;
    }
  }

  toggleSearchComponent(event) {
    console.log(document.getElementsByClassName('rot-arr')[0]);
    if (this.searchActive) {
      (<HTMLElement>(document.getElementsByClassName('rot-arr')[0])).style.transform = 'rotate(180deg)';
    } else {
      (<HTMLElement>(document.getElementsByClassName('rot-arr')[0])).style.transform = 'rotate(0deg)';
    }
    this.searchActive = !this.searchActive;
  }

  selectRadio4 (event) {
    console.log(event.target);
    let radio = <HTMLInputElement>(event.target.firstChild);
    console.log(radio);
    if (radio.value != undefined) {
    radio.checked = true;

    document.getElementsByClassName('tx-s').item(0).classList.remove('active-checked');
    document.getElementsByClassName('tx-s').item(1).classList.remove('active-checked');

    event.target.classList.add('active-checked');
    }
  }
}
