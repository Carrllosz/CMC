// footer.jsx
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsWhatsapp, BsPhone } from "react-icons/bs";
import irumi from '../assets/logo_irumi.png';

const FooterComponent = () => {
  return (
    <Footer bgDark>
      <div className="w-full bg-[#322D94] text-white">
        <div className="grid w-full px-6 py-8 md:grid-cols-3 grid-cols-2">
          <div className="md:col-span-1">
            <FooterTitle className="text-1xl" title="Localização" />
            <FooterLinkGroup col>
              <FooterLink href="#">MATRIZ: Rua D, R. Comendador Tércio Vanderlei, 112, Coruripe AL, 57230-000</FooterLink>
              <FooterLink href="#">FILIAL PINDORAMA: Rua D, R. Comendador Tércio Vanderlei, 112, Coruripe - AL</FooterLink>
            </FooterLinkGroup>
          </div>

          <div className="md:col-span-2 md:flex md:justify-end">
            <div className="flex flex-col mr-8">
              <FooterTitle className="text-1xl"  title="Contatos" />
              <FooterLinkGroup col>
              <div className="flex items-center gap-1">
                  <FooterIcon href="#" icon={BsWhatsapp} />
                  <FooterLink href="#">(82) 9 9344-8267</FooterLink>
                </div>
                <div className="flex items-center gap-1">
                  <FooterIcon href="#" icon={BsPhone} />
                  <FooterLink href="#">3273-1773</FooterLink>
                </div>
              </FooterLinkGroup>
            </div>
            <div className="flex flex-col">
              <FooterTitle className="text-1xl"  title="Mídias Sociais"  />
              <FooterLinkGroup col>
              <div className="flex items-center gap-1">
                  <FooterIcon href="#" icon={BsInstagram} />
                  <FooterLink href="#">@centromedicocoruripe</FooterLink>
                </div>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#322D94] px-6 py-6">
        <div className="border border-[#fff] " />
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-end items-end text-end">
            <h2 className="flex items-end justify-end">Desenvolvido por: <img className="w-20" src={irumi}/></h2>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
