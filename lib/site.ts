export const site = {
  name: "Nile AI Solutions",
  shortName: "Nile AI",
  url: "https://nileai.solutions",
  email: "hello@nileai.solutions",
  whatsappNumber: "256753523529",
  whatsappMessage:
    "Hello Nile AI Solutions. I would like to discuss a project.",
  tagline: "Intelligent systems for Africa's next chapter.",
};

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
