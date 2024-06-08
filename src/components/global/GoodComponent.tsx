import ComponentWithoutClientDirective from "@/components/ComponentWithoutClientDirective";
import ComponentWithClientDirective from "@/components/ComponentWithClientDirective";

export default function GoodComponent() {
    return (
        <div className="flex flex-col gap-2">
            <ComponentWithoutClientDirective />

            <ComponentWithClientDirective>
                <ComponentWithoutClientDirective />
            </ComponentWithClientDirective>
        </div>
    )
}