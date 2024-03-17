import icon_title_caigouhangqing from "../assets/icons/icon_title_caigouhangqing.png";
import icon_title_news from "../assets/icons/icon_title_news.png";
import icon_title_pingpaihezuo from "../assets/icons/icon_title_pingpaihezuo.png";
import { slides, cardContent, cardContent2, cardContent3 } from '../content/mockData';

export function getBlogDataList(module, pageInfo = {
    pageNo: 1
}) {
    let data;
    if (module === 'purchasing-quotes') {
        data = cardContent3;
    } else if (module === 'industry-news') {
        data = cardContent;
    } else if (module === 'company-profile') {
        data = cardContent2;
    } else {
        data = [];
    }
    let pageSize;
    if (data === null || data === undefined || data.length === 0) {
        pageSize = 1;
    } else {
        pageSize = data.length / 20;
        if (data.length % 20 > 0) {
            pageSize++;
        }
    }
    pageInfo.pageSize = pageSize;
    return {
        pageInfo: pageInfo,
        data: data
    }
}

export function getCardInfo(module) {
    if (module === 'purchasing-quotes') {
        return {
            title: "采购行情",
            icon: icon_title_caigouhangqing.src,
            btnText: "查看更多",
            btnHref: "/blog",
            borderHeight: "72px"
        }
    } else if (module === 'industry-news') {
        return {
            title: "行业新闻",
            icon: icon_title_news.src,
            btnText: "查看更多",
            btnHref: "/blog",
            border: "true"
        }
    } else if (module === 'company-profile') {
        return {
            title: "公司介绍",
            icon: icon_title_pingpaihezuo.src,
            btnText: "查看更多",
            btnHref: "/blog",
            titleType: "h6",
            hiddenPagination: "true"
        }
    } else {
        return {}
    }
}