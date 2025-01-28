import CTA from "@/components/utils/CTA";
import PageLayout from "@/layouts/PageLayout";
import Banner from "../assets/ContactPageBanner.png"

const LOCATIONS = [
    {
      state: "Florida",
      city: "Bonita Springs",
      address: "28200 Old 41 Rd #208",
      fullAddress: "Bonita Springs, FL 34135",
      phone: "(817) 575-6220",
      link: "https://maps.google.com/?q=28200+Old+41+Rd+%23208+Bonita+Springs+FL+34135"
    },
    {
      state: "Georgia",
      city: "Atlanta",
      address: "3565 Piedmont Rd NE",
      address2: "Building 2, Suite 200",
      fullAddress: "Atlanta GA 30222",
      phone: "(404) 551-52222",
      link: "https://maps.google.com/?q=3565+Piedmont+Rd+NE+Building+2+Suite+200+Atlanta+GA+30222"
    },
    {
      state: "Kansas",
      city: "Kansas City",
      address: "12421 W. 151st St., Suite 100",
      fullAddress: "Olathe, KS 66000",
      phone: "(325) 221-9900",
      link: "https://maps.google.com/?q=12421+W.+151st+St.+Suite+100+Olathe+KS+66000"
    }
];


const RightSVG = ()=>{
    return (
        <svg width="379" height="373" viewBox="0 0 379 373" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2109 186.17L11.7109 197.67L0.210938 186.17L11.7109 174.67L23.2109 186.17ZM66.2109 186.67L57.2109 195.67L48.2109 186.67L57.2109 177.67L66.2109 186.67ZM110.211 186.17L102.711 193.67L95.2109 186.17L102.711 178.67L110.211 186.17ZM154.211 186.67L148.213 192.67L142.211 186.67L148.213 180.67L154.211 186.67ZM199.211 186.67L194.211 191.67L189.211 186.67L194.211 181.67L199.211 186.67ZM44.2109 209.17L33.7109 219.67L23.2109 209.17L33.7109 198.67L44.2109 209.17ZM88.2109 209.17L79.7133 217.67L71.2109 209.17L79.7133 200.67L88.2109 209.17ZM132.211 209.17L125.711 215.67L119.211 209.17L125.711 202.67L132.211 209.17ZM176.211 209.67L171.211 214.67L166.211 209.67L171.211 204.67L176.211 209.67ZM221.211 209.17L216.711 213.67L212.211 209.17L216.711 204.67L221.211 209.17ZM66.2109 231.67L57.2109 240.67L48.2109 231.67L57.2109 222.67L66.2109 231.67ZM110.211 231.17L102.711 238.67L95.2109 231.17L102.711 223.67L110.211 231.17ZM154.211 231.67L148.213 237.67L142.211 231.67L148.213 225.67L154.211 231.67ZM199.211 231.67L194.211 236.67L189.211 231.67L194.211 226.67L199.211 231.67ZM243.211 231.67L239.211 235.67L235.211 231.67L239.211 227.67L243.211 231.67ZM88.2109 254.17L79.7133 262.67L71.2109 254.17L79.7133 245.67L88.2109 254.17ZM132.211 254.17L125.711 260.67L119.211 254.17L125.711 247.67L132.211 254.17ZM176.211 254.67L171.211 259.67L166.211 254.67L171.211 249.67L176.211 254.67ZM221.211 254.17L216.711 258.67L212.211 254.17L216.711 249.67L221.211 254.17ZM266.211 254.67L262.214 258.67L258.211 254.67L262.214 250.67L266.211 254.67ZM110.211 278.17L102.711 285.67L95.2109 278.17L102.711 270.67L110.211 278.17ZM154.211 276.67L148.213 282.67L142.211 276.67L148.213 270.67L154.211 276.67ZM199.211 277.67L194.211 282.67L189.211 277.67L194.211 272.67L199.211 277.67ZM243.211 277.67L239.211 281.67L235.211 277.67L239.211 273.67L243.211 277.67ZM288.211 276.67L285.211 279.67L282.211 276.67L285.211 273.67L288.211 276.67ZM132.211 300.17L125.711 306.67L119.211 300.17L125.711 293.67L132.211 300.17ZM176.211 299.67L171.211 304.67L166.211 299.67L171.211 294.67L176.211 299.67ZM221.211 300.17L216.711 304.67L212.211 300.17L216.711 295.67L221.211 300.17ZM266.211 299.67L262.214 303.67L258.211 299.67L262.214 295.67L266.211 299.67ZM310.211 300.17L307.713 302.67L305.211 300.17L307.713 297.67L310.211 300.17ZM154.211 322.67L148.213 328.67L142.211 322.67L148.213 316.67L154.211 322.67ZM199.211 322.67L194.211 327.67L189.211 322.67L194.211 317.67L199.211 322.67ZM243.211 322.67L239.211 326.67L235.211 322.67L239.211 318.67L243.211 322.67ZM288.211 322.67L285.211 325.67L282.211 322.67L285.211 319.67L288.211 322.67ZM333.211 323.17L330.711 325.67L328.211 323.17L330.711 320.67L333.211 323.17ZM176.211 345.67L171.211 350.67L166.211 345.67L171.211 340.67L176.211 345.67ZM221.211 345.17L216.711 349.67L212.211 345.17L216.711 340.67L221.211 345.17ZM266.211 345.67L262.214 349.67L258.211 345.67L262.214 341.67L266.211 345.67ZM310.211 346.17L307.713 348.67L305.211 346.17L307.713 343.67L310.211 346.17ZM356.211 346.17L353.711 348.67L351.211 346.17L353.711 343.67L356.211 346.17ZM199.211 367.67L194.211 372.67L189.211 367.67L194.211 362.67L199.211 367.67ZM243.211 367.67L239.211 371.67L235.211 367.67L239.211 363.67L243.211 367.67ZM288.211 368.67L285.211 371.67L282.211 368.67L285.211 365.67L288.211 368.67ZM333.211 368.17L330.711 370.67L328.211 368.17L330.711 365.67L333.211 368.17ZM378.211 368.67L376.211 370.67L374.211 368.67L376.211 366.67L378.211 368.67ZM44.2109 163.17L33.7109 173.67L23.2109 163.17L33.7109 152.67L44.2109 163.17ZM88.2109 163.17L79.7133 171.67L71.2109 163.17L79.7133 154.67L88.2109 163.17ZM132.211 163.17L125.711 169.67L119.211 163.17L125.711 156.67L132.211 163.17ZM176.211 162.67L171.211 167.67L166.211 162.67L171.211 157.67L176.211 162.67ZM221.211 163.17L216.711 167.67L212.211 163.17L216.711 158.67L221.211 163.17ZM66.2109 140.67L57.2109 149.67L48.2109 140.67L57.2109 131.67L66.2109 140.67ZM110.211 141.17L102.711 148.67L95.2109 141.17L102.711 133.67L110.211 141.17ZM154.211 140.67L148.213 146.67L142.211 140.67L148.213 134.67L154.211 140.67ZM199.211 140.67L194.211 145.67L189.211 140.67L194.211 135.67L199.211 140.67ZM243.211 140.67L239.211 144.67L235.211 140.67L239.211 136.67L243.211 140.67ZM88.2109 118.17L79.7133 126.67L71.2109 118.17L79.7133 109.67L88.2109 118.17ZM132.211 118.17L125.711 124.67L119.211 118.17L125.711 111.67L132.211 118.17ZM176.211 117.67L171.211 122.67L166.211 117.67L171.211 112.67L176.211 117.67ZM221.211 118.17L216.711 122.67L212.211 118.17L216.711 113.67L221.211 118.17ZM266.211 117.67L262.214 121.67L258.211 117.67L262.214 113.67L266.211 117.67ZM110.211 94.17L102.711 101.67L95.2109 94.17L102.711 86.67L110.211 94.17ZM154.211 95.67L148.213 101.67L142.211 95.67L148.213 89.67L154.211 95.67ZM199.211 94.67L194.211 99.67L189.211 94.67L194.211 89.67L199.211 94.67ZM243.211 94.67L239.211 98.67L235.211 94.67L239.211 90.67L243.211 94.67ZM288.211 95.67L285.211 98.67L282.211 95.67L285.211 92.67L288.211 95.67ZM132.211 73.17L125.711 79.67L119.211 73.17L125.711 66.67L132.211 73.17ZM176.211 72.67L171.211 77.67L166.211 72.67L171.211 67.67L176.211 72.67ZM221.211 72.17L216.711 76.67L212.211 72.17L216.711 67.67L221.211 72.17ZM266.211 72.67L262.214 76.67L258.211 72.67L262.214 68.67L266.211 72.67ZM310.211 73.17L307.713 75.67L305.211 73.17L307.713 70.67L310.211 73.17ZM154.211 49.67L148.213 55.67L142.211 49.67L148.213 43.67L154.211 49.67ZM199.211 49.67L194.211 54.67L189.211 49.67L194.211 44.67L199.211 49.67ZM243.211 49.67L239.211 53.67L235.211 49.67L239.211 45.67L243.211 49.67ZM288.211 49.67L285.211 52.67L282.211 49.67L285.211 46.67L288.211 49.67ZM333.211 49.17L330.711 51.67L328.211 49.17L330.711 46.67L333.211 49.17ZM176.211 26.67L171.211 31.67L166.211 26.67L171.211 21.67L176.211 26.67ZM221.211 27.17L216.711 31.67L212.211 27.17L216.711 22.67L221.211 27.17ZM266.211 26.67L262.214 30.67L258.211 26.67L262.214 22.67L266.211 26.67ZM310.211 26.17L307.713 28.67L305.211 26.17L307.713 23.67L310.211 26.17ZM356.211 26.17L353.711 28.67L351.211 26.17L353.711 23.67L356.211 26.17ZM199.211 4.67004L194.211 9.67004L189.211 4.67004L194.211 -0.329956L199.211 4.67004ZM243.211 4.67004L239.211 8.67004L235.211 4.67004L239.211 0.670044L243.211 4.67004ZM288.211 3.67004L285.211 6.67004L282.211 3.67004L285.211 0.670044L288.211 3.67004ZM333.211 4.17004L330.711 6.67004L328.211 4.17004L330.711 1.67004L333.211 4.17004ZM378.211 3.67004L376.211 5.67004L374.211 3.67004L376.211 1.67004L378.211 3.67004Z" fill="#DEE0FF"/>
        </svg>
    )
}
const Heading = () =>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-9">
                <div className="flex flex-col items-center">
                    <div className="rounded uppercase p-2 text-[10px] max-w-fit font-semibold bg-[#F5F5F5] text-[#5F6567]">
                        contact
                    </div>
                    <div className=" text-[#0A0D31] text-6xl font-semibold pt-6 pb-14">
                        We’re here to help
                    </div>
                    <div className="pb-8 text-center">
                        Call us at: 1-800-356-8933 
                        <br />or
                        <br />Email us at: info@inventsoftlabs.com
                    </div>
                    <CTA text="Schedule a free Consultation"/>
                </div>
                <img className="mt-8" src={Banner.src}/>
            </div>
        </div>
    )
}

const OurLocations = ()=>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-6">
                        <div className="text-[44px] font-semibold text-[#0A0D31]">
                            Our locations
                        </div>
                        <div className="text-xl text-[#00000099]">
                            We have offices throughout the East Coast, Midwest, <br />
                            and South — we’d love to show you around sometime. <br />
                            Don’t see an office in your area? We have the power to <br />
                            support your business, no matter the location.
                        </div>
                    </div>
                    <RightSVG/>
                </div>
            </div>
        </div>
    )
}

const Location = ()=>{
    return (
        <div className="bg-red-500">
            Helloi
        </div>
    )
}

const Locations = () =>{
    return (
        <div className="w-full py-12">
            <div className="max-w-screen-xl mx-auto flex gap-16">
                <div className="bg-red-400 flex-1">
                    Hel
                </div>
                <div className="bg-red-400 flex-1">
                    Hel
                </div>
                <div className="bg-red-400 flex-1">
                    Hel
                </div>
            </div>
        </div>
    )
}

const Contact =()=>{
    return (
        <PageLayout>
            <Heading/>
            <OurLocations/>
            <Locations/>
        </PageLayout>
    )
}

export default Contact;