import { useRouter } from "next/router"

const ProtectedRoute = (ProtectedComponent) => {

   return (props) => {

      if (typeof window !== "undefined") {
         const Router = useRouter()

         const userIsLoggedIn = true;

         if (userIsLoggedIn) {
            return <ProtectedComponent  {...props} />
         } else {
           
            Router.replace("/login")
            return null
         }
      }

      return null;
   }
}

export default ProtectedRoute;
