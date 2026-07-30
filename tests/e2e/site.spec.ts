import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/products/openacad/",
  "/products/opentrad/",
  "/products/openvac/",
  "/products/star-nexus/",
  "/careers/",
  "/contact/",
  "/privacy/",
  "/en/",
  "/en/products/openacad/",
  "/en/products/opentrad/",
  "/en/products/openvac/",
  "/en/products/star-nexus/",
  "/en/careers/",
  "/en/contact/",
  "/en/privacy/",
];

for (const route of routes) {
  test(`${route} renders localized metadata without overflow`, async ({
    page,
  }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /yixingretail\.cn/,
    );
    await expect(page.locator('link[hreflang="zh-CN"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
    const expectedLang = route.startsWith("/en/") ? "en" : "zh-CN";
    await expect(page.locator("html")).toHaveAttribute("lang", expectedLang);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
    ).toBe(true);
    const retiredName = ["宁波义星", "互联网零售", "有限公司"].join("");
    await expect(page.locator("body")).not.toContainText(retiredName);
  });
}

test("language switch preserves the current product", async ({ page }) => {
  await page.goto("/products/openacad/");
  if (page.viewportSize()?.width && page.viewportSize()!.width < 960) {
    await page.locator("[data-menu-toggle]").click();
  }
  const languageLink = page.getByRole("link", { name: "English" }).first();
  await expect(languageLink).toHaveAttribute("href", "/en/products/openacad/");
});

test("PaperBanana proof links are public and explicit", async ({ page }) => {
  await page.goto("/products/openacad/");
  await expect(
    page.getByRole("link", { name: "访问 PaperBanana" }),
  ).toHaveAttribute("href", "https://paperbanana.asia");
  await expect(page.getByRole("link", { name: "查看 GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/zdywrnm/PaperBanana-clients",
  );
});

test("contact form validates locally and reveals the email fallback", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("mobile"),
    "The mail handoff behavior is identical across viewport projects.",
  );
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"], {
    origin: "http://127.0.0.1:4321",
  });
  const submittedRequests: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") submittedRequests.push(request.url());
  });
  await page.goto("/contact/");
  await page.getByRole("button", { name: "生成邮件并打开" }).click();
  await expect(page.locator("#cooperation-error")).not.toBeEmpty();

  await page.selectOption("#cooperation", "技术合作");
  await page.fill("#name", "张三");
  await page.fill("#organization", "示例机构");
  await page.fill("#email", "zhangsan@example.com");
  await page.selectOption("#product", "OpenTrad");
  await page.fill("#details", "希望交流真实外贸场景中的信息处理任务。");
  await page.check("#consent");
  await page.getByRole("button", { name: "生成邮件并打开" }).click();

  const preview = page.locator("[data-mail-preview]");
  await expect(preview).toBeVisible();
  await expect(preview).toHaveValue(/OpenTrad/);
  await expect(preview).toHaveValue(/zhangsan@example\.com/);
  await page.getByRole("button", { name: "复制邮件内容" }).click();
  await expect(page.locator("[data-mail-status]")).toHaveText(
    "已复制邮件内容。",
  );
  await expect(
    page.getByRole("link", { name: "zhaodingyi@yixingretail.cn" }).last(),
  ).toHaveAttribute("href", "mailto:zhaodingyi@yixingretail.cn");
  expect(submittedRequests).toEqual([]);
});

test("mobile menu exposes products", async ({ page }, testInfo) => {
  test.skip(
    !testInfo.project.name.includes("mobile"),
    "This interaction is specific to the collapsed mobile navigation.",
  );
  await page.goto("/");
  const toggle = page.locator("[data-menu-toggle]");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  await expect(
    page.locator("#mobile-menu").getByRole("link", { name: /OpenTrad/ }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await expect(toggle).toBeFocused();

  const productLinks = page.locator(".product-panel__heading > a");
  await expect(productLinks).toHaveCount(4);
  for (let index = 0; index < 4; index += 1) {
    const link = productLinks.nth(index);
    await expect(link).toBeVisible();
    const box = await link.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }
});

test("desktop product menu closes with Escape", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name.includes("mobile"),
    "This interaction is specific to the desktop product menu.",
  );
  await page.goto("/");
  const menu = page.locator(".product-menu");
  const summary = menu.locator("summary");
  await summary.click();
  await expect(menu).toHaveAttribute("open", "");
  await page.keyboard.press("Escape");
  await expect(menu).not.toHaveAttribute("open", "");
  await expect(summary).toBeFocused();
});
