"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Product = {
  name: string;
  img: string;
  desc: string;
};

const products: Product[] = [
  {
    name: "Americano",
    img: "/assets/americano.jpg",
    desc: "Tempor culpa aute ipsum duis. Adipisicing excepteur excepteur mollit non elit culpa aliqua magna eiusmod. Minim aliquip ut consectetur consequat cillum esse aliqua irure elit.",
  },
  {
    name: "Espresso",
    img: "/assets/espresso.jpg",
    desc: "Irure fugiat cillum exercitation nisi incididunt excepteur mollit irure labore. Laborum pariatur Lorem velit incididunt officia et excepteur amet sit nisi. Ex cupidatat reprehenderit sunt quis est. Ea pariatur eu labore amet pariatur minim fugiat ipsum officia eu. Ex velit ad labore esse. Quis ipsum et eiusmod enim exercitation. Nostrud magna velit quis quis deserunt minim incididunt occaecat consectetur officia.",
  },
  {
    name: "Latte",
    img: "/assets/latte.jpg",
    desc: "Veniam reprehenderit enim culpa aute. Enim Lorem occaecat fugiat labore ipsum commodo qui nisi exercitation esse ea pariatur dolore. Ex labore ea sit magna anim pariatur voluptate aliquip elit sit non do nulla. Officia esse eiusmod nisi ea eu culpa cupidatat aliqua.",
  },
  {
    name: "Cappuccino",
    img: "/assets/cappuccino.jpg",
    desc: "Ad in culpa proident sit nostrud eiusmod aliquip ut id enim culpa enim quis. Sunt laborum aliquip labore minim dolor veniam laboris aute consectetur do esse. Enim commodo nisi ut enim. Irure enim consequat ipsum consequat consequat magna aute nisi enim eu do mollit deserunt. Excepteur nulla anim minim sint magna sunt magna tempor dolore ea Lorem ea ad est. Minim veniam adipisicing nisi tempor ullamco minim eiusmod nisi occaecat. Cillum minim id anim sit officia proident dolore adipisicing Lorem ad aliqua.",
  },
  {
    name: "Black Coffee",
    img: "/assets/blackcoffee.jpg",
    desc: "Cillum ex ipsum pariatur aliquip. Aliquip ea aliqua irure occaecat aliqua do. Dolor cillum proident non tempor fugiat anim.",
  },
  {
    name: "Doppio",
    img: "/assets/doppio.jpg",
    desc: "Laboris aliquip esse elit sunt incididunt. Enim proident exercitation mollit et nulla voluptate consectetur aliquip. Aute do id nostrud laboris minim cupidatat velit. Ut qui exercitation do cillum non consequat adipisicing magna do voluptate. Aliqua id deserunt est commodo quis occaecat exercitation irure proident consectetur proident est quis ea.",
  },
  {
    name: "Cortado",
    img: "/assets/cortada.jpg",
    desc: "Dolore consectetur ipsum non culpa officia laborum laborum esse. Ut enim ex duis anim eu consequat sint. Ea et ex commodo deserunt id ullamco duis mollit duis enim ad cillum ea in. Labore excepteur eiusmod nostrud ex Lorem enim. Incididunt labore aliqua aliquip proident ipsum Lorem ipsum fugiat qui.",
  },
  {
    name: "Red Eye",
    img: "/assets/redeye.jpg",
    desc: "Deserunt ut aute mollit sint pariatur anim deserunt fugiat proident eu. Exercitation aliquip irure voluptate cillum et sit ea veniam adipisicing. Occaecat ut occaecat exercitation aliquip consequat eiusmod irure enim ipsum. Tempor quis fugiat ad ea.",
  },
  {
    name: "Galão",
    img: "/assets/galao.jpg",
    desc: "Irure cupidatat elit culpa elit amet non enim deserunt. Do aute ut amet adipisicing officia exercitation ipsum ad aute. Consectetur dolore sint eu proident amet. Aliqua laboris minim consectetur dolor proident ipsum.",
  },
];

export default function ProductList() {
  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-2xl text-black font-bold mb-8">Product</h2>
      <div className="px-4 max-w-5xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-300 shadow-md rounded-lg overflow-hidden"> 
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-bold text-black">{item.name}</h3>
                  <p className="text-sm text-black">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
