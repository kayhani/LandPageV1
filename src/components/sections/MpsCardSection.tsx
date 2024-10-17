import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/earthquake_icon.png",
      title: "Doğal Afetler",
      // title: "Portable Mobile Power Systems",
      description:
        "Doğal afetlerde hızlı kurulumuyla şebeke dışı bölgelerde acil durum ekiplerine kesintisiz enerji sağlayarak hayati operasyonların sürekliliğini destekler.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      
    },
    {
      id: 1,
      iconUrl: "/images/war_icon.png",
      title: "Savaşlar",
      // title: "Renewable Energy Software Development",
      description:
        "Savaş durumlarında hızlı kurulum ve güvenilir enerji sağlayarak sahadaki askeri operasyonların iletişim ve lojistik ihtiyaçlarını kesintisiz bir şekilde destekler.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
    },
    {
      id: 2,
      iconUrl: "/images/camping_icon.png",
      title: "Şebekeden Uzak Aktiviteler",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Şebekeden uzak aktivitelerde kamp, tekne gezileri ve daha fazlası için güvenilir enerji sağlayarak cihazlarınızı her yerde şarj etme ve aydınlatma ihtiyaçlarınızı karşılama imkanı sunar.",
        // "We provide expert consultancy services in the field of renewable energy to increase your energy efficiency and reduce your environmental impact.",
    },
  ];
  return (
    <section>
      {/* <Header title="service" subtitle="Our Vison & Our Goal" /> */}
      {/* <Header title="hizmetler" subtitle="Çözümlerimiz" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
