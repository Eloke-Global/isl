interface Values{
    svg:React.FC,
    title:string,
    desc:string
}

const VALUES = [
    {
        svg: ()=>(
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.4258 0.870117V7.05762H65.6133V8.60449H58.9746L54.7207 12.8584C56.0957 14.2764 57.3203 15.8232 58.3945 17.499C59.4258 19.1318 60.3174 20.8613 61.0693 22.6875C61.8213 24.5137 62.4121 26.4365 62.8418 28.4561C63.2285 30.4326 63.4219 32.4736 63.4219 34.5791C63.4219 38.9619 62.6055 43.0654 60.9727 46.8896C59.2969 50.7139 57.0303 54.0547 54.1729 56.9121C51.3154 59.7695 47.9746 62.0146 44.1504 63.6475C40.3262 65.3232 36.2441 66.1611 31.9043 66.1611C27.5645 66.1611 23.4824 65.3232 19.6582 63.6475C15.834 62.0146 12.4932 59.7695 9.63574 56.9121C6.77832 54.0547 4.51172 50.7139 2.83594 46.8896C1.20312 43.0654 0.386719 38.9619 0.386719 34.5791C0.386719 30.2393 1.20312 26.1572 2.83594 22.333C4.51172 18.5088 6.77832 15.168 9.63574 12.3105C12.4932 9.45312 15.834 7.20801 19.6582 5.5752C23.4824 3.89941 27.5645 3.06152 31.9043 3.06152C34.0098 3.06152 36.0723 3.27637 38.0918 3.70605C40.0684 4.09277 41.9805 4.66211 43.8281 5.41406C45.6758 6.16602 47.416 7.0791 49.0488 8.15332C50.6816 9.22754 52.207 10.4307 53.625 11.7627L57.8789 7.50879V0.870117H59.4258ZM2.25586 30.7764C2.16992 31.335 2.10547 31.9473 2.0625 32.6133C2.01953 33.2793 1.99805 33.9561 1.99805 34.6436C1.99805 38.8115 2.79297 42.7002 4.38281 46.3096C5.92969 49.9619 8.05664 53.1416 10.7637 55.8486C13.4707 58.5557 16.6504 60.7041 20.3027 62.2939C23.9551 63.8408 27.8438 64.6143 31.9688 64.6143C36.0938 64.6143 39.9824 63.8408 43.6348 62.2939C47.2441 60.7041 50.4131 58.5557 53.1416 55.8486C55.8701 53.1416 58.0078 49.9619 59.5547 46.3096C61.1445 42.7002 61.9395 38.8115 61.9395 34.6436C61.9395 32.667 61.7461 30.7119 61.3594 28.7783C60.9727 26.8877 60.4248 25.0723 59.7158 23.332C59.0068 21.5918 58.1367 19.9268 57.1055 18.3369C56.0742 16.79 54.9141 15.3291 53.625 13.9541L47.8242 19.7549C49.6289 21.6885 51.0576 23.9336 52.1104 26.4902C53.1631 29.0469 53.6895 31.7646 53.6895 34.6436C53.6895 37.6514 53.1094 40.4873 51.9492 43.1514C50.832 45.7725 49.2852 48.0713 47.3086 50.0479C45.332 52.0244 43.0117 53.5928 40.3477 54.7529C37.7266 55.8701 34.8906 56.4287 31.8398 56.4287C28.832 56.4287 26.0176 55.8701 23.3965 54.7529C20.7324 53.5928 18.4121 52.0244 16.4355 50.0479C14.459 48.0713 12.9121 45.7725 11.7949 43.1514C10.6348 40.4873 10.0547 37.6514 10.0547 34.6436C10.0547 31.6357 10.6348 28.7998 11.7949 26.1357C12.9121 23.5146 14.459 21.2158 16.4355 19.2393C18.4121 17.2627 20.7324 15.6943 23.3965 14.5342C26.0176 13.374 28.832 12.7939 31.8398 12.7939C34.7188 12.7939 37.4365 13.3203 39.9932 14.373C42.5498 15.4258 44.7949 16.8545 46.7285 18.6592L52.5293 12.8584C51.1973 11.6123 49.7363 10.4736 48.1465 9.44238C46.5996 8.4541 44.9561 7.60547 43.2158 6.89648C41.4756 6.1875 39.6602 5.63965 37.7695 5.25293C35.8789 4.86621 33.9453 4.67285 31.9688 4.67285C28.1445 4.67285 24.5566 5.33887 21.2051 6.6709C17.8105 8.00293 14.792 9.8291 12.1494 12.1494C9.50684 14.4697 7.32617 17.2197 5.60742 20.3994C3.88867 23.5361 2.77148 26.9307 2.25586 30.583V30.7764ZM31.8398 14.4053C29.0469 14.4053 26.4258 14.9209 23.9766 15.9521C21.5273 17.0264 19.3896 18.4766 17.5635 20.3027C15.7373 22.1289 14.2871 24.2881 13.2129 26.7803C12.1387 29.2295 11.6016 31.8506 11.6016 34.6436C11.6016 37.4365 12.1387 40.0576 13.2129 42.5068C14.2871 44.9561 15.7373 47.1045 17.5635 48.9521C19.3896 50.7998 21.5273 52.2393 23.9766 53.2705C26.4258 54.3447 29.0469 54.8818 31.8398 54.8818C34.6758 54.8818 37.3184 54.3447 39.7676 53.2705C42.2168 52.2393 44.3545 50.7998 46.1807 48.9521C48.0068 47.1045 49.457 44.9561 50.5312 42.5068C51.6055 40.0576 52.1426 37.4365 52.1426 34.6436C52.1426 31.9795 51.6592 29.4658 50.6924 27.1025C49.7256 24.7393 48.4043 22.6553 46.7285 20.8506V20.915L40.9922 26.6514L41.3789 27.1025C42.1953 28.1338 42.8398 29.2832 43.3125 30.5508C43.7852 31.8184 44.0215 33.1611 44.0215 34.5791C44.0215 37.9307 42.8291 40.7881 40.4443 43.1514C38.0596 45.5146 35.2129 46.6963 31.9043 46.6963C28.5527 46.6963 25.6953 45.5146 23.332 43.1514C20.9688 40.7881 19.7871 37.9307 19.7871 34.5791C19.7871 31.2705 20.9688 28.4238 23.332 26.0391C25.6953 23.6543 28.5527 22.4619 31.9043 22.4619C33.4082 22.4619 34.8477 22.7412 36.2227 23.2998C37.5977 23.8584 38.8223 24.6104 39.8965 25.5557V25.4912L45.6328 19.7549C43.8281 18.0791 41.7549 16.7686 39.4131 15.8232C37.0713 14.8779 34.5684 14.4053 31.9043 14.4053C31.9043 14.4053 31.8936 14.4053 31.8721 14.4053C31.8506 14.4053 31.8398 14.4053 31.8398 14.4053ZM25.3301 26.2646C24.127 27.2529 23.1602 28.4668 22.4297 29.9062C21.6992 31.3457 21.334 32.9033 21.334 34.5791C21.334 37.501 22.3652 39.9932 24.4277 42.0557C26.4902 44.1182 28.9609 45.1494 31.8398 45.1494C34.7617 45.1494 37.2539 44.1182 39.3164 42.0557C41.3789 39.9932 42.4102 37.501 42.4102 34.5791C42.4102 33.2471 42.1846 32.001 41.7334 30.8408C41.2822 29.6807 40.6699 28.6494 39.8965 27.7471L34.0312 33.5479C34.1172 33.7197 34.1816 33.8916 34.2246 34.0635C34.2676 34.2354 34.2891 34.4072 34.2891 34.5791C34.2891 35.2666 34.0527 35.8359 33.5801 36.2871C33.1074 36.7383 32.5273 36.9639 31.8398 36.9639C31.1953 36.9639 30.6367 36.7383 30.1641 36.2871C29.6914 35.8359 29.4551 35.2666 29.4551 34.5791C29.4551 33.9346 29.6914 33.376 30.1641 32.9033C30.6367 32.4307 31.1953 32.1943 31.8398 32.1943C32.0547 32.1943 32.2588 32.2158 32.4521 32.2588C32.6455 32.3018 32.8281 32.3662 33 32.4521H32.9355L38.8008 26.6514C37.8555 25.835 36.792 25.2012 35.6104 24.75C34.4287 24.2988 33.1719 24.0732 31.8398 24.0732C30.6367 24.0732 29.4766 24.2666 28.3594 24.6533C27.2422 25.04 26.2324 25.5986 25.3301 26.3291V26.2646ZM31.9043 33.7412C31.6465 33.7412 31.4424 33.8271 31.292 33.999C31.1416 34.1709 31.0664 34.3643 31.0664 34.5791C31.0664 34.8369 31.1416 35.041 31.292 35.1914C31.4424 35.3418 31.6465 35.417 31.9043 35.417C32.1191 35.417 32.3018 35.3418 32.4521 35.1914C32.6025 35.041 32.6777 34.8369 32.6777 34.5791C32.6777 34.3643 32.6025 34.1709 32.4521 33.999C32.3018 33.8271 32.1191 33.7412 31.9043 33.7412Z" fill="#7B2CBF"/>
            </svg>
        ),
        title: "Passionate",
        desc: "We are intensely enthusiastic about providing a superior experience."
    },
    {
        svg: ()=>(
            <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.541 0.483398V2.35254H51.7559V5.25293H64.3887L59.4902 11.1182L64.3887 16.9834H50.209V14.083H40.541V66.4834H38.9941V0.483398H40.541ZM61.0371 6.7998H51.7559V15.3721H61.0371L57.4922 11.1182L61.0371 6.7998ZM50.209 3.89941H40.541V12.5361H50.209V3.89941ZM15.2754 43.667V66.4834H13.7285V43.667H15.2754ZM8.76562 30.6475V66.4834H7.1543V30.6475H8.76562ZM21.8496 30.6475V66.4834H20.3027V30.6475H21.8496ZM15.2754 20.2705L38.4785 23.751L38.2852 25.3623L15.0176 21.8174C14.8457 21.8174 14.6846 21.8174 14.5342 21.8174C14.3838 21.8174 14.2441 21.8174 14.1152 21.8174L4.06055 24.3311C3.54492 24.46 3.10449 24.75 2.73926 25.2012C2.37402 25.6523 2.19141 26.1572 2.19141 26.7158V46.9541H0.644531V26.7158C0.644531 25.7705 0.93457 24.9326 1.51465 24.2021C2.09473 23.4717 2.81445 22.999 3.67383 22.7842H3.73828L13.7285 20.2705C13.8574 20.2705 13.9863 20.2598 14.1152 20.2383C14.2441 20.2168 14.373 20.2061 14.502 20.2061C14.6309 20.2061 14.7705 20.2168 14.9209 20.2383C15.0713 20.2598 15.2109 20.2705 15.3398 20.2705H15.2754ZM14.6309 9.18457V9.31348C15.6621 9.52832 16.5107 10.0439 17.1768 10.8604C17.8428 11.6768 18.1758 12.6221 18.1758 13.6963C18.1758 14.7705 17.8428 15.7158 17.1768 16.5322C16.5107 17.3486 15.6621 17.8643 14.6309 18.0791V18.208C14.5449 18.208 14.4697 18.1973 14.4053 18.1758C14.3408 18.1543 14.2656 18.1436 14.1797 18.1436C14.0938 18.1436 14.0078 18.1543 13.9219 18.1758C13.8359 18.1973 13.75 18.208 13.6641 18.208V18.0791C12.6328 17.8643 11.7842 17.3486 11.1182 16.5322C10.4521 15.7158 10.1191 14.7705 10.1191 13.6963C10.1191 12.6221 10.4521 11.6768 11.1182 10.8604C11.7842 10.0439 12.6328 9.52832 13.6641 9.31348V9.24902C13.75 9.24902 13.8359 9.24902 13.9219 9.24902C14.0078 9.24902 14.0938 9.24902 14.1797 9.24902L14.6309 9.18457ZM14.1797 10.667H14.1152C13.3848 10.7959 12.7725 11.1396 12.2783 11.6982C11.7842 12.2568 11.5371 12.9229 11.5371 13.6963C11.5371 14.4697 11.7842 15.1357 12.2783 15.6943C12.7725 16.2529 13.4062 16.5967 14.1797 16.7256C14.9102 16.5967 15.5225 16.2529 16.0166 15.6943C16.5107 15.1357 16.7578 14.4697 16.7578 13.6963C16.7578 12.9229 16.5107 12.2568 16.0166 11.6982C15.5225 11.1396 14.9102 10.7959 14.1797 10.667Z" fill="#7B2CBF"/>
            </svg>
        ),
        title: "Respectful",
        desc: "We are polite and kind to one another, even when it gets tough."
    },
    {
        svg: ()=>(
            <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2386)">
            <path d="M56.9484 2.38574C58.8823 3.07324 60.3972 4.16895 61.4931 5.67285C62.589 7.17676 63.1369 9.13184 63.1369 11.5381V11.8604L47.7945 28.0381C47.4077 28.4678 47.1069 28.9512 46.892 29.4883C46.6772 30.0254 46.5697 30.5947 46.5697 31.1963C46.5697 31.8408 46.6879 32.4316 46.9243 32.9688C47.1606 33.5059 47.4937 33.9893 47.9235 34.4189C48.2673 34.7627 48.654 35.0312 49.0838 35.2246C49.5136 35.418 49.9863 35.5146 50.502 35.5146C51.0177 35.5146 51.5012 35.418 51.9524 35.2246C52.4037 35.0312 52.7797 34.7627 53.0806 34.4189L54.6922 32.8721L55.788 33.9678L54.1764 35.5146C53.7037 35.9873 53.1558 36.3633 52.5326 36.6426C51.9095 36.9219 51.2326 37.0615 50.502 37.0615C49.7714 37.0615 49.0946 36.9219 48.4714 36.6426C47.8483 36.3633 47.3003 35.9873 46.8276 35.5146C46.6557 35.3428 46.4838 35.1494 46.3119 34.9346C46.14 34.7197 45.9895 34.4834 45.8606 34.2256H45.7962L45.7317 34.3545C45.5168 34.9131 45.1945 35.3965 44.7647 35.8047C44.335 36.2129 43.8408 36.5459 43.2821 36.8037L38.5117 38.8018V50.6611H42.6374V57.1064H48.3747V65.9365H52.307V67.4834H13.8221V65.9365H17.8189V57.042H23.4917V50.6611H27.6174V38.8018L22.976 36.8037C22.3313 36.5459 21.7834 36.1699 21.3322 35.6758C20.8809 35.1816 20.5478 34.6123 20.333 33.9678V33.9033C20.1611 34.2041 19.9999 34.4727 19.8495 34.709C19.6991 34.9453 19.5164 35.1709 19.3015 35.3857L19.1726 35.5146C18.6999 35.9873 18.1412 36.3633 17.4966 36.6426C16.8519 36.9219 16.1643 37.0615 15.4337 37.0615C14.7461 37.0615 14.08 36.9219 13.4353 36.6426C12.7907 36.3633 12.232 35.9873 11.7593 35.5146L10.2122 33.9678L11.308 32.8721L12.8552 34.4189C13.199 34.7627 13.5965 35.0312 14.0477 35.2246C14.499 35.418 14.961 35.5146 15.4337 35.5146C15.9494 35.5146 16.4329 35.418 16.8842 35.2246C17.3354 35.0312 17.7329 34.7627 18.0767 34.4189C18.4635 33.9893 18.7751 33.5059 19.0115 32.9688C19.2478 32.4316 19.366 31.8408 19.366 31.1963C19.366 30.5947 19.2586 30.0254 19.0437 29.4883C18.8288 28.9512 18.528 28.4893 18.1412 28.1025L2.86328 11.8604V11.5381C2.86328 9.13184 3.41122 7.17676 4.50711 5.67285C5.60299 4.16895 7.11789 3.07324 9.0518 2.38574C9.9543 2.04199 10.8675 1.80566 11.7915 1.67676C12.7155 1.54785 13.5858 1.4834 14.4023 1.4834L14.918 1.54785L15.5626 1.6123L16.5941 6.25293H49.4706L50.3731 1.6123L51.0822 1.54785H51.2111C51.2971 1.54785 51.4045 1.53711 51.5334 1.51562C51.6624 1.49414 51.7913 1.4834 51.9202 1.4834C52.8227 1.4834 53.7037 1.56934 54.5632 1.74121C55.4227 1.91309 56.2608 2.12793 57.0773 2.38574H56.9484ZM46.7631 58.6533H19.366V65.9365H46.7631V58.6533ZM41.0903 52.208H25.0388V57.1064H41.0903V52.208ZM29.1645 39.4463V50.6611H36.9646V39.4463L35.6109 40.0264C34.8373 40.3701 34.053 40.5527 33.2579 40.5742C32.4629 40.5957 31.6786 40.4561 30.905 40.1553L30.6472 40.0264L29.1645 39.4463ZM49.0838 7.86426H17.1742L21.6867 33.0654C21.7727 33.5381 21.966 33.9678 22.2669 34.3545C22.5677 34.7412 22.933 35.0635 23.3628 35.3213L23.5562 35.3857L31.2918 38.6084C31.8505 38.8662 32.4522 38.9951 33.0968 38.9951C33.7414 38.9951 34.3646 38.8662 34.9662 38.6084L42.6374 35.3857C43.1531 35.1709 43.5722 34.8594 43.8945 34.4512C44.2168 34.043 44.4424 33.5811 44.5713 33.0654L49.0838 7.86426ZM33.8704 12.9561V16.1787C35.1167 16.3506 36.1911 16.877 37.0935 17.7578C37.996 18.6387 38.5547 19.7021 38.7696 20.9482H41.9283V22.5596H38.7696C38.5547 23.8057 37.996 24.8691 37.0935 25.75C36.1911 26.6309 35.1167 27.1572 33.8704 27.3291V30.4873H32.3232V27.3291C31.0769 27.1143 30.0133 26.5771 29.1323 25.7178C28.2513 24.8584 27.7248 23.8057 27.5529 22.5596H24.2653V20.9482H27.5529C27.7248 19.7451 28.2513 18.7031 29.1323 17.8223C30.0133 16.9414 31.0554 16.3936 32.2588 16.1787H32.3232V12.9561H33.8704ZM14.0155 3.09473C13.4139 3.09473 12.7585 3.1377 12.0494 3.22363C11.3403 3.30957 10.6419 3.48145 9.9543 3.73926L9.56751 3.86816C8.02038 4.42676 6.79557 5.27539 5.89308 6.41406C4.99059 7.55273 4.49636 9.06738 4.41041 10.958V11.2158L18.9792 26.6846L16.0139 10.3779H8.98734V8.7666H15.5626L14.3378 3.09473H14.0155ZM51.9202 3.09473H51.6624L50.6309 8.7666H57.0128V10.3779H50.2442L47.3433 26.2979L61.5253 11.2158V10.958C61.4394 9.11035 60.9774 7.61719 60.1393 6.47852C59.3013 5.33984 58.1517 4.49121 56.6905 3.93262L56.4327 3.86816C55.6591 3.56738 54.8855 3.36328 54.112 3.25586C53.3384 3.14844 52.6078 3.09473 51.9202 3.09473ZM33.1613 17.6611C33.1613 17.6611 33.1398 17.6611 33.0968 17.6611C31.9794 17.6611 31.0232 18.0586 30.2282 18.8535C29.4331 19.6484 29.0356 20.626 29.0356 21.7861C29.0356 22.9033 29.4331 23.8594 30.2282 24.6543C31.0232 25.4492 31.9794 25.8467 33.0968 25.8467C33.1398 25.8467 33.1613 25.8467 33.1613 25.8467C34.2786 25.8467 35.2348 25.4492 36.0299 24.6543C36.8249 23.8594 37.2225 22.8818 37.2225 21.7217C37.2225 21.1631 37.115 20.6475 36.9002 20.1748C36.6853 19.7021 36.4059 19.2725 36.0621 18.8857C35.6753 18.499 35.2348 18.1982 34.7406 17.9834C34.2464 17.7686 33.7199 17.6611 33.1613 17.6611Z" fill="#7B2CBF"/>
            </g>
            <defs>
            <clipPath id="clip0_1_2386">
            <rect width="60.54" height="66" fill="white" transform="matrix(1 0 0 -1 2.73047 66.1299)"/>
            </clipPath>
            </defs>
            </svg>

        ),
        title: "Ownership",
        desc: "We are empowered to do our jobs and work towards a common goal."
    },
    {
        svg: ()=>(
            <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2391)">
            <path d="M26.1035 26.6201V32.2275H40.0898V26.6201H41.5723V67.1611H40.0898V61.5537H26.1035V67.1611H24.6211V26.6201H26.1035ZM40.0898 52.2725H26.1035V60.0713H40.0898V52.2725ZM40.0898 42.9912H26.1035V50.79H40.0898V42.9912ZM44.2793 9.15332L44.4727 9.47559H44.666C47.5449 9.60449 50.0586 10.582 52.207 12.4082C54.3555 14.2344 55.752 16.4795 56.3965 19.1436V19.208V19.3369H56.5254C59.2754 20.1104 61.542 21.6357 63.3252 23.9131C65.1084 26.1904 66 28.79 66 31.7119C66 31.9268 66 32.1309 66 32.3242C66 32.5176 65.9785 32.7002 65.9355 32.8721V33.1299C65.5488 36.3096 64.1738 38.9844 61.8105 41.1543C59.4473 43.3242 56.6543 44.4307 53.4316 44.4736H53.3672H45.6328V42.9912H53.1094C56.2461 42.9912 58.9209 41.8955 61.1338 39.7041C63.3467 37.5127 64.4531 34.8486 64.4531 31.7119C64.4531 29.0479 63.6152 26.6953 61.9395 24.6543C60.2637 22.6133 58.1797 21.292 55.6875 20.6904H55.623L55.1074 20.5615L55.043 20.1104C54.5273 17.4893 53.249 15.3086 51.208 13.5684C49.167 11.8281 46.793 10.958 44.0859 10.958H43.6348L43.4414 10.6357C41.9375 8.44434 40.0039 6.69336 37.6406 5.38281C35.2773 4.07227 32.6992 3.41699 29.9062 3.41699C27.6289 3.41699 25.502 3.8252 23.5254 4.6416C21.5488 5.50098 19.8193 6.67188 18.3369 8.1543C16.8545 9.63672 15.6836 11.3662 14.8242 13.3428C13.9648 15.3193 13.5352 17.4248 13.5352 19.6592V20.4326H12.8262C12.8262 20.4326 12.8154 20.4326 12.7939 20.4326C12.7725 20.4326 12.7617 20.4326 12.7617 20.4326C9.66797 20.4326 7.01465 21.5283 4.80176 23.7197C2.58887 25.9111 1.48242 28.5752 1.48242 31.7119C1.48242 34.8486 2.58887 37.5127 4.80176 39.7041C7.01465 41.8955 9.68945 42.9912 12.8262 42.9912H20.625V44.4736H12.8262C11.0645 44.4736 9.38867 44.1514 7.79883 43.5068C6.25195 42.8193 4.89844 41.8955 3.73828 40.7354C2.57812 39.5752 1.67578 38.2217 1.03125 36.6748C0.34375 35.1279 0 33.4736 0 31.7119C0 28.3174 1.16016 25.3955 3.48047 22.9463C5.80078 20.4971 8.61523 19.165 11.9238 18.9502H12.0527L12.1172 18.6279C12.2031 16.7803 12.5684 15.0186 13.2129 13.3428C13.8574 11.667 14.7168 10.1416 15.791 8.7666C16.8652 7.3916 18.1328 6.18848 19.5938 5.15723C21.0117 4.12598 22.5586 3.33105 24.2344 2.77246H24.3633L24.6855 2.64355C26.5332 2.08496 28.3809 1.82715 30.2285 1.87012C32.0762 1.91309 33.8594 2.22461 35.5781 2.80469C37.2969 3.38477 38.8867 4.21191 40.3477 5.28613C41.8516 6.36035 43.1621 7.64941 44.2793 9.15332ZM40.0898 33.71H26.1035V41.5088H40.0898V33.71Z" fill="#7B2CBF"/>
            </g>
            <defs>
            <clipPath id="clip0_1_2391">
            <rect width="66" height="66" fill="white" transform="matrix(1 0 0 -1 0 66.1299)"/>
            </clipPath>
            </defs>
            </svg>

        ),
        title: "Unified",
        desc: "We work as a team and trust each other to create a seamless experience."
    }
];

