import ExternalLink from "@/components/ExternalLink";
import Image from "next/image";
import type { ReactElement } from "react";
import { getDaysMonthsYearsSinceBirthdate } from "@/utils";
import pictureOfMe from "@/../public/images/me.jpg";

const Summary = (): ReactElement => {
  const daysMonthsYears = getDaysMonthsYearsSinceBirthdate(
    new Date(2002, 8, 24),
    new Date()
  );

  return (
    <div className="flex flex-col-reverse gap-5 items-center lg:flex-row lg:gap-20">
      <p className="flex-1 py-10 text-xl">
        {`Hello 👋🏼 my name is Julian Ollivieira. I was born ${daysMonthsYears.days}
          days,  ${daysMonthsYears.months} months and  ${daysMonthsYears.years}
          years ago in `}
        <span className="px-2 mx-2 whitespace-nowrap bg-secondary-400 rounded">
          {"the Netherlands"}
        </span>
        {"and am currently working as a full-stack developer at "}
        <ExternalLink href="https://itemlost.com/">{"itemlost"}</ExternalLink>
        {"."}
      </p>
      <div className="overflow-hidden w-52 h-52 rounded-full border-4 border-white">
        <Image
          alt="A picture of me"
          className="rounded-full"
          placeholder="blur"
          quality={100}
          src={pictureOfMe}
        />
      </div>
    </div>
  );
};

export default Summary;
