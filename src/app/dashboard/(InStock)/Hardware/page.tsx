"use client";
import React from "react";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import handel from "../../../../../public/assets/door-handle-kob.jpg";
// import { v4 as uuid } from 'uuid'
import { products } from "../../../lib/dummy";

const Hardware = () => {
  return (
    <div>
      <div className="flex items-center">
        <hr
          className="flex-grow border ml-20"
          style={{ border: "solid ", color: "blueviolet" }}
        />
        <h1 className="font-bold text-4xl mx-4">Hardware</h1>
        <hr
          className="flex-grow  mr-20"
          style={{ border: "solid ", color: "blueviolet" }}
        />
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-2">
        {products.map((item, index) => (
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
                  className="mx-auto my-auto block"
                  height="100"
                  width="200"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={item.title}
                //   className="w-full object-cover h-[140px]"
                src={item.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">Rs. {item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hardware;
