// components/withAuth.js
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Ensure code runs only on the client side
      if (typeof window !== "undefined") {
        const isAuthenticated = localStorage.getItem("authToken");

        if (!isAuthenticated) {
          router.push("/login");
        } else {
          setIsLoading(false); // Authentication is successful, stop loading
        }
      }
    }, [router]);

    // Show a loading spinner or message while checking authentication
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;