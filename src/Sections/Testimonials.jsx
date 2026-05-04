import { Testimonial } from "../ui/Cleantestimonial";
import TitleHeader from "../ui/TitleHeader";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-screen justify-center items-center">
      <TitleHeader title="Kind words from" subTitle=" satisfied clients" />

      <Testimonial />
    </div>
  );
};

export default Testimonials;
