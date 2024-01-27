const { test, expect } = require("@playwright/test");
import { LoginPage } from "../../pageobjectmodel/login";

test("test for @pom", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.goToLoginpage();
  await Login.login("tomsmith", "SuperSecretPassword!");

  // await page.goto("https://the-internet.herokuapp.com/login");
  // await page.getByLabel("Username").fill("tomsmith");
  // await page.getByText("SuperSecretPassword!").click();
  // await page.locator("#content").click();
  // await page.getByLabel("Password").fill("SuperSecretPassword!");
  // await page.getByRole("button", { name: " Login" }).click();
});
