
            import React from 'react'
            import { Header, Footer, SEO, appData, BannerCarousel, Title, Reviewproduct, 
    FullWidthImage, 
    
    Card, } from "../index"
            const Page = () => {
                        console.log('testing')
            const extractedProps = {"header":{"headerStyle":{"backgroundColor":"#ffb10e"},"isImageLink":"yes","bgImage":"https://www.pedigree.com/images/default-source/default-album/pedigree-logo.png","fontColor":"#ffffff","headerType":"default","isSearchRquired":"yes","data":[{"label":"Dog Foods","labelName":"Menu 1","to":"/","submenu":[{"label":"Dry Dog Foods","to":"/"},{"label":"Wet Dog Foods","to":"/"},{"label":"Dog Treats","to":"/"},{"label":"All Dog Foods","to":"/"}],"subMenuRequired":"yes"},{"label":"Why Pedigree","labelName":"Menu 2","to":"/","submenu":[{"label":"About Us","to":"/"},{"label":"Ingredients & Nutrition","to":"/"},{"label":"Waltham Centre","to":"/"}],"subMenuRequired":"yes"},{"label":"Dog Care","labelName":"Menu 3","to":"/","submenu":[{"label":"Training","to":"/"},{"label":"Health","to":"/"},{"label":"Dog Facts","to":"/"},{"label":"Dog Age Calculator","to":"/"},{"label":"Oral Care","to":"/"}],"subMenuRequired":"yes"},{"label":"Getting a new Dog","labelName":"Menu 4","to":"/","submenu":[{"label":"Getting a Puppy","to":"/"},{"label":"Getting an Adult Dog","to":"/"},{"label":"Breed Match","to":"/"},{"label":"Pupletes","to":"/"},{"label":"Oral Care","to":"/"}],"subMenuRequired":"yes"},{"label":"Helping Dogs","labelName":"Menu 5","to":"/","submenu":[{"label":"Adopt","to":"/"},{"label":"Support","to":"/"}],"subMenuRequired":"yes"},{"label":"Buy Now","labelName":"Menu 6","to":"/","submenu":[],"subMenuRequired":"yes"},{"label":"Newsletter","labelName":"Menu 7","to":"/","submenu":[],"subMenuRequired":"yes"}]},"bannerData":{"data":[{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg","isText":"no"}],"maxWidth":"100"},"foodLabel":{"label":"Dog food, care resources, and more for healthy, happy dogs","className":"home__dogfoodlabel"},"reviewrproduct":{"label":"Share your opinion  on your favorite PEDIGREE® products.","className":"reviewproduct__title","options":[{"label":"Review a product"}]},"videoBanner":{},"cardWithText":{"cardType":1,"cards":[{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg","titleLabel":"Getting a Puppy?","overlay":"Get tips from our experts on choosing and caring for your new puppy.","btnLabel":"Learn More"},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg","titleLabel":"How Old Is Your Dog?","overlay":"Try our dog age calculator to see how old your dog is in human years.","btnLabel":"Learn More"}]},"cardWithText2":{"cardType":2,"cards":[{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg","titleLabel":"Our Products","btnLabel":"Learn More","info":["Check out our full line of dry food,","wet food and treats!"]},{"image":"https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg","titleLabel":"Donate","btnLabel":"Learn More","info":["Donate to help feed more shelter dogs in need.",null]}]},"srcPath":"https://www.pedigree.com/images/default-source/full-width-images/dog-with-boy.jpg?sfvrsn=84ff6f49_2","image":{},"imageBanner":{"imageSourcePath":"https://www.pedigree.com/images/default-source/full-width-images/dog-with-boy.jpg?sfvrsn=84ff6f49_2","imageWithContent":"no","imageMaxWidth":"100"},"exploreData":{},"footer":[{"menuListOutput":7,"navigation":[{"label":"Buy Now","labelName":"Footer 1 - Menu 1","to":"/"},{"label":"FAQs","labelName":"Footer 1 - Menu 2","to":"/"},{"label":"About Us","labelName":"Footer 1 - Menu 3","to":"/"},{"label":"Contact Us","labelName":"Footer 1 - Menu 4","to":"/"},{"label":"Foundation","labelName":"Footer 1 - Menu 5","to":"/"},{"label":"Location Selector","labelName":"Footer 1 - Menu 6","to":"/"},{"label":"Sitemap","labelName":"Footer 1 - Menu 7","to":"/"}],"className":"footernav--link"},{"menuListOutput":8,"navigation":[{"label":"Privacy Policy","labelName":"Footer 2 - Menu 1","to":"/"},{"label":"Cookies Notice","labelName":"Footer 2 - Menu 2","to":"/"},{"label":"Cookie Settings","labelName":"Footer 2 - Menu 3","to":"/"},{"label":"Legal","labelName":"Footer 2 - Menu 4","to":"/"},{"label":"Modern Slavery Act","labelName":"Footer 2 - Menu 5","to":"/"},{"label":"Supply Chain Transparency","labelName":"Footer 2 - Menu 6","to":"/"},{"label":"Ad Choices","labelName":"Footer 2 - Menu 7","to":"/"},{"label":"Accessibility","labelName":"Footer 2 - Menu 8","to":"/"}],"className":"footernav--underlinelink"}],"socialMedia":"yes"}
              return (
                <>
                  <SEO title="Home" />
                  <Header
                    {...extractedProps.header}
                    menuSpacing={extractedProps.menuSpacing}
                    logoImage={extractedProps.header.bgImage}
                  /> <div className="home">
                      <BannerCarousel data={extractedProps.bannerData.data} maxWidth={extractedProps.bannerData.maxWidth} />
                      <Title {...appData.foodLabel} />
                      <Reviewproduct {...appData.reviewrproduct} />
                    
                  
                  <Card {...extractedProps.cardWithText} />
                  <Card {...extractedProps.cardWithText2} />
                  <FullWidthImage
                      src={extractedProps.imageBanner.imageSourcePath}
                      sourceType={extractedProps.imageBanner.sourceType}
                      imageWithContent={extractedProps.imageBanner.imageWithContent}
                      imageWithHeading={extractedProps.imageBanner.imageWithHeading}
                      headingColorValue={extractedProps.imageBanner.headingColorValue}
                      imageWithSubHeading={extractedProps.imageBanner.imageWithSubHeading}
                      subHeadingColorValue={extractedProps.imageBanner.subHeadingColorValue}
                      imageWithButton={extractedProps.imageBanner.imageWithButton}
                      imageButton={extractedProps.imageBanner.imageButton}
                      buttonType={extractedProps.imageBanner.buttonType}
                      contentAlignment={extractedProps.imageBanner.contentAlignment}
                      contentStyle={extractedProps.imageBanner.contentStyle}
                      maxWidth={extractedProps.imageBanner.imageMaxWidth}
                      imageContentStyle={extractedProps.imageBanner.imageContentStyle}
                      imageStyle={extractedProps.imageBanner.imageStyle}

                    />
                  
                  <Footer data={extractedProps.footer} socialMedia={extractedProps.socialMedia} /></div>
                </>
              )
            }
            export default Page;
