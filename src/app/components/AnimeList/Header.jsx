import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {
            linkHref && linkTitle ? 
            <Link href={linkHref} className="md:text-l text-s underline hover:text-pink-300">{linkTitle}</Link>
            : null
          }
      </div>
    )
}

export default Header