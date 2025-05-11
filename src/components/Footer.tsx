export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            Hirvana
          </a>
          <p>
            Hirvana is a mixture of AI Powered tools and the best of the best
            mentorship cohort
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Organization</h3>
          <div>
            <a href="#about" className="opacity-60 hover:opacity-100">
              About
            </a>
          </div>

          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div> */}

          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Newsletter
            </a>
          </div> */}
        </div>

        {/* <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Blog
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Events
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Webinars
            </a>
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Socials</h3>
          <div>
            <a
              href="https://x.com/hirvanaa"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Linkedin
            </a>
          </div> */}

          {/* <div>
            <a
              href="https://twitter.com/d2dconf"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div> */}
          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Github
            </a>
          </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <a
              href="mailto:hirvanaa@gmail.com"
              className="opacity-60 hover:opacity-100"
            >
              E-Mail
            </a>
          </div>

          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Discord
            </a>
          </div> */}

          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Telegram
            </a>
          </div> */}
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; 2025 Hirvana : Hirvana | All rights reserved.</h3>
      </section>
    </footer>
  );
};
