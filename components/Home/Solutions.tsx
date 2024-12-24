const SolutionCard = () =>{
    return (
        <div className="flex-1 flex flex-col justify-between aspect-square bg-[#11002C] text-white p-8 rounded">
            <div className="flex flex-col gap-4">
                <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_1033)">
                <path d="M46.5631 36.6025V47.584L46.1187 47.3301L45.5474 47.0127L45.357 46.9492C44.7222 46.6107 44.1933 46.3779 43.7701 46.251C43.3469 46.124 43.0295 46.0817 42.8179 46.124C42.0562 46.251 41.5802 46.5789 41.3897 47.1079C41.1993 47.6369 41.2522 48.2822 41.5484 49.0439C41.633 49.2979 41.7388 49.5623 41.8658 49.8374C41.9927 50.1125 42.1409 50.4193 42.3101 50.7578L42.5006 51.1387L43.7701 53.4238C43.8547 53.5931 43.9923 53.7941 44.1827 54.0269C44.3731 54.2596 44.5741 54.4818 44.7857 54.6934C44.955 54.8626 45.1243 55.0213 45.2935 55.1694C45.4628 55.3175 45.6532 55.4762 45.8648 55.6455C46.0341 55.7725 46.1928 55.8994 46.3409 56.0264C46.489 56.1533 46.6477 56.2803 46.817 56.4072L47.5152 56.915L47.7691 57.1055V57.8672H45.357V64.0244H46.6265V59.1367H59.1949V64.0244H60.4644V57.8672H57.8619V57.8037C57.8619 57.7191 57.8619 57.6344 57.8619 57.5498C57.8619 57.4652 57.8619 57.3805 57.8619 57.2959V56.9785C57.8619 56.8516 57.8619 56.7458 57.8619 56.6611C57.8619 56.5765 57.883 56.513 57.9254 56.4707V56.4072C57.9254 56.3226 57.9465 56.2274 57.9888 56.1216C58.0312 56.0158 58.0735 55.8994 58.1158 55.7725L59.0679 52.916C59.1526 52.6198 59.2372 52.3447 59.3218 52.0908C59.4065 51.8369 59.4911 51.6042 59.5758 51.3926C59.8297 50.5039 60.0201 49.7316 60.147 49.0757C60.274 48.4198 60.3375 47.8379 60.3375 47.3301V38.7607H59.0679V47.3301C59.0679 47.7109 59.0045 48.187 58.8775 48.7583C58.7506 49.3296 58.6024 49.9749 58.4332 50.6943L58.3062 51.0117C58.2639 51.1387 58.2322 51.255 58.211 51.3608C58.1898 51.4666 58.1581 51.583 58.1158 51.71L57.7984 52.6621L57.1002 54.6934C56.9732 55.0742 56.8674 55.4233 56.7828 55.7407C56.6982 56.0581 56.6347 56.2591 56.5924 56.3438C56.5924 56.4707 56.5924 56.6082 56.5924 56.7563C56.5924 56.9045 56.5924 57.0843 56.5924 57.2959V57.8672H49.0386V56.4072L48.7213 56.2168C48.6789 56.1745 48.6049 56.111 48.4991 56.0264C48.3933 55.9417 48.2558 55.8571 48.0865 55.7725C47.8326 55.6032 47.5893 55.4233 47.3565 55.2329C47.1238 55.0425 46.9016 54.8415 46.69 54.6299C46.4784 54.5029 46.2986 54.3654 46.1505 54.2173C46.0023 54.0692 45.8437 53.9316 45.6744 53.8047C45.5474 53.6354 45.4205 53.4767 45.2935 53.3286C45.1666 53.1805 45.0608 53.043 44.9761 52.916L44.8492 52.7256L43.5797 50.4404C43.3681 50.0596 43.1988 49.721 43.0718 49.4248C42.9449 49.1286 42.8391 48.8535 42.7545 48.5996C42.5852 48.1764 42.5217 47.8802 42.564 47.7109C42.6064 47.5417 42.7545 47.4359 43.0084 47.3936C43.0507 47.3936 43.2411 47.457 43.5797 47.584C43.9182 47.7109 44.3202 47.8802 44.7857 48.0918L45.1666 48.2822C45.2935 48.3669 45.4205 48.4409 45.5474 48.5044C45.6744 48.5679 45.8225 48.6419 45.9918 48.7266L46.7535 49.1709L47.8961 49.8057V36.6025H46.5631ZM40.5328 16.6074C40.5328 17.0306 40.5963 17.4326 40.7232 17.8135C40.8502 18.1943 41.0194 18.554 41.231 18.8926C41.358 19.0195 41.4426 19.1888 41.4849 19.4004C41.5273 19.612 41.5484 19.8447 41.5484 20.0986V22.5742H27.8375V23.9072H32.8521V31.334H30.3765C30.2073 31.334 29.9957 31.2917 29.7418 31.207C29.4879 31.1224 29.2551 31.0378 29.0435 30.9531L28.8531 30.8262C28.4299 30.5723 27.9644 30.403 27.4566 30.3184C26.9488 30.2337 26.441 30.2549 25.9332 30.3818C25.2138 30.5511 24.6002 30.8896 24.0924 31.3975C23.5845 31.9053 23.246 32.4977 23.0767 33.1748C22.7382 34.4443 22.9709 35.5869 23.775 36.6025C24.579 37.6182 25.6158 38.126 26.8853 38.126C27.3085 38.126 27.7105 38.0625 28.0914 37.9355C28.4722 37.8086 28.8108 37.6393 29.107 37.4277C29.2763 37.3008 29.4667 37.2161 29.6783 37.1738C29.8899 37.1315 30.1226 37.1104 30.3765 37.1104H32.8521V44.5371H24.0924V48.3457C24.0924 48.6842 24.1347 49.0016 24.2193 49.2979C24.3039 49.5941 24.4097 49.8691 24.5367 50.123L24.6636 50.3135C24.8329 50.5251 24.9599 50.7578 25.0445 51.0117C25.1291 51.2656 25.1715 51.5195 25.1715 51.7734C25.1715 52.6621 24.8223 53.3709 24.1241 53.8999C23.4259 54.4289 22.6536 54.5876 21.8072 54.376C21.3417 54.249 20.9397 54.0163 20.6011 53.6777C20.2626 53.3392 20.051 52.9372 19.9664 52.4717C19.8817 52.1331 19.85 51.8158 19.8712 51.5195C19.8923 51.2233 19.9875 50.9271 20.1568 50.6309L20.2203 50.4404C20.4319 50.1442 20.6011 49.7951 20.7281 49.3931C20.8551 48.991 20.9185 48.6419 20.9185 48.3457V44.5371H12.1588V35.8408H8.41365C8.11742 35.8408 7.78946 35.8831 7.42976 35.9678C7.07006 36.0524 6.7421 36.1794 6.44587 36.3486L6.31892 36.4756C6.10733 36.6025 5.88516 36.6978 5.65242 36.7612C5.41967 36.8247 5.17634 36.8564 4.92244 36.8564C4.07608 36.8564 3.37784 36.5179 2.82771 35.8408C2.27758 35.1637 2.12947 34.3809 2.38337 33.4922C2.46801 33.069 2.69018 32.6882 3.04988 32.3496C3.40958 32.0111 3.80102 31.7783 4.22419 31.6514L3.97029 30.3818C3.2932 30.5511 2.69018 30.8896 2.16121 31.3975C1.63223 31.9053 1.28311 32.4977 1.11384 33.1748C0.7753 34.4443 1.00805 35.5869 1.81208 36.6025C2.61612 37.6182 3.6529 38.126 4.92244 38.126C5.26098 38.126 5.57836 38.0837 5.87458 37.999C6.17081 37.9144 6.46703 37.8086 6.76326 37.6816L6.95369 37.5547C7.16527 37.4277 7.4086 37.3219 7.68367 37.2373C7.95873 37.1527 8.20206 37.1104 8.41365 37.1104H10.8892V45.8066H19.5855V48.3457C19.5855 48.515 19.5538 48.7266 19.4903 48.9805C19.4268 49.2344 19.3316 49.4671 19.2047 49.6787L19.1412 49.8057C18.8873 50.2288 18.718 50.6943 18.6334 51.2021C18.5487 51.71 18.5699 52.2389 18.6968 52.7891C18.8661 53.4661 19.2047 54.0586 19.7125 54.5664C20.2203 55.0742 20.8127 55.4128 21.4898 55.582C22.7593 55.9206 23.9019 55.6984 24.9176 54.9155C25.9332 54.1326 26.441 53.0853 26.441 51.7734C26.441 51.3926 26.3775 51.0117 26.2506 50.6309C26.1236 50.25 25.9543 49.8903 25.7427 49.5518C25.6158 49.3825 25.5312 49.2026 25.4888 49.0122C25.4465 48.8218 25.4254 48.5996 25.4254 48.3457V45.8066H39.4537V44.5371H34.1217V35.8408H30.3765C30.038 35.8408 29.71 35.8726 29.3927 35.936C29.0753 35.9995 28.7896 36.0947 28.5357 36.2217L28.4088 36.3486C28.1549 36.5179 27.901 36.6449 27.647 36.7295C27.3931 36.8141 27.1392 36.8564 26.8853 36.8564C25.9967 36.8564 25.2878 36.5179 24.7589 35.8408C24.2299 35.1637 24.0924 34.3809 24.3463 33.4922C24.4309 33.069 24.6531 32.6882 25.0128 32.3496C25.3725 32.0111 25.7639 31.7783 26.1871 31.6514C26.5256 31.5667 26.8536 31.5456 27.171 31.5879C27.4884 31.6302 27.774 31.7148 28.0279 31.8418L28.2183 31.9688C28.5146 32.138 28.8637 32.2861 29.2657 32.4131C29.6677 32.54 30.038 32.6035 30.3765 32.6035H34.1217V23.9072H42.8814V20.0986C42.8814 19.7601 42.8391 19.4427 42.7545 19.1465C42.6698 18.8503 42.564 18.5752 42.4371 18.3213L42.3101 18.1309C42.1409 17.9193 42.0139 17.6865 41.9293 17.4326C41.8446 17.1787 41.8023 16.9036 41.8023 16.6074C41.8023 15.7611 42.1514 15.0734 42.8497 14.5444C43.5479 14.0155 44.3202 13.8568 45.1666 14.0684C45.6321 14.1953 46.0341 14.4281 46.3726 14.7666C46.7112 15.1051 46.9228 15.5072 47.0074 15.9727C47.092 16.2689 47.1238 16.5757 47.1026 16.8931C47.0815 17.2104 46.9862 17.5173 46.817 17.8135L46.7535 17.9404C46.5419 18.2367 46.3726 18.5964 46.2457 19.0195C46.1187 19.4427 46.0552 19.8024 46.0552 20.0986V23.9072H54.815V32.6035H58.5601C58.8564 32.6035 59.1843 32.5506 59.544 32.4448C59.9037 32.339 60.2317 32.2227 60.5279 32.0957L60.6549 31.9688C60.8664 31.8418 61.0886 31.7466 61.3214 31.6831C61.5541 31.6196 61.7974 31.5879 62.0513 31.5879C62.94 31.5879 63.6488 31.9264 64.1778 32.6035C64.7068 33.2806 64.8443 34.0635 64.5904 34.9521C64.5058 35.3753 64.2836 35.7562 63.9239 36.0947C63.5642 36.4333 63.1728 36.666 62.7496 36.793L63.0035 37.999C63.6806 37.8298 64.2836 37.5018 64.8126 37.0151C65.3415 36.5285 65.6907 35.9466 65.8599 35.2695C66.1985 33.9577 65.9657 32.7939 65.1617 31.7783C64.3577 30.7627 63.3209 30.2549 62.0513 30.2549C61.6705 30.2549 61.3108 30.3078 60.9722 30.4136C60.6337 30.5194 60.3163 30.6781 60.0201 30.8896C59.8085 31.0166 59.5652 31.1224 59.2901 31.207C59.015 31.2917 58.7717 31.334 58.5601 31.334H56.0845V22.5742H47.3883V20.0986C47.3883 19.9294 47.42 19.7178 47.4835 19.4639C47.5469 19.21 47.6422 18.9772 47.7691 18.7656L47.8326 18.6387C48.0865 18.1732 48.2558 17.6865 48.3404 17.1787C48.425 16.6709 48.4039 16.1631 48.2769 15.6553C48.1077 14.9782 47.7691 14.3752 47.2613 13.8462C46.7535 13.3172 46.161 12.9681 45.484 12.7988C44.2144 12.5026 43.0718 12.7459 42.0562 13.5288C41.0406 14.3117 40.5328 15.3379 40.5328 16.6074ZM54.8785 36.0947V43.7754H56.148V36.0947H54.8785ZM50.7525 34.5713V43.1406H52.022V34.5713H50.7525ZM14.9517 25.3037V33.873H16.2213V25.3037H14.9517ZM10.8258 24.6055V32.2861H12.0953V24.6055H10.8258ZM20.3472 4.35645V9.24414H7.77888V4.35645H6.50935V10.5771H9.11189V10.8945V11.1484C9.11189 11.3177 9.11189 11.4764 9.11189 11.6245C9.11189 11.7726 9.09073 11.889 9.04841 11.9736V12.0371C9.04841 12.0794 9.03783 12.1429 9.01667 12.2275C8.99551 12.3122 8.96378 12.418 8.92146 12.5449L7.90583 15.5283L7.65193 16.3535C7.60961 16.4805 7.56729 16.5968 7.52497 16.7026C7.48266 16.8084 7.44034 16.9248 7.39802 17.0518L7.20759 17.75C7.03832 18.4694 6.90079 19.1042 6.79499 19.6543C6.6892 20.2044 6.6363 20.6911 6.6363 21.1143V29.6836H7.96931V21.1143C7.96931 20.6911 8.02221 20.1727 8.128 19.5591C8.2338 18.9455 8.41365 18.2367 8.66755 17.4326L8.85798 16.7344L9.11189 15.9092C9.19652 15.7399 9.41869 15.0946 9.77839 13.9731C10.1381 12.8517 10.3391 12.2275 10.3814 12.1006C10.3814 11.9736 10.3814 11.8255 10.3814 11.6562C10.3814 11.487 10.3814 11.3177 10.3814 11.1484V10.8945V10.5771H17.9351V12.0371L18.2525 12.2275C18.2948 12.2699 18.3689 12.3333 18.4747 12.418C18.5805 12.5026 18.718 12.5872 18.8873 12.6719C19.1412 12.8411 19.3845 13.021 19.6173 13.2114C19.85 13.4019 20.0722 13.5817 20.2838 13.751C20.4954 13.9202 20.6752 14.0789 20.8233 14.2271C20.9714 14.3752 21.1301 14.5127 21.2994 14.6396C21.4687 14.8089 21.6062 14.9676 21.712 15.1157C21.8178 15.2638 21.913 15.4014 21.9976 15.5283L22.1246 15.7188L23.3306 17.877L23.648 18.4482C23.775 18.7445 23.8913 18.9984 23.9971 19.21C24.1029 19.4216 24.177 19.612 24.2193 19.7812C24.3886 20.2467 24.4521 20.5641 24.4097 20.7334C24.3674 20.9027 24.2193 21.0085 23.9654 21.0508C23.9231 21.0508 23.7327 20.9873 23.3941 20.8604C23.0556 20.7334 22.6536 20.5641 22.1881 20.3525L21.8072 20.1621C21.6802 20.0775 21.5533 20.0034 21.4263 19.9399C21.2994 19.8765 21.1513 19.8024 20.982 19.7178L20.0933 19.21L19.0777 18.6387V31.7783H20.4107V20.8604L20.8551 21.0508L21.2359 21.3047L21.6802 21.4951C22.315 21.7913 22.8334 22.0135 23.2354 22.1616C23.6374 22.3097 23.9442 22.3626 24.1558 22.3203C24.9176 22.151 25.3936 21.8125 25.5841 21.3047C25.7745 20.7969 25.7216 20.1621 25.4254 19.4004C25.383 19.1888 25.309 18.9561 25.2032 18.7021C25.0974 18.4482 24.9599 18.1732 24.7906 17.877L24.4097 17.1787L23.2037 15.0205C23.119 14.8089 22.9815 14.5973 22.7911 14.3857C22.6007 14.1742 22.3996 13.9626 22.1881 13.751C22.0188 13.5817 21.8495 13.423 21.6802 13.2749C21.511 13.1268 21.3205 12.9681 21.109 12.7988C20.8974 12.5872 20.6646 12.3862 20.4107 12.1958C20.1568 12.0054 19.9029 11.8255 19.649 11.6562L19.2681 11.3389V10.5771H21.6802V4.35645H20.3472Z" fill="#7B2CBF"/>
                </g>
                <defs>
                <clipPath id="clip0_1_1033">
                <rect width="65" height="65" fill="white" transform="matrix(1 0 0 -1 0.986816 65.3574)"/>
                </clipPath>
                </defs>
                </svg>
                <div>
                    Managed Services
                </div>
                <div className="text-xs gilroy">
                    Free up your internal resources to focus on the
                    business by letting us handle day to day support
                    services, management, and monitoring of your IT.
                </div>
            </div>
            <button className="border-b-[#7B2CBF] text-[#7B2CBF] max-w-fit border-b-2">
                Learn More
            </button>
        </div>
    )
}

const Solutions = () =>{
    return (
        <div className="w-full py-16">
            <div className="max-w-screen-lg mx-auto">
                <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#F5F5F5] text-[#5F6567]">
                    HOW WE DO
                </div>
                <div className="pt-5 pb-7 text-5xl font-semibold">Solutions</div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-8">
                        <SolutionCard/>
                        <SolutionCard/>
                        <SolutionCard/>
                    </div>
                    <div className="flex gap-8">
                        <SolutionCard/>
                        <SolutionCard/>
                        <SolutionCard/>
                    </div>
                </div>
                <div className="py-10 flex items-center justify-center">
                    <button className="bg-[#7B2CBF] py-3.5 px-6 text-white text-sm rounded">
                        View all Solutions
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Solutions;