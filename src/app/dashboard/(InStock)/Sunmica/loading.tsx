"use client";
import {Spinner } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-screen">
        <Spinner label="Loading..." color="success" labelColor="success" />
      </div>
    
  );
}
