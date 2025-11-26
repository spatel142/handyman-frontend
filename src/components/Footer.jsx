import BusinessCard from "./BusinessCard";

export default function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(3 54 73 /84%)"}} className=" text-light text-center py-4 mt-5">
      <BusinessCard/>
      <div className="container">
        
        <p className="mb-1">
          © {new Date().getFullYear()} Handyman Services. All rights reserved.
        </p>
       {/* <small>Built with ❤️ using React + Express + MongoDB</small>  */}
      </div>
    </footer>
  );
}
