import Footer from "@/components/Footer";
import FullPageLoader from "@/components/FullPageLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useAuth0 } from "@auth0/auth0-react";

type Props ={
    children: React.ReactNode;
    showHero?: boolean;
}

const Layout = ({children, showHero}: Props) =>{
    const {isLoading} = useAuth0();
     if(isLoading){
        return <FullPageLoader />;
    }
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            {showHero && <Hero />}
            
            <div className="px-4 container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout;