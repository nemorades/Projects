import "./Home.css";
import { useEffect } from "react";
import arrow_down from "../images/Arrow-1.svg";
import img_s2 from "../images/image_s2.png";
import img_s3_1 from "../images/image_1_s3.png";
import image_2_s3 from "../images/image_2_s3.png";
import image_3_s3 from "../images/image_3_s3.png";
import image_4_s3 from "../images/image_4_s3.png";
import img_s5 from "../images/image_3d_compliance.svg";
import img_badroom from "../images/bathroom.png";
import logo from "../images/logo.svg";

function Home() {
  const video_bg =
    "https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-transcode.mp4";
  const video_s2 =
    "https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b4d6a4dfae2808b8f86fa_The-revolutionary-bathroom-pods-technology-transcode.mp4";
  const vid_s5 =
    "https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b67c5aebcf9785fa08bd0_Manufacture-transcode.mp4";

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  });

  return (
    <>
      <div
        data-w-id="e2d07192-f604-5dd7-af45-37fd52536b73"
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="conteiner nav_mobile w-container">
          <div className="wrapper_nav">
            <div className="menu">
              <a href="#home" className="brand w-nav-brand">
                <img
                  src={logo}
                  loading="lazy"
                  data-w-id="debf4265-45c1-fed3-c287-07bf419fc7d8"
                  alt=""
                  className="image"
                />
              </a>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a
                  href="#case_studies"
                  data-w-id="e2d07192-f604-5dd7-af45-37fd52536b77"
                  className="nav_link_1 w-nav-link"
                >
                  Case Studies
                </a>
                <a
                  href="#case_studies_table"
                  className="nav_link_1_table w-nav-link"
                >
                  Case Studies
                </a>
                <a href="#case_studies" className="nav_link_1_1440 w-nav-link">
                  Case Studies
                </a>
                <a href="#case_studies" className="nav_link_1_1280 w-nav-link">
                  Case Studies
                </a>
                <a
                  href="#desing"
                  data-w-id="e2d07192-f604-5dd7-af45-37fd52536b79"
                  className="nav_link_2 w-nav-link"
                >
                  Desing
                </a>
                <a href="#desing_table" className="nav_link_2_table w-nav-link">
                  Desing
                </a>
                <a
                  href="#manufacture"
                  data-w-id="40925d72-4d74-5365-d22e-056f0b04bec3"
                  className="nav_link_3 w-nav-link"
                >
                  Manufacture
                </a>
                <a
                  href="#manufacture_table"
                  className="nav_link_3_table w-nav-link"
                >
                  Manufacture
                </a>
                <a
                  href="#overview"
                  data-w-id="e2d07192-f604-5dd7-af45-37fd52536b7b"
                  className="nav_link_4 last w-nav-link"
                >
                  Overview
                </a>
                <a
                  href="#overview_table"
                  data-w-id="e07bde96-0975-8ee0-aa1f-98a38fcaeaa7"
                  className="nav_link_4_table last w-nav-link"
                >
                  Overview
                </a>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="burger_menu">
                  <div className="line_1" />
                  <div className="line_2" />
                  <div className="line_3" />
                </div>
              </div>
            </div>
            <div
              id="btn_request"
              data-w-id="d2ee8091-0758-dfc3-7bdd-7f0588cdbb75"
              className="btn_request"
            >
              <div className="text-block">Request a Qoute</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home"
        data-w-id="95e69a2e-88bb-20b2-47e0-b9a8fd0bcd51"
        className="section_1"
      >
        <div
          data-w-id="d59ab54f-67d3-e47d-ecee-c79772ad8f4c"
          className="video_bg_s1"
        >
          <div
            data-w-id="4e51de59-3ff4-bc71-cebd-d8cb44e1853a"
            className="background-video w-background-video w-background-video-atom"
          >
            <video
              id="4e51de59-3ff4-bc71-cebd-d8cb44e1853a-video"
              width="100%"
              autoPlay
              loop
              muted
              src={video_bg}
            ></video>
          </div>
          <div
            data-w-id="e2a9ee7b-b9c6-ff48-4472-3d0fde97cd63"
            className="bg_video_s1_top_left"
          />
          <div
            data-w-id="b893e483-986c-5e85-bc80-f8d5b5c200b6"
            className="bg_video_s1_top_right"
          />
          <div
            data-w-id="8f073373-6171-dcaf-889b-9a4adda161b5"
            className="bg_video_s1_bottom_left"
          />
          <div
            data-w-id="5928a6b8-8ae5-4667-4bf9-5fbb2a06a08d"
            className="bg_video_s1_botton_right"
          />
        </div>
        <div className="conteiner s1 mobile">
          <div className="wrapper_s1">
            <div className="div-block-17">
              <h1 className="heading">Bathroom Pods</h1>
              <div className="text-block-2">your best solution</div>
              <a
                href="#discover"
                data-w-id="217308fe-432b-5107-ca6b-615fb9d3c7fa"
                className="discover w-inline-block"
              >
                <div className="text-block-3">
                  Discover <br />
                  more
                </div>
                <div className="div-block-32" />
                <img
                  src={arrow_down}
                  loading="lazy"
                  alt=""
                  className="image-17"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home"
        data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adb9"
        className="section_1_table"
      >
        <div className="video_bg_s1_table">
          <div
            data-poster-url="https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-poster-00001.jpg"
            data-video-urls="https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-transcode.mp4,https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            data-beta-bgvideo-upgrade="false"
            data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adbb"
            className="background-video w-background-video w-background-video-atom"
          >
            <video
              id="6831dd92-6c19-e8ba-6d7a-65ed9784adbb-video"
              autoPlay=""
              loop=""
              style={{
                backgroundImage:
                  'url("https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-poster-00001.jpg")',
              }}
              muted=""
              playsInline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://uploads-ssl.webflow.com/6214c1901924aba94a7e0064/628b3a8cd53df3458b5aa120_main screen-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div>
          <div
            data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adbc"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            className="bg_video_s1_top_left"
          />
          <div
            data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adbd"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            className="bg_video_s1_top_right"
          />
          <div
            data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adbe"
            style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            className="bg_video_s1_bottom_left"
          />
          <div
            data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adbf"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="bg_video_s1_botton_right"
          />
        </div>
        <div className="conteiner_table s1 mobile">
          <div className="wrapper_s1">
            <div className="div-block-17">
              <h1 className="heading">Bathroom Pods</h1>
              <div className="text-block-2">your best solution</div>
              <a
                href="#discover"
                data-w-id="6831dd92-6c19-e8ba-6d7a-65ed9784adc7"
                className="discover w-inline-block"
              >
                <div className="text-block-3">
                  Discover <br />
                  more
                </div>
                <div className="div-block-32" />
                <img
                  src="images/Arrow-1.svg"
                  loading="lazy"
                  alt=""
                  className="image-17"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="discover"
        data-w-id="ee6d5e9b-591c-a02b-2437-d81a3b704620"
        className="section_2"
      >
        <div className="conteiner s2">
          <div className="wrapper_s2">
            <div className="video_block_s2">
              <div className="wrapper">
                <h2 className="heading_table">
                  The &nbsp;Revolutionary Bathroom Pods Technology
                </h2>
              </div>
              <div className="wrapper_bg_video_s2">
                <div
                  data-w-id="8bad0f5c-a15f-0a29-198c-cb77a0caaf17"
                  className="background-video_s2 w-background-video w-background-video-atom"
                >
                  <video
                    id="8bad0f5c-a15f-0a29-198c-cb77a0caaf17-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={video_s2}
                  ></video>
                </div>
              </div>
              <div className="text_block_animation">
                <div className="text-block-4">
                  Moon brand is the only luxury prefabricated bathroom pod
                  manufacturer to deliver the product to the construction site
                  location fully stacked and completely cladded
                </div>
                <div
                  data-w-id="518af740-3f0d-24ab-2e4f-6c647aef196a"
                  className="mask_animation_text_s2"
                />
              </div>
            </div>
            <div className="block_revolutionary">
              <div className="heading_animation">
                <h2 className="heading-2">
                  The &nbsp;Revolutionary Bathroom Pods Technology
                </h2>
                <div
                  data-w-id="fbeb2857-0129-9ec0-5b62-a19871df13ea"
                  className="mask_animation_title_s2"
                />
              </div>
              <div className="image_s2">
                <img
                  src={img_s2}
                  loading="lazy"
                  data-w-id="c18b082e-a87e-d497-6c74-4eb4f8f44ffa"
                  width={279}
                  alt=""
                  className="image-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-poster-url="videos/The-revolutionary-bathroom-pods-technology-poster-00001.jpg"
          data-video-urls="videos/The-revolutionary-bathroom-pods-technology-transcode.mp4,videos/The-revolutionary-bathroom-pods-technology-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          data-beta-bgvideo-upgrade="false"
          className="background-video-2 w-background-video w-background-video-atom"
        >
          <video
            id="7f72112b-f137-bc15-56a3-8b1fc0445f6c-video"
            autoPlay=""
            loop=""
            style={{
              backgroundImage:
                'url("videos/The-revolutionary-bathroom-pods-technology-poster-00001.jpg")',
            }}
            muted=""
            playsInline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="videos/The-revolutionary-bathroom-pods-technology-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="videos/The-revolutionary-bathroom-pods-technology-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
      </div>
      <div
        id="discover"
        data-w-id="410ed7d0-32dd-cef5-5e30-b3e5bca766e4"
        className="section_2_table"
      >
        <div className="conteiner s2">
          <div className="wrapper_s2">
            <div className="video_block_s2">
              <div className="wrapper">
                <h2 className="heading_table">
                  The &nbsp;Revolutionary Bathroom Pods Technology
                </h2>
                <div className="mask_animation_title_s2_table" />
              </div>
              <div className="wrapper_bg_video_s2">
                <div
                  data-poster-url="videos/The-revolutionary-bathroom-pods-technology-poster-00001.jpg"
                  data-video-urls="videos/The-revolutionary-bathroom-pods-technology-transcode.mp4,videos/The-revolutionary-bathroom-pods-technology-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-beta-bgvideo-upgrade="false"
                  className="background-video_s2_table w-background-video w-background-video-atom"
                >
                  <video
                    id="410ed7d0-32dd-cef5-5e30-b3e5bca766ec-video"
                    autoPlay=""
                    loop=""
                    style={{
                      backgroundImage:
                        'url("videos/The-revolutionary-bathroom-pods-technology-poster-00001.jpg")',
                    }}
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="videos/The-revolutionary-bathroom-pods-technology-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="videos/The-revolutionary-bathroom-pods-technology-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="block_revolutionary">
              <div className="heading_animation">
                <h2 className="heading-2_table">
                  The &nbsp;Revolutionary Bathroom Pods Technology
                </h2>
              </div>
              <div className="image_s2">
                <img
                  src="images/image_s2.png"
                  loading="lazy"
                  width={279}
                  alt=""
                  className="image-12_table"
                />
              </div>
            </div>
          </div>
          <div className="text_block_animation">
            <div className="text-block-4_table">
              Moon brand is the only luxury prefabricated bathroom pod
              manufacturer to deliver the product to the construction site
              location fully stacked and completely cladded
            </div>
            <div className="mask_animation_text_s2_table-copy" />
          </div>
        </div>
        <div
          data-poster-url="videos/The-revolutionary-bathroom-pods-technology-poster-00001.jpg"
          data-video-urls="videos/The-revolutionary-bathroom-pods-technology-transcode.mp4,videos/The-revolutionary-bathroom-pods-technology-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          data-beta-bgvideo-upgrade="false"
          className="background-video-2 w-background-video w-background-video-atom"
        >
          <video
            id="410ed7d0-32dd-cef5-5e30-b3e5bca766f6-video"
            autoPlay=""
            loop=""
            style={{
              backgroundImage:
                'url("videos/The-revolutionary-bathroom-pods-technology-poster-00001.jpg")',
            }}
            muted=""
            playsInline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="videos/The-revolutionary-bathroom-pods-technology-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="videos/The-revolutionary-bathroom-pods-technology-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
      </div>
      <div
        id="case_studies"
        data-w-id="94e9353a-33ca-6917-46f1-f6321407c609"
        className="section_3"
      >
        <div className="conteiner s3">
          <div className="div-block-40">
            <div className="wrapper_case">
              <div className="wrapper_title_s3">
                <h2 className="heading-3">Case Studies</h2>
                <div
                  data-w-id="2c5b38aa-02d9-98c1-9e31-473a98f3e589"
                  className="mask_animation_title_s3"
                />
              </div>
              <div className="case_studees">
                <div className="horizontal">
                  <div
                    data-w-id="45c86dcf-e3b2-a5cf-8687-3a0b12fc9b49"
                    className="image_case_cardiff"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src={img_s3_1}
                        loading="lazy"
                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 22vw, (max-width: 1439px) 250px, (max-width: 1919px) 300px, 410px"
                        data-w-id="e82d723c-2a15-0f75-64f6-1eff03c97307"
                        alt=""
                        className="image_1"
                      />
                    </div>
                    <div className="div-block-46">
                      <h3 className="heading_cardiff">Cardiff Interchange</h3>
                      <div
                        data-w-id="86af779d-6ca5-efd2-78fc-e66ad00a9b89"
                        className="mask_animation_case"
                      />
                    </div>
                  </div>
                  <div
                    data-w-id="658f8906-9e14-fd86-17ca-3031271d2468"
                    className="image_case_cardiff_mobile"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_1_s3.png"
                        loading="lazy"
                        sizes="100vw"
                        data-w-id="658f8906-9e14-fd86-17ca-3031271d246a"
                        srcSet="images/image_1_s3-p-500.png 500w, images/image_1_s3.png 812w"
                        alt=""
                        className="image_1"
                      />
                    </div>
                    <h3 className="heading_cardiff">Cardiff Interchange</h3>
                  </div>
                  <div
                    data-w-id="1d0d73e4-8d15-76e5-4999-66fb3275e416"
                    className="image_case_retirement retirement"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src={image_2_s3}
                        loading="lazy"
                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 22vw, (max-width: 1439px) 250px, (max-width: 1919px) 300px, 410px"
                        data-w-id="1d0d73e4-8d15-76e5-4999-66fb3275e417"
                        alt=""
                        className="image_2"
                      />
                    </div>
                    <div className="div-block-45">
                      <h3 className="heading_retirement_aipar">
                        Retirement Apartments
                      </h3>
                      <div
                        data-w-id="b0020acb-ddce-d7b9-0f24-06ae172a1c2e"
                        className="mask_animation_case"
                      />
                    </div>
                  </div>
                  <div
                    data-w-id="09c59858-2d1a-c2e8-e283-c0049305e8bf"
                    className="image_case_retirement_mobile retirement"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_2_s3.png"
                        loading="lazy"
                        sizes="100vw"
                        data-w-id="09c59858-2d1a-c2e8-e283-c0049305e8c1"
                        srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                        alt=""
                        className="image_2"
                      />
                    </div>
                    <h3 className="heading_retirement_aipar">
                      Retirement Apartments
                    </h3>
                  </div>
                  <div
                    data-w-id="70c72692-2858-316f-2c53-2e05fc1ca3e9"
                    className="image_case_lianerch"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src={image_3_s3}
                        loading="lazy"
                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 22vw, (max-width: 1439px) 250px, (max-width: 1919px) 300px, 410px"
                        data-w-id="70c72692-2858-316f-2c53-2e05fc1ca3ea"
                        alt=""
                        className="image_3"
                      />
                    </div>
                    <div className="div-block-44">
                      <h3 className="heading_lianerch">
                        Lianerch Vineyard Hotel
                      </h3>
                      <div
                        data-w-id="413d0662-20d9-87fe-d435-7cbf7c01b517"
                        className="mask_animation_case"
                      />
                    </div>
                  </div>
                  <div
                    data-w-id="18766022-8e84-eb07-69e8-7e0e6c7c26bd"
                    className="image_case_lianerch_mobile"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_3_s3.png"
                        loading="lazy"
                        sizes="100vw"
                        data-w-id="18766022-8e84-eb07-69e8-7e0e6c7c26bf"
                        srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                        alt=""
                        className="image_3"
                      />
                    </div>
                    <h3 className="heading_lianerch">
                      Lianerch Vineyard Hotel
                    </h3>
                  </div>
                  <div
                    data-w-id="34187256-120f-b75b-2e3e-d7d5f25ce291"
                    className="image_case_canary"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src={image_4_s3}
                        loading="lazy"
                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 22vw, (max-width: 1439px) 250px, (max-width: 1919px) 300px, 410px"
                        data-w-id="34187256-120f-b75b-2e3e-d7d5f25ce292"
                        alt=""
                        className="image_4"
                      />
                    </div>
                    <div className="div-block-43">
                      <h3 className="heading_canary_wharf">Canary Wharf</h3>
                      <div
                        data-w-id="683181db-e3fa-60a6-da49-41dab29da28a"
                        className="mask_animation_case"
                      />
                    </div>
                  </div>
                  <div
                    data-w-id="e5d60d2f-2790-89f4-f695-a40326371558"
                    className="image_case_canary_mobile"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_4_s3.png"
                        loading="lazy"
                        sizes="100vw"
                        data-w-id="e5d60d2f-2790-89f4-f695-a4032637155a"
                        srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                        alt=""
                        className="image_4"
                      />
                    </div>
                    <h3 className="heading_canary_wharf">Canary Wharf</h3>
                  </div>
                  <div
                    data-w-id="8c9c3b14-5a9a-c4af-a004-3ede6c0a1a10"
                    className="image_case_south"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_5_s3.png"
                        loading="lazy"
                        srcSet="images/image_5_s3-p-500.png 500w, images/image_5_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="image_5"
                      />
                    </div>
                    <h3 className="heading_south">
                      South Quay Plaza, Berkeley Homes
                    </h3>
                  </div>
                  <div
                    data-w-id="3a39252c-392b-9f90-2f85-48072ea1d8b9"
                    className="image_case_south_mobile"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_5_s3.png"
                        loading="lazy"
                        srcSet="images/image_5_s3-p-500.png 500w, images/image_5_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="image_5"
                      />
                    </div>
                    <h3 className="heading_south">
                      South Quay Plaza, Berkeley Homes
                    </h3>
                  </div>
                  <div
                    data-w-id="b1e66b5f-e051-bc3b-aaba-063dc131f99e"
                    className="image_case_east last_case_image_block"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_6_s3.png"
                        loading="lazy"
                        srcSet="images/image_6_s3-p-500.png 500w, images/image_6_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="image_6"
                      />
                    </div>
                    <h3 className="heading_east">
                      East Lothian Community Hospital
                    </h3>
                  </div>
                  <div
                    data-w-id="69770101-a365-16c8-2c8f-6b6c7f71a442"
                    className="image_case_east_mobile last_case_image_block"
                  >
                    <div className="wrapper_image_case">
                      <img
                        src="images/image_6_s3.png"
                        loading="lazy"
                        srcSet="images/image_6_s3-p-500.png 500w, images/image_6_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="image_6"
                      />
                    </div>
                    <h3 className="heading_east">
                      East Lothian Community Hospital
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="case_studies_table"
        data-w-id="47197cac-780f-08c7-0abd-0e2ac286df0c"
        className="section_3_table"
      >
        <div className="conteiner_table_s3 s3">
          <div className="wrapper_case_table">
            <div className="wrapper_case_table_title">
              <h2 className="heading-3_table">Case Studies</h2>
              <div className="mask_animation_title_s3_table_a" />
            </div>
            <div className="case_studees_table">
              <div className="horizontal_table">
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df13"
                  className="image_case_cardiff"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_1_s3.png"
                      loading="lazy"
                      srcSet="images/image_1_s3-p-500.png 500w, images/image_1_s3.png 812w"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 360px, 100vw"
                      alt=""
                      className="image_1_table"
                    />
                  </div>
                  <div className="wrapper_case_item_table">
                    <h3 className="heading_cardiff_table">
                      Cardiff Interchange
                    </h3>
                    <div className="mask_animation_items_s3_table" />
                  </div>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df18"
                  className="image_case_cardiff_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_1_s3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 244px, 100vw"
                      data-w-id="47197cac-780f-08c7-0abd-0e2ac286df1a"
                      srcSet="images/image_1_s3-p-500.png 500w, images/image_1_s3.png 812w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <h3 className="heading_cardiff">Cardiff Interchange</h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df1d"
                  className="image_case_retirement retirement"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 360px, 100vw"
                      alt=""
                      className="image_2_table"
                    />
                  </div>
                  <div className="wrapper_case_item_table">
                    <h3 className="heading_retirement_aipar_table">
                      Retirement Apartments
                    </h3>
                    <div className="mask_animation_items_s3_table" />
                  </div>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df22"
                  className="image_case_retirement_mobile retirement"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 244px, 100vw"
                      data-w-id="47197cac-780f-08c7-0abd-0e2ac286df24"
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      alt=""
                      className="image_2"
                    />
                  </div>
                  <h3 className="heading_retirement_aipar">
                    Retirement Apartments
                  </h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df27"
                  className="image_case_lianerch"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 360px, 100vw"
                      alt=""
                      className="image_3_table"
                    />
                  </div>
                  <div className="wrapper_case_item_table">
                    <h3 className="heading_lianerch_table">
                      Lianerch Vineyard Hotel
                    </h3>
                    <div className="mask_animation_items_s3_table" />
                  </div>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df2c"
                  className="image_case_lianerch_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 244px, 100vw"
                      data-w-id="47197cac-780f-08c7-0abd-0e2ac286df2e"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      alt=""
                      className="image_3"
                    />
                  </div>
                  <h3 className="heading_lianerch">Lianerch Vineyard Hotel</h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df31"
                  className="image_case_canary"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 360px, 100vw"
                      alt=""
                      className="image_4_table"
                    />
                  </div>
                  <div className="wrapper_case_item_table">
                    <h3 className="heading_canary_wharf_table">Canary Wharf</h3>
                    <div className="mask_animation_items_s3_table" />
                  </div>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df36"
                  className="image_case_canary_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 244px, 100vw"
                      data-w-id="47197cac-780f-08c7-0abd-0e2ac286df38"
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      alt=""
                      className="image_4"
                    />
                  </div>
                  <h3 className="heading_canary_wharf">Canary Wharf</h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df3b"
                  className="image_case_south"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_5_s3.png"
                      loading="lazy"
                      srcSet="images/image_5_s3-p-500.png 500w, images/image_5_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_5"
                    />
                  </div>
                  <h3 className="heading_south">
                    South Quay Plaza, Berkeley Homes
                  </h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df40"
                  className="image_case_south_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_5_s3.png"
                      loading="lazy"
                      srcSet="images/image_5_s3-p-500.png 500w, images/image_5_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_5"
                    />
                  </div>
                  <h3 className="heading_south">
                    South Quay Plaza, Berkeley Homes
                  </h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df45"
                  className="image_case_east last_case_image_block"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_6_s3.png"
                      loading="lazy"
                      srcSet="images/image_6_s3-p-500.png 500w, images/image_6_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_6"
                    />
                  </div>
                  <h3 className="heading_east">
                    East Lothian Community Hospital
                  </h3>
                </div>
                <div
                  data-w-id="47197cac-780f-08c7-0abd-0e2ac286df4a"
                  className="image_case_east_mobile last_case_image_block"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_6_s3.png"
                      loading="lazy"
                      srcSet="images/image_6_s3-p-500.png 500w, images/image_6_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_6"
                    />
                  </div>
                  <h3 className="heading_east">
                    East Lothian Community Hospital
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="case_studies_1280" className="section_3_1280">
        <div className="conteiner s3">
          <div className="wrapper_case_1280">
            <h2 className="heading-3">Case Studies</h2>
            <div className="case_studees">
              <div className="horizontal">
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d45"
                  className="image_case_cardiff"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_1_s3.png"
                      loading="lazy"
                      srcSet="images/image_1_s3-p-500.png 500w, images/image_1_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_1_1280"
                    />
                  </div>
                  <h3 className="heading_cardiff">Cardiff Interchange</h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d4a"
                  className="image_case_cardiff_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_1_s3.png"
                      loading="lazy"
                      sizes="100vw"
                      data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d4c"
                      srcSet="images/image_1_s3-p-500.png 500w, images/image_1_s3.png 812w"
                      alt=""
                      className="image_1"
                    />
                  </div>
                  <h3 className="heading_cardiff">Cardiff Interchange</h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d4f"
                  className="image_case_retirement retirement"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_2_1280"
                    />
                  </div>
                  <h3 className="heading_retirement_aipar">
                    Retirement Apartments, Sandhurst
                  </h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d54"
                  className="image_case_retirement_mobile retirement"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      sizes="100vw"
                      data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d56"
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      alt=""
                      className="image_2"
                    />
                  </div>
                  <h3 className="heading_retirement_aipar">
                    Retirement Apartments, Sandhurst
                  </h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d59"
                  className="image_case_lianerch"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_3_1280"
                    />
                  </div>
                  <h3 className="heading_lianerch">Lianerch Vineyard Hotel</h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d5e"
                  className="image_case_lianerch_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      sizes="100vw"
                      data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d60"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      alt=""
                      className="image_3"
                    />
                  </div>
                  <h3 className="heading_lianerch">Lianerch Vineyard Hotel</h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d63"
                  className="image_case_canary"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_4_1280"
                    />
                  </div>
                  <h3 className="heading_canary_wharf">Canary Wharf, London</h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d68"
                  className="image_case_canary_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      sizes="100vw"
                      data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d6a"
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      alt=""
                      className="image_4"
                    />
                  </div>
                  <h3 className="heading_canary_wharf">Canary Wharf, London</h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d6d"
                  className="image_case_south"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_5_s3.png"
                      loading="lazy"
                      srcSet="images/image_5_s3-p-500.png 500w, images/image_5_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_5"
                    />
                  </div>
                  <h3 className="heading_south">
                    South Quay Plaza, Berkeley Homes
                  </h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d72"
                  className="image_case_south_mobile"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_5_s3.png"
                      loading="lazy"
                      srcSet="images/image_5_s3-p-500.png 500w, images/image_5_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_5"
                    />
                  </div>
                  <h3 className="heading_south">
                    South Quay Plaza, Berkeley Homes
                  </h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d77"
                  className="image_case_east last_case_image_block"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_6_s3.png"
                      loading="lazy"
                      srcSet="images/image_6_s3-p-500.png 500w, images/image_6_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_6"
                    />
                  </div>
                  <h3 className="heading_east">
                    East Lothian Community Hospital
                  </h3>
                </div>
                <div
                  data-w-id="64b69b88-21d9-91d7-c2fc-9a9243684d7c"
                  className="image_case_east_mobile last_case_image_block"
                >
                  <div className="wrapper_image_case">
                    <img
                      src="images/image_6_s3.png"
                      loading="lazy"
                      srcSet="images/image_6_s3-p-500.png 500w, images/image_6_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_6"
                    />
                  </div>
                  <h3 className="heading_east">
                    East Lothian Community Hospital
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="desing"
        data-w-id="a2b4af6e-2e6e-cf6b-7003-46099d76e97c"
        className="section_4"
      >
        <div className="conteiner s4">
          <div className="wrapper_title_design">
            <h2 className="heading-5">Design</h2>
            <div
              data-w-id="2163fdda-39d4-096e-1b81-6440fd8eb41f"
              className="mask_animation_design"
            />
          </div>
          <div className="image_block_s4">
            <img
              src={img_s5}
              loading="lazy"
              width="468.5"
              data-w-id="6a36c5ab-f2b5-260f-3078-31bd561a4273"
              alt=""
              className="image-5"
            />
          </div>
          <div className="wrapper_s4">
            <div className="div-block-19">
              <div
                data-w-id="7fddeec8-cec5-7c7c-307e-e0ff7392547a"
                className="experienced_block"
              >
                <div
                  data-w-id="3273487d-564d-e5af-b49e-359456630e0a"
                  style={{ borderColor: "rgb(149,185,185)" }}
                  className="arrow_border_experienced"
                >
                  <div
                    data-w-id="c808eabb-5afe-ece5-6b8c-2d6eecc01001"
                    style={{ color: "rgb(149,185,185)" }}
                    className="arrow_experienced"
                  >
                    &gt;
                  </div>
                </div>
                <div className="wrapper_title_experienced">
                  <h3 className="heading_experienced">
                    <span
                      data-w-id="6aaa7003-f36a-57d7-d413-a2e6c8f8dff3"
                      style={{ color: "rgb(51,51,51)" }}
                      className="font_600_desing_expe"
                    >
                      Experienced <br />
                      designers team
                    </span>
                  </h3>
                  <div
                    data-w-id="a55eb9ce-07f9-8b23-0497-1159a7b5b11d"
                    className="mask_animation_design"
                  />
                </div>
              </div>
              <div
                data-w-id="9888e3e5-4d01-c611-b386-1cda89908a2e"
                className="_3d_solid_block"
              >
                <div className="arrow_border_3d_solid">
                  <div className="arrow_3d_solid">&gt;</div>
                </div>
                <div className="wrapper_title_3d_solid">
                  <h3 className="heading_3d_solid">
                    <span className="font_600_desing_3d">
                      3D SolidWorks technology
                    </span>
                  </h3>
                  <div
                    data-w-id="0d5ca30a-61b1-f824-69cb-7d3e22a664a9"
                    className="mask_animation_design"
                  />
                </div>
              </div>
              <div
                data-w-id="03b744c4-5aff-38ff-050f-ead57a14f265"
                className="compliance_block"
              >
                <div className="arrow_border_compliance">
                  <div className="arrow_compliance">&gt;</div>
                </div>
                <div className="wrapper_title_compliance">
                  <h3 className="heading_compliance">
                    <span className="font_600_desing_compli">
                      Compliance with standards
                    </span>
                  </h3>
                  <div
                    data-w-id="4c99900d-2e6e-bb71-c016-46a6dce50d2b"
                    className="mask_animation_design"
                  />
                </div>
              </div>
              <div className="image_block_s4_table">
                <img
                  src="images/image_3d_compliance.svg"
                  loading="lazy"
                  width="468.5"
                  data-w-id="bcfe900a-881c-eb0c-4237-eea7fcc9e69d"
                  alt=""
                  className="image-5"
                />
              </div>
            </div>
            <div
              data-w-id="fa7e3b80-ec43-e577-0a77-d69201152231"
              style={{ opacity: 1 }}
              className="experienced"
            >
              <div className="wrapper_text_experienced">
                <div className="text-block-5">Experienced Designers Team</div>
                <div
                  data-w-id="fd7776b1-b725-c5aa-e6d4-5d6863834a3a"
                  className="mask_animation_design"
                />
              </div>
              <div className="paragraph_desing">
                <p className="paragraph">
                  At the core of our business is the dedicated, specialist,
                  in-house design team who are experienced in successful liaison
                  with architects. M&amp;E consultants, construction project
                  managers and clients to achieve the best possible pod solution
                </p>
                <div
                  data-w-id="3c1ca236-504e-3a96-efa7-39fcb5ace29c"
                  className="mask_animation_design"
                />
              </div>
            </div>
            <div className="_3d_solid_block_text">
              <div className="text-block-5">3D SolidWorks Technology</div>
              <div className="paragraph_desing">
                <p className="paragraph">
                  Using the latest 3D SolidWorks technology, our versatile
                  design and manufacturing facilities enable us to produce
                  bespoke designs and configurations quickly and economically to
                  meet a wide range of building requirements
                </p>
              </div>
            </div>
            <div className="compliance_block_text">
              <div className="text-block-5">Compliance With Standards</div>
              <div className="paragraph_desing">
                <p className="paragraph">
                  There is no such thing as a standard bathroompod. What you
                  specify is what you get. Thisalone is a significant value
                  because bathroompods are built to a much higher level of
                  qualitythan can be achieved in site built construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="desing_table"
        data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d2d"
        className="section_4_table"
      >
        <div className="conteiner s4">
          <div className="wrapper_title_design">
            <h2 className="heading-5_table">Design</h2>
            <div className="mask_animation_title_s3_table" />
          </div>
          <div className="image_block_s4">
            <img
              src="images/image_3d_compliance.svg"
              loading="lazy"
              width="468.5"
              alt=""
              className="image-5_table"
            />
          </div>
          <div className="wrapper_s4">
            <div className="div-block-19">
              <div
                data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d36"
                className="experienced_block"
              >
                <div
                  data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d37"
                  style={{ borderColor: "rgb(149,185,185)" }}
                  className="arrow_border_experienced"
                >
                  <div
                    data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d38"
                    style={{ color: "rgb(149,185,185)" }}
                    className="arrow_experienced"
                  >
                    &gt;
                  </div>
                </div>
                <div className="wrapper_experienced_table">
                  <h3 className="heading_experienced_table">
                    <span
                      data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d3b"
                      style={{ color: "rgb(51,51,51)" }}
                      className="font_600_desing_expe"
                    >
                      Experienced <br />
                      designers team
                    </span>
                  </h3>
                  <div className="mask_animation_text_s3_table" />
                </div>
              </div>
              <div
                data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d3f"
                className="_3d_solid_block"
              >
                <div className="arrow_border_3d_solid">
                  <div className="arrow_3d_solid">&gt;</div>
                </div>
                <div className="wrapper_3d_solid_table">
                  <h3 className="heading_3d_solid_table">
                    <span className="font_600_desing_3d">
                      3D SolidWorks technology
                    </span>
                  </h3>
                  <div className="mask_animation_text_s3_table" />
                </div>
              </div>
              <div
                data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d46"
                className="compliance_block"
              >
                <div className="arrow_border_compliance">
                  <div className="arrow_compliance">&gt;</div>
                </div>
                <div className="wrapper_compliance_table">
                  <h3 className="heading_compliance_table">
                    <span className="font_600_desing_compli">
                      Compliance with standards
                    </span>
                  </h3>
                  <div className="mask_animation_text_s3_table" />
                </div>
              </div>
              <div className="image_block_s4_table">
                <img
                  src="images/image_3d_compliance.svg"
                  loading="lazy"
                  width="468.5"
                  alt=""
                  className="image-5_table"
                />
              </div>
            </div>
          </div>
          <div className="div-block-42">
            <div
              data-w-id="0434e25f-aef7-8816-a7c9-80e9ca735d4f"
              style={{ opacity: 1 }}
              className="experienced"
            >
              <div className="wrapper_experienced_title_s3_table">
                <div className="text-block-5_table">
                  Experienced Designers Team
                </div>
                <div className="mask_animation_text_s3_table" />
              </div>
              <div className="wrapper_text_experienced_s3_table">
                <p className="paragraph_table">
                  At the core of our business is the dedicated, specialist,
                  in-house design team who are experienced in successful liaison
                  with architects. M&amp;E consultants, construction project
                  managers and clients to achieve the best possible pod solution
                </p>
                <div className="mask_animation_text_s3_table" />
              </div>
            </div>
            <div className="_3d_solid_block_text">
              <div className="text-block-5_table">3D SolidWorks Technology</div>
              <p className="paragraph_table">
                Using the latest 3D SolidWorks technology, our versatile design
                and manufacturing facilities enable us to produce bespoke
                designs and configurations quickly and economically to meet a
                wide range of building requirements
              </p>
            </div>
            <div className="compliance_block_text">
              <div className="text-block-5_table">
                Compliance With Standards
              </div>
              <div className="paragraph_desing">
                <p className="paragraph_table">
                  There is no such thing as a standard bathroompod. What you
                  specify is what you get. Thisalone is a significant value
                  because bathroompods are built to a much higher level of
                  qualitythan can be achieved in site built construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="manufacture"
        data-w-id="3f0f6000-10c2-358f-9ef8-d127d44fbe3c"
        className="section_5"
      >
        <div className="bg_video_s5">
          <div
            data-poster-url="videos/Manufacture-poster-00001.jpg"
            data-video-urls="videos/Manufacture-transcode.mp4,videos/Manufacture-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            data-beta-bgvideo-upgrade="false"
            data-w-id="ba6fee1c-b4a5-4e60-8957-726d7645be4d"
            className="video_manufacture w-background-video w-background-video-atom"
          >
            <video
              id="ba6fee1c-b4a5-4e60-8957-726d7645be4d-video"
              autoPlay
              loop
              muted
              playsInline
              src={vid_s5}
            ></video>
          </div>
        </div>
        <div className="conteiner s_5">
          <div className="wrapper_s5">
            <div className="text_block_s5">
              <div className="wrapper_title_manufacture">
                <div
                  data-w-id="a8c44f55-e061-f975-9aa6-6739d7a12701"
                  className="mask_animation_s5_title"
                >
                  <h2 className="heading-6">Manufacture</h2>
                </div>
              </div>
              <div className="wrapper_text_s5">
                <div
                  data-w-id="6be45d27-c821-06db-d761-79ed482b1004"
                  className="div-block-47"
                >
                  <p className="paragraph-2">
                    We manufacture bathroom pods in their factory for large
                    scale developments. Traditionally, on large developments,
                    everything is built on site. Moon manufactures bathrooms off
                    site that are then taken to the development so that they can
                    just slot in to the infrastructure that has been built. This
                    increases efficiency and cuts costs amongst many other
                    benefits
                  </p>
                </div>
                <div className="mask_animation_text_s5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="manufacture_table"
        data-w-id="a3a1373d-41c1-9d80-25aa-9a959bb9d3bf"
        className="section_5_table"
      >
        <div className="bg_video_s5">
          <div
            data-poster-url="videos/Manufacture-poster-00001.jpg"
            data-video-urls="videos/Manufacture-transcode.mp4,videos/Manufacture-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            data-beta-bgvideo-upgrade="false"
            className="video_manufacture w-background-video w-background-video-atom"
          >
            <video
              id="a3a1373d-41c1-9d80-25aa-9a959bb9d3c1-video"
              autoPlay=""
              loop=""
              style={{
                backgroundImage: 'url("videos/Manufacture-poster-00001.jpg")',
              }}
              muted=""
              playsInline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="videos/Manufacture-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="videos/Manufacture-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div>
        </div>
        <div className="conteiner s_5">
          <div className="wrapper_s5">
            <div className="text_block_s5">
              <div className="wrapper_title_s5_table">
                <h2 className="heading-6_table">Manufacture</h2>
              </div>
              <div className="wrapper_text_s5_table">
                <p className="paragraph-2_table">
                  We manufacture bathroom pods in their factory for large scale
                  developments. Traditionally, on large developments, everything
                  is built on site. Moon manufactures bathrooms off site that
                  are then taken to the development so that they can just slot
                  in to the infrastructure that has been built. This increases
                  efficiency and cuts costs amongst many other benefits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-scroll="mid"
        data-w-id="2732c011-bbe0-f78e-0109-6e24481031cf"
        className="section_6"
      >
        <div className="conteiner s6_mobile">
          <div className="wrapper_s6">
            <div
              data-w-id="3bd56e8e-91fd-a729-abd3-bcf95660f48a"
              className="grp"
            >
              <div
                data-w-id="6a4fdb84-b52e-2ceb-ff95-f77d22a3fcd1"
                className="bg_grp"
              >
                <div className="text_block_s6_grp">
                  <div
                    style={{ display: "none", opacity: 0 }}
                    className="block_calculate"
                  >
                    <p className="paragraph-7">
                      Unique Composite bathroom pod that provides a single
                      one-piece structure
                    </p>
                    <a
                      data-w-id="8ddc2016-df27-e231-e298-6ef26c0febc6"
                      href="#"
                      className="button-2 w-button"
                    >
                      Calculate the Price
                    </a>
                  </div>
                  <h3
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="heading_grp"
                  >
                    GRP Bathroom
                    <br />
                    Pods
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-w-id="61d22d47-b5ee-796f-dcce-265965983e73"
              className="grp_1280"
            >
              <div
                data-w-id="526e5b09-0d8d-da12-6c2e-ad02305fdc3a"
                className="bg_grp"
              >
                <div className="text_block_s6">
                  <h3
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="heading_grp"
                  >
                    GRP Bathroom <br />
                    Pods
                  </h3>
                  <div
                    style={{ display: "none", opacity: 0 }}
                    className="block_calculate"
                  >
                    <p className="paragraph-7">
                      Unique Composite bathroom pod that provides a single
                      one-piece structure
                    </p>
                    <a
                      data-w-id="61d22d47-b5ee-796f-dcce-265965983e7c"
                      href="#"
                      className="button-2 w-button"
                    >
                      Calculate the Price
                    </a>
                  </div>
                </div>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="29177b25-9696-2ba6-0c13-05e667569b08"
              className="grp_mobile"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="29177b25-9696-2ba6-0c13-05e667569b0a"
                  className="heading_grp"
                >
                  GRP Bathroom Pods
                </h3>
                <div
                  data-w-id="29177b25-9696-2ba6-0c13-05e667569b0c"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Unique Composite bathroom pod that provides a single
                    one-piece structure
                  </p>
                  <a
                    data-w-id="29177b25-9696-2ba6-0c13-05e667569b0f"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="14c24410-6408-8b68-b3c8-17f5bacaff95"
              className="grp_table"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="14c24410-6408-8b68-b3c8-17f5bacaff97"
                  className="heading_grp"
                >
                  GRP Bathroom Pods
                </h3>
                <div
                  data-w-id="14c24410-6408-8b68-b3c8-17f5bacaff99"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Unique Composite bathroom pod that provides a single
                    one-piece structure
                  </p>
                  <a
                    data-w-id="14c24410-6408-8b68-b3c8-17f5bacaff9c"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="ef32a6eb-c550-da10-6b0f-a886cac83465"
              className="steel_s6 steel_s6_"
            >
              <div
                data-w-id="f11a39d4-4a86-65d4-cb1e-19c4da1290f8"
                className="bg_steel"
              >
                <div className="text_block_s6_steel">
                  <h3
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="heading_steel"
                  >
                    Steel Bathroom <br />
                    Pods
                  </h3>
                  <div
                    style={{ display: "none", opacity: 0 }}
                    className="block_calculate"
                  >
                    <p className="paragraph-7">
                      Steel bathroom pods - a uniqueway to achieve build quality
                      and freedom of design
                    </p>
                    <a
                      data-w-id="7930a351-6ce4-df0f-003e-2e78343e50ed"
                      href="#"
                      className="button-2 w-button"
                    >
                      Calculate the Price
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="b301e56e-5946-9f2b-fa5d-7306465f3d5d"
              className="steel_s6_1280 steel_s6_"
            >
              <div
                data-w-id="5a853a26-0ac5-1ec0-bca2-39bf0a2f5602"
                className="bg_steel"
              >
                <div className="text_block_s6">
                  <h3
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="heading_steel"
                  >
                    Steel Bathroom
                    <br /> Pods
                  </h3>
                  <div
                    style={{ display: "none", opacity: 0 }}
                    className="block_calculate"
                  >
                    <p className="paragraph-7">
                      Steel bathroom pods - a uniqueway to achieve build quality
                      and freedom of design
                    </p>
                    <a
                      data-w-id="b301e56e-5946-9f2b-fa5d-7306465f3d66"
                      href="#"
                      className="button-2 w-button"
                    >
                      Calculate the Price
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="2ced46c8-1ffb-ca03-c9ca-6f65cae6914b"
              className="steel_s6_mobile steel_s6_"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="2ced46c8-1ffb-ca03-c9ca-6f65cae6914d"
                  className="heading_steel"
                >
                  Steel Bathroom Pods
                </h3>
                <div
                  data-w-id="2ced46c8-1ffb-ca03-c9ca-6f65cae6914f"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Steel bathroom pods - a uniqueway to achieve build quality
                    and freedom of design
                  </p>
                  <a
                    data-w-id="2ced46c8-1ffb-ca03-c9ca-6f65cae69152"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="8e82ac90-3a97-d2bd-5d83-9dfc9c7b23af"
              className="steel_s6_table steel_s6_"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="8e82ac90-3a97-d2bd-5d83-9dfc9c7b23b1"
                  className="heading_steel"
                >
                  Steel Bathroom Pods
                </h3>
                <div
                  data-w-id="8e82ac90-3a97-d2bd-5d83-9dfc9c7b23b3"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Steel bathroom pods - a uniqueway to achieve build quality
                    and freedom of design
                  </p>
                  <a
                    data-w-id="8e82ac90-3a97-d2bd-5d83-9dfc9c7b23b6"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="04cd341a-0ac6-ec3d-1d90-1601be956e89"
              className="bespoke_s6 last_image_s6"
            >
              <div
                data-w-id="2068bbbd-51c3-b239-99d3-a122d8af4280"
                className="bg_bespoke"
              >
                <div className="text_block_s6_bespoke">
                  <h3
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="heading_bespoke"
                  >
                    Bespoke Bathroom
                    <br />
                    Pods
                  </h3>
                  <div
                    style={{ display: "none", opacity: 0 }}
                    className="block_calculate"
                  >
                    <p className="paragraph-7">
                      Get in touch with our expert team to start the creation of
                      your bespoke bathroom pod
                    </p>
                    <a
                      data-w-id="4e515abe-2216-937a-e101-41966db8719a"
                      href="#"
                      className="button-2 w-button"
                    >
                      Calculate the Price
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="0f53e191-7a99-91e9-89f5-cc50a0588d78"
              className="bespoke_s6_1280 last_image_s6"
            >
              <div
                data-w-id="84297c01-f979-8094-d99e-1175c1a9d2b5"
                className="bg_bespoke"
              >
                <div className="text_block_s6">
                  <h3
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="heading_bespoke"
                  >
                    Bespoke Bathroom Pods
                  </h3>
                  <div
                    style={{ display: "none", opacity: 0 }}
                    className="block_calculate"
                  >
                    <p className="paragraph-7">
                      Get in touch with our expert team to start the creation of
                      your bespoke bathroom pod
                    </p>
                    <a
                      data-w-id="0f53e191-7a99-91e9-89f5-cc50a0588d7f"
                      href="#"
                      className="button-2 w-button"
                    >
                      Calculate the Price
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="8de56f3e-261b-293d-ce00-489d59e054b9"
              className="bespoke_s6_mobile last_image_s6"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="8de56f3e-261b-293d-ce00-489d59e054bb"
                  className="heading_bespoke"
                >
                  Bespoke Bathroom Pods
                </h3>
                <div
                  data-w-id="8de56f3e-261b-293d-ce00-489d59e054bd"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Get in touch with our expert team to start the creation of
                    your bespoke bathroom pod
                  </p>
                  <a
                    data-w-id="8de56f3e-261b-293d-ce00-489d59e054c0"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="bbef5148-d9cc-3240-d63a-d359ed4a4be3"
              className="bespoke_s6_table last_image_s6"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="bbef5148-d9cc-3240-d63a-d359ed4a4be5"
                  className="heading_bespoke"
                >
                  Bespoke Bathroom Pods
                </h3>
                <div
                  data-w-id="bbef5148-d9cc-3240-d63a-d359ed4a4be7"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Get in touch with our expert team to start the creation of
                    your bespoke bathroom pod
                  </p>
                  <a
                    data-w-id="bbef5148-d9cc-3240-d63a-d359ed4a4bea"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll="mid" className="section_6_table">
        <div className="conteiner s6_mobile">
          <div className="wrapper_s6">
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f205e"
              className="grp"
            >
              <div className="text_block_s6_grp">
                <div
                  style={{ display: "none", opacity: 0 }}
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Unique Composite bathroom pod that provides a single
                    one-piece structure
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2063"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
                <h3
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading_grp"
                >
                  GRP Bathroom
                  <br />
                  Pods
                </h3>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f206a"
              className="grp_1280"
            >
              <div className="text_block_s6">
                <h3
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading_grp"
                >
                  GRP Bathroom <br />
                  Pods
                </h3>
                <div
                  style={{ display: "none", opacity: 0 }}
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Unique Composite bathroom pod that provides a single
                    one-piece structure
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2073"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2076"
              className="grp_mobile"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2078"
                  className="heading_grp"
                >
                  GRP Bathroom Pods
                </h3>
                <div
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f207a"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Unique Composite bathroom pod that provides a single
                    one-piece structure
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f207d"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2080"
              className="grp_table"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2082"
                  className="heading_grp"
                >
                  GRP Bathroom Pods
                </h3>
                <div
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2084"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Unique Composite bathroom pod that provides a single
                    one-piece structure
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2087"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
              <div className="image_s6" />
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f208a"
              className="steel_s6 steel_s6_"
            >
              <div className="text_block_s6_steel">
                <h3
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading_steel"
                >
                  Steel Bathroom <br />
                  Pods
                </h3>
                <div
                  style={{ display: "none", opacity: 0 }}
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Steel bathroom pods - a uniqueway to achieve build quality
                    and freedom of design
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2093"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f2095"
              className="steel_s6_1280 steel_s6_"
            >
              <div className="text_block_s6">
                <h3
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading_steel"
                >
                  Steel Bathroom
                  <br /> Pods
                </h3>
                <div
                  style={{ display: "none", opacity: 0 }}
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Steel bathroom pods - a uniqueway to achieve build quality
                    and freedom of design
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f209e"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20a0"
              className="steel_s6_mobile steel_s6_"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20a2"
                  className="heading_steel"
                >
                  Steel Bathroom Pods
                </h3>
                <div
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20a4"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Steel bathroom pods - a uniqueway to achieve build quality
                    and freedom of design
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20a7"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20a9"
              className="steel_s6_table steel_s6_"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20ab"
                  className="heading_steel"
                >
                  Steel Bathroom Pods
                </h3>
                <div
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20ad"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Steel bathroom pods - a uniqueway to achieve build quality
                    and freedom of design
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20b0"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20b2"
              className="bespoke_s6 last_image_s6"
            >
              <div className="text_block_s6_bespoke">
                <h3
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading_bespoke"
                >
                  Bespoke Bathroom
                  <br />
                  Pods
                </h3>
                <div
                  style={{ display: "none", opacity: 0 }}
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Get in touch with our expert team to start the creation of
                    your bespoke bathroom pod
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20bb"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20bd"
              className="bespoke_s6_1280 last_image_s6"
            >
              <div className="text_block_s6">
                <h3
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading_bespoke"
                >
                  Bespoke Bathroom Pods
                </h3>
                <div
                  style={{ display: "none", opacity: 0 }}
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Get in touch with our expert team to start the creation of
                    your bespoke bathroom pod
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20c4"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20c6"
              className="bespoke_s6_mobile last_image_s6"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20c8"
                  className="heading_bespoke"
                >
                  Bespoke Bathroom Pods
                </h3>
                <div
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20ca"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Get in touch with our expert team to start the creation of
                    your bespoke bathroom pod
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20cd"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20cf"
              className="bespoke_s6_table last_image_s6"
            >
              <div className="text_block_s6">
                <h3
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20d1"
                  className="heading_bespoke"
                >
                  Bespoke Bathroom Pods
                </h3>
                <div
                  data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20d3"
                  className="block_calculate"
                >
                  <p className="paragraph-7">
                    Get in touch with our expert team to start the creation of
                    your bespoke bathroom pod
                  </p>
                  <a
                    data-w-id="7a1d6230-d698-5a81-e0fa-6318c08f20d6"
                    href="#"
                    className="button-2 w-button"
                  >
                    Calculate the Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="overview"
        data-w-id="3c38fb6d-cefa-7e9d-4804-6cb1577de2ac"
        className="section_7"
      >
        <div className="conteiner s7">
          <div className="center_s7">
            <div className="wrapper_bathroom">
              <div className="image_bathroom">
                <div className="img_overview">
                  <img
                    src={img_badroom}
                    loading="lazy"
                    height=""
                    data-w-id="7fa791c6-c759-3264-5d81-08460aa20b82"
                    sizes="(max-width: 991px) 100vw, (max-width: 1279px) 56vw, (max-width: 1439px) 695.96875px, (max-width: 1919px) 848.953125px, 836.359375px"
                    alt=""
                    className="bathroom_image_bg"
                  />
                </div>
                <div
                  data-w-id="4db668c2-0e09-0750-49d0-1e8f7645369e"
                  className="number_1"
                >
                  <div className="num_1">1</div>
                  <div style={{ display: "none" }} className="bg_number" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number"
                  >
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="46c149ca-c213-fde3-6cec-e7085137caf4"
                  className="number_2"
                >
                  <div className="num_2">2</div>
                  <div style={{ display: "none" }} className="bg_number_2" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="b32d577e-f5f9-a5fd-2755-0300cc0a2e76"
                  className="number_3"
                >
                  <div className="num_3">3</div>
                  <div style={{ display: "none" }} className="bg_number_3" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="2827f18d-6318-6bb4-33cb-7589a580ba96"
                  className="number_4"
                >
                  <div className="num_4">4</div>
                  <div style={{ display: "none" }} className="bg_number_4" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="f8068e81-9789-b3e9-98c1-ec52230ceb54"
                  className="number_5"
                >
                  <div className="num_5">5</div>
                  <div style={{ display: "none" }} className="bg_number_5" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="2c317629-c6ee-061a-9c10-d6677acf7588"
                  className="number_6"
                >
                  <div className="num_6">6</div>
                  <div style={{ display: "none" }} className="bg_number_6" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="3d3550f5-80a9-4b39-31e2-532526bdc0bd"
                  className="number_7"
                >
                  <div className="num_7">7</div>
                  <div style={{ display: "none" }} className="bg_number_7" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="3726bf1c-fda7-00a2-7b9a-1d6bb52db146"
                  className="number_8"
                >
                  <div className="num_8">8</div>
                  <div style={{ display: "none" }} className="bg_number_8" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="c10e3d82-83a5-865f-5a1a-7bf1440228c6"
                  className="number_9"
                >
                  <div className="num_9">9</div>
                  <div style={{ display: "none" }} className="bg_number_9" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="50045037-ff5f-16c6-9ef5-47082fdc5221"
                  className="number_10"
                >
                  <div className="num_10">10</div>
                  <div style={{ display: "none" }} className="bg_number_10" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
              <div className="image_bathroom_mobile">
                <div className="div-block-34">
                  <img
                    src={img_badroom}
                    loading="lazy"
                    height=""
                    data-w-id="6ec55e39-bb12-4798-18b7-9e0873bd8e34"
                    sizes="100vw"
                    alt=""
                    className="bathroom_image_bg"
                  />
                </div>
                <div className="number_1_mobile">
                  <div className="num_1">1</div>
                  <div style={{ display: "none" }} className="bg_number" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number"
                  >
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div className="number_2_mobile">
                  <div className="num_2">2</div>
                  <div style={{ display: "none" }} className="bg_number_2" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div className="number_3_mobile">
                  <div className="num_3">3</div>
                  <div style={{ display: "none" }} className="bg_number_3" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div className="number_4_mobile">
                  <div className="num_4">4</div>
                  <div style={{ display: "none" }} className="bg_number_4" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div className="number_5_mobile">
                  <div className="num_5">5</div>
                  <div style={{ display: "none" }} className="bg_number_5" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div className="number_6_mobile">
                  <div className="num_6">6</div>
                  <div style={{ display: "none" }} className="bg_number_6" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div className="number_7_mobile">
                  <div className="num_7">7</div>
                  <div style={{ display: "none" }} className="bg_number_7" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div className="number_8_mobile">
                  <div className="num_8">8</div>
                  <div style={{ display: "none" }} className="bg_number_8" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div className="number_9_mobile">
                  <div className="num_9">9</div>
                  <div style={{ display: "none" }} className="bg_number_9" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div className="number_10_mobile">
                  <div className="num_10">10</div>
                  <div style={{ display: "none" }} className="bg_number_10" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
              <div className="text_block_bathroom">
                <div className="wrapper_title_overview">
                  <h2 className="heading-8">Bathroom Pod Overview</h2>
                  <div
                    data-w-id="1321503e-43cd-94f3-660a-e4aea7baec89"
                    className="mask_animation"
                  />
                </div>
                <div className="items_bathroom_1">
                  <div className="wrapper_text_roof">
                    <div
                      data-w-id="e344de8c-6a1d-d1ba-f527-32f4dcfb48d2"
                      className="text-block-7"
                    >
                      <span className="text-span-4">1. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border"
                      >
                        Roof systems
                      </span>
                    </div>
                    <div
                      data-w-id="51339727-e9c7-0b1c-b026-2d3b214a4469"
                      className="mask_animation"
                    />
                  </div>
                  <div className="text_block_number_mobile">
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_2">
                  <div className="wrapper_waterpoofing">
                    <div
                      data-w-id="b6e339ce-8f10-d09d-2d4e-5179c95a30cd"
                      className="text-block-8"
                    >
                      <span className="text-span-5">2. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_2"
                      >
                        Waterproofing
                      </span>
                    </div>
                    <div
                      data-w-id="0e87bec2-9360-a797-e4d6-a166bad350cd"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_3">
                  <div className="wrapper_text_sandwich">
                    <div
                      data-w-id="f5bd2a38-d376-9ed2-bb70-eb0374237314"
                      className="text-block-9"
                    >
                      <span className="text-span-6">3.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_3"
                      >
                        {" "}
                        Sandwich panel adhesives
                      </span>
                    </div>
                    <div
                      data-w-id="477ddf2b-8f3b-e963-1344-ae21d24123dc"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_4">
                  <div className="wrapper_structural">
                    <div
                      data-w-id="527d6ec8-8688-5def-7ba3-e369cad428cc"
                      className="text-block-10"
                    >
                      <span className="text-span-7">4. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_4"
                      >
                        Structural bonding
                      </span>
                    </div>
                    <div
                      data-w-id="a1aa9b6e-8503-0860-35c4-99d0a22ed9b7"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_5">
                  <div className="wrapper_setting">
                    <div
                      data-w-id="9e0ec8fe-69fa-1e98-0012-f602a6e8509d"
                      className="text-block-11"
                    >
                      <span className="text-span-8">5. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_5"
                      >
                        Tile setting
                      </span>
                    </div>
                    <div
                      data-w-id="8f348e53-6715-8367-cf9a-8f209632a320"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_6">
                  <div className="wrapper_adhesives">
                    <div
                      data-w-id="3106a957-8efd-a12d-d502-6b0c9246b740"
                      className="text-block-12"
                    >
                      <span className="text-span-9">6.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_6"
                      >
                        {" "}
                        Adhesives
                      </span>
                    </div>
                    <div
                      data-w-id="fd08543d-ff73-2ee7-b839-c34365f6ceef"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_7">
                  <div className="wrapper_concrete">
                    <div
                      data-w-id="f0abcf62-863d-d699-4a96-a51bc532b5ce"
                      className="text-block-13"
                    >
                      <span className="text-span-10">7.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_7"
                      >
                        {" "}
                        Concrete admixtures
                      </span>
                    </div>
                    <div
                      data-w-id="35701e7d-9876-8427-338c-b4b86866b46b"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_8">
                  <div className="wrapper_wall">
                    <div
                      data-w-id="f864e37c-65a1-292c-3ede-f6ea855fe4c2"
                      className="text-block-14"
                    >
                      <span className="text-span-11">8. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_8"
                      >
                        Wall finishing
                      </span>
                    </div>
                    <div
                      data-w-id="83cccff4-3aeb-7ac7-6443-7f32ced3524c"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_9">
                  <div className="wrapper_passive">
                    <div
                      data-w-id="19a6fa9e-561b-ddab-35fb-323b5c89d1cd"
                      className="text-block-15"
                    >
                      <span className="text-span-12">9. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_9"
                      >
                        Passive fire protection
                      </span>
                    </div>
                    <div
                      data-w-id="f3166278-546d-c244-d3ce-229945ef5f18"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_10 last_item">
                  <div className="wrapper_sealnts">
                    <div
                      data-w-id="6abec2ca-af67-93ea-5d79-fb9dcb9e811b"
                      className="text-block-16"
                    >
                      <span className="text-span-13">10. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_10"
                      >
                        Sealants and adhesives
                      </span>
                    </div>
                    <div
                      data-w-id="eb062cef-2fc3-6289-48d0-a0bee5fcdc60"
                      className="mask_animation"
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
              <div className="text_block_bathroom_mobile">
                <h2 className="heading-8">Bathroom Pod Overview</h2>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c168"
                  className="items_bathroom_1_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_7_mobile"
                  >
                    <span className="text-span-4">1. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border"
                    >
                      Roof systems
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile"
                  >
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c173"
                  className="items_bathroom_2_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_8_mobile"
                  >
                    <span className="text-span-5">2. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_2"
                    >
                      Waterproofing
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c17e"
                  className="items_bathroom_3_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_9_mobile"
                  >
                    <span className="text-span-6">3.</span>
                    <span className="border_3">Sandwich panel adhesives</span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c189"
                  className="items_bathroom_4_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_10_mobile"
                  >
                    <span className="text-span-7">4. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_4"
                    >
                      Structural bonding
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c194"
                  className="items_bathroom_5_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_11_mobile"
                  >
                    <span className="text-span-8">5.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_5"
                    >
                      Tile setting
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c19f"
                  className="items_bathroom_6_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_12_mobile"
                  >
                    <span className="text-span-9">6.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_6"
                    >
                      Adhesives
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c1aa"
                  className="items_bathroom_7_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_13_mobile"
                  >
                    <span className="text-span-10">7.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_7"
                    >
                      {" "}
                      Concrete admixtures
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c1b5"
                  className="items_bathroom_8_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_14_mobile"
                  >
                    <span className="text-span-11">8.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_8"
                    >
                      Wall finishing
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c1c0"
                  className="items_bathroom_9_mobile"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_15_mobile"
                  >
                    <span className="text-span-12">9.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_9"
                    >
                      Passive fire protection
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="e1a58cc5-c127-60ca-8b2b-a4ae1a59c1cb"
                  className="items_bathroom_10_mobile last_item"
                >
                  <div
                    style={{ display: "block" }}
                    className="text-block_16_mobile"
                  >
                    <span className="text-span-13">10.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_10"
                    >
                      Sealants and adhesives
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="overview_table"
        data-w-id="92737810-3030-1e41-d663-8175a3111f0a"
        className="section_7_table"
      >
        <div className="conteiner s7_table">
          <div className="center_s7">
            <div className="wrapper_title_s7_table">
              <h2 className="heading-8_table">Bathroom Pod Overview</h2>
              <div className="mask_animation_title_s7_table" />
            </div>
            <div className="wrapper_bathroom">
              <div className="image_bathroom">
                <div className="img_overview">
                  <img
                    src={img_badroom}
                    loading="lazy"
                    height=""
                    sizes="100vw"
                    alt=""
                    className="bathroom_image_bg_table"
                  />
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f11"
                  className="number_1"
                >
                  <div className="num_1">1</div>
                  <div style={{ display: "none" }} className="bg_number" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number"
                  >
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f1a"
                  className="number_2"
                >
                  <div className="num_2">2</div>
                  <div style={{ display: "none" }} className="bg_number_2" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f23"
                  className="number_3"
                >
                  <div className="num_3">3</div>
                  <div style={{ display: "none" }} className="bg_number_3" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f2c"
                  className="number_4"
                >
                  <div className="num_4">4</div>
                  <div style={{ display: "none" }} className="bg_number_4" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f35"
                  className="number_5"
                >
                  <div className="num_5">5</div>
                  <div style={{ display: "none" }} className="bg_number_5" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f3e"
                  className="number_6"
                >
                  <div className="num_6">6</div>
                  <div style={{ display: "none" }} className="bg_number_6" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f47"
                  className="number_7"
                >
                  <div className="num_7">7</div>
                  <div style={{ display: "none" }} className="bg_number_7" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f50"
                  className="number_8"
                >
                  <div className="num_8">8</div>
                  <div style={{ display: "none" }} className="bg_number_8" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f59"
                  className="number_9"
                >
                  <div className="num_9">9</div>
                  <div style={{ display: "none" }} className="bg_number_9" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3111f62"
                  className="number_10"
                >
                  <div className="num_10">10</div>
                  <div style={{ display: "none" }} className="bg_number_10" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
              <div className="image_bathroom_mobile">
                <div className="div-block-34">
                  <img
                    src={img_badroom}
                    loading="lazy"
                    height=""
                    data-w-id="92737810-3030-1e41-d663-8175a3111f6d"
                    alt=""
                    className="bathroom_image_bg"
                  />
                </div>
                <div className="number_1_mobile">
                  <div className="num_1">1</div>
                  <div style={{ display: "none" }} className="bg_number" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number"
                  >
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div className="number_2_mobile">
                  <div className="num_2">2</div>
                  <div style={{ display: "none" }} className="bg_number_2" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div className="number_3_mobile">
                  <div className="num_3">3</div>
                  <div style={{ display: "none" }} className="bg_number_3" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div className="number_4_mobile">
                  <div className="num_4">4</div>
                  <div style={{ display: "none" }} className="bg_number_4" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div className="number_5_mobile">
                  <div className="num_5">5</div>
                  <div style={{ display: "none" }} className="bg_number_5" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div className="number_6_mobile">
                  <div className="num_6">6</div>
                  <div style={{ display: "none" }} className="bg_number_6" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div className="number_7_mobile">
                  <div className="num_7">7</div>
                  <div style={{ display: "none" }} className="bg_number_7" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div className="number_8_mobile">
                  <div className="num_8">8</div>
                  <div style={{ display: "none" }} className="bg_number_8" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div className="number_9_mobile">
                  <div className="num_9">9</div>
                  <div style={{ display: "none" }} className="bg_number_9" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div className="number_10_mobile">
                  <div className="num_10">10</div>
                  <div style={{ display: "none" }} className="bg_number_10" />
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
              <div className="text_block_bathroom">
                <h2 className="heading-8_table_2">Bathroom Pod Overview</h2>
                <div className="items_bathroom_1">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3111fcc"
                    className="text-block-7_table"
                  >
                    <span className="text-span-4">1. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border"
                    >
                      Roof systems
                    </span>
                  </div>
                  <div className="text_block_number_mobile">
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_2">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3111fd7"
                    className="text-block-8_table"
                  >
                    <span className="text-span-5">2. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_2"
                    >
                      Waterproofing
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_3">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3111fe2"
                    className="text-block-9_table"
                  >
                    <span className="text-span-6">3.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_3"
                    >
                      {" "}
                      Sandwich panel adhesives
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_4">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3111fed"
                    className="text-block-10_table"
                  >
                    <span className="text-span-7">4. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_4"
                    >
                      Structural bonding
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_5">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3111ff8"
                    className="text-block-11_table"
                  >
                    <span className="text-span-8">5. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_5"
                    >
                      Tile setting
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_6">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3112003"
                    className="text-block-12_table"
                  >
                    <span className="text-span-9">6.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_6"
                    >
                      {" "}
                      Adhesives
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_7">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a311200e"
                    className="text-block-13_table"
                  >
                    <span className="text-span-10">7.</span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_7"
                    >
                      {" "}
                      Concrete admixtures
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_8">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3112019"
                    className="text-block-14_table"
                  >
                    <span className="text-span-11">8. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_8"
                    >
                      Wall finishing
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_9">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a3112024"
                    className="text-block-15_table"
                  >
                    <span className="text-span-12">9. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_9"
                    >
                      Passive fire protection
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div className="items_bathroom_10 last_item">
                  <div
                    data-w-id="92737810-3030-1e41-d663-8175a311202f"
                    className="text-block-16_table"
                  >
                    <span className="text-span-13">10. </span>
                    <span
                      style={{ borderColor: "rgba(0,0,0,0)" }}
                      className="border_10"
                    >
                      Sealants and adhesives
                    </span>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
              <div className="text_block_bathroom_mobile">
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a311203c"
                  className="items_bathroom_1_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_7_mobile"
                    >
                      <span className="text-span-4">1. </span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border"
                      >
                        Roof systems
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile"
                  >
                    <h2 className="heading-12">1. Roof system</h2>
                    <p className="paragraph-6">
                      Roof system buildups including membranes, insulation,
                      vapor barriersand liquid-applied solutions
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3112047"
                  className="items_bathroom_2_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_8_mobile"
                    >
                      <span className="text-span-5">2.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_2"
                      >
                        Waterproofing
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_2"
                  >
                    <h2 className="heading-12">2. Waterproofing</h2>
                    <p className="paragraph-6">
                      Waterproofing systems, including grouts, tapes and more
                      for wet rooms, showers and bathroom pods
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3112052"
                  className="items_bathroom_3_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_9_mobile"
                    >
                      <span className="text-span-6">3.</span>
                      <span className="border_3">Sandwich panel adhesives</span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_3"
                  >
                    <h2 className="heading-12">3. Sandwich panel adhesives</h2>
                    <p className="paragraph-6">
                      Sandwich panel adhesives and bonding for walls and
                      ceilings
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a311205d"
                  className="items_bathroom_4_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_10_mobile"
                    >
                      <span className="text-span-7">4.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_4"
                      >
                        Structural bonding
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_4"
                  >
                    <h2 className="heading-12">4. Structural bonding</h2>
                    <p className="paragraph-6">
                      Structural bonding for steel frames
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3112068"
                  className="items_bathroom_5_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_11_mobile"
                    >
                      <span className="text-span-8">5.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_5"
                      >
                        Tile setting
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_5"
                  >
                    <h2 className="heading-12">5. Tile setting</h2>
                    <p className="paragraph-6">
                      Floor tiling adhesives, grouts, sealants and waterproofing
                      systems
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3112073"
                  className="items_bathroom_6_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_12_mobile"
                    >
                      <span className="text-span-9">6.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_6"
                      >
                        Adhesives
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_6"
                  >
                    <h2 className="heading-12">6. Adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives for wall to floor bonding and sandwich panel
                      bonding
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a311207e"
                  className="items_bathroom_7_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_13_mobile"
                    >
                      <span className="text-span-10">7.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_7"
                      >
                        Concrete admixtures
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_7"
                  >
                    <h2 className="heading-12">7. Concrete admixtures</h2>
                    <p className="paragraph-6">
                      Concrete admixtures for prefabricated, precast concrete
                      components or cast-in-place concrete
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3112089"
                  className="items_bathroom_8_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_14_mobile"
                    >
                      <span className="text-span-11">8.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_8"
                      >
                        Wall finishing
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_8"
                  >
                    <h2 className="heading-12">8. Wall finishing</h2>
                    <p className="paragraph-6">
                      Interior wall leveling, plastering and paints for smooth
                      finished walls
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a3112094"
                  className="items_bathroom_9_mobile"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_15_mobile"
                    >
                      <span className="text-span-12">9.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_9"
                      >
                        Passive fire protection
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_9"
                  >
                    <h2 className="heading-12">9. Passive fire protection</h2>
                    <p className="paragraph-6">
                      Firestop systems for passive fire protection
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="92737810-3030-1e41-d663-8175a311209f"
                  className="items_bathroom_10_mobile last_item"
                >
                  <div className="wrapper_text_s7_table">
                    <div
                      style={{ display: "block" }}
                      className="text-block_16_mobile"
                    >
                      <span className="text-span-13">10.</span>
                      <span
                        style={{ borderColor: "rgba(0,0,0,0)" }}
                        className="border_10"
                      >
                        Sealants and adhesives
                      </span>
                    </div>
                    <div className="mask_animation_text_s7_table" />
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="text_block_number_mobile_10"
                  >
                    <h2 className="heading-12">10. Sealants and adhesives</h2>
                    <p className="paragraph-6">
                      Adhesives and sealants at bathtub, sink and other joints
                      and fittings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="e2cb8de1-0f3d-a562-9afe-2b77a15aba1e"
        className="section_8"
      >
        <div
          data-w-id="7570534a-8303-2d4c-864f-e6b2f5633f95"
          className="bg_image_s8"
        >
          <div className="bg_color_img" />
          <img
            src="images/image_s8.png"
            loading="lazy"
            height={611}
            width={375}
            srcSet="images/image_s8-p-500.png 500w, images/image_s8-p-800.png 800w, images/image_s8-p-1080.png 1080w, images/image_s8-p-1600.png 1600w, images/image_s8.png 2880w"
            sizes="100vw"
            alt=""
            className="image_request_table"
          />
          <img
            src="images/image_s8.png"
            loading="lazy"
            height={900}
            sizes="100vw"
            srcSet="images/image_s8-p-500.png 500w, images/image_s8-p-800.png 800w, images/image_s8-p-1080.png 1080w, images/image_s8-p-1600.png 1600w, images/image_s8.png 2880w"
            alt=""
            className="image-11"
          />
        </div>
        <div className="conteiner s8">
          <div className="wrapper_s8">
            <div className="tex_blck_s8">
              <div className="wrapper_title_s8">
                <div
                  data-w-id="ebf36fd2-c39e-4365-dd27-841b509b5f6c"
                  className="mask_animation_title_s8"
                >
                  <h2 className="heading-9">
                    Do you want to discuss a project?
                  </h2>
                </div>
              </div>
              <div className="wrapper_button_s8">
                <div
                  data-w-id="51ccbcf0-8da1-7565-2cd3-94b5fc5eeb05"
                  className="mask_animation_text_s8"
                >
                  <a
                    data-w-id="efada922-ad8c-7ce4-c38d-c764d177a03d"
                    href="#"
                    className="button w-button"
                  >
                    Request a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="08732608-7934-ddd5-58cf-de9dcb7a6634"
        className="section_8_table"
      >
        <div
          data-w-id="08732608-7934-ddd5-58cf-de9dcb7a6635"
          className="bg_image_s8"
        >
          <div className="bg_color_img" />
          <img
            src="images/image_s8.png"
            loading="lazy"
            height={611}
            width={375}
            srcSet="images/image_s8-p-500.png 500w, images/image_s8-p-800.png 800w, images/image_s8-p-1080.png 1080w, images/image_s8-p-1600.png 1600w, images/image_s8.png 2880w"
            sizes="100vw"
            alt=""
            className="image_request_table"
          />
          <img
            src="images/image_s8.png"
            loading="lazy"
            height={900}
            sizes="100vw"
            srcSet="images/image_s8-p-500.png 500w, images/image_s8-p-800.png 800w, images/image_s8-p-1080.png 1080w, images/image_s8-p-1600.png 1600w, images/image_s8.png 2880w"
            alt=""
            className="image-11"
          />
        </div>
        <div className="conteiner s8">
          <div className="wrapper_s8">
            <div className="tex_blck_s8">
              <div className="wrapper_title_s8_table">
                <h2 className="heading-9_table">
                  Do you want to discuss a project?
                </h2>
              </div>
              <div className="wrapper_btn_s8_table">
                <a
                  data-w-id="08732608-7934-ddd5-58cf-de9dcb7a663e"
                  href="#"
                  className="button_table w-button"
                >
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        data-w-id="3dbe6607-4885-3211-59da-9c29d16bec2d"
        className="footer"
      >
        <div className="conteiner">
          <div className="wrapper_footer">
            <div className="div-block-20">
              <a href="#home" className="link-block w-inline-block">
                <img
                  src="images/footer_logo.svg"
                  loading="lazy"
                  alt=""
                  className="image_logo_footer"
                />
              </a>
              <div className="paragraph_footer">
                <p className="paragraph-3">
                  We work with developers and general contractors,
                  forward-thinking design, and offsite manufacturing principles
                </p>
              </div>
              <div className="text-block-18">
                Moon©2022. All Rights Reserved
              </div>
            </div>
            <div className="adress_block">
              <div className="adress">
                <div className="text-block_adress">
                  <span className="text-span">Adress:</span>
                  <br />
                  Ferry Rd, Cardiff CF11 0JR
                </div>
              </div>
              <div className="phone">
                <div className="text-block_phone">
                  <span className="text-span">Phone:</span>
                  <br />
                  <a href="tel:+442933747109">+44 29 3374 7109</a>
                </div>
              </div>
              <div className="email">
                <div className="text-block_email last_text_block_adress">
                  <span className="text-span">Email:</span>
                  <br />
                  <a href="mailto:hello@moonbp.eu">hello@moonbp.eu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        data-w-id="2c9322b9-ca14-ce28-ed1f-7e38214e24d7"
        className="footer_table"
      >
        <div className="conteiner_footer">
          <div className="wrapper_footer">
            <div className="div-block-20">
              <a href="#home" className="link-block w-inline-block">
                <img
                  src="images/footer_logo.svg"
                  loading="lazy"
                  alt=""
                  className="image-9_table"
                />
              </a>
              <div className="paragraph_footer">
                <p className="paragraph-3_table">
                  {" "}
                  We work with developers and general contractors,
                  forward-thinking design, and offsite manufacturing principles
                </p>
              </div>
              <div className="text-block-18_table">
                Moon©2022. All Rights Reserved
              </div>
            </div>
            <div className="adress_block">
              <div className="adress">
                <div className="text-block_adress_table">
                  <span className="text-span">Adress:</span>
                  <br />
                  Ferry Rd, Cardiff CF11 0JR
                </div>
              </div>
              <div className="phone">
                <div className="text-block_phone_table">
                  <span className="text-span">Phone:</span>
                  <br />
                  <a href="tel:+442933747109">+44 29 3374 7109</a>
                </div>
              </div>
              <div className="email">
                <div className="text-block_email_table last_text_block_adress">
                  <span className="text-span">Email:</span>
                  <br />
                  <a href="mailto:hello@moonbp.eu">hello@moonbp.eu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div style={{ display: "none" }} className="wrapper_form">
        <div className="form-block-copy w-form">
          <div
            data-w-id="25b022f7-8cef-8a03-2c78-c9f3a6a49f62"
            className="close_form_mobile"
          >
            <img
              src="images/x_mobile.svg"
              loading="lazy"
              alt=""
              className="image-16"
            />
          </div>
          <div
            data-w-id="7d7d31ea-7087-8214-e866-c9793a188a9a"
            className="close_form"
          >
            <img
              src="images/.svg"
              loading="lazy"
              alt=""
              className="img_close"
            />
          </div>
          <h1 className="heading-10">
            Leave your contacts and we will contact you to discuss the details
          </h1>
          <form
            id="form"
            name="email-form"
            data-name="Email Form"
            method="post"
            className="form_normal"
            data-wf-page-id="62ed12430db7167edf23c331"
            data-wf-element-id="304f603f-1b33-d99b-49d6-331b1b7d6fac"
          >
            <input
              type="text"
              className="text-field w-input"
              maxLength={256}
              name="name"
              data-name="Name"
              placeholder="Name"
              id="name"
            />
            <input
              type="email"
              className="text-field-2 w-input"
              maxLength={256}
              name="email"
              data-name="Email"
              placeholder="Email"
              id="email"
              required=""
            />
            <input
              type="submit"
              defaultValue="Request a quote"
              data-wait="Please wait..."
              id="btn_open_form"
              className="submit-button w-button"
            />
          </form>
          <div id="success_form" className="success-message w-form-done">
            <div className="text-block-22">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div className="w-form-fail" />
        </div>
      </div>
      <div className="modol_window">
        <div
          data-w-id="7f6dfa69-4546-0f4b-b4a0-f68d9639153c"
          className="close_modol"
        >
          <img src="images/.svg" loading="lazy" alt="" />
        </div>
        <div className="conteiner modol">
          <div className="block_bg_modol">
            <div className="wrapper_modol_window_cardiff">
              <div className="image_cardiff">
                <div className="wrapeer_image_cardiff">
                  <a
                    href="#"
                    className="lightbox-link-2 w-inline-block w-lightbox"
                  >
                    <div className="div-block-26">
                      <img
                        src="images/image_1_842px_s3.png"
                        loading="lazy"
                        srcSet="images/image_1_842px_s3-p-500.png 500w, images/image_1_842px_s3-p-800.png 800w, images/image_1_842px_s3-p-1080.png 1080w, images/image_1_842px_s3.png 1684w"
                        sizes="100vw"
                        alt=""
                        className="image_cardiff_1"
                      />
                      <img
                        src="images/cardiff_4.png"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="images/cardiff_4-p-500.png 500w, images/cardiff_4.png 1000w"
                        alt=""
                        className="image_cardiff_2"
                      />
                      <img
                        src="images/cardiff_10.png"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="images/cardiff_10-p-500.png 500w, images/cardiff_10-p-800.png 800w, images/cardiff_10-p-1080.png 1080w, images/cardiff_10.png 1685w"
                        alt=""
                        className="image_cardiff_3"
                      />
                      <img
                        src="images/cardiff_11.png"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="images/cardiff_11-p-500.png 500w, images/cardiff_11-p-800.png 800w, images/cardiff_11-p-1080.png 1080w, images/cardiff_11.png 1500w"
                        alt=""
                        className="image_cardiff_4"
                      />
                      <img
                        src="images/cardiff_8.png"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="images/cardiff_8-p-500.png 500w, images/cardiff_8.png 800w"
                        alt=""
                        className="image_cardiff_5"
                      />
                      <img
                        src="images/cardiff_9.png"
                        loading="lazy"
                        alt=""
                        className="image_cardiff_6"
                      />
                    </div>
                  </a>
                </div>
                <div className="wrapeer_image cardiff">
                  <div className="div-block-41">
                    <div
                      data-w-id="cc3cd69f-7469-00d3-c4ce-9e60d8ca7636"
                      className="img_cardiff_1"
                    >
                      <a href="#" className="w-inline-block w-lightbox">
                        <img
                          className="image_162_cardiff"
                          src="images/image_1_842px_s3.png"
                          width={162}
                          height={116}
                          alt=""
                          sizes="100vw"
                          data-w-id="e229e930-3121-5ce7-e036-d914ec5c0846"
                          loading="lazy"
                          srcSet="images/image_1_842px_s3-p-500.png 500w, images/image_1_842px_s3-p-800.png 800w, images/image_1_842px_s3-p-1080.png 1080w, images/image_1_842px_s3.png 1684w"
                        />
                      </a>
                    </div>
                    <div
                      data-w-id="d70c6e16-482b-721d-608d-4fc50ae38a33"
                      className="img_cardiff_2"
                    >
                      <a href="#" className="w-inline-block w-lightbox">
                        <img
                          src="images/cardiff_2.png"
                          loading="lazy"
                          height={116}
                          width={162}
                          alt=""
                          className="image_cardiff_2_162"
                        />
                      </a>
                    </div>
                    <div
                      data-w-id="29229d37-8158-2895-17ba-b057ba5ce450"
                      className="img_cardiff_3"
                    >
                      <img
                        src="images/cardiff_3.png"
                        loading="lazy"
                        height={116}
                        alt=""
                        className="image_cardiff_3_162"
                      />
                    </div>
                    <div
                      data-w-id="d8d0c320-48ca-82df-bbaa-35e1b9b3fda9"
                      className="img_cardiff_4"
                    >
                      <img
                        src="images/cardiff_5.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        alt=""
                        className="image_cardiff_4_162"
                      />
                    </div>
                    <div
                      data-w-id="e201d13f-21c2-0c61-772d-be3c3d740bd9"
                      className="img_cardiff_5"
                    >
                      <img
                        src="images/cardiff_6.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        alt=""
                        className="image_cardiff_5_162"
                      />
                    </div>
                    <div
                      data-w-id="d0a91e61-3f74-2823-5e7a-71c9772ba3cf"
                      className="img_cardiff_6 last_image_modol"
                    >
                      <img
                        src="images/cardiff_7.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        alt=""
                        className="image_cardiff_6_162"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_text_block_modol">
                <div className="project">
                  <div className="text-block_prevuous_cardiff">
                    <span className="text-span-2">&lt;</span>Previous Project
                  </div>
                  <div
                    data-w-id="26aa1757-8a78-50db-8614-dcda826d2769"
                    className="text-block_next_cardiff"
                  >
                    Next Project <span className="text-span-3">&gt;</span>
                  </div>
                </div>
                <div className="text_block_cardiff">
                  <h1 className="heading-11">Cardiff Interchange</h1>
                  <p className="paragraph-4">
                    This project is the first contract for Moon new enhanced and
                    floorless GRP pods.
                  </p>
                  <p className="paragraph-5">
                    The bathrooms and shower rooms are being manufactured and
                    fitted out offsite and installed on each floor as the
                    building structure rises upwards. This solution reduces the
                    build programme and the number of trades required on site
                    and enhances quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="wrapper_modol_window_retirement">
              <div className="image_retirement">
                <div className="wrapper_image">
                  <div className="div-block-28">
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      width={406}
                      sizes="100vw"
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      alt=""
                      className="image_retirements_1"
                    />
                    <img
                      src="images/retiremet_2.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/retiremet_2-p-500.png 500w, images/retiremet_2-p-800.png 800w, images/retiremet_2.png 1000w"
                      alt=""
                      className="image_retirements_2"
                    />
                    <img
                      src="images/retirement_3.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/retirement_3-p-500.png 500w, images/retirement_3-p-800.png 800w, images/retirement_3.png 1000w"
                      alt=""
                      className="image_retirements_3"
                    />
                    <img
                      src="images/retirement_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/retirement_4-p-500.png 500w, images/retirement_4-p-800.png 800w, images/retirement_4.png 1000w"
                      alt=""
                      className="image_retirements_4"
                    />
                  </div>
                </div>
                <div className="wrapper_case_modol retirement">
                  <div
                    data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b08"
                    className="image_retirement_1"
                  >
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="img_retirement_1"
                    />
                  </div>
                  <div
                    data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b0a"
                    className="image_retirement_2"
                  >
                    <img
                      src="images/retirement_modol_2.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b0b"
                      alt=""
                      className="img_retirement_2"
                    />
                  </div>
                  <div
                    data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b0c"
                    className="image_retirement_3"
                  >
                    <img
                      src="images/retirement_modol_3.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      alt=""
                      className="img_retirement_3"
                    />
                  </div>
                  <div
                    data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b0e"
                    className="image_retirement_4 last_image_modol"
                  >
                    <img
                      src="images/retirement_modol_4.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      alt=""
                      className="img_retirement_4"
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper_text_block_modol">
                <div className="project">
                  <div
                    data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b12"
                    className="text-block_previous_retirement"
                  >
                    <span className="text-span-2">&lt;</span>Previous Project
                  </div>
                  <div
                    data-w-id="1587ee52-45f3-61b2-fc10-1a302f4b8b16"
                    className="text-block_next_retirement"
                  >
                    Next Project <span className="text-span-3">&gt;</span>
                  </div>
                </div>
                <div className="text_block_retirement">
                  <h1 className="heading_retirement">Retirement Apartments</h1>
                  <p className="paragraph_retirement_1">
                    Moon has manufactured 44 steel-framed bathroom pods for the
                    project - our first timber-framed residential development.
                  </p>
                  <p className="paragraph_retirement_2">
                    The bathrooms and shower rooms are being manufactured and
                    fitted out offsite and installed on each floor as the
                    building structure rises upwards. This solution reduces the
                    build programme and the number of trades required on site
                    and enhances quality.
                  </p>
                  <ul role="list" className="list">
                    <li className="list-item-2">Ceramic-tiled finishes</li>
                    <li className="list-item">
                      Walk-in rain dance showers with digitally-controlled
                      thermostats
                    </li>
                    <li className="list-item-3">
                      Premium sanitaryware and fittings
                    </li>
                    <li className="list-item-4">A mirrored cabinet</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper_modol_window_lianerch">
              <div className="image_lianerch">
                <div className="wrapper_image">
                  <div className="div-block-29">
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      width={406}
                      sizes="100vw"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      alt=""
                      className="image_lianerches_1"
                    />
                    <img
                      src="images/lianerch_2.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_2-p-500.png 500w, images/lianerch_2-p-800.png 800w, images/lianerch_2-p-1080.png 1080w, images/lianerch_2.png 1536w"
                      alt=""
                      className="image_lianerches_2"
                    />
                    <img
                      src="images/lianerch_3.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_3-p-500.png 500w, images/lianerch_3-p-800.png 800w, images/lianerch_3.png 1000w"
                      alt=""
                      className="image_lianerches_3"
                    />
                    <img
                      src="images/lianerch_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_4-p-500.png 500w, images/lianerch_4-p-800.png 800w, images/lianerch_4.png 1000w"
                      alt=""
                      className="image_lianerches_4"
                    />
                    <img
                      src="images/lianerch_5.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_5-p-500.png 500w, images/lianerch_5.png 1000w"
                      alt=""
                      className="image_lianerches_5"
                    />
                  </div>
                </div>
                <div className="wrapper_case_modol">
                  <div
                    data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b65"
                    className="img_lianerch_1"
                  >
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_lianerch_1"
                    />
                  </div>
                  <div
                    data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b67"
                    className="img_lianerch_2"
                  >
                    <img
                      src="images/lianerch_modol_2.png"
                      loading="lazy"
                      height={116}
                      alt=""
                      className="image_lianerch_2"
                    />
                  </div>
                  <div
                    data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b69"
                    className="img_lianerch_3"
                  >
                    <img
                      src="images/lianerch_modol_3.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b6a"
                      alt=""
                      className="image_lianerch_3"
                    />
                  </div>
                  <div
                    data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b6b"
                    className="img_lianerch_4"
                  >
                    <img
                      src="images/lianerch_modol_4.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      alt=""
                      className="image_lianerch_4"
                    />
                  </div>
                  <div
                    data-w-id="c4d697cd-bb36-6727-56bb-6e8511154a93"
                    className="img_lianerch_5 last_image_modol"
                  >
                    <img
                      src="images/lianerch_modol_5.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      alt=""
                      className="image_lianerch_5"
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper_text_block_modol">
                <div className="project">
                  <div
                    data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b6f"
                    className="text-block_previous_lianerch"
                  >
                    <span className="text-span-2">&lt;</span>Previous Project
                  </div>
                  <div
                    data-w-id="b34d9bfd-21d5-6754-70f4-971e54b54b73"
                    className="text-block_next_lianerch"
                  >
                    Next Project <span className="text-span-3">&gt;</span>
                  </div>
                </div>
                <div className="text_block_cardiff">
                  <h1 className="heading-_lianerch">Lianerch Vineyard Hotel</h1>
                  <p className="paragraph_lianech">
                    The hotel owners specified two pod designs from our
                    extensive library of bathroom solutions. This significantly
                    reduced design time and facilitated production.
                  </p>
                  <p className="paragraph_lianerch">
                    The bathrooms for the superior double bedrooms have large
                    format grey porcelain tiles, a wall-mounted basin with
                    granite shelf, LED lighting, and a bath with overhead
                    rainfall and hand-held thermostatic showers.
                  </p>
                </div>
              </div>
            </div>
            <div className="wrapper_modol_window_canary">
              <div className="image_cardiff">
                <div className="wrapeer_image">
                  <div className="div-block-30">
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      width={406}
                      sizes="100vw"
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      alt=""
                      className="image-_canary"
                    />
                    <img
                      src="images/canary_2.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_2-p-500.png 500w, images/canary_2-p-800.png 800w, images/canary_2.png 1000w"
                      alt=""
                      className="image_canares_2"
                    />
                    <img
                      src="images/canary_3.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_3-p-500.png 500w, images/canary_3.png 1000w"
                      alt=""
                      className="image_canares_3"
                    />
                    <img
                      src="images/canary_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_4-p-500.png 500w, images/canary_4.png 1000w"
                      alt=""
                      className="image_canares_4"
                    />
                    <img
                      src="images/canary_5.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_5-p-500.png 500w, images/canary_5-p-800.png 800w, images/canary_5.png 1000w"
                      alt=""
                      className="image_canares_5"
                    />
                    <img
                      src="images/canary_6.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_6-p-500.png 500w, images/canary_6-p-800.png 800w, images/canary_6.png 1000w"
                      alt=""
                      className="image_canares_6"
                    />
                  </div>
                </div>
                <div className="wrapper_case_modol">
                  <div
                    data-w-id="269a70fa-eb10-f85b-b813-ae2c54ac2a91"
                    className="img_canary_1"
                  >
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      sizes="100vw"
                      alt=""
                      className="image_canary_1"
                    />
                  </div>
                  <div
                    data-w-id="269a70fa-eb10-f85b-b813-ae2c54ac2a93"
                    className="img_canary_2"
                  >
                    <img
                      src="images/canary_modol_2.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      alt=""
                      className="image_canary_2"
                    />
                  </div>
                  <div
                    data-w-id="269a70fa-eb10-f85b-b813-ae2c54ac2a95"
                    className="img_canary_3"
                  >
                    <img
                      src="images/canary_modol_3.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      alt=""
                      className="image_canary_3"
                    />
                  </div>
                  <div
                    data-w-id="269a70fa-eb10-f85b-b813-ae2c54ac2a97"
                    className="img_canary_4"
                  >
                    <img
                      src="images/canary_modol_4.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      data-w-id="269a70fa-eb10-f85b-b813-ae2c54ac2a98"
                      alt=""
                      className="image_canary_4"
                    />
                  </div>
                  <div
                    data-w-id="5dcd1e47-1183-8e4c-79be-249a900ed11f"
                    className="img_canary_5"
                  >
                    <img
                      src="images/canary_modol_5.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      data-w-id="5dcd1e47-1183-8e4c-79be-249a900ed120"
                      alt=""
                      className="image_canary_5"
                    />
                  </div>
                  <div
                    data-w-id="6af117f1-d763-2beb-b774-8979fba04736"
                    className="img_canary_6 last_image_modol"
                  >
                    <img
                      src="images/canary_modol_6.png"
                      loading="lazy"
                      height={116}
                      width={162}
                      data-w-id="6af117f1-d763-2beb-b774-8979fba04737"
                      alt=""
                      className="image_canary_6"
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper_text_block_modol">
                <div className="project">
                  <div
                    data-w-id="269a70fa-eb10-f85b-b813-ae2c54ac2a9b"
                    className="text-block_canary_previous"
                  >
                    <span className="text-span-2">&lt;</span>Previous Project
                  </div>
                  <div className="text-block_next_canary">
                    Next Project <span className="text-span-3">&gt;</span>
                  </div>
                </div>
                <div className="text_block_cardiff">
                  <h1 className="heading_canary">Canary Wharf</h1>
                  <p className="paragraph_canary_1">
                    This prestigious waterside development was the first
                    application of our new steel and concrete pods, which
                    provide a fully waterproofed solution for luxury wet rooms
                    and bathrooms.
                  </p>
                  <p className="paragraph_canary_2">
                    We supplied 443 pods for 327 private rental apartments for
                    the iconic 35-storey tower and the adjacent six-storey
                    building. These were a combination of wet rooms and
                    bathrooms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modol_window_mobile">
        <div
          data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0eea9"
          className="close_modol_mobile"
        >
          <img
            src="images/x_mobile.svg"
            loading="lazy"
            alt=""
            className="image-16"
          />
        </div>
        <div className="conteiner modol">
          <div className="block_bg_modol_mobile">
            <div className="wrapper_modol_window_cardiff_mobile cardiff">
              <div className="image_cardiff">
                <h1 className="heading-11">Cardiff Interchange</h1>
                <div className="wrapeer_image_cardiff">
                  <div className="div-block-26">
                    <img
                      src="images/image_1_842px_s3.png"
                      loading="lazy"
                      srcSet="images/image_1_842px_s3-p-500.png 500w, images/image_1_842px_s3-p-800.png 800w, images/image_1_842px_s3-p-1080.png 1080w, images/image_1_842px_s3.png 1684w"
                      sizes="100vw"
                      alt=""
                      className="image_cardiff_1"
                    />
                    <img
                      src="images/cardiff_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/cardiff_4-p-500.png 500w, images/cardiff_4.png 1000w"
                      alt=""
                      className="image_cardiff_2"
                    />
                    <img
                      src="images/cardiff_10.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/cardiff_10-p-500.png 500w, images/cardiff_10-p-800.png 800w, images/cardiff_10-p-1080.png 1080w, images/cardiff_10.png 1685w"
                      alt=""
                      className="image_cardiff_3"
                    />
                    <img
                      src="images/cardiff_11.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/cardiff_11-p-500.png 500w, images/cardiff_11-p-800.png 800w, images/cardiff_11-p-1080.png 1080w, images/cardiff_11.png 1500w"
                      alt=""
                      className="image_cardiff_4"
                    />
                    <img
                      src="images/cardiff_8.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/cardiff_8-p-500.png 500w, images/cardiff_8.png 800w"
                      alt=""
                      className="image_cardiff_5"
                    />
                    <img
                      src="images/cardiff_9.png"
                      loading="lazy"
                      alt=""
                      className="image_cardiff_6"
                    />
                  </div>
                </div>
                <div className="wrapeer_image">
                  <div className="div-block-35">
                    <div className="div-block-37">
                      <div
                        data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee8a"
                        className="img_cardiff_1"
                      >
                        <img
                          className="image_162_cardiff"
                          src="images/image_1_842px_s3.png"
                          width={162}
                          height={116}
                          alt=""
                          sizes="100vw"
                          data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee8c"
                          loading="lazy"
                          srcSet="images/image_1_842px_s3-p-500.png 500w, images/image_1_842px_s3-p-800.png 800w, images/image_1_842px_s3-p-1080.png 1080w, images/image_1_842px_s3.png 1684w"
                        />
                      </div>
                      <div
                        data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee8d"
                        className="img_cardiff_2"
                      >
                        <img
                          src="images/cardiff_4.png"
                          loading="lazy"
                          height={116}
                          width={162}
                          srcSet="images/cardiff_4-p-500.png 500w, images/cardiff_4.png 1000w"
                          sizes="100vw"
                          alt=""
                          className="image_cardiff_2_162"
                        />
                      </div>
                      <div
                        data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee90"
                        className="img_cardiff_3"
                      >
                        <img
                          src="images/cardiff_10.png"
                          loading="lazy"
                          height={116}
                          sizes="100vw"
                          srcSet="images/cardiff_10-p-500.png 500w, images/cardiff_10-p-800.png 800w, images/cardiff_10-p-1080.png 1080w, images/cardiff_10.png 1685w"
                          alt=""
                          className="image_cardiff_3_162"
                        />
                      </div>
                      <div
                        data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee92"
                        className="img_cardiff_4"
                      >
                        <img
                          src="images/cardiff_11.png"
                          loading="lazy"
                          height={116}
                          width={162}
                          srcSet="images/cardiff_11-p-500.png 500w, images/cardiff_11-p-800.png 800w, images/cardiff_11-p-1080.png 1080w, images/cardiff_11.png 1500w"
                          sizes="100vw"
                          alt=""
                          className="image_cardiff_4_162"
                        />
                      </div>
                      <div
                        data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee94"
                        className="img_cardiff_5"
                      >
                        <img
                          src="images/cardiff_8.png"
                          loading="lazy"
                          height={116}
                          width={162}
                          srcSet="images/cardiff_8-p-500.png 500w, images/cardiff_8.png 800w"
                          sizes="100vw"
                          alt=""
                          className="image_cardiff_5_162"
                        />
                      </div>
                      <div
                        data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee96"
                        className="img_cardiff_6 last_image_modol"
                      >
                        <img
                          src="images/cardiff_9.png"
                          loading="lazy"
                          height={116}
                          width={162}
                          alt=""
                          className="image_cardiff_6_162"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper_text_block_modol">
                  <div className="text_block_cardiff">
                    <p className="paragraph-4">
                      This project is the first contract for Moon new enhanced
                      and floorless GRP pods.
                    </p>
                    <p className="paragraph-5">
                      The bathrooms and shower rooms are being manufactured and
                      fitted out offsite and installed on each floor as the
                      building structure rises upwards. This solution reduces
                      the build programme and the number of trades required on
                      site and enhances quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project cardiff_project">
                <div className="text-block_prevuous_cardiff">
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div className="text-block_prevuous_cardiff_mobile">
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div
                  data-w-id="ab5014a9-9d6d-efc4-ce0c-810aa3a0ee9e"
                  className="text-block_next_cardiff"
                >
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
                <div
                  data-w-id="557c642b-c674-82ab-8b0d-75b202072d5a"
                  className="text-block_next_cardiff_mobile"
                >
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
              </div>
            </div>
            <div className="wrapper_modol_window_retirement_mobile retirement_mobile">
              <div className="image_retirement">
                <h1 className="heading_retirement">Retirement Apartments</h1>
                <div className="wrapper_image">
                  <div className="div-block-28">
                    <img
                      src="images/image_2_s3.png"
                      loading="lazy"
                      width={406}
                      sizes="100vw"
                      srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                      alt=""
                      className="image_retirements_1"
                    />
                    <img
                      src="images/retiremet_2.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/retiremet_2-p-500.png 500w, images/retiremet_2-p-800.png 800w, images/retiremet_2.png 1000w"
                      alt=""
                      className="image_retirements_2"
                    />
                    <img
                      src="images/retirement_3.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/retirement_3-p-500.png 500w, images/retirement_3-p-800.png 800w, images/retirement_3.png 1000w"
                      alt=""
                      className="image_retirements_3"
                    />
                    <img
                      src="images/retirement_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/retirement_4-p-500.png 500w, images/retirement_4-p-800.png 800w, images/retirement_4.png 1000w"
                      alt=""
                      className="image_retirements_4"
                    />
                  </div>
                </div>
                <div className="wrapper_case_modol">
                  <div className="div-block-36">
                    <div
                      data-w-id="432dc415-f590-ffa8-6b24-53a1552ff804"
                      className="image_retirement_1"
                    >
                      <img
                        src="images/image_2_s3.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        srcSet="images/image_2_s3-p-500.png 500w, images/image_2_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="img_retirement_1"
                      />
                    </div>
                    <div
                      data-w-id="432dc415-f590-ffa8-6b24-53a1552ff806"
                      className="image_retirement_2"
                    >
                      <img
                        className="img_retirement_2"
                        src="images/retiremet_2.png"
                        width={162}
                        height={116}
                        alt=""
                        sizes="100vw"
                        data-w-id="432dc415-f590-ffa8-6b24-53a1552ff807"
                        loading="lazy"
                        srcSet="images/retiremet_2-p-500.png 500w, images/retiremet_2-p-800.png 800w, images/retiremet_2.png 1000w"
                      />
                    </div>
                    <div
                      data-w-id="432dc415-f590-ffa8-6b24-53a1552ff808"
                      className="image_retirement_3"
                    >
                      <img
                        src="images/retirement_3.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        srcSet="images/retirement_3-p-500.png 500w, images/retirement_3-p-800.png 800w, images/retirement_3.png 1000w"
                        sizes="100vw"
                        alt=""
                        className="img_retirement_3"
                      />
                    </div>
                    <div
                      data-w-id="432dc415-f590-ffa8-6b24-53a1552ff80a"
                      className="image_retirement_4 last_image_modol"
                    >
                      <img
                        src="images/retirement_4.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        srcSet="images/retirement_4-p-500.png 500w, images/retirement_4-p-800.png 800w, images/retirement_4.png 1000w"
                        sizes="100vw"
                        alt=""
                        className="img_retirement_4"
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper_text_block_modol">
                  <div className="text_block_retirement">
                    <p className="paragraph_retirement_1">
                      Moon has manufactured 44 steel-framed bathroom pods for
                      the project - our first timber-framed residential
                      development.
                    </p>
                    <p className="paragraph_retirement_2">
                      The bathrooms and shower rooms are being manufactured and
                      fitted out offsite and installed on each floor as the
                      building structure rises upwards. This solution reduces
                      the build programme and the number of trades required on
                      site and enhances quality.
                    </p>
                    <ul role="list" className="list">
                      <li className="list-item-2">Ceramic-tiled finishes</li>
                      <li className="list-item">
                        Walk-in rain dance showers with digitally-controlled
                        thermostats
                      </li>
                      <li className="list-item-3">
                        Premium sanitaryware and fittings
                      </li>
                      <li className="list-item-4">A mirrored cabinet</li>
                    </ul>
                  </div>
                  <div className="project retirement_project">
                    <div
                      data-w-id="432dc415-f590-ffa8-6b24-53a1552ff80e"
                      className="text-block_previous_retirement"
                    >
                      <span className="text-span-2">&lt;</span>Previous Project
                    </div>
                    <div
                      data-w-id="38c939e7-110a-4c46-25d6-ecf849821cda"
                      className="text-block_previous_retirement_mobile"
                    >
                      <span className="text-span-2">&lt;</span>Previous Project
                    </div>
                    <div
                      data-w-id="432dc415-f590-ffa8-6b24-53a1552ff812"
                      className="text-block_next_retirement"
                    >
                      Next Project <span className="text-span-3">&gt;</span>
                    </div>
                    <div
                      data-w-id="ff2c88df-e984-e318-5cb4-d54c4c0eb33d"
                      className="text-block_next_retirement_mobile"
                    >
                      Next Project <span className="text-span-3">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project retirement_project">
                <div className="text-block_previous_retirement">
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div
                  data-w-id="05fdf21e-9c83-84b0-28e5-6a33b381ce9a"
                  className="text-block_previous_retirement_mobile"
                >
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div className="text-block_next_retirement">
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
                <div
                  data-w-id="05fdf21e-9c83-84b0-28e5-6a33b381cea2"
                  className="text-block_next_retirement_mobile"
                >
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
              </div>
            </div>
            <div className="wrapper_modol_window_lianerch_mobile">
              <div className="image_lianerch">
                <h1 className="heading-_lianerch">Lianerch Vineyard Hotel</h1>
                <div className="wrapper_image">
                  <div className="div-block-29">
                    <img
                      src="images/image_3_s3.png"
                      loading="lazy"
                      width={406}
                      sizes="100vw"
                      srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                      alt=""
                      className="image_lianerches_1"
                    />
                    <img
                      src="images/lianerch_2.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_2-p-500.png 500w, images/lianerch_2-p-800.png 800w, images/lianerch_2-p-1080.png 1080w, images/lianerch_2.png 1536w"
                      alt=""
                      className="image_lianerches_2"
                    />
                    <img
                      src="images/lianerch_3.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_3-p-500.png 500w, images/lianerch_3-p-800.png 800w, images/lianerch_3.png 1000w"
                      alt=""
                      className="image_lianerches_3"
                    />
                    <img
                      src="images/lianerch_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_4-p-500.png 500w, images/lianerch_4-p-800.png 800w, images/lianerch_4.png 1000w"
                      alt=""
                      className="image_lianerches_4"
                    />
                    <img
                      src="images/lianerch_5.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/lianerch_5-p-500.png 500w, images/lianerch_5.png 1000w"
                      alt=""
                      className="image_lianerches_5"
                    />
                  </div>
                </div>
                <div className="wrapper_case_modol">
                  <div className="div-block-38">
                    <div
                      data-w-id="2203fc02-bdcb-460a-3d11-2c2e7fd19b9c"
                      className="img_lianerch_1"
                    >
                      <img
                        src="images/image_3_s3.png"
                        loading="lazy"
                        srcSet="images/image_3_s3-p-500.png 500w, images/image_3_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="image_lianerch_1"
                      />
                    </div>
                    <div
                      data-w-id="2203fc02-bdcb-460a-3d11-2c2e7fd19b9e"
                      className="img_lianerch_2"
                    >
                      <img
                        src="images/lianerch_2.png"
                        loading="lazy"
                        height={116}
                        sizes="100vw"
                        srcSet="images/lianerch_2-p-500.png 500w, images/lianerch_2-p-800.png 800w, images/lianerch_2-p-1080.png 1080w, images/lianerch_2.png 1536w"
                        alt=""
                        className="image_lianerch_2"
                      />
                    </div>
                    <div
                      data-w-id="2203fc02-bdcb-460a-3d11-2c2e7fd19ba0"
                      className="img_lianerch_3"
                    >
                      <img
                        className="image_lianerch_3"
                        src="images/lianerch_3.png"
                        width={162}
                        height={116}
                        alt=""
                        sizes="100vw"
                        data-w-id="2203fc02-bdcb-460a-3d11-2c2e7fd19ba1"
                        loading="lazy"
                        srcSet="images/lianerch_3-p-500.png 500w, images/lianerch_3-p-800.png 800w, images/lianerch_3.png 1000w"
                      />
                    </div>
                    <div
                      data-w-id="2203fc02-bdcb-460a-3d11-2c2e7fd19ba2"
                      className="img_lianerch_4"
                    >
                      <img
                        src="images/lianerch_4.png"
                        loading="lazy"
                        height={116}
                        width={500}
                        srcSet="images/lianerch_4-p-500.png 500w, images/lianerch_4-p-800.png 800w, images/lianerch_4.png 1000w"
                        sizes="100vw"
                        alt=""
                        className="image_lianerch_4"
                      />
                    </div>
                    <div
                      data-w-id="2203fc02-bdcb-460a-3d11-2c2e7fd19ba4"
                      className="img_lianerch_5 last_image_modol"
                    >
                      <img
                        src="images/lianerch_5.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        srcSet="images/lianerch_5-p-500.png 500w, images/lianerch_5.png 1000w"
                        sizes="100vw"
                        alt=""
                        className="image_lianerch_5"
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper_text_block_modol">
                  <div className="text_block_cardiff">
                    <p className="paragraph_lianech">
                      The hotel owners specified two pod designs from our
                      extensive library of bathroom solutions. This
                      significantly reduced design time and facilitated
                      production.
                    </p>
                    <p className="paragraph_lianerch">
                      The bathrooms for the superior double bedrooms have large
                      format grey porcelain tiles, a wall-mounted basin with
                      granite shelf, LED lighting, and a bath with overhead
                      rainfall and hand-held thermostatic showers.
                    </p>
                  </div>
                  <div className="project lianerch_project">
                    <div className="text-block_previous_lianerch">
                      <span className="text-span-2">&lt;</span>Previous Project
                    </div>
                    <div
                      data-w-id="c9169b86-aa90-6515-91ff-f2f709e26d45"
                      className="text-block_previous_lianerch_mobile"
                    >
                      <span className="text-span-2">&lt;</span>Previous Project
                    </div>
                    <div className="text-block_next_lianerch">
                      Next Project <span className="text-span-3">&gt;</span>
                    </div>
                    <div
                      data-w-id="c92edc4d-cec8-0926-8172-2890b82e39ca"
                      className="text-block_next_lianerch_mobile"
                    >
                      Next Project <span className="text-span-3">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project lianerch_project">
                <div className="text-block_previous_lianerch">
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div
                  data-w-id="b6f5c639-2e7b-8414-7d47-13f4bbcec54a"
                  className="text-block_previous_lianerch_mobile"
                >
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div className="text-block_next_lianerch">
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
                <div
                  data-w-id="b6f5c639-2e7b-8414-7d47-13f4bbcec552"
                  className="text-block_next_lianerch_mobile"
                >
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
              </div>
            </div>
            <div className="wrapper_modol_windo_canary_mobile">
              <div className="image_cardiff">
                <h1 className="heading_canary">Canary Wharf</h1>
                <div className="wrapeer_image">
                  <div className="div-block-30">
                    <img
                      src="images/image_4_s3.png"
                      loading="lazy"
                      width={406}
                      sizes="100vw"
                      srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                      alt=""
                      className="image-_canary"
                    />
                    <img
                      src="images/canary_2.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_2-p-500.png 500w, images/canary_2-p-800.png 800w, images/canary_2.png 1000w"
                      alt=""
                      className="image_canares_2"
                    />
                    <img
                      src="images/canary_3.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_3-p-500.png 500w, images/canary_3.png 1000w"
                      alt=""
                      className="image_canares_3"
                    />
                    <img
                      src="images/canary_4.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_4-p-500.png 500w, images/canary_4.png 1000w"
                      alt=""
                      className="image_canares_4"
                    />
                    <img
                      src="images/canary_5.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_5-p-500.png 500w, images/canary_5-p-800.png 800w, images/canary_5.png 1000w"
                      alt=""
                      className="image_canares_5"
                    />
                    <img
                      src="images/canary_6.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/canary_6-p-500.png 500w, images/canary_6-p-800.png 800w, images/canary_6.png 1000w"
                      alt=""
                      className="image_canares_6"
                    />
                  </div>
                </div>
                <div className="wrapper_case_modol">
                  <div className="div-block-39">
                    <div
                      data-w-id="6791f0b2-90c8-7873-118a-fff91a02dea5"
                      className="img_canary_1"
                    >
                      <img
                        src="images/image_4_s3.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        srcSet="images/image_4_s3-p-500.png 500w, images/image_4_s3.png 812w"
                        sizes="100vw"
                        alt=""
                        className="image_canary_1"
                      />
                    </div>
                    <div
                      data-w-id="6791f0b2-90c8-7873-118a-fff91a02dea7"
                      className="img_canary_2"
                    >
                      <img
                        src="images/canary_modol_2.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        alt=""
                        className="image_canary_2"
                      />
                    </div>
                    <div
                      data-w-id="6791f0b2-90c8-7873-118a-fff91a02dea9"
                      className="img_canary_3"
                    >
                      <img
                        src="images/canary_modol_3.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        alt=""
                        className="image_canary_3"
                      />
                    </div>
                    <div
                      data-w-id="6791f0b2-90c8-7873-118a-fff91a02deab"
                      className="img_canary_4"
                    >
                      <img
                        src="images/canary_modol_4.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        data-w-id="6791f0b2-90c8-7873-118a-fff91a02deac"
                        alt=""
                        className="image_canary_4"
                      />
                    </div>
                    <div
                      data-w-id="6791f0b2-90c8-7873-118a-fff91a02dead"
                      className="img_canary_5"
                    >
                      <img
                        src="images/canary_modol_5.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        data-w-id="6791f0b2-90c8-7873-118a-fff91a02deae"
                        alt=""
                        className="image_canary_5"
                      />
                    </div>
                    <div
                      data-w-id="6791f0b2-90c8-7873-118a-fff91a02deaf"
                      className="img_canary_6 last_image_modol"
                    >
                      <img
                        src="images/canary_modol_6.png"
                        loading="lazy"
                        height={116}
                        width={162}
                        data-w-id="6791f0b2-90c8-7873-118a-fff91a02deb0"
                        alt=""
                        className="image_canary_6"
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper_text_block_modol">
                  <div className="text_block_cardiff">
                    <p className="paragraph_canary_1">
                      This prestigious waterside development was the first
                      application of our new steel and concrete pods, which
                      provide a fully waterproofed solution for luxury wet rooms
                      and bathrooms.
                    </p>
                    <p className="paragraph_canary_2">
                      We supplied 443 pods for 327 private rental apartments for
                      the iconic 35-storey tower and the adjacent six-storey
                      building. These were a combination of wet rooms and
                      bathrooms
                    </p>
                  </div>
                  <div className="project canary_project">
                    <div className="text-block_canary_previous">
                      <span className="text-span-2">&lt;</span>Previous Project
                    </div>
                    <div
                      data-w-id="8706d6ee-7c4f-a46f-c18b-7d1d4de991a1"
                      className="text-block_canary_mobile"
                    >
                      <span className="text-span-2">&lt;</span>Previous Project
                    </div>
                    <div className="text-block_next_canary">
                      Next Project <span className="text-span-3">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project canary_project">
                <div className="text-block_canary_previous">
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div
                  data-w-id="6f18d003-b1a5-17a1-c3ba-df5bc99cde4e"
                  className="text-block_canary_mobile"
                >
                  <span className="text-span-2">&lt;</span>Previous Project
                </div>
                <div className="text-block_next_canary">
                  Next Project <span className="text-span-3">&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .w-webflow-badge{\n  display: none!important;\n  }\n .bg_video_s5{\n  \tbackground: rgba(21, 62, 100, 0.8);\n  }\n.video_manufacture{\n\tmix-blend-mode: multiply;\n}\n.bg_color_img{\n\tmix-blend-mode: multiply;\n  \tbackground:#153e64;\n}\n  .background-video{\n  \tmix-blend-mode:multiply;\n  }\n  .video_bg_s1{\n  \tbackground: #153E64;\n  }\n  .grp:hover{\n  \tmix-blend-mode: multiply;\n  }\n  ::-webkit-scrollbar{\n    display:none;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: black;\n\t}\n  ::-webkit-scrollbar-thumb{\n  \twidth:0px!important;\n  }\n  @media(min-width:393px) and (max-width:479px){\n    .number_3_mobile,{\n    right:30px;\n    }\n    .number_7_mobile{\n    right:110px;\n    }\n    .number_4_mobile{\n    right:60px;\n    }\n    .number_8_mobile{\n    right:80px;\n    }\n    .number_6_mobile{\n    left:60px;\n    }\n    .number_10_mobile{\n    left:60px;\n    }\n    .number_5_mobile{\n    left:75px;\n    }\n  }\n  @media(device-width: 1536px){\n    .conteiner.nav_mobile{\n    width:100%;\n    }\n   .close_modol{\n    top: 5.5%;\n    right: 7%;\n   }\n    .wrapper_form{\n    height: 112%;\n    }\n   .image-17{\n    right: 685px;\n   }\n    .section_3{\n    padding-top:100px;\n    }\n    .heading-3{\n    padding-bottom:20px;\n    }\n    .image_s2{\n    height: 377px;\n    }\n    .section_2{\n    padding-top: 11px;\n    }\n    .section_4{\n      margin-top:100px;\n      margin-bottom:100px;\n      height:130vh;\n    }\n    .image_block_s4{\n     width: 656px;\n   \t top: 119px;\n    }\n    .section_6{\n    padding-top:20px;\n    }\n    .conteiner{\n    width:100%\n    }\n    .text_block_s6_bespoke{\n    margin-top: 76px;\n    padding: 15.5em 7.8em 14.1em;\n    }\n    .text_block_s6_grp, .text_block_s6_steel{\n    margin-top: 76px;\n    padding: 15.5em 6em 14.1em;\n    }\n    .div-block-28, .div-block-29, .div-block-30,.div-block-26{\n    height: 476px;\n    }\n    .block_bg_modol{\n    height: 640px;\n    }\n    .image_lianerches_1{\n    height: 470px;\n    }\n    .conteiner.s3{\n    width:auto;\n    padding-right:80px;\n    }\n    .wrapper_modol_window_canary, .wrapper_modol_window_lianerch,.wrapper_modol_window_cardiff, .wrapper_modol_window_retirement{\n    height: 640px;\n    }\n    .heading-5{\n    margin-bottom: 38px;\n    }\n  }\n  @media(device-width: 1366px){\n    .image-17{\n     right: 641px;\n    }\n   .close_modol{\n    top: 8%;\n    right: 3.5%;\n   }\n    .section_2{\n    padding-top:115px;\n    }\n    .section_6{\n    padding-top:80px;\n    }\n    .section_3{\n    padding-top: 106px;\n    }\n    .section_4{\n    padding-top: 120px;\n    }\n    .heading-3{\n    padding-bottom: 20px;\n    }\n    .wrapper_form{\n    height: 726px;\n    }\n    .wrapper_bg_video_s2{\n    margin-bottom: 29px;\n    }\n    .tex_blck_s8{\n    width: 86.5vw;\n    }\n    .text_block_s6{\n    margin-top: 22px;\n    }\n    .heading-5{\n    margin-bottom: 29px;\n    }\n    .image_block_s4{\n    left: 20%;\n    top: 0px;\n    }\n  }\n  @media(min-width: 320px) and (max-width:1920px){\n    .footer{\n    height:auto!important;\n    }\n    .footer_table{\n    height:auto!important;\n    }\n  }\n  @media (device-width:360px) and (device-height:800px){\n    .div-block-17{\n    margin-bottom: -10vh;\n    }\n\t}\n    @media (device-width:375px) and (device-height:667px){\n    .div-block-17{\n    margin-bottom: 6vh;\n    }\n\t}\n    @media (device-width:375px) and (device-height:812px){\n    .div-block-17{\n    margin-bottom: -11vh;\n    }\n\t}\n    @media (device-width:414px) and (device-height:896px){\n    .div-block-17{\n    margin-bottom: -18vh;\n    }\n\t}\n    @media (device-width:412px) and (device-height:915px){\n    .div-block-17{\n    margin-bottom: -20vh;\n    }\n\t}\n  @media(device-width: 375px){\n  .image-17 {\n    left: 174px;\n    }\n  .number_10_mobile{\n    left:53px;\n    }\n  }\n    @media(device-width: 412px){\n  .image-17 {\n    left: 191px;\n    }\n  }\n    @media(device-width: 414px){\n  .image-17 {\n    left: 191px;\n    }\n  }\n  @media(min-width: 780px) and (max-width:806px){\n    .close_modol{\n    top:17%;\n    }\n   .wrapper_bg_video_s2{\n    height: 921px;\n    }\n    .section_3{\n    padding-top: 259px;\n    }\n    .section_6{\n    padding-top: 237px;\n    }\n    .section_7{\n    padding-top: 259px;\n    }\n    .section_8{\n    padding-top: 59px;\n    }\n    .div-block-17{\n    padding:26.6em 20.5em;\n\tmargin-top:68px;\n    }\n    .tex_blck_s8{\n    margin: -354px 0 0;\n    }\n  }\n  @media (min-width:807px)and (max-width: 810px){\n    .close_modol{\n     top: 11%;\n    }\n    .section_3{\n    padding-top: 164px;\n    }\n    .section_4{\n    padding-top: 138px;\n    }\n    .heading-5{\n    margin-bottom: 57px;\n    }\n    .section_6{\n    padding-top: 186px;\n    }\n    .section_7{\n    padding-top: 141px;\n    }\n    .div-block-17{\n    padding: 21.8em 20.5em;\n    }\n    .tex_blck_s8{\n    margin: -302px 0 0;\n    }\n  }\n    @media (device-width:1024px) and (max-height:1366px){\n      .nav_link_1,.nav_link_2,.nav_link_3,.nav_link_4.last{\n      font-size: 22px;\n      }\n      .text-block{\n      font-size:19px;\n      }\n      .text-block-3{\n      font-size: 24px;\n      }\n      .image-17{\n      right: 477px;\n      top: 6px;\n    \twidth: 13px;\n      }\n      .heading-2{\n       font-size: 32px;\n      }\n      .text-block-4{\n      font-size: 23px;\n      }\n      .wrapper_bg_video_s2{\n      width: 635px;\n      }\n      .section_2{\n      padding-top: 300px;\n      }\n      .heading_canary_wharf, .heading_cardiff, .heading_lianerch, .heading_retirement_aipar{\n      font-size: 26px;\n      }\n      .heading-3{\n      font-size: 40px;\n      }\n      .section_3{\n      padding-top: 419px;\n      }\n      .close_modol{\n      top: 23%;\n      }\n      .paragraph{\n      font-size: 22px;\n      }\n      .text-block-5{\n      font-size: 26px;\n      }\n      .section_4{\n      padding-top: 314px;\n      }\n      .heading-5{\n      font-size: 35px;\n      }\n      .experienced,._3d_solid_block_text, .compliance_block_text{\n      bottom: 132px;\n      }\n      .heading-6{\n      font-size: 40px;\n      }\n      .paragraph-2{\n      font-size: 24px;\n      }\n      .section_6{\n      padding-top: 335px;\n      }\n      .paragraph-7{\n      font-size: 24px;\n      }\n      .button-2{\n      font-size: 21px;\n      }\n      .button-2:hover{\n      font-size: 21px;\n      }\n      .heading-8 {\n      font-size: 35px;\n\t\t}\n      .text-block-7,.text-block-10, .text-block-8, .text-block-9,.text-block-10, .text-block-8, .text-block-9,.text-block-11, .text-block-12, .text-block-13, .text-block-14, .text-block-15, .text-block-16{\n      font-size: 24px;\n      }\n      .section_7{\n      padding-top: 305px;\n      }\n      .heading-12{\n      font-size: 24px;\n      }\n      .paragraph-6{\n      font-size: 19px;\n      }\n      .button{\n      font-size: 24px;\n      white-space: nowrap;\n      }\n      .section_8{\n      margin-bottom: 0px;\n      }\n      .text-block-18{\n      margin-bottom: 0px;\n      }\n      .number_10{\n        left: 90px;\n    \ttop: 237px;\n      }\n      .number_1{\n          top: -4px;\n    right: 161px;\n      }\n      .number_2{\n      left: 104px;\n    \ttop: 79px;\n      }\n      .number_3{\n      top: 80px;\n    \tright: 3px;\n      }\n      .number_4{\n          top: 203px;\n    \tright: 83px;\n      }\n      .number_5{\n      left: 107px;\n    top: 152px;\n      }\n      .number_6{\n      left: 93px;\n    top: 287px;\n      }\n      .number_7{\n          top: 313px;\n    right: 158px;\n      }\n      .number_8{\n          top: 139px;\n    right: 115px;\n      }\n      .number_9{\n          top: 197px;\n    right: 191px;\n      }\n    }\n  @media (device-width:1024px) and (max-height:1247px){\n    .section_2{\n    padding-top: 258px;\n    }\n    .section_3{\n    padding-top: 372px;\n    }\n    .section_4{\n    padding-top: 295px;\n    }\n    .section_6{\n    padding-top: 279px;\n    }\n    .section_7{\n    padding-top: 281px;\n    }\n    .close_modol{\n    top: 21%;\n    }\n  }\n",
        }}
      />
    </>
  );
}
export default Home;
