import { useEffect, useReducer } from "react";
import { twMerge } from "tailwind-merge";

const initState = {
  theme: localStorage.getItem("theme") || "dark",
};

type tAction = {
  type: string;
  payload: string;
};
const reducer = (state: typeof initState, action: tAction) => {
  switch (action.type) {
    case "dark":
      return {
        ...state,
        theme: "dark",
      };
      break;

    case "light":
      return {
        ...state,
        theme: "light",
      };
      break;

    default:
      return state;
      break;
  }
};
type Props = {
  style?: "icon" | "text" | "both" | "shmooz-ai";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
};

const ToggleTheme = ({ style, size, rounded }: Props) => {
  const [{ theme }, dispatch] = useReducer(reducer, initState);

  const handleToggleTheme = (type: string) => {
    dispatch({
      type,
      payload: type,
    });

    localStorage.setItem("theme", type);

    if (type === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [localStorage.getItem("theme")]);

  return (
    <div>
      <div className="my-4 select-none">
        <ul
          className={twMerge(
            "flex items-center bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-100 rounded-full overflow-hidden w-max relative after:w-1/2 after:h-full after:bg-blue-500  after:left-0 after:top-0 after:absolute after:rounded-full after:transition-all after:z-[-1] z-[1] ",
            theme === "dark" ? "after:left-0" : "after:left-1/2",
            size === "sm" ? "scale-95 text-sm" : "",
            size === "md" ? "scale-100" : "",
            size === "lg" ? "scale-110" : "",
            size === "xl" ? "scale-125" : "",
            rounded
              ? "rounded-full after:rounded-full"
              : "rounded after:rounded",

            theme === "dark" &&
              style === "shmooz-ai" &&
              " after:left-[5px] after:bg-slate-800 p-1 after:h-[80%] after:top-[10%] after:w-[48%] ",
            theme === "light" &&
              style === "shmooz-ai" &&
              " after:left-[49%] after:bg-green-600 border p-1 after:h-[80%] after:top-[10%] after:w-[48%] "
          )}
        >
          <li
            className={twMerge(
              "p-2 px-4 cursor-pointer ",
              theme === "dark" ? "text-white" : "",
              style === "both" || style === "shmooz-ai"
                ? "px-5 flex items-center justify-center gap-1"
                : ""
            )}
            onClick={() => handleToggleTheme("dark")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={twMerge(
                "inline-block w-5 h-5 mr-1 align-text-bottom fill-current",
                style === "both" || style === "icon" || style === "shmooz-ai"
                  ? "inline-block"
                  : "hidden"
              )}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </g>
            </svg>
            <span className={twMerge(style === "icon" ? "hidden" : "")}>
              Dark
            </span>
          </li>
          <li
            className={twMerge(
              "p-2 px-4 cursor-pointer ",
              theme === "light" ? "text-white" : "",
              style === "both" || style === "shmooz-ai"
                ? "px-5 flex items-center justify-center gap-1"
                : ""
            )}
            onClick={() => handleToggleTheme("light")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={twMerge(
                "inline-block w-5 h-5 mr-1 align-text-bottom fill-current",
                style === "both" || style === "icon" || style === "shmooz-ai"
                  ? "inline-block"
                  : "hidden"
              )}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
                ></path>{" "}
              </g>
            </svg>
            <span className={twMerge(style === "icon" ? "hidden" : "")}>
              Light
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleTheme;
