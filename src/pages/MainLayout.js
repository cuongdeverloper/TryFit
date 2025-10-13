import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children, showFooter = true }) {
    return (
        <div
            className="main-layout"
            style={{ background: "linear-gradient(135deg, #f7f2ff, #f2ebff)" }}
        >
            <Header />
            <main style={{ minHeight: "80vh" }}>{children}</main>
            {showFooter && <Footer />}
        </div>
    );
}
