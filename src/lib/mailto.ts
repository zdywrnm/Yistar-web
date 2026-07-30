import { CONTACT_EMAIL, type Locale } from "./site";

export type BusinessInquiry = {
  locale: Locale;
  cooperationType: string;
  name: string;
  organization: string;
  email: string;
  product: string;
  details: string;
  pageUrl?: string;
};

export const buildBusinessEmail = (inquiry: BusinessInquiry) => {
  const isEnglish = inquiry.locale === "en";
  const subject = isEnglish
    ? `[YiStar Business Inquiry][${inquiry.product}][${inquiry.cooperationType}] ${inquiry.name} / ${inquiry.organization}`
    : `[YiStar 业务联系][${inquiry.product}][${inquiry.cooperationType}] ${inquiry.name} / ${inquiry.organization}`;

  const lines = isEnglish
    ? [
        "YiStar Technology business inquiry",
        "",
        `Inquiry type: ${inquiry.cooperationType}`,
        `Name: ${inquiry.name}`,
        `Organization: ${inquiry.organization}`,
        `Work email: ${inquiry.email}`,
        `Product of interest: ${inquiry.product}`,
        "",
        "Details:",
        inquiry.details,
        ...(inquiry.pageUrl ? ["", `Source page: ${inquiry.pageUrl}`] : []),
      ]
    : [
        "义星科技业务联系",
        "",
        `合作类型：${inquiry.cooperationType}`,
        `姓名：${inquiry.name}`,
        `组织：${inquiry.organization}`,
        `工作邮箱：${inquiry.email}`,
        `关注产品：${inquiry.product}`,
        "",
        "需求详情：",
        inquiry.details,
        ...(inquiry.pageUrl ? ["", `来源页面：${inquiry.pageUrl}`] : []),
      ];

  return { subject, body: lines.join("\n") };
};

export const buildBusinessMailto = (inquiry: BusinessInquiry) => {
  const { subject, body } = buildBusinessEmail(inquiry);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
