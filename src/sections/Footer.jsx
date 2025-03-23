import { socialFooterData } from "../data/socialFooterData.js";

const Footer = () => {
  return (
    <footer className="bg-black-theme">
      <div className="max-w-screen mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-6 xl:pt-24 xl:pb-12">
        <div className="flex flex-col gap-12 md:flex-row justify-between">
          {/* Footer Logo */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:flex-col gap-6">
            <img
              src="logos/footer_logo.svg"
              alt="Footer Logo"
              className="w-50 md:size-max"
            />

            {/* Location */}
            <div className="flex flex-row gap-2 items-center">
              <img
                src="/footer/indonesia_flag.png"
                alt="Indonesia Flag"
                className="w-max"
              />
              <p className="text-p leading-p text-white">
                Medan, North Sumatra, ID
              </p>
            </div>
          </div>

          {/* Connect with Me */}
          <div className="flex flex-col items-center md:items-start gap-3 lg:gap-4">
            <p className="text-p leading-p text-white">Connect with me</p>

            {/* Social Logos */}
            <div className="flex flex-row gap-4 lg:gap-5">
              {socialFooterData.map((socialDataItem, index) => (
                <a key={index} href={socialDataItem.link} target="_blank">
                  <img
                    src={socialDataItem.icon}
                    alt={socialDataItem.name}
                    className="w-8 lg:w-max"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-border-theme mt-12 mb-6" />
        <p className="text-p leading-p text-white text-center">
          © 2025–Present Mhdirrsyad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
