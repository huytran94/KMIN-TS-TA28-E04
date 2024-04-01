import { question } from "readline-sync";

class MenuItem {
  public title: string;
  public action: Function;
  constructor(title: string, action: Function) {
    this.title = title;
    this.action = action;
  }

  public run(): void {
    this.action();
  }
}

class Menu {
  public title: string;
  public menuItems: MenuItem[] = [];
  constructor(title: string = "Menu") {
    this.title = title;
  }

  public addMenuItem(itemAction: Function): void {
    let itemTitle: string = question("Enter item title: ");
    let item = new MenuItem(itemTitle, itemAction);

    this.menuItems.push(item);
  }

  private findMaxLengthItem(): MenuItem {
    return this.menuItems.reduce((a: MenuItem, b: MenuItem) =>
      a.title.length > b.title.length ? a : b
    );
  }

  private addSpace(str: string, sep: string = ""): string {
    return str.split(sep).filter(item => item.trim()).join(" ");
  }

  private drawMenu(maxItemLength: number): string {
    let menuBoard = "";
    // compare maxItemLength with main title length
    let maxLength: number =
      maxItemLength > this.title.length ? maxItemLength : this.title.length;
    menuBoard += this.addSpace(`${"*".repeat(maxLength + 2)}\n`);
    menuBoard += `*${this.title.padEnd(maxLength)}*\n`;
    menuBoard += this.addSpace(`${"*".repeat(maxLength + 2)}\n`);
    return menuBoard;
  }

  public printMenu(): void {
    if (this.menuItems.length === 0) {
      console.log("Menu is empty");
      return;
    }
    let maxLengthItem: MenuItem;
    if (this.menuItems.length === 1) {
      maxLengthItem = this.menuItems[0];
    }

    maxLengthItem = this.findMaxLengthItem();
    let menu = this.drawMenu(maxLengthItem.title.length);
    console.log(menu)
  }
}

let menu: Menu = new Menu("Main Menu");
let menuItem: MenuItem = new MenuItem("Add new product", () => {
    console.log("Add new product action");
});

menu.addMenuItem(menuItem.run);
menu.printMenu();