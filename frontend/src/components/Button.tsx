import { twMerge } from "tailwind-merge";

type Props = {
  content: string;
  addon?: string;
};

const Button = ({ content, addon }: Props) => {
  return (
    <a
      href=""
      className={twMerge(
        "px-4 py-2 text-white rounded-full bg-Cyan flex items-center justify-center text-sm w-fit",
        addon
      )}
    >
      {content}
    </a>
  );
};

export default Button;
