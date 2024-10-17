import React from "react";
import MainButton from "../common/MainButton";

function AboutSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[3.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Hakkımızda
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          SolarMP, yenilenebilir enerji ve sürdürülebilirlik konularında uzmanlaşmış bir Ar-Ge firmasıdır. Hedefimiz, çevresel sürdürülebilirliğe katkı saglamak ve enerji teknolojilerini daha erisilebilir hale getirmektir. Geliştirdiğimiz mobil çözümler ve yazılımlar ile bireyleri ve kurumları enerji yönetiminde daha etkin kılmayı amaçlıyoruz.                           
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p className="font-[400] md:leading-[5.0625rem] text-2xl md:text-[2.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Misyonumuz
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          Dünyanın enerji geleceğini yenilikçi ve mobil çözümlerle yeniden tasarlıyor, sürdürülebilirliği herkes için erişilebilir kılmak için çalışıyoruz.
        </p>
        <br></br>
        <br></br>
        <p className="font-[400] md:leading-[5.0625rem] text-2xl md:text-[2.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Vizyonumuz
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          Gelecekte, herkesin temiz ve yeşil enerjiye kolayca ulaşabildiği bir dünya kurmak için çaba gösteriyoruz; enerji sınırsız ve her yerde erişilebilir olacak.
        </p>

        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          {/* <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" /> */}
          <div className="flex gap-[1.56rem] items-center">
            <img src="/images/yellow_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal"><a href="https://eusolar.ege.edu.tr/">Daha Fazla Bilgi </a></p>
           

          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/about_us.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default AboutSection;
