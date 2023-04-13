import { dietlogo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className='flex justify-center items-center sm:py-16 py-6 flex-col'>
    <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
      <div className='flex-1 flex flex-col justify-start margin-10'>
        <img
          src={dietlogo}
          alt='diettracker'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className='font-poppins font-normal text-[#E1D9D1] text-[18px] leading-[30.8px] mt-4 max-w-[310px]'>
          Un servicio de nutrición en línea que sea confiable, eficiente y
          seguro
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'
          >
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-[#E1D9D1] hover:text-[#33cf43] cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.title === "Asociados" ? (
                    <a href={link.link} target='_blank'>
                      {link.name}
                    </a>
                  ) : (
                    <a href={link.link}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#E1D9D1]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        2023 DietTracker. All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <a href={social.link} target='_blank'>
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.lenght - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
