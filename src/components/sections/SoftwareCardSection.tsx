import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/energy_management_icon.png",
      title: "Enerji Yönetim Yazılımları",
      // title: "Portable Mobile Power Systems",
      description:
        "Enerji Yönetim Yazılımlarımız, yenilenebilir enerji kaynaklarının verimli kullanımını sağlar ve enerji maliyetlerini optimize eder. Akıllı algoritmalarla sürdürülebilir enerji akışını garanti altına alarak çevresel etkileri azaltır.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      
    },
    {
      id: 1,
      iconUrl: "/images/data_analysis_icon.png",
      title: "İzleme ve Veri Analiz Sistemleri",
      // title: "Renewable Energy Software Development",
      description:
        "Sistemlerimiz, enerji performansını gerçek zamanlı izleyip analiz ederken, detaylı veri raporlaması sayesinde sorunları önceden görüp hızlı müdahaleye olanak tanır, böylece verimliliği artırır.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
    },
    {
      id: 2,
      iconUrl: "/images/mobile_icon.png",
      title: "Mobil ve Gömülü Uygulama Geliştirme",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Elektronik cihazlarınızı kontrol etmenizi sağlayan kullanıcı dostu çözümler sunar. İhtiyaca göre özelleştirilen uygulamalarımız, operasyonel verimliliği artırır ve teknoloji yatırımlarınızdan maksimum geri dönüş sağlar.",
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
