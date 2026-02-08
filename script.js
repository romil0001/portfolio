const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen.toString());
  });
}

const buildMailtoLink = ({ subject, body }) => {
  const params = new URLSearchParams();
  params.set("subject", subject);
  params.set("body", body);
  return `mailto:romil2002modi@gmail.com?${params.toString()}`;
};

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const project = formData.get("project") || "";
    const message = formData.get("message") || "";
    const body = `Name: ${name}\nEmail: ${email}\nProject focus: ${project}\n\nProject details:\n${message}`;
    window.location.href = buildMailtoLink({
      subject: "New project inquiry from portfolio",
      body,
    });
    const button = contactForm.querySelector("button");
    if (button) {
      button.textContent = "Email draft ready in your mail client.";
      button.disabled = true;
    }
  });
}

const signupForm = document.querySelector(".signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const interest = formData.get("interest") || "";
    const body = `Signup request\n\nName: ${name}\nEmail: ${email}\nInterest: ${interest}`;
    window.location.href = buildMailtoLink({
      subject: "Newsletter signup from portfolio",
      body,
    });
    const button = signupForm.querySelector("button");
    if (button) {
      button.textContent = "Email draft ready in your mail client.";
      button.disabled = true;
    }
  });
}
