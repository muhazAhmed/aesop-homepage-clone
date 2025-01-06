import { ListSectionProps } from "@/lib/props";
import { FC } from "react";

const ListSection: FC<ListSectionProps> = ({
  title,
  items,
  isText = false,
  content,
  learnMoreHref,
  className = "",
}) => {
  return (
    <div className={`col-span-1 ${className}`}>
      <h4 className="border-b border-textPrimary pb-4 font-semibold mb-4">
        {title}
      </h4>
      {isText ? (
        <p className="text-sm">
          {content}
          {learnMoreHref && (
            <a href={learnMoreHref} className="underline">
              Learn more
            </a>
          )}
        </p>
      ) : (
        <ul className="space-y-2 text-sm">
          {items?.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListSection;
