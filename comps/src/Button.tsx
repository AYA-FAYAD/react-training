import { ReactNode } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

//In TypeScript, an interface is a way to define a contract for an object's structure.
//  It allows you to specify the shape of an object including its properties and their type
interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}: ButtonProps) {
  // Custom validation logic
  const checkVariationValue = () => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error("Only one prop can be used, e.g., primary or warning");
    }
  };

  // Call custom validation logic
  checkVariationValue();
  const classes = twMerge(
    classNames("flex items-center px-3 py-1.5  border", {
      "border-blue-700 bg-blue-600 text-white": primary,
      "border-gray-700 bg-gray-600 text-white": secondary,
      "border-red-700 bg-red-600 text-white": danger,
      "border-yellow-700 bg-yellow-600 text-white": warning,
      "border-green-700 bg-green-600 text-white": success,
      "bg-white": outline,
      "rounded-full": rounded,
      "text-blue-500": outline && primary,
      "text-gray-700": outline && secondary,
      "text-yellow-700": outline && warning,
      "text-red-700": outline && danger,
      "text-green-700": outline && success,
    })
  );
  return (
    <div>
      <button className={classes}>{children}</button>
    </div>
  );
}

export default Button;
