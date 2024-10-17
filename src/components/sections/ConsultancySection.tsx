import React from "react";
import MainButton from "../common/MainButton";

function ConsıltancySection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[3.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Yeşil Enerji Danışmanlığı
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          Yeşil Enerji Danışmanlığı hizmetlerimiz, enerji verimliliğini artırarak maliyetleri düşürmek ve çevresel etkileri en aza indirmek için yenilenebilir enerji çözümleri sunar. Uzman ekibimiz, özellikle fotovoltaik güç sistemlerinin performans izlenmesi ve raporlanmasında derinlemesine analizler ve stratejiler geliştirir. Enerji sistemlerinde meydana gelebilecek anomalileri tespit ederek, zamanında müdahale ve optimizasyon olanakları sağlarız. Güneş ve rüzgar enerjisi entegrasyonu, enerji depolama çözümleri ve verimliliği artıran teknolojilerin uygulanması konularında rehberlik ederek, sürdürülebilir ve ekonomik enerji hedeflerinize ulaşmanıza yardımcı oluruz.
        </p>

        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          {/* <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" /> */}
          {/* <div className="flex gap-[1.56rem] items-center">
            <img src="/images/yellow_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal"><a href="https://eusolar.ege.edu.tr/">Daha Fazla Bilgi </a></p>
           

          </div> */}
        </div>
      </div>
      <div>
        <img
          src="/images/consultancy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default ConsıltancySection;
