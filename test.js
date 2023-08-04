// const H5guard = require('./mt.js');
// const data = {
//     "cType": "mti", "fpPlatform": 3, "wxOpenId": "", "appVersion": ""
// };
// const cookieStr=`_lxsdk_cuid=1897ca8e8a7c8-05480e5125d2b9-7f566812-52850-1897ca8e8a8c8; _lxsdk=1897ca8e8a7c8-05480e5125d2b9-7f566812-52850-1897ca8e8a8c8; ta.uuid=1682665093420634180; isUuidUnion=true; iuuid=1897ca8e8a7c8-05480e5125d2b9-7f566812-52850-1897ca8e8a8c8; uuid=a14494a7035a43b497d6.1690013597.1.0.0; WEBDFPID=vv57x411032750y6y79739yz67z098588102xz099w497958y1zu99ux-2005373596184-1690013596184OQEWEYIe67dcc3e61b3db1bf3f9e3b1c7aaaa882326; mt_c_token=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; thirdlogin_token=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; oops=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; userId=3906616633; u=3906616633; isid=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; _lxsdk_s=18991e47359-9a6-6e9-2ff%7C%7C15`;
// const id = "F6CFF2A35BD94F49BDEE0CC6F7CF9FE4";
// const gdId = "306477";
// const pageId = "306004";
// const instanceId = "16620226080900.11717750606071209";

// // 安卓UA
// const userAgent = "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5075 MMWEBSDK/20230504 MMWEBID/5707 MicroMessenger/8.0.37.2380(0x28002598) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64";
// const fullUrl = `https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=${id}&geoType=2&gdPageId=${gdId}&pageId=${pageId}&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD0H0&instanceId=${instanceId}&componentId=${instanceId}`
// const h5guard = new H5guard(cookieStr, userAgent);
// const { mtgsig } = await h5guard.sign(fullUrl, data);
// //data 调用sign会自动设置mtFingerprint

const H5guard = require('./main_mt.js');

// const H5guard = require('./mt_beta.js');

const data = {
    "cType": "mti", "fpPlatform": 3, "wxOpenId": "", "appVersion": ""
};

const cookieStr = `_lxsdk_cuid=1897ca8e8a7c8-05480e5125d2b9-7f566812-52850-1897ca8e8a8c8; _lxsdk=1897ca8e8a7c8-05480e5125d2b9-7f566812-52850-1897ca8e8a8c8; ta.uuid=1682665093420634180; isUuidUnion=true; iuuid=1897ca8e8a7c8-05480e5125d2b9-7f566812-52850-1897ca8e8a8c8; uuid=a14494a7035a43b497d6.1690013597.1.0.0; WEBDFPID=vv57x411032750y6y79739yz67z098588102xz099w497958y1zu99ux-2005373596184-1690013596184OQEWEYIe67dcc3e61b3db1bf3f9e3b1c7aaaa882326; mt_c_token=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; thirdlogin_token=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; oops=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; userId=3906616633; u=3906616633; isid=AgGQKRnZBhlbrZzlbaNYYKGcr0gTiKP8o6ldbyjj_Ac-fM5Xmhs2zy2K5YSTDm8N_5_670y3C875ywAAAADHGQAANwM176nRjPGQvWjbchxax-ysv3TnxobvYLa3yMXi4kNpJ_Zgo-DfpNKjnCWN4Daf; _lxsdk_s=18991e47359-9a6-6e9-2ff%7C%7C15`;

const id = "F6CFF2A35BD94F49BDEE0CC6F7CF9FE4";
const gdId = "306477";
const pageId = "306004";
const instanceId = "16620226080900.11717750606071209";

// 安卓UA
const userAgent = "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5075 MMWEBSDK/20230504 MMWEBID/5707 MicroMessenger/8.0.37.2380(0x28002598) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64";

const fullUrl = `https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=${id}&geoType=2&gdPageId=${gdId}&pageId=${pageId}&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupD0H0&instanceId=${instanceId}&componentId=${instanceId}`;

(async () => {
    const h5guard = new H5guard(cookieStr, userAgent);
    const { mtgsig,mtFingerprint } = await h5guard.sign(fullUrl, data);

    console.log("mtFingerprint:", mtFingerprint);
    console.log("mtgsig:", mtgsig);
})().catch((error) => {
    console.error(error);
});
