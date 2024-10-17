import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/co2_icon.png",
      title: "Verimlilik ve Sürdürülebilirlik",
      // title: "Portable Mobile Power Systems",
      description:
        "Enerji tüketiminizi minimize ederek işletmenizin karbon ayak izini azaltmayı hedefler. Özelleştirilmiş çözümlerle, enerji maliyetlerini düşürmek ve çevresel sürdürülebilirliği artırmak için yenilikçi yöntemler geliştiririz. Bu yaklaşım, hem doğayı korumanıza hem de ekonomik avantaj sağlamanıza yardımcı olur.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      
    },
    {
      id: 1,
      iconUrl: "/images/pv_perf_icon.png",
      title: "Fotovoltaik Sistem Performans İzleme",
      // title: "Renewable Energy Software Development",
      description:
        "Güneş enerjisi sistemlerinizin etkinliğini artırmak için detaylı analizler sunar. Gerçek zamanlı izleme ve raporlama ile sistem performansını sürekli kontrol altında tutarız, böylece verimlilik kayıplarını önler ve enerji üretiminizi optimize ederiz. Bu sayede, enerji yatırımlarınızdan maksimum verim almanızı sağlarız.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
    },
    {
      id: 2,
      iconUrl: "/images/anomaly.png",
      title: "Anomali Tespiti ve Çözümleme",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Enerji sistemlerinizde meydana gelebilecek anormallikleri erken tespit ederek operasyonel aksaklıkları önler. Uzman ekibimiz, gelişmiş veri analiz teknikleri ile sorunların kök nedenlerini hızla belirler ve etkili çözümler geliştirir. Bu proaktif yaklaşım, sistemlerinizin uzun ömürlü ve güvenilir bir şekilde çalışmasına olanak tanır.",
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
