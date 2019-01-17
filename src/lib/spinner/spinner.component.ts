import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'cui-spinner',
  templateUrl: './spinner.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent implements OnInit {

  @Input() public className: string;
  @Input() public color: string = 'black';
  @Input() public percentage: number;
  @Input() public showCheck: boolean = false;
  @Input() public showPercentage: boolean = false;
  @Input() public size: number = 36;

  public checkMarkClasses: string;
  public defaultClasses: string;
  public percentageClasses: string;
  public isPercentage : boolean;


  constructor() { }

  ngOnInit() {

    this.checkPercentage(this.percentage);

    this.percentageClasses =
      `cui-spinner-progress` +
      ` cui-spinner-progress__percentage-${Math.round(this.percentage)}` +
      `${(this.sizeCheck(this.size) && ` cui-spinner-progress--${this.size}`) || ''}` +
      `${(this.color && ` cui-spinner-progress--${this.color}`) || ''}` +
      `${(this.className && ` ${this.className}`) || ''}` +
      ``;

    this.defaultClasses =
      `cui-spinner` +
      `${(this.sizeCheck(this.size)  && ` cui-spinner--${this.size}`) || ' cui-spinner--36'}` +
      `${(this.color && ` cui-spinner--${this.color}`) || ''}` +
      `${(this.className && ` ${this.className}`) || ''}` +
      ``;

    this.checkMarkClasses =
      `cui-spinner-progress__inset-circle` +
      `${this.showCheck && Number(this.percentage) === 100 && ' cui-spinner-progress__inset-circle--check' || ''}` +
      ``;

  }

  public checkPercentage = (percent) => {
    if(!isNaN(percent)){
      this.isPercentage = true;
    }
    if (Number(this.size) !== 36 && this.showPercentage) {
      console.warn('Spinner: Percentage will not be shown for sizes smaller than 36');
    }
  }

  public sizeCheck = (size) => {
    const sizes = [16, 20, 28, 36];

    if(sizes.includes(Number(size))){
      return true;
    }
    console.log('Only sizes 16, 20, 28, 36 are acceptable')
    return false;
  }
}
