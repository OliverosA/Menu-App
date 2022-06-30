import Menu from './models/Menu';
export default class Main {
  async start() {
    const menu = new Menu();
    await menu.showMainMenu();
  }
}