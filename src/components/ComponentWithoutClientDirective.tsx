import ComponentWithClientDirective from "@/components/ComponentWithClientDirective";
import Card from "@/components/ui/Card";

export default function ComponentWithoutClientDirective() {
    const isServer = typeof window === 'undefined';

    if (isServer) {
        return (
            <Card className="bg-white">
                <h1>MyComponent</h1>

                <span
                    className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                >
                    Server Component
                </span>
            </Card>
        );
    }

    return <ComponentWithClientDirective />;
}