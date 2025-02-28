import Link from "next/link";

const LinkButton = ({to, label, type}) => {
    return (
        <Link className={"p-2 rounded-2xl m-2 hover:bg-black hover:text-white " + type} href={to}>
            {label}
        </Link>
    );
};
export default LinkButton;