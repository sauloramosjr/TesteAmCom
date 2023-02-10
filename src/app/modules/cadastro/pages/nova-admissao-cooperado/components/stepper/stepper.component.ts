import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input('steps')
  steps: TemplateRef<any>[] = [];
  @Input('stepcontrols')
  stepControls: FormControl[] | FormGroup[] = [];
  @Input('stepAction')
  stepAction!: BehaviorSubject<string>;
  @Input('titulos')
  titulos: string[] = [];
  @ViewChild('stepper')
  stepper!: MatStepper;
  subs: Subscription[] = [];

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.subs.push(
      this.stepAction
        .pipe(
          tap((e) => {
            switch (e) {
              case 'next':
                this.nextStep();
                break;
              case 'back':
                this.backStep();
                break;
              case 'reset':
                this.resetSteper();
                break;
            }
          }),
        )
        .subscribe(),
    );
  }
  nextStep() {
    this.stepper.next();
  }
  backStep() {
    this.stepper.previous();
  }
  resetSteper() {
    this.stepper.reset();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach((e) => {
      e.unsubscribe();
    });
  }
}
