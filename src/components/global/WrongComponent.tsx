"use client";

import ComponentWithoutClientDirective from "@/components/ComponentWithoutClientDirective";
import ComponentWithClientDirective from "@/components/ComponentWithClientDirective";

export default function WrongComponent() {
    return (
        <div className="flex flex-col gap-2">
            <ComponentWithoutClientDirective />

            <ComponentWithClientDirective>
                <ComponentWithoutClientDirective />
            </ComponentWithClientDirective>
        </div>
    )
}