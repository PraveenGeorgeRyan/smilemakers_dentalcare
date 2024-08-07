import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/node_modules/react-modal-video/css/modal-video.css";

import "public/assets/css/bootstrap.min.css";
import "public/assets/css/font-awesome-pro.css";
import "public/assets/css/magnific-popup.css";
import "public/assets/css/owl.carousel.min.css";
import "public/assets/css/slick-slider.css";
import "public/assets/css/meanmenu.css";
import "public/assets/css/typography.css";
import "public/assets/css/preloader.css";
import "public/assets/css/mobile-menu.css";
import "public/assets/css/header.css";
import "public/assets/css/footer.css";
import "public/assets/css//aos.css";
import "public/assets/css/fonts.css";
import "public/assets/css/blog-page.css";
import "public/assets/css/nice-select.css";
import "public/assets/css/modal-video.min.css";
import "public/assets/css/responsive.css";
import "public/assets/css/comon.css";
import "public/assets/css/avigo-unit.css";
import "public/assets/css/avigo-core.css";
import "public/assets/css/style.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SmileMakers DentalCare",
  description: "A dental care app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="top">
      <body>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
