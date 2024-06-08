"use client";

import { PropsWithChildren } from "react";
import Card from "@/components/ui/Card";

export default function ComponentWithClientDirective({children}: PropsWithChildren) {
    return (
        <Card className="bg-pink-50">
            <h1>Client Component</h1>

            {children}
        </Card>
    );
}