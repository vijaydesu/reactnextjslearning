"use client";
import React from "react";
import Banner from "@/app/components/banner";
import StoreList from "@/app/components/storeList";


export default async function Page({ params }) {
    const id = (await params).id
    return (
    <>
    <Banner headerText={"Store Fuel Price -" + id} bannerLogo="/CaseysLogo.png"/>
    <div> Store: {id}</div>
    <StoreList storeId={id}/>
    </>

    )
  }