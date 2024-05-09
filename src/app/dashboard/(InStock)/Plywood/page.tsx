"use client";
import React from "react";
import handel from "../../../../../public/assets/hero-card.jpeg";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

const Plywood = () => {
    const list = [
        {
          title: "Door handle",
          img: handel,
          price: "Rs. 500/-",
        },
        {
          title: "Tangerine",
          img: handel,
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: handel,
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: handel,
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: handel,
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: handel,
          price: "$8.00",
        },
        {
          title: "Banana",
          img: handel,
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: handel,
          price: "$12.20",
        },
        {
          title: "Avocado",
          img: handel,
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: handel,
          price: "$8.00",
        },
        {
          title: "Banana",
          img: handel,
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: handel,
          price: "$12.20",
        },
      ];
  return (
    <div>
      <div>
        <div className="flex items-center">
          <hr
            className="flex-grow border ml-20"
            style={{ border: "solid ", color: "blueviolet" }}
          />
          <h1 className="font-bold text-4xl mx-4">Plywood</h1>
          <hr
            className="flex-grow  mr-20"
            style={{ border: "solid ", color: "blueviolet" }}
          />
        </div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-2">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  //   shadow={}
                  //   radius="lg"
                  //   height={100}
                  //   width={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.title}
                  //   className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plywood;
