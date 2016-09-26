import { Component } from '@angular/core';
import { Car }    from './Car';
@Component({
  selector: 'car-form',
  templateUrl: 'app/car-form.component.html'
})
export class CarFormComponent {
  powers = ['X6', 'M6',
            'I8', '740'];
  model = new Car(18, '', this.powers[0], '');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    this.model = new Car(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
    
  }
}
