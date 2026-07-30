import { describe, expect, it } from "vitest";
import {
  counterpartPath,
  home,
  productOrder,
  productPath,
  products,
  shared,
} from "../../src/lib/site";

describe("localized site content", () => {
  it("keeps the approved product order and maturity model", () => {
    expect(productOrder).toEqual([
      "openacad",
      "opentrad",
      "openvac",
      "star-nexus",
    ]);
    expect(products.openacad["zh-CN"].stage).toBe("in-use");
    expect(products.opentrad["zh-CN"].stage).toBe("developing");
    expect(products.openvac["zh-CN"].stage).toBe("pre-development");
    expect(products["star-nexus"]["zh-CN"].stage).toBe("concept");
  });

  it("keeps Chinese and English product routes in parity", () => {
    for (const slug of productOrder) {
      expect(productPath("zh-CN", slug)).toBe(`/products/${slug}/`);
      expect(productPath("en", slug)).toBe(`/en/products/${slug}/`);
      expect(counterpartPath(productPath("zh-CN", slug))).toBe(
        productPath("en", slug),
      );
      expect(counterpartPath(productPath("en", slug))).toBe(
        productPath("zh-CN", slug),
      );
    }
  });

  it("uses the approved public company and brand names", () => {
    expect(shared["zh-CN"].legalName).toBe("宁波义星科技有限公司");
    expect(shared.en.brand).toBe("YiStar Technology");
    expect(shared.en.legalName).toBe("Ningbo YiStar Technology Co., Ltd.");
  });

  it("does not carry old-company or provisional-name text into public copy", () => {
    const publicCopy = JSON.stringify({ shared, home, products });
    expect(publicCopy).not.toContain(
      ["宁波义星", "互联网零售", "有限公司"].join(""),
    );
    expect(publicCopy).not.toContain(["（", "拟", "）"].join(""));
    expect(publicCopy).not.toContain("拟更名");
  });

  it("keeps planned products within cautious language", () => {
    expect(products.opentrad["zh-CN"].overviewBody).toContain(
      "不会把规划中的功能描述为已经可用",
    );
    expect(products.openvac["zh-CN"].overviewBody).toContain(
      "不宣称已有成熟产品、客户或完整行业知识库",
    );
    expect(products["star-nexus"]["zh-CN"].overviewBody).toContain(
      "不宣称已经完成模型路由平台",
    );
    expect(products["star-nexus"].en.overviewBody).toContain(
      "without claiming a completed routing platform",
    );
  });
});
