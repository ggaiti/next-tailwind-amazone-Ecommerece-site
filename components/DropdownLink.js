import Link from "next/link";
import React from "react";

export default function DropdownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <div>
      <Link href={href} {...rest}>
        {children}
      </Link>
    </div>
  );
}
