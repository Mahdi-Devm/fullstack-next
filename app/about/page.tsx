import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10 font-sans text-gray-900 text-center">
      <div className="flex justify-center">
        <Image
          src="/image/color-hunt-logo-animation.gif"
          alt="Color Hunt Logo Animation"
          width={200}
          height={200}
          priority
          className="rounded-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-center">Color Hunt</h1>

      <section className="space-y-3">
        <p>
          Color Hunt is an open collection of beautiful color palettes, created
          by Gal Shir. Color Hunt started as a personal small project built to
          share trendy color combinations between a group of designer friends.
          The collection scaled up and now being used daily as a handy resources
          by thousands of people all over the world. Color Hunt was created with
          the goal of celebrating the beauty of colors, and to serve as a go-to
          resource for color inspiration.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Who creates the color palettes?
        </h2>
        <p>
          You, the users, are the ones who create the palettes using Color
          Hunt’s palette creator. The collection is open, and everyone can
          create and submit their own color combination. That’s how we keep
          Color Hunt diverse, colorful, social and inspiring. Each palette is a
          public property and not owned by a specific creator, nor by Color
          Hunt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Which palettes get featured?</h2>
        <p>
          Color Hunt is open, but is also curated. It means that all the
          palettes are hand-picked by Color Hunt’s curators. Each submission of
          a color palette is being reviewed to make sure it fits the
          collection’s goals. Each day, the very best submission is being picked
          up and will be visible on the homepage in the day after.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Made by Gal Shir</h2>
        <p>
          Color Hunt was founded by Gal Shir, designer and artist from Tel Aviv
          who is passioned about colors. Gal runs Color Hunt since 2015 with the
          goal of sharing that passion with the world, and provide a handy
          resource for designers and artists.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Partnerships/sponsorships</h2>
        <p>
          Reach out to{" "}
          <a
            href="mailto:hello@galshir.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            hello@galshir.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default Page;
