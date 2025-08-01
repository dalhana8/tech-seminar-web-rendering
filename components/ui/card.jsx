import * as React from "react";

import { cn } from "@/app/lib/utils";

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
    return (
        <div
            ref={ref}
            className={cn(
                "rounded-lg border border-gray-300 bg-card bg-white text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(function CardHeader(
    { className, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(function CardTitle(
    { className, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={cn(
                "text-2xl font-semibold leading-none tracking-tight",
                className
            )}
            {...props}
        />
    );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(function CardDescription(
    { className, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(function CardContent(
    { className, ...props },
    ref
) {
    return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(function CardFooter(
    { className, ...props },
    ref
) {
    return (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    );
});
CardFooter.displayName = "CardFooter";

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
