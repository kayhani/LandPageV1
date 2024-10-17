import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "/images/portable_icon.png",
      reviewerName: "Acil durumlar, afet müdahale ve arama-kurtarma operasyonları için geliştirilmiş, ayrıca gezici yaşam tarzına uygun taşınabilir enerji sistemleri.",
      review:
        "Taşınabilir Enerji Çözümleri",
    },

    {
      id: 1,
      imageUrl: "/images/1software_icon.png",
      reviewerName: "Elektronik sistemler, mobil uygulama geliştirme ve kullanıcı etkileşimli uygulamaların tasarımı gibi alanlarda kapsamlı bilgiye sahip uzmanlarımızla sizin için özel olarak tasarlanan yazılım projeleri.",
      review:
        "Gelişmiş Yazılım Çözümleri",
    },
    {
      id: 2,
      imageUrl: "/images/card_icon.png",
      reviewerName: "Özelleştirilmiş elektronik kart ve devre tasarımı hizmetlerimizle, endüstriyel ihtiyaçlarınıza uygun, yüksek performanslı ve güvenilir çözümler sunuyoruz.",
      review: "Elektronik Kart ve Devre Tasarım",
    },
    {
      id: 3,
      imageUrl: "/images/perf_icon.png",
      reviewerName: "Fotovoltaik sistemlerinizin verimliliğini artırmak için kapsamlı performans değerlendirme ve detaylı raporlama hizmetleri sunuyoruz. Uzman ekibimiz tarafından gerçekleştirilen analizlerle, enerji üretiminizi maksimize etmek ve sistem optimizasyonu için veri odaklı içgörüler sağlıyoruz.",
      review:
        "Fotovoltaik Güç Sistemlerinde Performans Analizi ve Stratejik Raporlama",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="projeler" subtitle="Yenilikçi Projelerle Geleceğe Enerji Veriyoruz" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
