import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/pps_icon.png",
      title: "Mobil Güç Sistemleri",
      // title: "Portable Mobile Power Systems",
      description:
        "SolarMP, hızlı ve pratik kurulum sunan taşınabilir güç sistemleri ile her yerde enerji ihtiyacınızı karşılar. Mobil çözümler sunar.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      url:"/About",
      
    },
    {
      id: 1,
      iconUrl: "/images/software_icon.png",
      title: "Enerji Yazılımları ",
      // title: "Renewable Energy Software Development",
      description:
        "Yenilenebilir enerji kaynaklarının etkin yönetimi ve optimizasyonu için gelişmiş yazılım çözümleri sunuyoruz.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
      url: "/FS",
    },
    {
      id: 2,
      iconUrl: "/images/consultancy_icon.png",
      title: "Yeşil Enerji Danışmanlığı",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Enerji verimliliğinizi artırmak ve çevresel etkilerinizi azaltmak için yenilenebilir enerji alanında uzman danışmanlık hizmetleri sağlıyoruz.",
        // "We provide expert consultancy services in the field of renewable energy to increase your energy efficiency and reduce your environmental impact.",
      url: "/Ayhan_Ugur",
    },

    
  ];
  return (
    <section>
      {/* <Header title="service" subtitle="Our Vison & Our Goal" /> */}
      <Header title="hizmetler" subtitle="Çözümlerimiz" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
            url = {service.url}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
