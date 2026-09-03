"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { IBreadCrumbs } from "@/utils/types";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface IPageWraps {
  wrapperClass?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  breadCrumbs?: IBreadCrumbs[];
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  hideHeader,
  hideFooter,
  breadCrumbs,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {!hideHeader && <Navbar breadCrumbs={breadCrumbs} />}
      <main
        className={clsx(
          "flex-1 flex flex-col min-h-0 pt-32 animate-page-enter",
          wrapperClass
        )}
      >
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageWrapper;
