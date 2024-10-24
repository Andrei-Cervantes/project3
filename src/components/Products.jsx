/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";
import Marquee from "./ui/Marguee";

import grating from "../assets/products/Grating.jpg";
import couplers from "../assets/products/Rebar_Couplers.jpg";
import fabrication from "../assets/products/Rebar_Fabrication.jpg";
import mesh from "../assets/products/Rebar_Mesh.jpg";
import reinforce from "../assets/products/Reinforce.jpg";
import stairs from "../assets/products/Stairs.jpg";
import beams from "../assets/products/Steel_Beams.jpeg";
import columns from "../assets/products/Steel_Columns.jpg";
import frames from "../assets/products/Steel_Frames.jpg";
import trusses from "../assets/products/Trusses.png";

const reviews = [
  {
    title: "Rebar Fabrication",
    description:
      "Custom-cut and bent rebar for reinforced concrete applications, tailored to project specifications.",
    img: fabrication,
  },
  {
    title: "Rebar Couplers",
    description:
      "High-strength mechanical connectors designed to join rebar lengths seamlessly, enhancing structural integrity.",
    img: couplers,
  },
  {
    title: "Rebar Mesh",
    description:
      "Prefabricated welded wire mesh for flooring and wall reinforcement, available in various sizes and configurations.",
    img: mesh,
  },
  {
    title: "Steel Frames",
    description:
      "Prefabricated steel frames for buildings and structures, offering strength and versatility for construction projects.",
    img: frames,
  },
  {
    title: "Steel Columns",
    description:
      "Custom-fabricated steel columns designed to support heavy loads in commercial and industrial applications.",
    img: columns,
  },
  {
    title: "Steel Beams",
    description:
      "High-quality steel beams fabricated for structural support, available in various grades and dimensions.",
    img: beams,
  },
  {
    title: "Steel Trusses",
    description:
      "Prefabricated steel trusses for roofs and bridges, engineered for optimal load distribution and durability.",
    img: trusses,
  },
  {
    title: "Reinforcement Cages",
    description:
      "Ready-to-install rebar cages for columns and foundations, ensuring quick and efficient placement on site.",
    img: reinforce,
  },
  {
    title: "Steel Stairs and Handrails",
    description:
      "Custom-designed steel stairs and handrails for commercial and industrial facilities, ensuring safety and compliance.",
    img: stairs,
  },
  {
    title: "Steel Grating",
    description:
      "Durable steel grating for walkways and platforms, providing strength and slip resistance in various environments.",
    img: grating,
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ title, description, img }) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-start gap-2 p-4 min-h-[120px]">
        <div className="">
          <figcaption className="text-lg font-bold">{title}</figcaption>
          <blockquote className="mt-2 text-sm">{description}</blockquote>
        </div>
      </div>
      <img
        className="rounded-lg w-full h-[200px] object-cover object-center"
        alt=""
        src={img}
      />
    </figure>
  );
};

const Products = () => {
  return (
    <div id="products" className="">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-5">
        <h1 className="font-semibold text-primary text-[70px]">Products</h1>
        <p className="text-[24px] font-light max-w-[800px]">
          At Stema, we offer a diverse range of fabricated metal products
          designed for various industries, including precision-cut components,
          custom assemblies, and specialized solutions. Utilizing advanced
          technologies like CNC machining and laser cutting, our
          products—ranging from structural steel components to intricate
          brackets—are engineered for durability and performance. Whether you
          need large-scale production or custom prototypes, Stema is dedicated
          to delivering innovative metal solutions that drive your
          project&apos;s success.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Products;
