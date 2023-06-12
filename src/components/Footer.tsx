import React from 'react';
import { BsTwitter, BsWhatsapp, BsInstagram, BsTiktok } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SocialIcons } from '../models/models';

const Footer = (): JSX.Element => {
  const socialIcons: SocialIcons[] = [
    {
      Icon: BsInstagram,
      size: '1.2rem',
      url: '#',
    },
    {
      Icon: BsTiktok,
      size: '1.2rem',
      url: '#',
    },
    {
      Icon: BsWhatsapp,
      size: '1.2rem',
      url: '#',
    },
    {
      Icon: BsTwitter,
      size: '1.2rem',
      url: '#',
    },
  ];

  return (
    <div className="bg-[#F7F7F7] text-md md:text-lg text-center flex flex-col items-center justify-evenly md:flex-row md:justify-around px-14 text-sm py-4 md:py-14">
      <section>
        <h2 className="text-[#1a6887] uppercase font-semibold">
          Redes Sociais
        </h2>
        <ul className="flex justify-between">
          {socialIcons.map(({ Icon, size, url }, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon
                  size={size}
                  className="text-[#686868] hover:text-[#1a6887] transition ease-in-out delay-150 cursor-pointer"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="font-semibold text-[#686868] px-4">
        <h2 className="text-[#1a6887] uppercase">Parque de Saúde de Lisboa</h2>
        <div className="font-light hover:text-[#1a6887] hover:duration-500 transition ease-in">
          <p>Av. do Brasil 53D Pavilhão 13</p>
          <p>1700-063. Lisboa</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
