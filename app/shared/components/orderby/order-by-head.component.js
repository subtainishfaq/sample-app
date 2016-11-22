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
var _1 = require('./');
var OrderByHeadComponent = (function () {
    function OrderByHeadComponent() {
        this.UpdateSort = new core_1.EventEmitter();
    }
    OrderByHeadComponent.prototype.updateChildren = function (state) {
        var _this = this;
        this.OrderByComponents.forEach(function (element) {
            element.checkState(state);
            _this.UpdateSort.emit(state);
        });
    };
    OrderByHeadComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.OrderByComponents.forEach(function (element) {
            element.orderByUpdate.subscribe(function (changes) { return _this.updateChildren(changes); });
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OrderByHeadComponent.prototype, "UpdateSort", void 0);
    __decorate([
        core_1.ContentChildren(_1.OrderByComponent), 
        __metadata('design:type', core_1.QueryList)
    ], OrderByHeadComponent.prototype, "OrderByComponents", void 0);
    OrderByHeadComponent = __decorate([
        core_1.Component({
            selector: "thead[order-by]",
            templateUrl: './app/shared/Components/orderby/order-by-head.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByHeadComponent);
    return OrderByHeadComponent;
}());
exports.OrderByHeadComponent = OrderByHeadComponent;
//# sourceMappingURL=order-by-head.component.js.map