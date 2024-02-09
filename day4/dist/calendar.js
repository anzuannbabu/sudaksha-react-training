var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calendar = /** @class */ (function () {
    function Calendar(managerName, name) {
        this.managerName = managerName;
        this.name = name;
    }
    Calendar.prototype.getLeave = function () {
        console.log("leave list for employee: " + this.name);
    };
    Calendar.prototype.applyLeave = function () {
        console.log("apply leave for employee: " +
            this.name +
            " your leave will be submitted to " +
            this.managerName);
    };
    return Calendar;
}());
var TeamCalendar = /** @class */ (function (_super) {
    __extends(TeamCalendar, _super);
    function TeamCalendar(managerName, name, month) {
        var _this = _super.call(this, managerName, name) || this;
        _this.month = month;
        return _this;
    }
    TeamCalendar.prototype.approve = function () {
        console.log("approve leave for employee: " +
            this.name +
            ", for the month of " +
            this.month);
    };
    TeamCalendar.prototype.reject = function () {
        console.log("reject leave for employee: " +
            this.name +
            ", for the month of " +
            this.month);
    };
    return TeamCalendar;
}(Calendar));
console.log("\n\n\n***********  calendar ********* \n");
var calendar = new Calendar("Paul Doni", "Jessica Lab");
calendar.applyLeave();
calendar.getLeave();
console.log("\n\n\n*********** team calenda ********* \n");
var teamCalendar = new TeamCalendar("Jane Doe", "Sam Hong", "July");
teamCalendar.applyLeave();
teamCalendar.getLeave();
teamCalendar.approve();
teamCalendar.reject();
console.log("\n\n\n");
