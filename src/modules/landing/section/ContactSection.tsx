import { Icon } from "@iconify/react";
export default function ContactSection() {
  const socials = [
    {
      label: "github",
      icon: "ri:github-line",
      url: "https://www.github.com/ktyudha",
    },
    {
      label: "linkedin",
      icon: "ri:linkedin-box-line",
      url: "https://linkedin.com/in/ktyudha",
    },
    {
      label: "whatsapp",
      icon: "ri:whatsapp-line",
      url: "whatsapp://send?phone=6285848250548&text=Let's be friends!",
    },
    {
      label: "blog",
      icon: "mdi:world",
      url: "https://dhasitus.wordpress.com",
    },
  ];
  return (
    <section
      className="max-w-screen-lg md:px-20 px-5 mx-auto mt-8"
      id="contact"
    >
      <div className="flex md:flex-row flex-col">
        <p className="md:w-2/6 text-xl font-semibold md:text-left text-center">
          Contact
        </p>
        <div className="md:w-4/6 grid grid-cols-1 gap-2">
          <a
            href="https://mail.google.com/mail/?view=cm&to=fauzigangsar@gmail.com"
            target="_blank"
            className="text-md hover:underline break-all md:text-left text-center"
          >
            ktyoedha@gmail.com
          </a>
          <div className="flex flex-wrap gap-4 md:justify-start justify-center">
            {socials.map((data, idx) => (
              <a
                href={data.url}
                className="bg-base-200 p-2 rounded-full"
                aria-label={data.label}
                key={`social-${idx}`}
                target="_blank"
              >
                <Icon icon={data.icon} fontSize={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
