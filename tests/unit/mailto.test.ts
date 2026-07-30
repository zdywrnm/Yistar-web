import { describe, expect, it } from "vitest";
import {
  buildBusinessEmail,
  buildBusinessMailto,
} from "../../src/lib/mailto";

const inquiry = {
  locale: "zh-CN" as const,
  cooperationType: "技术合作",
  name: "张三",
  organization: "示例机构",
  email: "zhangsan@example.com",
  product: "OpenTrad",
  details: "希望交流真实外贸场景中的信息处理任务。",
  pageUrl: "https://yixingretail.cn/contact/",
};

describe("business inquiry mail handoff", () => {
  it("builds a localized subject and complete body", () => {
    const email = buildBusinessEmail(inquiry);
    expect(email.subject).toBe(
      "[YiStar 业务联系][OpenTrad][技术合作] 张三 / 示例机构",
    );
    expect(email.body).toContain("工作邮箱：zhangsan@example.com");
    expect(email.body).toContain(inquiry.details);
    expect(email.body).toContain(inquiry.pageUrl);
  });

  it("encodes a mailto URL without submitting to a server", () => {
    const href = buildBusinessMailto(inquiry);
    expect(href.startsWith("mailto:zhaodingyi@yixingretail.cn?")).toBe(true);
    expect(decodeURIComponent(href)).toContain(inquiry.details);
    expect(href).not.toContain("http://");
    expect(href).not.toContain("https://api.");
  });
});
