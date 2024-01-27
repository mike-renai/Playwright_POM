exports.LoginPage = class LoginPage {
  //create your constructer for page instance
  constructor(page) {
    //Declare your page vriable for this class
    this.page = page;

    //Declare your class variables for login page and assign locators (not actions)
    this.username_txt = page.getByLabel("Username");
    this.passwoord_txt = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: " Login" });
  }

  //Actions / Functions:
  async login(usr, pswd) {
    await this.username_txt.fill(usr);
    await this.passwoord_txt.fill(pswd);
    await this.login_button.click();
  }

  async goToLoginpage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
};
