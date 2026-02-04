import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-mono-dark py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex text-mono-light">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Embrace the enduring strength and vibrant spirit of Ethiopian fitness traditions.
            Train with purpose, rooted in a rich heritage of movement and well-being.
          </p>
          <p>2026 Ethiopian Fitness Hub. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-mono-accent">Our Journey</h4>
          <p className="my-5">Ancient Practices</p>
          <p className="my-5">Wellness Programs</p>
          <p>Community Workouts</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-mono-accent">Join Us</h4>
          <p className="my-5">Start your fitness journey with us. Inquire about classes and membership.</p>
          <p>+251 9XX XXX XXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
