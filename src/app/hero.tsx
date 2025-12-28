"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
          Seek mental wellness in a way that speaks to you
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
         
Right and wrong are the values of philosophy and not of the practical world. This world is all about finding one’s inner voice and being true to it. Transforming consciousness can nudge people to create wonders for themselves as well as others. Therefore, I wanted to create an oasis of wellness by transforming people’s self-limitations into self-actualization of their potential with personalized holistic healing therapy. It involves disrupting old systems and implementing actions that will transform your life. The aim is to heal humankind and lead them to a state of mental well-being while maintaining a balance in all areas of life. 
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/Main.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
