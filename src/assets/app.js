import bannerCarouselImage1 from "../images/banner__carousal__1.jpg";
import bannerCarouselImage2 from "../images/banner__carousal__2.jpg";
import bannerCarouselImage3 from "../images/banner__carousal__3.jpg";
import bannerCarouselImage4 from "../images/banner__carousal__4.jpg";
import bannerCarouselImage5 from "../images/banner__carousal__5.jpg";
import bannerCarouselImage6 from "../images/banner__carousal__6.jpg";
import cardimage1 from "../images/card__image__1.png";
import cardimage2 from "../images/card__image__2.jpg";
import cardimage3 from "../images/card__image__3.jpg";
import cardimage4 from "../images/card__image__4.jpg";
import cardimage5 from "../images/card__image__5.jpg";
import cardimage6 from "../images/card__image__6.jpg";
import connectimage from "../images/connect_grow.png"
import gettingPuppy from "../images/getting-a-puppy.jpg";
import howOldYourDog from "../images/how-old-is-your-dog-600.jpg";
import marsPed from "../images/723013-1-mars-ped-780-x-465_v2.jpg";
import donate from "../images/donate.jpg";
import dogWithBoyImage from "../images/dog__with__boy.jpg";

const commonText = {
  btnLabel: "Learn More"
};
const colors = {
  white: `#FFFFFF`,
  blue: `#261138`
};
const App = {
  longCard: {
    list: [
      {
        header: "Client portals",
        description: `Access our range of online tools and portals designed to help our clients seize opportunities to take their business to the next level.`,
        link: `Login into your account`
      },
      {
        header: "Professional careers",
        description: `Your world of opportunity starts here. Realise your full potential and join our diverse global team.`,
        link: `Roles at Vistra`,
        image: {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url(https://www.vistra.com//sites/default/files/2019-03/Careers%20block.jpg)"
        }
      }
    ]
  },
  header: {
    isSearchRquired: `no`,
    isImageLink: "yes",
    siteTitle: ``,
    logoImage: `https://www.zensar.com/sites/all/themes/new_zensar/img/ZensarLogo.png`,
    logoCustomStyle: { width: `130px`, height: `62px` },
    bgImage: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 247.3 35.7" style="width: 25vw;height: 4.5vw;">
      <title>Aquarian</title>
      <g>
        <path class="st0333" d="M245.8,2.9c0-0.6-0.4-0.9-1.1-0.9h-1.3v3.3h0.5V3.8h0.5l0.9,1.5h0.6l-0.9-1.5C245.4,3.8,245.8,3.4,245.8,2.9z                      M243.9,3.4v-1h0.6c0.4,0,0.7,0.1,0.7,0.5c0,0.4-0.3,0.5-0.7,0.5H243.9z"></path>
        <path class="st0333" d="M244.4,0.8c-1.6,0-2.9,1.3-2.9,2.8c0,1.6,1.3,2.8,2.9,2.8c1.6,0,2.8-1.3,2.8-2.8C247.3,2,246,0.8,244.4,0.8z                      M244.5,6c-1.3,0-2.3-1.1-2.3-2.4c0-1.4,1-2.4,2.3-2.4c1.3,0,2.3,1.1,2.3,2.4C246.7,5,245.8,6,244.5,6z"></path>
        <path class="st0333" d="M233.9,0.9h-2.8c-0.2,0-0.5,0.2-0.5,0.4s0.1,0.5,0.3,0.6c1.3,0.4,2.1,2.7,2.1,6.1v10.8                      c-2-2.5-7.1-8.9-10.7-13.2c-4.1-4.9-9.4-4.7-9.6-4.7h-5c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2,0,0.4,0.2,0.6c2.4,1.7,2.7,3.5,2.7,7.1                      v15.8c0,1.8-0.1,3.5-0.9,4.8c-0.8-0.9-1.7-2.4-2.7-4.9c0,0-4.4-10.6-7.7-18.6c-1.9-4.5-6.6-5.2-9.3-5.2c-2.8,0-5,0-5,0                      c-0.2,0-0.4,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6c0.1,0.1,1.4,0.6,1.3,2.2c-0.1,0.7-0.5,1.9-0.8,2.8c-0.1,0.3-0.2,0.6-0.3,0.8                      l-6.9,18.2c-0.8,1.9-1.4,3.4-2.8,4.4c-1.2-1.1-1.1-2.8-1.1-4.6c0-0.3,0-0.5,0-0.8V7.8c0-2.6-1.4-6.9-6.7-6.9h-5.2                      c-0.2,0-0.4,0.2-0.5,0.4c-0.1,0.2,0,0.4,0.2,0.6c1.9,1.1,1.9,3.1,1.9,5.2c0,0.3,0,0.5,0,0.8v17.1c0,2.1,0,6.9,6.4,6.9h4.3h1.1h2.8                      c2.2,0,4.4-1.3,5.1-2.9c0.4-0.9,0.9-2.3,1.3-3.2l1.1-2.8h9.2l1.5,4.1c1.3,3.4,3.5,5,7.2,5c1.5,0,3.1,0,4.4,0c0,0,0,0,0,0h3.1                      c3.7,0,5.1-3.7,5.1-7.2L216.2,14l9,10.7c2.7,3.2,9,7.9,13.5,8.2c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.2-0.4V7.9                      C239.2,4.5,237.8,0.9,233.9,0.9z M192.8,17.5h-5.4l2.6-7.1L192.8,17.5z"></path>
        <path class="st0333" d="M37,30.8c0,0-2.2-0.7-4.3-6.2c0,0-4.4-10.6-7.7-18.6c-1.9-4.5-6.6-5.2-9.3-5.2c-2.8,0-5,0-5,0                      c-0.2,0-0.5,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6c0.1,0,1.4,0.5,1.3,2.2c-0.1,0.7-0.5,2-0.8,2.9c-0.1,0.3-0.2,0.5-0.2,0.7L3.9,25.8                      c-0.9,2.3-1.6,3.9-3.7,5C0.1,30.9,0,31.1,0,31.3c0.1,0.2,0.3,0.4,0.5,0.4h3.9c1.9,0,4.4-1.2,5.1-2.9c0.4-0.9,0.9-2.3,1.3-3.2                      l1.1-2.8h9.3l1.5,4.1c1.2,3.4,3.5,5,7.2,5c3.3,0,7,0,7,0c0.2,0,0.4-0.2,0.5-0.4S37.2,30.9,37,30.8z M19.1,17.5h-5.4l2.6-7.1                      L19.1,17.5z"></path>
        <path class="st0333" d="M164.6,30.6c-1.8-0.7-3.7-2.6-5.7-5.6l-5.6-7.7c3.6-1.1,6.4-4.5,6.4-8.1c0-3.3-1.6-5.9-4.8-7.4                      c-2.3-1.1-5-1.1-7.3-1.1h-14.9c0,0-0.1,0-0.1,0c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h0c0.1,0,0.4,0,0.7,0.4                      c0.5,0.5,1.3,1.9,1.3,5.6v17c0,0.3,0,0.5,0,0.8c0,1.3,0,2.6-0.4,3.6c-0.7-0.9-1.6-2.4-2.4-4.6c0,0-4.4-10.6-7.7-18.6                      c-1.9-4.5-6.6-5.2-9.3-5.2c-2.8,0-5,0-5,0c-0.2,0-0.5,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6c0.1,0,1.4,0.5,1.3,2.2                      c-0.1,0.7-0.5,1.9-0.8,2.8c-0.1,0.3-0.2,0.5-0.2,0.7l-6.9,18.2c-0.7,1.8-1.3,3.2-2.4,4.2c-0.9-1.1-0.9-2.7-0.8-4.4                      c0-0.3,0-0.5,0-0.8v-17c0-4.5-2-6.9-5.6-6.9h-6.5c-0.2,0-0.4,0.2-0.5,0.4c-0.1,0.2,0.1,0.5,0.3,0.6c2.2,1.1,2.2,3.7,2.2,6v12.5                      c0,3.1,0,5.9-4.1,5.9c-3.7,0-4.1-3.2-4.1-6V7.8c0-1.6-0.4-6.9-5.5-6.9h-6.8c-0.2,0-0.4,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6                      c2.1,0.9,2.4,3.4,2.4,5.9v14.4c0,2.9,0.2,5.3,2.5,7.5c2.4,2.3,5.5,2.7,7.7,2.7c3.2,0,6.2-1.3,8.3-3.5c0.1,0.4,0.3,0.9,0.7,1.4                      c0.9,1,2.3,1.5,4.3,1.5c2.1,0,3.7,0,4.9,0c0,0,0,0,0,0h3.9c2.1,0,4.4-1.4,5.1-3.1c0.4-0.9,0.9-2.3,1.3-3.2l1.1-2.8h9.2l1.5,4.1                      c1.3,3.4,3.5,5,7.2,5c1.4,0,2.9,0,4.1,0c0,0,0,0,0,0h6.6c5.2,0,5.2-4.7,5.2-7v-4.6l3.6,5.8c2,3.4,6.5,5.8,10.7,5.8                      c0.3,0,0.5,0,0.8,0l4.3-0.3c0.2,0,0.4-0.2,0.5-0.4S164.8,30.7,164.6,30.6z M149.5,10.2c0,2.4-1.8,4.5-4.4,5.2V6.2                      c0.9,0,1.9,0.1,2.6,0.6C148.8,7.5,149.5,8.8,149.5,10.2z M118.3,17.5h-5.4l2.6-7.1L118.3,17.5z"></path>
        <path class="st0333" d="M74.8,33.7c-3.9-1-6.2-4.1-5.5-7.3c0-0.2,0-0.4-0.2-0.5s-0.4-0.1-0.5,0C63,29.1,58,30.6,53.8,30.2                      c8.8-0.5,15-6.3,15-14.1C68.8,8.2,62.4,0,51.5,0C41,0,33.3,6.8,33.3,16.1c0,7.5,4.7,13.5,13.1,16.7c5.1,2,11.9,2.8,17.9,2.8                      c4,0,7.7-0.4,10.5-1c0.2-0.1,0.4-0.3,0.4-0.5C75.2,33.9,75.1,33.7,74.8,33.7z M52,29.9C52,29.9,52,29.9,52,29.9                      c-1.6-0.3-3.1-1-4.3-2.1c-4.9-4-5.5-11.6-3.7-16.6c1.5-4.1,4.4-6.4,7.9-6.4c3.7,0,6.8,3.1,7.8,8c1.3,5.7-0.5,13.3-7.5,16.5                      C52,29.4,51.9,29.7,52,29.9z"></path>
      </g>
    </svg>`,
    fontColor: colors.white,
    headerStyle: { backgroundColor: `rgba(0,0,0,0.7)`, position: "fixed" },
    data: [
      {
        label: "Solutions",
        to: "/",
        subMenuRequired: "yes",
        submenu: [
          { label: "Digital Supply Chain", to: "/" },
          { label: "Enterprise Analytics", to: "/" },
          { label: "Customer Experience Transformation", to: "/" },
          { label: "Agile IT Modernization", to: "/" },
          { label: "Living AI", to: "/" }
        ]
      },
      {
        label: "Services",
        to: "/",
        subMenuRequired: "yes",
        submenu: [
          { label: "Digital Supply Chain", to: "/" },
          { label: "Enterprise Analytics", to: "/" },
          { label: "Customer Experience Transformation", to: "/" },
          { label: "Agile IT Modernization", to: "/" },
          { label: "Living AI", to: "/" }
        ]
      },
      {
        label: "Digital Consulting",
        to: "/",
        submenu: []
      },
      {
        label: "Alliances",
        to: "/",
        submenu: []
      },
      {
        label: "Investors",
        to: "/",
        submenu: []
      },
      {
        label: "Insights",
        to: "/",
        submenu: [
          { label: "Digital Supply Chain", to: "/" },
          { label: "Enterprise Analytics", to: "/" },
          { label: "Customer Experience Transformation", to: "/" },
          { label: "Agile IT Modernization", to: "/" },
          { label: "Living AI", to: "/" }
        ]
      },
      {
        label: "About Us",
        to: "/",
        submenu: [
          { label: "Digital Supply Chain", to: "/" },
          { label: "Enterprise Analytics", to: "/" },
          { label: "Customer Experience Transformation", to: "/" },
          { label: "Agile IT Modernization", to: "/" },
          { label: "Living AI", to: "/" }
        ]
      }
    ]
  },
  trendcard: {
    heading: "Now Trending",
    overallCustomStyle: { background: colors.white },
    contentCustomStyle: { width: `90%` },
    cardlist: [
      {
        image: cardimage1,
        cardDescription: `Zensar Recognized as a Leader in the ISG Provider Lens™ ‘Digital Workplace of the Future’ Report`,
        cardDate: "Feb 05, 2020",
        cardLabel: "Press Releases"
      },
      {
        image: cardimage2,
        cardDescription: `Digital deal sizes are increasing for midsize IT services firms`,
        cardDate: "Nov 14, 2019",
        cardLabel: "News"
      },
      {
        image: cardimage3,
        cardDescription: `CPX 360 2020`,
        cardDate: "Jan 27, 2020",
        cardLabel: "Events"
      },
      {
        image: cardimage4,
        cardDescription: `#PressRelease: Zensar’s #IoT enabled #retail solutions include Smart Cart, Smart Shelf, Smart Store and Smart Window. Read more:
        Sandeep Kishore #Manhmomentum`,
        cardDate: "",
        cardLabel: ""
      },
      {
        image: cardimage5,
        cardDescription: `@ISG_News report mentions that Zensar's Vinci™ #automation platform provides predictive analytics, self-heal, #UX and sentiment analysis, Win10 and O365 automated migration and intelligent collaboration across devices and platforms.
        https://t.co/B44TPQXiLQ
        #DFSisHOW https://t.co/1h6nuQM5Oj`,
        cardDate: "",
        cardLabel: ""
      },
      {
        image: cardimage6,
        cardDescription: `Hyperconverged Infrastructure integrates every node of enterprise IT, delivering exceptional flexibility, scalability and speed. Read this #blog to gain actionable insights.
        https://zensar.co/2GvbGqc
        #DFSisHOW #digitalinfrastructure #DigitalFoundation`,
        cardDate: "",
        cardLabel: ""
      }
    ]
  },
  connectlayout: {
    heading: "Connect, Grow and...",
    description:
      "Bring your passion to work and accelerate your career at Zensar",
    buttonLabel: "Current Opportunities",
    overallCustomStyle: { background: colors.blue },
    contentCustomStyle: { width: `90%` },
    btnClassName: "btn--transparent",
    image: connectimage
  },
  questionLayout: {
    overallCustomStyle: { background: colors.blue },
    contentCustomStyle: { width: `90%` },
    leftcontent: {
      heading: "Sample left heading",
      description: "Sample description text, please edit and replace",
      buttonLabel: "Left button",
      callLink: "1234567890"
    },
    rightcontent: {
      heading: "Sample right heading",
      description: "",
      buttonLabel: "Right button",
      callLink: "1234567890"
    }
  },
  infoLayout: {
    overallCustomStyle: { background: colors.blue },
    contentCustomStyle: { width: `90%` },
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex porttitor, accumsan augue quis, vestibulum mauris. Nunc aliquam sagittis turpis vel semper. Ut eu orci non lacus pellentesque sollicitudin tempus quis nunc. Quisque fermentum, dolor nec vulputate egestas, est sem euismod orci, vitae lacinia ligula quam at elit. Nulla facilisi. Duis nunc nisl, tempor a pharetra at, pulvinar vel sapien. Praesent sagittis posuere magna nec condimentum. Sed maximus congue mauris efficitur tristique. In vestibulum egestas scelerisque. Ut eget felis odio. Phasellus et massa nunc."
  },
  listFooter: {
    overallCustomStyle: { background: colors.blue },
    contentCustomStyle: { width: `90%` },
    sectionList: [
      {
        heading: "Solutions",
        linklist: [
          "Digital Consulting", 
          "Digital Supply Chain", 
          "Living Digital", 
          "Enterprise Analytics", 
          "Customer Experience Transformation"
        ]
      },
      {
        heading: "Services",
        linklist: [
          "Outcome Based Managed Services",
          "Robotic Process Automation",
          "Oracle", 
          "Digital Workplace",
          "Experience Services",
          "Managed Commerce Services",
          "Advanced Data Warehousing"
        ]
      },
      {
        heading: "Insights",
        linklist: [
          "Analyst Insights",
          "Whitepapers",
          "Case Studies",
          "Zenlabs",
          "Blogs"
        ]
      },
      {
        heading: "Media",
        linklist: [
          "Press Releases",
          "News",
          "Media Kit", 
          "Events",
          "Webinars",
          "Video Gallery",
          "Advanced Data Warehousing"
        ]
      },
      {
        heading: "About Us",
        linklist: [
          "Our Story",
          "Contact Us",
          "CSR", 
          "Accreditations & Certifications",
          "Careers",
          "Investors"
        ]
      }
    ]
  },
  fullWithImage: {
    src: dogWithBoyImage,
    //src: `https://aquarian.co.uk/wp-content/uploads/2018/04/guide2fish_fish-5.png`,
    imageWithHeading: "GUIDE TO FISH",
    imageContentStyle: {},
    imageWithSubHeading:
      "Whether you’re new to fishkeeping or simply want to reacquaint yourself with the basics, the Guide to Fish will give you a useful overview of how to best care for and feed your aquarium friends.",
    imageButton: "Browse the Guide",
    imageWithContent: "no",
    imageWithButton: "no",
    contentAlignment: `imagecont--rightcenter`,
    imageStyle: {},
    contentStyle: {},
    buttonType: `btn--guide`
  },
  defaultVideoPath:
    "https://aquarian.co.uk/wp-content/uploads/2018/04/home_final.mp4",
  image: {
    imageWithHeading: "GUIDE TO FISH",
    imageWithSubHeading:
      "Whether you’re new to fishkeeping or simply want to reacquaint yourself with the basics, the Guide to Fish will give you a useful overview of how to best care for and feed your aquarium friends.",
    buttonLabel: "Browse the Guide",
    imageWithContent: "yes"
  },
  foodLabel: {
    label: "Dog food, care resources, and more for healthy, happy dogs",
    className: "home__dogfoodlabel"
  },
  reviewrproduct: {
    label: "Share your opinion  on your favorite PEDIGREE® products.",
    className: "reviewproduct__title",
    options: [
      {
        label: "Review a product"
      }
    ]
  },
  banner: {
    data: [
      { image: bannerCarouselImage1 },
      { image: bannerCarouselImage2 },
      { image: bannerCarouselImage3 },
      { image: bannerCarouselImage4 },
      { image: bannerCarouselImage5 },
      { image: bannerCarouselImage6 }
    ]
  },
  overlayCard: {
    cards: [
      {
        titleLabel: "Getting a Puppy?",
        image: gettingPuppy,
        alt: "Getting a Puppy",
        overlay: `Get tips from our experts on choosing and caring for your new puppy.`,
        ...commonText
      },
      {
        titleLabel: "How Old Is Your Dog?",
        alt: "How Old Is Your Dog",
        image: howOldYourDog,
        overlay: `Try our dog age calculator to see how old your dog is in human years.`,
        ...commonText
      }
    ]
  },
  cardWithText: {
    cardType: 2,
    girdStyle: {},
    cards: [
      {
        titleLabel: "Our Products",
        image: marsPed,
        alt: "Our Products",
        info: [`Check out our full line of dry food,`, `wet food and treats!`],
        ...commonText
      },
      {
        titleLabel: "Donate",
        image: donate,
        alt: "Donate",
        info: [`Donate to help feed more shelter dogs in need.`],
        ...commonText
      }
    ]
  },
  footer: [
    {
      parentClassName: "",
      className: "footernav--link",
      navigation: [
        {
          label: "Buy Now",
          to: "/"
        },
        {
          label: "FAQs",
          to: "/"
        },
        {
          label: "About Us",
          to: "/"
        },
        {
          label: "Contact Us",
          to: "/"
        },
        {
          label: "Foundation",
          to: "/"
        },
        { label: "Location Selector", to: "/" },
        { label: "Sitemap", to: "/" }
      ]
    },
    {
      parentClassName: "footernav__btmul",
      className: "footernav--underlinelink",
      navigation: [
        {
          label: "Privacy Policy",
          to: "/"
        },
        {
          label: "Cookies Notice",
          to: "/"
        },
        {
          label: "Cookie Settings",
          to: "/"
        },
        {
          label: "Legal",
          to: "/"
        },
        {
          label: "Modern Slavery Act",
          to: "/"
        },
        { label: "Supply Chain Transparency", to: "/" },
        { label: "Ad Choices", to: "/" },
        { label: "Accessibility", to: "/" }
      ]
    }
  ],
  explore: {
    label: `EXPLORE OUR PRODUCTS`,
    lists: [
      {
        label: `Bottom Feeder`,
        svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 259.8 259.8" xml:space="preserve">
  <style type="text/css">
    .st0106 {
        fill: #66C302;
    }
    
    .st1106 {
        filter: url(#Adobe_OpacityMaskFilter);
    }
    
    .st2106 {
        fill: #FFFFFF;
    }
    
    .st3106 {
        opacity: 0.4;
        mask: url(#SVGID_1_);
    }
    
    .st4106 {
        opacity: 0.4;
        fill: #231F20;
    }
  </style>
  <g id="Layer_2">
    <g>
      <rect class="st0106" width="259.8" height="259.8"></rect>
    </g>
    <g class="st1106">
      <rect class="st2106" y="5" width="259.8" height="259.8"></rect>
    </g>
    <g class="st3106">
      <path class="st4106" d="M259.3,207.3V70.9C218.7,70.3,139.7,73,84.1,99c-78,36.4-70.2,47.8-70.2,47.8c6.9,9.9,16.4,16.7,24.4,21.1                  l6.7,27.4c2.6-10.2,3-17.6,2.3-23c4.3,1.8,7.1,2.6,7.1,2.6C86.6,190.8,178.8,202,259.3,207.3z M156.4,118.2                  c26.6,34.8-6.8,58.2-6.8,58.2C173.5,149.9,156.4,118.2,156.4,118.2z M103.9,113.5c8,0,14.6,6.5,14.6,14.6s-6.5,14.6-14.6,14.6                  c-8,0-14.6-6.5-14.6-14.6S95.8,113.5,103.9,113.5z"></path>
    </g>
  </g>
  </svg>`
      },
      {
        label: `Goldfish`,
        svg: `<svg id="Layer_2100" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 145 144.8" style="background-color: #3355a3;">
        <style type="text/css">
          .st0 {
              fill: #0057A8;
          }
          .st2 {
              fill: #FFFFFF;
          }
          .st3 {
              opacity: 0.4;
              fill: #231F20;
          }
        </style>
        <g>
          <rect class="st0">
            <g class="st1">
              <rect class="st2" width="144.8" height="144.8"></rect>
            </g>
          </rect>
          <path class="st3" d="M145.1,27.3c-11.6,8.2-17.8,17.6-20.1,22c-3.8-2.1-8.2-3.9-12.8-5.6c4.1-3.7,9-6,9-6                            c-4.8-4.8-3.6-14.4-16.8-21.9C91.2,8.4,81.3,12,81.3,12c-5.6,1.3-10.1,5-13.7,9.2c2.5-8.3,6.3-13.1,6.3-13.1                            c-12.2,6.2-15.8,18.6-16.7,28c-6.9,1.5-13.5,4.4-19.4,8C37,44,36.3,44,35.6,44C21.1,44,9.3,55.7,9.3,70.3                            c0,13.4,10.1,24.5,23.1,26.1c9.4,7.4,21.7,12.9,34.4,12c3.7-0.2,7-0.7,10.2-1.3c2.1,7.9,9,27.3,27.1,29.7c0,0,21.3-2.7,21.6-11.4                            c0.3-8.7-0.9-13.8,4.2-15c0,0-10.9-5.8-23.5-5.4l15.4-1.2c0,0-14.1-3.8-27.3-2.7c16.9-8.9,24-23.6,33.7-31.8                            c0.7,4.7,4.8,9.7,10.3,14.4c1.9,2.7,4.2,5.6,6.6,8.5V27.3z M29.5,69.8c-3.1,0-5.7-2.6-5.7-5.7c0-3.1,2.6-5.7,5.7-5.7                            c3.1,0,5.7,2.6,5.7,5.7C35.2,67.3,32.6,69.8,29.5,69.8z M50.5,74.3c0,0.4-0.1,0.9-0.2,1.3c0,0.2-0.1,0.4-0.1,0.7                            c0,0.2-0.1,0.5-0.1,0.7c-0.1,0.4-0.2,0.9-0.4,1.3l-0.2,0.7c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.4-0.4,0.8-0.6,1.3                            c-0.2,0.4-0.5,0.8-0.7,1.2c-0.3,0.4-0.5,0.7-0.8,1.1c-0.3,0.3-0.6,0.7-0.9,1c-0.3,0.3-0.6,0.6-0.9,0.8c-0.3,0.2-0.6,0.5-0.9,0.7                            c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.2-0.6,0.3-0.9,0.5c-0.1,0.1-0.3,0.1-0.4,0.2C42,86.9,41.9,87,41.8,87c-0.5,0.2-1,0.4-1.4,0.5                            c-0.4,0.1-0.7,0.2-0.9,0.2c-0.2,0-0.3,0.1-0.3,0.1s0.1-0.1,0.2-0.2c0.2-0.1,0.4-0.3,0.7-0.6c0.3-0.2,0.6-0.6,1-0.9                            c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.4-0.5,0.7-0.7c0.2-0.3,0.4-0.5,0.6-0.8c0.2-0.3,0.4-0.6,0.6-0.9                            c0.2-0.3,0.4-0.6,0.6-0.9c0.2-0.3,0.4-0.6,0.6-1c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.2-0.4,0.3-0.7,0.5-1.1                            c0.1-0.2,0.1-0.4,0.2-0.6l0.2-0.6c0.1-0.4,0.2-0.8,0.4-1.1c0.1-0.4,0.2-0.8,0.3-1.2c0.2-0.8,0.3-1.6,0.4-2.3                            c0.1-0.4,0.1-0.8,0.2-1.1c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.4,0.2-2c0.1-1.3,0.1-2.4,0.1-3.1c0-0.8,0-1.2,0-1.2s0.2,0.4,0.5,1.1                            c0.2,0.4,0.3,0.8,0.5,1.3c0.2,0.5,0.3,1.1,0.5,1.8c0.1,0.7,0.3,1.4,0.3,2.2c0.1,0.8,0.1,1.6,0.1,2.5C50.5,73.4,50.5,73.8,50.5,74.3                            z"></path>
        </g>
      </svg>`
      },
      {
        label: `Holiday Feeder`,
        svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 259.8 259.8" xml:space="preserve">
        <style type="text/css">
            .st0107{fill:#92278F;}
            .st1107{opacity:0.3;}
            .st2107{fill:#231F20;}
        </style>
        <g id="Layer_1">
        </g>
        <g id="Layer_2">
            <rect class="st0107" width="259.8" height="259.8"></rect>
            <g class="st1107">
                <polygon class="st2107" points="213.1,43.5 47.5,43.5 75.7,71.7 184.9,71.7 		"></polygon>
                <polygon class="st2107" points="188.5,75.3 188.5,184.5 216.7,212.7 216.7,47.1 		"></polygon>
                <polygon class="st2107" points="72.1,75.3 43.9,47.1 43.9,212.7 72.1,184.5 		"></polygon>
                <polygon class="st2107" points="184.9,188.1 75.7,188.1 47.5,216.3 213.1,216.3 		"></polygon>
                <rect x="77.2" y="76.8" class="st2107" width="106.3" height="106.3"></rect>
            </g>
        </g>
        </svg>`
      },
      {
        label: `Tropical`,
        svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 259.9 259.8" xml:space="preserve" style="background-color: #bd1a8d;">
          <style type="text/css">
            .st0101 {
                fill: #BD1A8D;
            }
            
            .st1101 {
                filter: url(#Adobe_OpacityMaskFilter);
            }
            
            .st2101 {
                fill: #FFFFFF;
            }
            
            .st3101 {
                opacity: 0.4;
                mask: url(#SVGID_1_);
                fill: #231F20;
            }
          </style>
          <g id="Layer_2101">
            <g>
              <path class="st3101" d="M259.9,103.5c-7.3,8.6-12.7,16.6-15.2,20.4c-18.1-12.5-45.4-30-72.4-42.6c8.9-10.8,29.9-15.6,29.9-15.6                  c-43.4,3-30.1-51.3-30.1-51.3c-32.9,15.8-53.1,40.8-60.6,51.5c-50.5,3.5-96.9,48.8-96.9,73.4c0,25.5,50,73.5,102.7,73.6                  c7.1,8.6,21.7,25.6,30.6,32.3c0,0-2.9-15.1,2.5-25.3c2.2-4.3,1.1-9.1-1.9-12.9c32.4-10.8,69.5-34,93.3-50.2                  c5.1,9,11.5,15.6,18.1,20.5V103.5z M62.2,137.9c-7.2,0-13.1-5.9-13.1-13.1c0-7.2,5.9-13.1,13.1-13.1c7.2,0,13.1,5.9,13.1,13.1                  C75.3,132,69.4,137.9,62.2,137.9z M106.7,133.3c0,0.7-0.1,1.4-0.2,2.1c-0.1,1.4-0.3,2.8-0.6,4.2c-0.2,1.4-0.6,2.8-0.9,4.1                  c-0.4,1.3-0.8,2.6-1.3,3.9c-0.5,1.2-1,2.5-1.6,3.6c-0.6,1.1-1.2,2.3-1.8,3.3c-0.7,1-1.3,2-2,2.9c-0.7,0.9-1.4,1.7-2.1,2.5                  c-0.7,0.8-1.4,1.5-2.1,2.2c-0.3,0.3-0.7,0.6-1,1c-0.3,0.3-0.6,0.6-1,0.9c-1.3,1-2.4,2-3.5,2.6c-1,0.6-1.8,1.1-2.4,1.4                  c-0.6,0.3-0.9,0.5-0.9,0.5s0.2-0.3,0.5-0.9c0.3-0.5,0.8-1.4,1.4-2.3c0.6-1,1.3-2.2,2.1-3.6c0.4-0.7,0.8-1.4,1.2-2.2                  c0.4-0.8,0.9-1.6,1.2-2.4c0.4-0.9,0.8-1.7,1.2-2.7c0.4-1,0.7-1.9,1.1-2.9c0.3-1,0.7-2,1-3.1c0.3-1.1,0.6-2.1,0.9-3.2                  c0.2-1.1,0.5-2.2,0.7-3.4c0.1-0.6,0.2-1.2,0.2-1.7c0.1-0.6,0.2-1.2,0.2-1.8c0.1-1.2,0.2-2.4,0.3-3.6c0-0.6,0.1-1.2,0.1-1.8l0-1.8                  c0.1-1.2-0.1-2.4-0.1-3.7c-0.1-1.2-0.1-2.4-0.3-3.6c-0.2-2.4-0.6-4.8-0.9-7.1c-0.2-1.2-0.4-2.3-0.6-3.4c-0.2-1.1-0.4-2.2-0.7-3.3                  c-0.5-2.1-1-4.2-1.5-6.1c-1-3.8-1.9-6.9-2.6-9.2c-0.7-2.3-1.1-3.6-1.1-3.6s1,0.9,2.6,2.7c0.8,0.9,1.7,2,2.7,3.4                  c1,1.3,2,2.9,3.1,4.7c1,1.8,2.1,3.7,3.1,5.9c1,2.2,1.9,4.5,2.7,7c0.4,1.2,0.8,2.5,1,3.8c0.3,1.3,0.6,2.7,0.8,4                  c0.1,0.7,0.2,1.4,0.3,2.1c0.1,0.7,0.2,1.4,0.2,2.1c0.1,1.4,0.2,2.8,0.2,4.3L106.7,133.3z"></path>
            </g>
          </g>
        </svg>`
      },
      {
        label: `Water Care`,
        svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 259.8 259.8" xml:space="preserve">
        <style type="text/css">
            .st0108{fill:#E3A025;}
            .st1108{opacity:0.3;}
            .st2108{fill:#231F20;}
        </style>
        <g id="Layer_1">
        </g>
        <g id="Layer_2">
            <rect class="st0108" width="259.8" height="259.8"></rect>
            <g class="st1108">
                <path class="st2108" d="M241.4,73.4V49.5H240c-5.5,0-9.7,1.8-12.6,5.2c-5.1,6.2-4.3,15.8-3.9,18.7H15.9v136.8h227.9V73.4H241.4z
                     M229.5,56.5c2.1-2.5,5.2-4,9.2-4.2v21.2h-12.4C226,71.5,224.9,62,229.5,56.5z M214.9,82.4v19.3c0,0,0,8.6,10.1,8.6
                    c7.2,0,9.3-4.4,9.9-6.9v61.7h-210V82.4H214.9z"></path>
                <path class="st2108" d="M51.1,121.6c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10C41.2,117.1,45.6,121.6,51.1,121.6z
                     M51.1,106.2c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5C45.6,108.6,48.1,106.2,51.1,106.2z"></path>
                <path class="st2108" d="M58.2,130.7c0,2.9,2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2c0-2.9-2.3-5.2-5.2-5.2
                    C60.5,125.5,58.2,127.8,58.2,130.7z M63.4,128.2c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5
                    C60.8,129.3,62,128.2,63.4,128.2z"></path>
                <path class="st2108" d="M77.7,96.9c2.9,0,5.2-2.3,5.2-5.2c0-2.9-2.3-5.2-5.2-5.2s-5.2,2.3-5.2,5.2C72.5,94.5,74.8,96.9,77.7,96.9z
                     M77.7,89.2c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5C75.2,90.3,76.3,89.2,77.7,89.2z"></path>
                <path class="st2108" d="M148.6,153c0.3,0,0.7-0.1,0.9-0.4l58-58c0.5-0.5,0.5-1.4,0-1.9c-0.5-0.5-1.4-0.5-1.9,0l-58,58
                    c-0.5,0.5-0.5,1.4,0,1.9C148,152.9,148.3,153,148.6,153z"></path>
                <path class="st2108" d="M200.8,115.5l-30.4,30.4c-0.5,0.5-0.5,1.4,0,1.9c0.3,0.3,0.6,0.4,0.9,0.4c0.3,0,0.7-0.1,0.9-0.4l30.4-30.4
                    c0.5-0.5,0.5-1.4,0-1.9C202.2,115,201.4,115,200.8,115.5z"></path>
            </g>
        </g>
        </svg>`
      }
    ]
  }
};

export default App;
