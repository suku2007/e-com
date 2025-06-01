import Link from "next/link";

function NotFound(){
    return(
        <div>
            <h3>404</h3>
            <p>page not found</p>
            <Link href="/">Go To Home</Link>
        </div>
    );
}
export default NotFound;