import React from "react";
import MainButton from "../common/MainButton";

function Ayhan_UgurSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[2.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Ayhan Uğur
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          Ayhan Uğur, lisans eğitimini Marmara Üniversitesi, Elektronik bölümünde tamamlanmış olup, 30 seneyi aşkın süredir meslek lisesinde elektronik ve yazılım ağırlıklı dersler vermektedir. Aynı zamanda Mobil uygulamalar, elektronik kart ve devre tasarımı, gömülü ve kullanıcı etkileşimli uygulama yazılımları geliştirme konularında endüstri firmalarına danışmanlık ve ürün geliştirme hizmetleri vermektedir. Halihazirda tasarladığı Elektronik Eğitim Setleri ve Uçak Elektroniği Eğitim Setleri Pakistan ve Türkmenistan da özel havacılık okullarında kullanılmakta ve projeler devam etmektedir.
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
          src="/images/ayhan1.jpg"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default Ayhan_UgurSection;
