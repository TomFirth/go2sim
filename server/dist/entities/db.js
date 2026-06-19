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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMCard = exports.SimStatus = void 0;
const typeorm_1 = require("typeorm");
var SimStatus;
(function (SimStatus) {
    SimStatus["PENDING"] = "pending";
    SimStatus["ACTIVE"] = "active";
    SimStatus["FAILED"] = "failed";
})(SimStatus || (exports.SimStatus = SimStatus = {}));
let SIMCard = class SIMCard {
    id;
    iccid;
    phoneNumber;
    status;
};
exports.SIMCard = SIMCard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SIMCard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 19, unique: true }),
    __metadata("design:type", String)
], SIMCard.prototype, "iccid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20, nullable: true }),
    __metadata("design:type", Object)
], SIMCard.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: SimStatus,
        default: SimStatus.PENDING
    }),
    __metadata("design:type", String)
], SIMCard.prototype, "status", void 0);
exports.SIMCard = SIMCard = __decorate([
    (0, typeorm_1.Entity)()
], SIMCard);
//# sourceMappingURL=db.js.map