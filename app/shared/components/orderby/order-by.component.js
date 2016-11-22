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
var OrderByComponent = (function () {
    function OrderByComponent() {
        this.orderByUpdate = new core_1.EventEmitter();
    }
    OrderByComponent.prototype.checkState = function (state) {
        this.active = state.target == this.target;
    };
    OrderByComponent.prototype.onClick = function (btn) {
        this.direction = !this.direction;
        this.orderByUpdate.emit({ target: this.target, direction: this.direction });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OrderByComponent.prototype, "target", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OrderByComponent.prototype, "orderByUpdate", void 0);
    __decorate([
        core_1.HostListener('click', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], OrderByComponent.prototype, "onClick", null);
    OrderByComponent = __decorate([
        core_1.Component({
            selector: 'th[order-by]',
            templateUrl: './app/shared/Components/orderby/order-by.component.html',
            styleUrls: ['./app/shared/Components/orderby/order-by.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByComponent);
    return OrderByComponent;
}());
exports.OrderByComponent = OrderByComponent;
//# sourceMappingURL=order-by.component.js.map