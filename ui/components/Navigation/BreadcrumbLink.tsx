"use client";
import { BreadcrumbItem } from "@/libs/patternfly/react-core";
import { Link } from "@/i18n/routing";
import { BreadcrumbItemProps } from "@patternfly/react-core";
import { Route } from "next";

export function BreadcrumbLink<T extends string>({
  href,
  isActive = false,
  children,
  ...props
}: Omit<BreadcrumbItemProps, "isActive" | "render"> & {
  href: Route<T> | URL;
  isActive?: boolean;
}) {
  return (
    <BreadcrumbItem
      {...props}
      isActive={isActive}
      render={({ className, ariaCurrent }) => (
        <Link href={href} className={className} aria-current={ariaCurrent}>
          {children}
        </Link>
      )}
    />
  );
}
