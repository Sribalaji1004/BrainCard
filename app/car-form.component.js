"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Car_1 = require('./Car');
var CarFormComponent = (function () {
    function CarFormComponent() {
        this.powers = ['X6', 'M6',
            'I8', '740'];
        this.model = new Car_1.Car(18, '', this.powers[0], '');
        this.submitted = false;
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
    }
    CarFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    CarFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new Car_1.Car(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    CarFormComponent = __decorate([
        core_1.Component({
            selector: 'car-form',
            templateUrl: 'app/car-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CarFormComponent);
    return CarFormComponent;
}());
exports.CarFormComponent = CarFormComponent;
//# sourceMappingURL=car-form.component.js.map