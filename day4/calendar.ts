class Calendar {
  managerName: string;
  name: string;

  constructor(managerName, name) {
    this.managerName = managerName;
    this.name = name;
  }

  getLeave(): void {
    console.log("leave list for employee: " + this.name);
  }

  applyLeave(): void {
    console.log(
      "apply leave for employee: " +
        this.name +
        " your leave will be submitted to " +
        this.managerName
    );
  }
}

class TeamCalendar extends Calendar {
  month: string;

  constructor(managerName, name, month) {
    super(managerName, name);
    this.month = month;
  }

  approve(): void {
    console.log(
      "approve leave for employee: " +
        this.name +
        ", for the month of " +
        this.month
    );
  }
  reject(): void {
    console.log(
      "reject leave for employee: " +
        this.name +
        ", for the month of " +
        this.month
    );
  }
}

console.log("\n\n\n***********  calendar ********* \n")
let calendar = new Calendar("Paul Doni","Jessica Lab");
calendar.applyLeave();
calendar.getLeave();

console.log("\n\n\n*********** team calenda ********* \n")
let teamCalendar = new TeamCalendar("Jane Doe", "Sam Hong", "July")
teamCalendar.applyLeave();
teamCalendar.getLeave();
teamCalendar.approve();
teamCalendar.reject();

console.log("\n\n\n")