const ValueCard = ({value}:{value:Values})=>{
    return (
        <div className="flex-1">
            <value.svg/>
            <div className="text-[#0A0D31] text-[22px] pt-7 pb-6 font-semibold">
                {value.title}
            </div>
            <div className="text-sm pr-8 text-[#00000099]">
                {value.desc}
            </div>
        </div>
    )
}

const OurValues = () =>{
    return (
        <div className="w-full pb-32">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-24">
                <div className="bg-[#11002C] rounded-[4px] text-[#DEE0FF] p-7 h-[430px] flex">
                    <div className="flex flex-col justify-between ">
                        <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#7B2CBF] text-[#DEE0FF] uppercase tracking-widest">
                            Our Core values
                        </div>
                        <div className="text-5xl">
                            Our culture is built around five key <br />
                            attributes that differentiate us from <br />
                            our competition.
                        </div>
                    </div>
                    <div className="flex items-end justify-center flex-1">
                        <svg width="291" height="292" viewBox="0 0 291 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M145.58 18.6497L136.58 9.64966L145.58 0.649658L154.58 9.64966L145.58 18.6497ZM145.58 51.6497L138.58 44.6497L145.58 37.6497L152.58 44.6497L145.58 51.6497ZM145.58 85.6497L139.58 79.6497L145.58 73.6497L151.58 79.6497L145.58 85.6497ZM145.08 119.65L140.58 115.15L145.08 110.65L149.58 115.15L145.08 119.65ZM145.58 154.65L141.58 150.65L145.58 146.65L149.58 150.65L145.58 154.65ZM127.58 34.6497L119.58 26.6497L127.58 18.6497L135.58 26.6497L127.58 34.6497ZM128.08 68.6497L121.58 62.1497L128.08 55.6497L134.58 62.1497L128.08 68.6497ZM127.58 102.65L122.58 97.6497L127.58 92.6497L132.58 97.6497L127.58 102.65ZM127.58 136.65L123.58 132.65L127.58 128.65L131.58 132.65L127.58 136.65ZM128.08 171.65L124.58 168.15L128.08 164.65L131.58 168.15L128.08 171.65ZM110.58 51.6497L103.58 44.6497L110.58 37.6497L117.58 44.6497L110.58 51.6497ZM110.58 85.6497L104.58 79.6497L110.58 73.6497L116.58 79.6497L110.58 85.6497ZM110.08 119.65L105.58 115.15L110.08 110.65L114.58 115.15L110.08 119.65ZM110.58 154.65L106.58 150.65L110.58 146.65L114.58 150.65L110.58 154.65ZM110.58 188.65L107.58 185.65L110.58 182.65L113.58 185.65L110.58 188.65ZM93.0801 68.6497L86.5801 62.1497L93.0801 55.6497L99.5801 62.1497L93.0801 68.6497ZM92.5801 102.65L87.5801 97.6497L92.5801 92.6497L97.5801 97.6497L92.5801 102.65ZM92.5801 136.65L88.5801 132.65L92.5801 128.65L96.5801 132.65L92.5801 136.65ZM93.0801 171.65L89.5801 168.15L93.0801 164.65L96.5801 168.15L93.0801 171.65ZM92.5801 206.65L89.5801 203.65L92.5801 200.65L95.5801 203.65L92.5801 206.65ZM74.5801 85.6497L68.5801 79.6497L74.5801 73.6497L80.5801 79.6497L74.5801 85.6497ZM75.0801 119.65L70.5801 115.15L75.0801 110.65L79.5801 115.15L75.0801 119.65ZM74.5801 154.65L70.5801 150.65L74.5801 146.65L78.5801 150.65L74.5801 154.65ZM74.5801 188.65L71.5801 185.65L74.5801 182.65L77.5801 185.65L74.5801 188.65ZM75.0801 223.65L72.5801 221.15L75.0801 218.65L77.5801 221.15L75.0801 223.65ZM57.5801 102.65L52.5801 97.6497L57.5801 92.6497L62.5801 97.6497L57.5801 102.65ZM57.5801 136.65L53.5801 132.65L57.5801 128.65L61.5801 132.65L57.5801 136.65ZM57.0801 171.65L53.5801 168.15L57.0801 164.65L60.5801 168.15L57.0801 171.65ZM57.5801 206.65L54.5801 203.65L57.5801 200.65L60.5801 203.65L57.5801 206.65ZM57.5801 240.65L55.5801 238.65L57.5801 236.65L59.5801 238.65L57.5801 240.65ZM40.0801 119.65L35.5801 115.15L40.0801 110.65L44.5801 115.15L40.0801 119.65ZM39.5801 154.65L35.5801 150.65L39.5801 146.65L43.5801 150.65L39.5801 154.65ZM39.5801 188.65L36.5801 185.65L39.5801 182.65L42.5801 185.65L39.5801 188.65ZM40.0801 223.65L37.5801 221.15L40.0801 218.65L42.5801 221.15L40.0801 223.65ZM39.5801 258.65L37.5801 256.65L39.5801 254.65L41.5801 256.65L39.5801 258.65ZM21.5801 136.65L17.5801 132.65L21.5801 128.65L25.5801 132.65L21.5801 136.65ZM22.0801 171.65L18.5801 168.15L22.0801 164.65L25.5801 168.15L22.0801 171.65ZM21.5801 206.65L18.5801 203.65L21.5801 200.65L24.5801 203.65L21.5801 206.65ZM21.5801 240.65L19.5801 238.65L21.5801 236.65L23.5801 238.65L21.5801 240.65ZM21.5801 276.65L19.5801 274.65L21.5801 272.65L23.5801 274.65L21.5801 276.65ZM4.58008 154.65L0.580078 150.65L4.58008 146.65L8.58008 150.65L4.58008 154.65ZM4.58008 188.65L1.58008 185.65L4.58008 182.65L7.58008 185.65L4.58008 188.65ZM4.08008 223.65L1.58008 221.15L4.08008 218.65L6.58008 221.15L4.08008 223.65ZM4.58008 258.65L2.58008 256.65L4.58008 254.65L6.58008 256.65L4.58008 258.65ZM4.08008 293.65L2.58008 292.15L4.08008 290.65L5.58008 292.15L4.08008 293.65ZM163.58 34.6497L155.58 26.6497L163.58 18.6497L171.58 26.6497L163.58 34.6497ZM163.08 68.6497L156.58 62.1497L163.08 55.6497L169.58 62.1497L163.08 68.6497ZM163.58 102.65L158.58 97.6497L163.58 92.6497L168.58 97.6497L163.58 102.65ZM163.58 136.65L159.58 132.65L163.58 128.65L167.58 132.65L163.58 136.65ZM163.08 171.65L159.58 168.15L163.08 164.65L166.58 168.15L163.08 171.65ZM180.58 51.6497L173.58 44.6497L180.58 37.6497L187.58 44.6497L180.58 51.6497ZM180.58 85.6497L174.58 79.6497L180.58 73.6497L186.58 79.6497L180.58 85.6497ZM181.08 119.65L176.58 115.15L181.08 110.65L185.58 115.15L181.08 119.65ZM180.58 154.65L176.58 150.65L180.58 146.65L184.58 150.65L180.58 154.65ZM180.58 188.65L177.58 185.65L180.58 182.65L183.58 185.65L180.58 188.65ZM198.08 68.6497L191.58 62.1497L198.08 55.6497L204.58 62.1497L198.08 68.6497ZM198.58 102.65L193.58 97.6497L198.58 92.6497L203.58 97.6497L198.58 102.65ZM198.58 136.65L194.58 132.65L198.58 128.65L202.58 132.65L198.58 136.65ZM198.08 171.65L194.58 168.15L198.08 164.65L201.58 168.15L198.08 171.65ZM198.58 206.65L195.58 203.65L198.58 200.65L201.58 203.65L198.58 206.65ZM216.58 85.6497L210.58 79.6497L216.58 73.6497L222.58 79.6497L216.58 85.6497ZM216.08 119.65L211.58 115.15L216.08 110.65L220.58 115.15L216.08 119.65ZM216.58 154.65L212.58 150.65L216.58 146.65L220.58 150.65L216.58 154.65ZM216.58 188.65L213.58 185.65L216.58 182.65L219.58 185.65L216.58 188.65ZM216.08 223.65L213.58 221.15L216.08 218.65L218.58 221.15L216.08 223.65ZM233.58 102.65L228.58 97.6497L233.58 92.6497L238.58 97.6497L233.58 102.65ZM233.58 136.65L229.58 132.65L233.58 128.65L237.58 132.65L233.58 136.65ZM234.08 171.65L230.58 168.15L234.08 164.65L237.58 168.15L234.08 171.65ZM233.58 206.65L230.58 203.65L233.58 200.65L236.58 203.65L233.58 206.65ZM233.58 240.65L231.58 238.65L233.58 236.65L235.58 238.65L233.58 240.65ZM251.08 119.65L246.58 115.15L251.08 110.65L255.58 115.15L251.08 119.65ZM251.58 154.65L247.58 150.65L251.58 146.65L255.58 150.65L251.58 154.65ZM251.58 188.65L248.58 185.65L251.58 182.65L254.58 185.65L251.58 188.65ZM251.08 223.65L248.58 221.15L251.08 218.65L253.58 221.15L251.08 223.65ZM251.58 258.65L249.58 256.65L251.58 254.65L253.58 256.65L251.58 258.65ZM269.58 136.65L265.58 132.65L269.58 128.65L273.58 132.65L269.58 136.65ZM269.08 171.65L265.58 168.15L269.08 164.65L272.58 168.15L269.08 171.65ZM269.58 206.65L266.58 203.65L269.58 200.65L272.58 203.65L269.58 206.65ZM269.58 240.65L267.58 238.65L269.58 236.65L271.58 238.65L269.58 240.65ZM269.58 276.65L267.58 274.65L269.58 272.65L271.58 274.65L269.58 276.65ZM286.58 154.65L282.58 150.65L286.58 146.65L290.58 150.65L286.58 154.65ZM286.58 188.65L283.58 185.65L286.58 182.65L289.58 185.65L286.58 188.65ZM287.08 223.65L284.58 221.15L287.08 218.65L289.58 221.15L287.08 223.65ZM286.58 258.65L284.58 256.65L286.58 254.65L288.58 256.65L286.58 258.65ZM287.08 293.65L285.58 292.15L287.08 290.65L288.58 292.15L287.08 293.65Z" fill="#DEE0FF"/>
                        </svg>
                    </div>
                </div>
                <div className="flex gap-4">
                    {VALUES.map((value, index) => (
                        <ValueCard key={index} value={value} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurValues;