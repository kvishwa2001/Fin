
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Layout = () => {
    return (<>
        <Header />
        <main className="container mx-auto">
            <Outlet />
        </main>
        <Footer />
    </>)
}
export default Layout;