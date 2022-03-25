import type { HTMLAttributes, ReactElement } from "react";
import ExternalLink from "@/components/ExternalLink";
import { getDaysMonthsYearsSinceBirthdate } from "@/utils";

const Summary = ({
  ...props
}: HTMLAttributes<HTMLParagraphElement>): ReactElement => {
  const daysMonthsYears = getDaysMonthsYearsSinceBirthdate(
    new Date(2002, 8, 24),
    new Date()
  );

  return (
    <p
      {...props}
      className="flex-1 py-5 text-xl text-center lg:py-0 lg:text-left"
    >
      {`Hello 👋🏼 my name is Julian Ollivieira. I was born ${daysMonthsYears.days}
          days,  ${daysMonthsYears.months} months and  ${daysMonthsYears.years}
          years ago in `}
      <span className="px-2 mx-2 whitespace-nowrap bg-secondary-400 rounded">
        {"the Netherlands"}
      </span>
      {"and am currently working as a full-stack developer at "}
      <ExternalLink href="https://itemlost.com/">{"itemlost"}</ExternalLink>
      {". I have a passion for learning new things and solving problems."}
      <br />
      <br />
      {"I am currently learning more about Rust in my free time."}
    </p>
  );
};

export default Summary;
