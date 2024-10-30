import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-8 justify-center bg-gray-800">
      <footer className="w-full max-w-6xl flex flex-wrap justify-center lg:pl-24 xl:pl-46 gap-6 md:gap-12 px-4 text-gray-800 dark:text-white">
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl text-blue-500 dark:text-blue-300 mb-2">
            Coding Profiles
          </h2>
          <nav className="flex flex-col text-gray-300">
            <a
              href="https://leetcode.com/u/Sumit_Khandegar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              LeetCode
            </a>
            <a
              href="https://www.codechef.com/users/sumit4f32"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              CodeChef
            </a>
            <a
              href="https://codeforces.com/profile/sumitkhandegar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              CodeForces
            </a>
            <a
              href="https://github.com/sumitkhandegar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-xl text-blue-500 dark:text-blue-300 mb-2">
            Sections
          </h2>
          <nav className="flex flex-col text-gray-300">
            <a
              onClick={() => handleScroll("about")}
              className="hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleScroll("skills")}
              className="hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => handleScroll("projects")}
              className="hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            >
              Contact Me
            </a>
          </nav>
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-xl text-blue-500 dark:text-blue-300 mb-2">
            Get in Touch
          </h1>
          <p className="text-gray-300">
            Feel free to reach out for any inquiries or collaborations!
          </p>

          <div className="flex mt-4 space-x-4">
            <a
              href="https://www.facebook.com/sumit.khandegar.5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              <FacebookIcon fontSize="medium" />
            </a>
            <a
              href="https://x.com/khandegar_sumit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              <TwitterIcon fontSize="medium" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-khandegar-563a1a249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
            <a
              href="https://www.instagram.com/_sumit_khandegar/?igsh=MWRlNDh1N2JsazloYg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              <InstagramIcon fontSize="medium" />
            </a>
            <a
              href="https://github.com/sumitkhandegar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              <GitHubIcon fontSize="medium" />
            </a>
          </div>
        </div>
      </footer>

      <div className="w-full h-px bg-gray-600 my-4" />

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        &copy; 2024 Sumit Khandegar. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
