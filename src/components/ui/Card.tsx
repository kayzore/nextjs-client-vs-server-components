import { PropsWithChildren } from "react";
import classNames from "clsx";

type CardProps = { className: string };

export default function Card({ className, children }: PropsWithChildren<CardProps>) {
    return (
        <div className={classNames("flex flex-col gap-1 max-w-sm p-6 border border-gray-200 rounded-lg shadow", className)}>
            {children}
        </div>
    )
}