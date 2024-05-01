"use client"
import Home from "@/components/Home";
import { usePersonStore } from "@/context/stores/person";
import Image from "next/image";
import { useEffect } from "react";

export default function Index() {
    const personStore = usePersonStore();

    useEffect(() => {
        return () => {
            
        };
    }, []);

    return (
        <Home />
    );
}
