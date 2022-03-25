import type { HTMLAttributes, ReactElement } from "react";
import Image from "next/image";
import pictureOfMe from "@/../public/images/me.jpg";

const PictureAndSocialLinks = ({
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div {...props} className="flex flex-col items-center">
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

export default PictureAndSocialLinks;
