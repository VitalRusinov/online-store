import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <span>@2023</span>
        <span>Все права защищены</span>
      </div>
      <div className={styles.logo}>
      <svg width="147" height="86" viewBox="0 0 147 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M144.663 23.7194C147.415 33.9887 142.078 45.5055 130.958 55.8505C119.856 66.1785 103.088 75.2354 83.2788 80.5432C63.47 85.8509 44.4195 86.3917 29.6413 82.9982C14.8386 79.5991 4.45796 72.2939 1.70632 62.0247C-1.04533 51.7554 4.29204 40.2386 15.412 29.8936C26.5135 19.5656 43.2821 10.5087 63.0909 5.20094C82.8997 -0.106814 101.95 -0.647582 116.728 2.74592C131.531 6.14504 141.912 13.4502 144.663 23.7194Z" fill="#EBE3FF" fillOpacity="0.19" stroke="#D9FF5A"/>
<path d="M37.2457 65.5269L38.1272 68.8168L36.5827 69.2307L34.2274 60.4407C34.6627 60.3241 35.1346 60.1932 35.643 60.048C36.1514 59.9028 36.5689 59.7864 36.8953 59.699C39.0217 59.1292 40.3271 59.7484 40.8116 61.5567C40.991 62.2264 40.9675 62.8249 40.7409 63.3521C40.5098 63.8627 40.1926 64.2527 39.7893 64.5223L43.5016 67.3767L41.6306 67.8781L38.3256 65.2375L37.2457 65.5269ZM37.2069 61.1632C37.1651 61.1744 37.0992 61.1965 37.0094 61.2296C36.9173 61.2543 36.7887 61.2932 36.6235 61.3465C36.4561 61.3913 36.3012 61.4328 36.1589 61.4709L36.8587 64.0828L37.8633 63.8136C38.3572 63.6813 38.7265 63.4522 38.9712 63.1265C39.2242 62.7985 39.2947 62.4252 39.1825 62.0066C38.9538 61.1527 38.2952 60.8716 37.2069 61.1632ZM47.927 64.4952L48.614 65.4013C48.1787 66.0203 47.5216 66.4476 46.6426 66.6832C45.7385 66.9254 44.9289 66.8508 44.2138 66.4591C43.5178 66.0714 43.0497 65.4297 42.8097 64.534C42.5854 63.6968 42.669 62.9207 43.0606 62.2057C43.4523 61.4906 44.1001 61.012 45.0042 60.7697C45.7493 60.5701 46.4475 60.6477 47.0988 61.0025C47.7502 61.3574 48.178 61.9157 48.3821 62.6775C48.4718 63.0123 48.512 63.2797 48.5028 63.4795L44.4218 64.5731C44.5903 64.9676 44.8566 65.2416 45.2208 65.3953C45.5933 65.5467 46.0098 65.5607 46.4702 65.4373C47.0981 65.2691 47.5837 64.955 47.927 64.4952ZM45.2644 61.992C44.444 62.2118 44.06 62.7544 44.1124 63.6196L46.8875 62.876C46.7995 62.5138 46.6038 62.2522 46.3004 62.0913C46.0032 61.9197 45.6579 61.8866 45.2644 61.992ZM56.4538 66.5979L55.0098 66.9849L54.2595 64.1846C53.9004 64.5859 53.4739 64.8527 52.98 64.9851C52.0843 65.2251 51.2968 65.149 50.6174 64.7568C49.9442 64.3539 49.4876 63.7047 49.2476 62.8089C49.0211 61.9634 49.1382 61.1783 49.599 60.4537C50.066 59.7185 50.7641 59.2264 51.6933 58.9774C52.6644 58.7172 53.5704 58.7167 54.4115 58.9758L56.4538 66.5979ZM52.8084 63.591C53.2939 63.4609 53.6498 63.1816 53.8759 62.7531L53.2232 60.3171C52.7971 60.2338 52.4041 60.2404 52.0441 60.3369C51.5251 60.476 51.1575 60.7449 50.9414 61.1438C50.723 61.5343 50.6789 61.9723 50.809 62.4579C50.9301 62.9099 51.1722 63.2443 51.5354 63.461C51.9069 63.6755 52.3312 63.7188 52.8084 63.591ZM59.5231 57.0274L60.9672 56.6405L62.4813 62.2912L61.0372 62.6781L60.8522 61.9875C60.5481 62.6611 60.0194 63.0989 59.266 63.3007C58.6633 63.4622 58.1281 63.3903 57.6604 63.0849C57.1928 62.7796 56.8581 62.2502 56.6562 61.4967L55.7309 58.0435L57.175 57.6566L58.0195 60.8084C58.2505 61.6707 58.726 62.0054 59.4459 61.8124C59.9399 61.6801 60.3009 61.3366 60.5292 60.782L59.5231 57.0274ZM68.0992 59.0901L68.7861 59.9961C68.3509 60.6152 67.6937 61.0425 66.8148 61.2781C65.9106 61.5203 65.1011 61.4456 64.386 61.054C63.6899 60.6663 63.2219 60.0246 62.9819 59.1288C62.7576 58.2917 62.8412 57.5156 63.2328 56.8006C63.6244 56.0855 64.2723 55.6068 65.1764 55.3646C65.9215 55.165 66.6197 55.2426 67.271 55.5974C67.9224 55.9522 68.3501 56.5105 68.5543 57.2723C68.644 57.6072 68.6842 57.8746 68.675 58.0744L64.5939 59.1679C64.7625 59.5624 65.0288 59.8365 65.393 59.9901C65.7655 60.1416 66.182 60.1556 66.6424 60.0322C67.2703 59.864 67.7559 59.5499 68.0992 59.0901ZM65.4366 56.5869C64.6162 56.8067 64.2322 57.3492 64.2846 58.2145L67.0597 57.4709C66.9717 57.1087 66.776 56.8471 66.4726 56.6861C66.1754 56.5145 65.8301 56.4815 65.4366 56.5869ZM69.2868 56.1071C69.1454 55.5797 69.2258 55.1095 69.5279 54.6966C69.83 54.2837 70.2866 53.9953 70.8977 53.8316C71.8186 53.5848 72.5982 53.6316 73.2367 53.972L72.9727 55.1463C72.4158 54.9097 71.8569 54.8666 71.2961 55.0169C71.0951 55.0707 70.9412 55.1658 70.8342 55.3021C70.7249 55.4301 70.6882 55.5611 70.7241 55.695C70.7981 55.9713 71.2156 56.1061 71.9765 56.0996C72.2517 56.0887 72.4999 56.094 72.721 56.1155C72.9398 56.1286 73.1718 56.1741 73.417 56.252C73.6683 56.3193 73.8806 56.4418 74.0539 56.6197C74.2271 56.7976 74.3508 57.0246 74.4248 57.3009C74.5729 57.8534 74.4813 58.349 74.1503 58.7876C73.8275 59.224 73.3188 59.5353 72.6239 59.7215C72.13 59.8538 71.6206 59.8782 71.0958 59.7945C70.5603 59.7047 70.1964 59.5689 70.0041 59.3871L70.455 58.2569C70.6656 58.4069 70.9731 58.4995 71.3773 58.5347C71.7922 58.5761 72.1335 58.5609 72.4014 58.4891C72.7369 58.4351 72.939 58.2688 73.0079 57.9901C73.0746 57.7031 72.9317 57.5215 72.5794 57.4455C72.4358 57.4121 72.22 57.3937 71.932 57.3901C71.6523 57.3843 71.3893 57.374 71.1431 57.3593C70.903 57.3339 70.649 57.2898 70.3809 57.227C70.1212 57.162 69.8953 57.0386 69.703 56.8569C69.5085 56.6667 69.3697 56.4168 69.2868 56.1071ZM75.4439 56.5164L74.0846 51.4434L75.5286 51.0564L75.9492 52.6261L77.77 52.1382L78.1333 53.4944L76.3126 53.9822L76.8644 56.0416C77.0461 56.7197 77.3629 56.9981 77.815 56.877C78.0996 56.8008 78.3593 56.6145 78.594 56.3184L79.3329 57.3182C78.9712 57.8099 78.4638 58.1432 77.8109 58.3182C77.1997 58.4819 76.7025 58.4178 76.3192 58.1257C75.942 57.823 75.6502 57.2866 75.4439 56.5164ZM84.1934 56.4734L84.0804 56.5037L81.7251 47.7138L81.8632 47.6768C82.2232 47.5803 82.5569 47.4864 82.8644 47.395C83.4794 47.2123 83.8455 47.1052 83.9627 47.0738C84.8082 46.8473 85.5847 46.7648 86.2921 46.8265C87.0056 46.8776 87.6099 47.0566 88.1049 47.3636C88.5976 47.6623 89.0045 48.0423 89.3255 48.5036C89.6526 48.9543 89.8947 49.4726 90.0517 50.0586C90.4061 51.3813 90.2582 52.5873 89.608 53.6767C88.9662 54.7639 87.8416 55.5228 86.2343 55.9535C85.8744 56.0499 85.5426 56.1343 85.239 56.2067C84.9354 56.2791 84.5868 56.368 84.1934 56.4734ZM84.1126 47.7335C83.9284 47.7829 83.6586 47.8641 83.3031 47.9773C82.9537 48.0799 82.7163 48.148 82.5907 48.1817L84.596 55.6657C84.8723 55.5917 85.1329 55.5263 85.3779 55.4696C85.6207 55.4046 85.7976 55.3617 85.9087 55.3409C86.0175 55.3117 86.0761 55.296 86.0845 55.2938C87.449 54.9281 88.4074 54.2855 88.9595 53.366C89.5094 52.438 89.6307 51.4006 89.3234 50.2537C89.034 49.1738 88.4427 48.3902 87.5495 47.9028C86.6478 47.4176 85.5022 47.3612 84.1126 47.7335ZM97.0262 51.7563L97.3743 52.2014C97.0072 52.874 96.3842 53.328 95.5052 53.5636C94.6011 53.8058 93.8052 53.732 93.1175 53.342C92.4214 52.9543 91.9545 52.3167 91.7167 51.4294C91.4879 50.5755 91.5506 49.805 91.9049 49.1179C92.2675 48.4286 92.8966 47.9639 93.7924 47.7239C94.5207 47.5287 95.1946 47.5994 95.8141 47.9358C96.423 48.2662 96.8307 48.8164 97.037 49.5866C97.0909 49.7875 97.1254 49.9666 97.1407 50.1241L92.482 51.3723C92.6888 52.0437 93.0542 52.52 93.5782 52.8013C94.1 53.0742 94.6999 53.1199 95.378 52.9382C96.1649 52.7273 96.7143 52.3334 97.0262 51.7563ZM93.8945 48.356C93.2917 48.5175 92.8491 48.8245 92.5666 49.2771C92.2925 49.7273 92.2035 50.2492 92.2997 50.8425L96.3682 49.7523C96.2005 49.1602 95.8949 48.7396 95.4514 48.4906C95.0078 48.2416 94.4888 48.1967 93.8945 48.356ZM101.989 50.1169C101.92 49.8574 101.755 49.6772 101.495 49.5765C101.243 49.4735 100.95 49.4175 100.615 49.4084C100.289 49.3971 99.9567 49.3785 99.6178 49.3526C99.2767 49.3184 98.9647 49.2091 98.682 49.0247C98.4055 48.8296 98.2167 48.5437 98.1158 48.167C97.9946 47.7149 98.0656 47.3101 98.3287 46.9525C98.5895 46.5865 98.992 46.3306 99.5361 46.1848C100.315 45.9762 100.961 46.0274 101.475 46.3383L101.33 46.902C100.848 46.6452 100.306 46.5976 99.7035 46.7591C99.3686 46.8488 99.1159 47.0107 98.9454 47.2449C98.7809 47.4684 98.7335 47.7099 98.803 47.9694C98.8748 48.2373 99.0389 48.4311 99.2953 48.5508C99.5578 48.6599 99.8532 48.7243 100.181 48.744C100.516 48.7531 100.853 48.7706 101.191 48.7964C101.53 48.8222 101.836 48.9243 102.108 49.1026C102.388 49.2787 102.577 49.5467 102.673 49.9067C102.81 50.4173 102.724 50.8666 102.415 51.2544C102.115 51.64 101.667 51.9124 101.073 52.0716C100.705 52.1703 100.297 52.1898 99.8506 52.13C99.4313 52.0719 99.1213 51.9531 98.9206 51.7736L99.1704 51.2491C99.381 51.399 99.6623 51.4941 100.014 51.5344C100.374 51.5725 100.701 51.5523 100.994 51.4738C101.362 51.3751 101.64 51.2065 101.827 50.9679C102.021 50.7186 102.075 50.435 101.989 50.1169ZM105.676 50.7172L105.023 50.8921L103.509 45.2415L104.162 45.0665L105.676 50.7172ZM102.807 43.0743C102.773 42.9487 102.793 42.8359 102.864 42.7359C102.936 42.6359 103.035 42.569 103.161 42.5354C103.27 42.5062 103.377 42.5223 103.483 42.5836C103.595 42.6342 103.667 42.7182 103.699 42.8354C103.737 42.9777 103.725 43.1019 103.664 43.2081C103.611 43.312 103.522 43.3807 103.396 43.4144C103.262 43.4503 103.138 43.4387 103.024 43.3797C102.917 43.3184 102.845 43.2166 102.807 43.0743ZM107.389 51.1464C107.275 50.7195 107.329 50.3191 107.552 49.9454C107.775 49.5716 108.147 49.2521 108.668 48.9869C108.502 48.8698 108.391 48.7067 108.335 48.4974C108.279 48.2881 108.299 48.0807 108.397 47.8751C107.986 47.8148 107.633 47.6536 107.339 47.3915C107.044 47.1295 106.843 46.7976 106.735 46.3958C106.581 45.8181 106.658 45.286 106.967 44.7994C107.276 44.3128 107.766 43.9797 108.435 43.8003C108.971 43.6567 109.482 43.6723 109.969 43.847L109.981 43.8436L111.474 42.986L111.639 43.6013L110.574 44.1963C110.892 44.479 111.102 44.8129 111.206 45.1979C111.356 45.7588 111.274 46.2921 110.961 46.7977C110.644 47.2865 110.158 47.6185 109.505 47.7934C109.271 47.8562 109.078 47.8899 108.927 47.8946C108.881 48.0236 108.88 48.1718 108.925 48.3393C108.976 48.5318 109.071 48.6679 109.209 48.7476C109.523 48.6456 109.696 48.5901 109.73 48.5811C110.592 48.3501 111.321 48.3252 111.917 48.5065C112.513 48.6878 112.887 49.0631 113.04 49.6323C113.19 50.1932 113.051 50.6969 112.624 51.1435C112.198 51.5984 111.554 51.9414 110.692 52.1725C109.822 52.4057 109.089 52.4359 108.496 52.263C107.911 52.0879 107.542 51.7157 107.389 51.1464ZM108.055 50.9681C108.153 51.3364 108.423 51.5736 108.864 51.6797C109.316 51.792 109.873 51.7595 110.534 51.5823C111.187 51.4073 111.681 51.1583 112.016 50.8352C112.351 50.5121 112.471 50.1706 112.374 49.8106C112.276 49.4423 112 49.202 111.549 49.0898C111.103 48.9669 110.549 48.9941 109.888 49.1713C109.235 49.3463 108.741 49.5953 108.406 49.9184C108.071 50.2415 107.954 50.5914 108.055 50.9681ZM107.571 45.0951C107.35 45.4415 107.293 45.8156 107.401 46.2174C107.508 46.6193 107.745 46.9149 108.109 47.1042C108.474 47.2936 108.887 47.3266 109.347 47.2032C109.808 47.0799 110.149 46.845 110.37 46.4986C110.591 46.1522 110.648 45.7781 110.54 45.3763C110.432 44.9744 110.192 44.68 109.819 44.4928C109.454 44.3035 109.046 44.2693 108.594 44.3905C108.15 44.5093 107.809 44.7442 107.571 45.0951ZM114.792 48.2745L114.139 48.4495L112.625 42.7988L113.278 42.6238L113.49 43.4149C113.655 43.0926 113.899 42.7984 114.223 42.5323C114.554 42.2639 114.909 42.0793 115.285 41.9783C116.072 41.7675 116.717 41.8144 117.221 42.1192C117.724 42.424 118.091 43.0075 118.322 43.8697L119.187 47.0969L118.534 47.2718L117.703 44.1703C117.34 42.8141 116.538 42.302 115.3 42.634C114.94 42.7304 114.61 42.9084 114.312 43.1678C114.011 43.4188 113.79 43.6979 113.648 44.0051L114.792 48.2745Z" fill="white"/>
<rect x="59" y="37" width="18" height="18" rx="2" transform="rotate(-60 59 37)" fill="white"/>
<circle cx="70.5732" cy="33.9497" r="7" transform="rotate(-15 70.5732 33.9497)" fill="#BAA5EC"/>
<rect x="66" y="31" width="9" height="9" rx="2" transform="rotate(-15 66 31)" fill="white"/>
<circle cx="70.6742" cy="34.1213" r="3" transform="rotate(-15 70.6742 34.1213)" fill="#BAA5EC"/>
<rect width="2" height="2" rx="1" transform="matrix(0.5 -0.866025 0.865989 0.500063 70 34)" fill="white"/>
</svg>

      </div>
    </footer>
  );
};

export default Footer;
