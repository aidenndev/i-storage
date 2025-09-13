import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <section className="bg-primary p-10 hidden lg:flex flex-col justify-center items-center w-1/2 xl:w-3/5">
        <div className="flex max-h-[800px] max-w-[560px] flex-col justify-center space-y-10">
          <img
            src="/assets/icons/logo-full.png"
            alt="iStorage Logo"
            width={200}
            height={200}
            className="h-auto"
          />
          <div className="space-y-5">
            <h1 className="h1 text-white">
              All your files, perfectly organized.
            </h1>
            <p className="h5 text-white">
              A secure and reliable cloud storage solution designed to make
              managing, accessing, and organizing your files effortless.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="iStorage Banner"
            width={342}
            height={342}
            className="h-auto transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-dark-full.png"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
