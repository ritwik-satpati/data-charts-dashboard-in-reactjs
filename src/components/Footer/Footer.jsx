const Footer = () => {
  const siteVersion = "1.0.0";
  return (
    <>
      <footer className="w-full space-y-3 pb-3 bg-gray-50">
        <div className="border-t-2"></div>
        <div className="w-full flex flex-col justify-center space-y-0.5">
          <div className="flex flex-row justify-center items-center mx-auto font-semibold font-Poppins text-center">
            <p>
              &copy; 2024{" "}
              <a
                href="https://www.linkedin.com/in/Ritwik-Satpati/"
                target="blank"
              >
                Ritwik Satpati
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="flex justify-center items-center text-center mx-auto font-Poppins text-sm">
            Site Version {siteVersion}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
