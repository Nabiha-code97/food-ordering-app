import FullPageLoader from "@/components/FullPageLoader";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Props = {
    children: React.ReactNode;
}

function Auth0ProviderWithNavigate({children}: Props) {
    const {isLoading} = useAuth0();
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    const onRedirectCallback = ()=>{
        navigate("/auth-callback");
    }
    if(isLoading){
        return <FullPageLoader />;
    }
    if(!domain || !clientId || !redirectUri || !audience){
        throw new Error("unable to initialize authentication");
    }
  return (
    <Auth0Provider 
    domain={domain}
    clientId={clientId}
    authorizationParams={
        {redirect_uri:redirectUri,
        audience,
        }
        
    }
    onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
    
  )
}
export default Auth0ProviderWithNavigate

