/*
combined files : 

pkgServices/events
pkgServices/utils
pkgServices/login
pkgServices/protocols
pkgServices/emotion
pkgServices/socket
pkgServices/user
pkgServices/speakers
pkgServices/services
pkgPc/view
pkgPc/channel
pkgPc/header
pkgPc/live-cover
pkgPc/room-chat
pkgPc/room-input
pkgPc/player
pkgPc/room-blackboard
pkgPc/room
pkgPc/alert-layer
pkgPc/auth
pkgPc/history-player
pkgPc/history
pkgPc/pc

*/
KISSY.add("pkgServices/events", function() {
    var events = {
        "hdSocketConnected": "HD_SOCKET_CONNECTED",
        "hdSocketDisconnected": "HD_SOCKET_DISCONNECTED",
        "hdsktUnavailable": "HD_SOCKET_UNAVAILABLE",
        "hdsktFailedJoinRoom": "HD_SOCKET_FAILED_JOIN_ROOM",
        "hdResBlackboard": "HD_RES_BLACKBOARD",
        "hdResFetchLiveList": "HD_RES_FETCH_LIVE_LIST",
        "hdResFetchLiveInfoList": "HD_RES_FETCH_LIVE_INFO_LIST",
        "hdResJoinedRoom": "HD_RES_JOINED_ROOM",
        "hdResJoinLiveSuccess": "HD_RES_JOIN_LIVE_SUCCESS",
        "hdResJoinLiveFailed": "HD_RES_JOIN_LIVE_FAILED",
        "hdResFetchGroupChat": "HD_RES_FETCH_GROUP_CHAT",
        "hdResHistory": "HD_RES_HISTORY",
        "hdResHistoryCount": "HD_RES_HISTORY_COUNT",
        "hdResMediaUrl": "HD_RES_MEDIA_URL",
        "hdResVideoUrl": "HD_RES_VIDEO_URL",
        "hdResRecordAudio": "HD_RES_RECORD_AUDIO",
        "hdResLeaveLiveSuccess": "HD_RES_LEAVE_LIVE_SUCCESS",
        "hdResSendChatSuccess":"HD_RES_SEND_CHAT_SUCCESS",
        "hdPubNewChat": "HD_PUB_NEW_CHAT",
        "hdPubOnline": "HD_PUB_ONLINE",
        "hdPubBlackboard": "HD_PUB_BLACKBOARD",
        "hdPubMedia": "HD_PUB_MEDIA",
        "hdPubStopLive": "HD_PUB_STOP_LIVE",
        "hdPubUpdateLiveInfo": "HD_PUB_UPDATE_LIVE_INFO",
        "hdRoomReady": "HD_ROOM_READY",

        "hdFetchChatFrequent": "HD_FETCH_CHAT_FREQUENT",

        "hdShowDashboard": "HD_SHOW_DASHBOARD",

        "hdLogout": "HD_LOGOUT",
        "hdLoginSuccess": "HD_LOGIN_SUCCESS",

        "hdNoLive": "HD_NO_LIVE",
        "hdLiveList": "HD_LIVE_LIST",

        "hdAlert": "HD_ALERT",
        "hdShowPopup": "HD_SHOW_POPUP",
        "hdHidePopup": "HD_HIDE_POPUP",

        "hdSendChat": "HD_SEND_CHAT",
        "hdListenBackground": "HD_LISTEN_BACKGROUND",
        "hdShare": "HD_SHARE",
        "hdShowFeedback": "HD_SHOW_FEEDBACK",
        "hdNoSpeakers": "HD_NO_SPEAKERS",
        "hdAddSpeakers": "HD_ADD_SPEAKERS",
        "hdRemoveSpeaker": "HD_REMOVE_SPEAKER",
        "hdSelectEmotion": "HD_SELECT_EMOTION",
        "hdTestNetWork": "HD_TEST_NETWORK",
        "hdShowReportPage": "HD_SHOW_REPORT_PAGE",
        "phoneListenBG": "PHONE_LISTEN_BG",
        "phoneShareHint": "PHONE_SHARE_HINT",

        "hdPubGroupChat": "HD_PUB_GROUP_CHAT",
        "hdUserInfo": "HD_USER_INFO",
        "hdSaveUserInfo": "HD_SAVE_USER_INFO",
        "hdViewChange": "HD_VIEW_CHANGE",

        "audioLoadingShow": "AUDIO_LOADING_SHOW",
        "audioLoadingHide": "AUDIO_LOADING_HIDE"
    };
    hd.events = events;
    return events;
});

function reloadImg(img) {
    var _reloadImgTime = 1;
    setTimeout(function() {
        if (!img.reLoadNum) img.reLoadNum = 0;
        if (img.reLoadNum >= _reloadImgTime) {
            return;
        }
        img.reLoadNum++;
        img.src += (img.src.indexOf("?") > -1 ? "&" : "?") + "r=" + new Date().getTime();
    }, 3000);
}

KISSY.add("pkgServices/utils", function(S) {

    function addSlot(s) {
        s = "" + s;
        if (s.length > 1) {
            return s;
        } else {
            return "0" + s;
        }
    }

    function getToday() {
        var d, day, m, y;
        d = new Date();
        y = d.getFullYear();
        m = addSlot((d.getMonth() + 1));
        day = addSlot(d.getDate());
        return "" + y + "-" + m + "-" + day;
    }

    function getChineseTimeString(milliseconds) {
        var d, day, m, y;
        d = new Date(milliseconds);
        y = d.getFullYear();
        m = addSlot((d.getMonth() + 1));
        day = addSlot(d.getDate());
        return "" + y + "年" + m + "月" + day + "日";
    }

    function getEnglishTimeString(milliseconds) {
        var d, day, m, y;
        d = new Date(milliseconds);
        y = "" + d.getFullYear();
        y = y.slice(-2);
        m = d.getMonth() + 1;
        day = d.getDate();
        return "" + y + "/" + m + "/" + day;
    }


    function getAccurateTime(milliseconds) {
        var d, day, h, m, mm, mm2, y;
        d = new Date(milliseconds);
        y = d.getFullYear();
        m = addSlot((d.getMonth() + 1));
        day = addSlot(d.getDate());
        h = addSlot(d.getHours());
        mm = addSlot(d.getMinutes());
        mm2 = addSlot(d.getSeconds());
        return "" + y + "年" + m + "月" + day + "日 " + h + ":" + mm + ":" + mm2;
    }

    function getWeekString(milliseconds) {
        var d, day, n;
        d = new Date(milliseconds);
        day = d.getDay();
        n = "";
        switch (day) {
            case 0:
                n = "日";
                break;
            case 1:
                n = "一";
                break;
            case 2:
                n = "二";
                break;
            case 3:
                n = "三";
                break;
            case 4:
                n = "四";
                break;
            case 5:
                n = "五";
                break;
            case 6:
                n = "六";
        }
        return "星期" + n;
    }

    function getHHMM(milliseconds) {
        var d, h, mm;
        d = new Date(milliseconds);
        h = addSlot(d.getHours());
        mm = addSlot(d.getMinutes());
        return "" + h + ":" + mm;
    }

    function getTimeString(milliseconds) {
        var d = new Date(getToday());
        var today = d.getTime() + d.getTimezoneOffset() * 60000;
        if (milliseconds > today) {
            return getHHMM(milliseconds);
        }
        if (milliseconds > (today - 86400000)) {
            return "昨天 " + getHHMM(milliseconds);
        }
        if (milliseconds > (today - 86400000 * 6)) {
            return getWeekString(milliseconds) + " " + getHHMM(milliseconds);
        }
        return getChineseTimeString(milliseconds) + " " + getHHMM(milliseconds);
    }

    function getRecordPubTime(milliseconds) {
        var d = new Date(getToday());
        var today = d.getTime() + d.getTimezoneOffset() * 60000;
        if (milliseconds > today) {
            return getHHMM(milliseconds);
        }
        if (milliseconds > (today - 86400000)) {
            return "昨天";
        }
        if (milliseconds > (today - 86400000 * 6)) {
            return getWeekString(milliseconds);
        }
        return getEnglishTimeString(milliseconds);
    }

    function getRecordDuration(milliseconds) {
        var oneMinute = 60000;
        var oneSecond = 1000;
        var minutes = Math.floor(milliseconds / oneMinute);
        var seconds = Math.floor((milliseconds % oneMinute) / 1000);
        return addSlot(minutes) + ":" + addSlot(seconds);
    }

    var urlRegExp = /(((https?:\/\/)|(\/\/)|((([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0\u08A2-\u08AC\u08E4-\u08E9\u08F0-\u08FE\u0900-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA697\uA69F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8F2-\uA8F7\uA8FB\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA80-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|[0-9]|\-)+\.)+(vermögensberatung|vermögensberater|cancerresearch|international|versicherung|construction|contractors|engineering|motorcycles|சிங்கப்பூர்|accountants|investments|enterprises|williamhill|blackfriday|photography|productions|bnpparibas|properties|republican|consulting|technology|creditcard|cuisinella|restaurant|university|vlaanderen|management|associates|foundation|industries|immobilien|healthcare|directory|bloomberg|solutions|equipment|financial|christmas|allfinanz|community|furniture|institute|education|melbourne|vacations|marketing|computer|training|software|partners|delivery|democrat|diamonds|capetown|discount|السعودية|saarland|catering|mortgage|airforce|attorney|services|supplies|engineer|cleaning|property|boutique|lighting|exchange|feedback|clothing|flsmidth|brussels|plumbing|pictures|budapest|builders|business|ventures|yokohama|holdings|bargains|pharmacy|graphics|dentist|realtor|digital|network|shiksha|support|android|domains|youtube|surgery|இந்தியா|college|cologne|capital|caravan|company|abogado|reviews|careers|academy|limited|spiegel|lacaixa|systems|kitchen|exposed|cooking|finance|country|fishing|fitness|flights|florist|channel|schmidt|cruises|forsale|auction|frogans|rentals|organic|الجزائر|gallery|okinawa|website|wedding|hosting|holiday|whoswho|singles|hamburg|recipes|neustar|guitars|gratis|travel|tienda|active|google|agency|hiphop|tattoo|global|taipei|alsace|sydney|suzuki|supply|bayern|berlin|онлайн|москва|futbol|insure|yandex|امارات|social|joburg|juegos|kaufen|expert|yachts|فلسطين|events|lawyer|schule|இலங்கை|estate|camera|london|ryukyu|الاردن|luxury|maison|energy|viajes|market|emerck|villas|career|center|report|monash|repair|moscow|المغرب|durban|museum|nagoya|direct|dental|chrome|degree|vision|reisen|مليسيا|webcam|church|dating|claims|voyage|quebec|otsuka|voting|clinic|coffee|physio|credit|photos|condos|بازار|photo|سورية|pizza|place|cymru|poker|praxi|press|codes|paris|click|vodka|dance|wales|citic|watch|rehab|reise|ninja|deals|nexus|بھارت|works|cheap|miami|email|media|mango|rocks|rodeo|lotto|cards|loans|green|build|lease|world|black|shoes|koeln|jetzt|ایران|solar|gifts|vegas|space|gives|autos|glass|audio|archi|house|संगठन|horse|homes|tatar|globo|gmail|actor|భారత్|guide|tirol|today|tokyo|tools|gripe|trade|parts|gent|gift|care|ভারত|شبكة|pics|kiwi|pink|aero|club|kred|pohl|army|post|land|casa|vote|prod|cash|prof|lgbt|life|भारत|qpon|ભારત|limo|link|ਭਾਰਤ|ලංකා|buzz|arpa|reit|luxe|تونس|fail|farm|desi|rest|cern|guru|rich|diet|meet|haus|meme|rsvp|ruhr|menu|fish|sarl|help|mini|mobi|moda|scot|work|sexy|here|blue|дети|beer|asia|sohu|camp|best|name|navy|wiki|host|cool|wien|surf|coop|dvag|сайт|immo|yoga|عمان|info|city|wang|fund|bike|tips|voto|组织机构|موقع|zone|band|town|toys|gbiz|jobs|ltda|top|tel|uno|uol|tax|soy|scb|sca|vet|rip|rio|ren|red|pub|pro|ovh|org|ooo|onl|ong|nyc|nrw|nra|wed|nhk|ngo|new|net|mov|wme|moe|mil|krd|wtc|wtf|kim|int|我爱你|ink|қаз|ing|ibm|срб|орг|tui|hiv|мкд|中文网|gov|gop|gmx|gmo|gle|укр|мон|gal|frl|foo|fly|eus|esq|edu|eat|dnp|day|dad|crs|ไทย|com|рус|ceo|みんな|cat|cal|cab|مصر|قطر|bzh|boo|新加坡|bmw|xxx|xyz|biz|bio|bid|bar|axa|zip|how|by|pk|pl|bz|er|pm|pn|hr|ht|hu|pr|es|id|ie|il|im|be|ca|in|ps|pt|et|pw|py|qa|eu|ae|re|as|al|bf|bg|bh|bi|io|iq|ir|is|it|je|zw|jm|jo|fi|at|jp|ro|af|cr|rs|ke|ru|kg|rw|kh|sa|ki|au|sb|sc|bj|fj|km|kn|fk|sd|se|kp|kr|sg|sh|am|an|si|kw|sj|sk|sl|sm|sn|so|ky|kz|la|cu|ag|fm|lb|lc|sr|st|su|fo|cv|li|cw|cx|fr|sv|sx|sy|cy|aw|sz|lk|cz|cc|cd|tc|td|lr|ls|tf|tg|th|lt|ga|lu|tj|tk|tl|tm|tn|to|bm|ax|lv|ac|ma|gb|tp|tr|de|gd|ge|tt|bn|tv|tw|tz|ua|ug|uk|mc|md|me|us|uy|uz|va|gf|vc|ve|gg|gh|gi|cf|vg|vi|mg|mh|cg|ch|vn|gl|mk|ml|mm|mn|vu|mo|ao|bo|az|ba|gm|br|wf|ci|aq|mp|mq|mr|ms|mt|mu|ws|gn|mv|佛山|集团|在线|한국|mw|mx|公益|公司|移动|my|mz|na|bs|ck|dj|nc|삼성|ne|商标|商城|gp|gq|gr|中信|中国|中國|dk|dm|nf|ng|cl|网络|do|香港|台湾|台灣|手机|ni|gs|nl|no|np|nr|gt|gu|nu|bt|nz|ar|გე|机构|om|ad|gw|gy|рф|dz|ai|世界|ec|网址|游戏|bb|pa|企业|bd|ee|广东|eg|pe|pf|pg|政务|ph|hk|hm|hn|ye|cm|cn|co|yt|za|bv|zm|bw|ly)(:\d{1,5})?(\/|\?|\#)))([^\s\(\)\[\]\{\}\.\,\"\'\?]+|\([^\s\)]*\)?|\[[^\s\]]*\]?|\{[^\s\}]*\}?|\"[^\s\"]+\"?|\'[^\s\']+\'?|\.[^\s\.]|\,[^\s\,]|\?[^\s\?])+)|((([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0\u08A2-\u08AC\u08E4-\u08E9\u08F0-\u08FE\u0900-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA697\uA69F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8F2-\uA8F7\uA8FB\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA80-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|[0-9]|\-)+\.)+(vermögensberatung|vermögensberater|cancerresearch|international|versicherung|construction|contractors|engineering|motorcycles|சிங்கப்பூர்|accountants|investments|enterprises|williamhill|blackfriday|photography|productions|bnpparibas|properties|republican|consulting|technology|creditcard|cuisinella|restaurant|university|vlaanderen|management|associates|foundation|industries|immobilien|healthcare|directory|bloomberg|solutions|equipment|financial|christmas|allfinanz|community|furniture|institute|education|melbourne|vacations|marketing|computer|training|software|partners|delivery|democrat|diamonds|capetown|discount|السعودية|saarland|catering|mortgage|airforce|attorney|services|supplies|engineer|cleaning|property|boutique|lighting|exchange|feedback|clothing|flsmidth|brussels|plumbing|pictures|budapest|builders|business|ventures|yokohama|holdings|bargains|pharmacy|graphics|dentist|realtor|digital|network|shiksha|support|android|domains|youtube|surgery|இந்தியா|college|cologne|capital|caravan|company|abogado|reviews|careers|academy|limited|spiegel|lacaixa|systems|kitchen|exposed|cooking|finance|country|fishing|fitness|flights|florist|channel|schmidt|cruises|forsale|auction|frogans|rentals|organic|الجزائر|gallery|okinawa|website|wedding|hosting|holiday|whoswho|singles|hamburg|recipes|neustar|guitars|gratis|travel|tienda|active|google|agency|hiphop|tattoo|global|taipei|alsace|sydney|suzuki|supply|bayern|berlin|онлайн|москва|futbol|insure|yandex|امارات|social|joburg|juegos|kaufen|expert|yachts|فلسطين|events|lawyer|schule|இலங்கை|estate|camera|london|ryukyu|الاردن|luxury|maison|energy|viajes|market|emerck|villas|career|center|report|monash|repair|moscow|المغرب|durban|museum|nagoya|direct|dental|chrome|degree|vision|reisen|مليسيا|webcam|church|dating|claims|voyage|quebec|otsuka|voting|clinic|coffee|physio|credit|photos|condos|بازار|photo|سورية|pizza|place|cymru|poker|praxi|press|codes|paris|click|vodka|dance|wales|citic|watch|rehab|reise|ninja|deals|nexus|بھارت|works|cheap|miami|email|media|mango|rocks|rodeo|lotto|cards|loans|green|build|lease|world|black|shoes|koeln|jetzt|ایران|solar|gifts|vegas|space|gives|autos|glass|audio|archi|house|संगठन|horse|homes|tatar|globo|gmail|actor|భారత్|guide|tirol|today|tokyo|tools|gripe|trade|parts|gent|gift|care|ভারত|شبكة|pics|kiwi|pink|aero|club|kred|pohl|army|post|land|casa|vote|prod|cash|prof|lgbt|life|भारत|qpon|ભારત|limo|link|ਭਾਰਤ|ලංකා|buzz|arpa|reit|luxe|تونس|fail|farm|desi|rest|cern|guru|rich|diet|meet|haus|meme|rsvp|ruhr|menu|fish|sarl|help|mini|mobi|moda|scot|work|sexy|here|blue|дети|beer|asia|sohu|camp|best|name|navy|wiki|host|cool|wien|surf|coop|dvag|сайт|immo|yoga|عمان|info|city|wang|fund|bike|tips|voto|组织机构|موقع|zone|band|town|toys|gbiz|jobs|ltda|top|tel|uno|uol|tax|soy|scb|sca|vet|rip|rio|ren|red|pub|pro|ovh|org|ooo|onl|ong|nyc|nrw|nra|wed|nhk|ngo|new|net|mov|wme|moe|mil|krd|wtc|wtf|kim|int|我爱你|ink|қаз|ing|ibm|срб|орг|tui|hiv|мкд|中文网|gov|gop|gmx|gmo|gle|укр|мон|gal|frl|foo|fly|eus|esq|edu|eat|dnp|day|dad|crs|ไทย|com|рус|ceo|みんな|cat|cal|cab|مصر|قطر|bzh|boo|新加坡|bmw|xxx|xyz|biz|bio|bid|bar|axa|zip|how|by|pk|pl|bz|er|pm|pn|hr|ht|hu|pr|es|id|ie|il|im|be|ca|in|ps|pt|et|pw|py|qa|eu|ae|re|as|al|bf|bg|bh|bi|io|iq|ir|is|it|je|zw|jm|jo|fi|at|jp|ro|af|cr|rs|ke|ru|kg|rw|kh|sa|ki|au|sb|sc|bj|fj|km|kn|fk|sd|se|kp|kr|sg|sh|am|an|si|kw|sj|sk|sl|sm|sn|so|ky|kz|la|cu|ag|fm|lb|lc|sr|st|su|fo|cv|li|cw|cx|fr|sv|sx|sy|cy|aw|sz|lk|cz|cc|cd|tc|td|lr|ls|tf|tg|th|lt|ga|lu|tj|tk|tl|tm|tn|to|bm|ax|lv|ac|ma|gb|tp|tr|de|gd|ge|tt|bn|tv|tw|tz|ua|ug|uk|mc|md|me|us|uy|uz|va|gf|vc|ve|gg|gh|gi|cf|vg|vi|mg|mh|cg|ch|vn|gl|mk|ml|mm|mn|vu|mo|ao|bo|az|ba|gm|br|wf|ci|aq|mp|mq|mr|ms|mt|mu|ws|gn|mv|佛山|集团|在线|한국|mw|mx|公益|公司|移动|my|mz|na|bs|ck|dj|nc|삼성|ne|商标|商城|gp|gq|gr|中信|中国|中國|dk|dm|nf|ng|cl|网络|do|香港|台湾|台灣|手机|ni|gs|nl|no|np|nr|gt|gu|nu|bt|nz|ar|გე|机构|om|ad|gw|gy|рф|dz|ai|世界|ec|网址|游戏|bb|pa|企业|bd|ee|广东|eg|pe|pf|pg|政务|ph|hk|hm|hn|ye|cm|cn|co|yt|za|bv|zm|bw|ly)(:\d{1,5})?\/?\#?(?![\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0\u08A2-\u08AC\u08E4-\u08E9\u08F0-\u08FE\u0900-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA697\uA69F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8F2-\uA8F7\uA8FB\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA80-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]))/g;

    function convertURL(html) {
        return html.replace(urlRegExp, function(url) {
            if (url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0) {
                return "<a href='" + url + "' target='_blank'>" + url + "</a>";
            } else {
                return "<a href='http://" + url + "' target='_blank'>" + url + "</a>";
            }
        })
    }

    function formatUserAvatarUrl(url) {
        var len = url.length;
        if (url.indexOf("http://wx.qlogo.cn/") === 0 && (url.slice(len - 2) == "/0")) {
            src = url.slice(0, len - 2) + "/132";
        } else if (url.indexOf("http://image-storage.b0.upaiyun.com/") === 0) {
            src = url + "!144";
        } else {
            src = url
        }
        return src;
    }

    function download() {
        var ua = navigator.userAgent;
        var is_weixin = /micromessenger/i.test(ua);
        if(is_weixin){
            window.open("http://a.app.qq.com/o/simple.jsp?pkgname=fm.dian.hdui","_self");
            return
        }
        if(/(iphone|ipad|ipod)/i.test(ua)){
            window.open("https://itunes.apple.com/cn/app/id954993775","_self");
        }else if(/android/i.test(ua)){
            window.open("http://apk.confernce.com/1.1.4/hd.apk","_self");
        }else{
            window.open("https://itunes.apple.com/cn/app/id954993775","_self");
        }
        _hmt.push(["_trackEvent", "download", "download-"+hd.device]);
    }

    var utils =  {
        "getTimeString": getTimeString,
        "getChineseTimeString": getChineseTimeString,
        "getAccurateTime": getAccurateTime,
        "getRecordDuration": getRecordDuration,
        "convertURL": convertURL,
        "formatUserAvatarUrl": formatUserAvatarUrl,
        "getRecordPubTime": getRecordPubTime,
        "download": download
    };
    hd.utils = utils;

    return utils
    
},{requires:[]});

KISSY.add("pkgServices/login",function(S){
    console.log("service >>>>>>>> Login!!!");
    var avatar, login, nickname, token, user_id;
    var C = S.Cookie
    userId  = C.get("userId");
    nickname = C.get("userName");
    avatar   = C.get("avatar");
    token    = C.get("token");
    login    = true;
    S.each([userId, nickname, avatar, token], function(item) {
        if (typeof item === "undefined") {
            return login = false;
        }
    });

    // hd.login = true;
    // hd.userInfo = {
    //     "user_id": 132,
    //     "nickname": "nickname",
    //     "avatar": "http://hd-image-cdn.b0.upaiyun.com/assets/img/default-user-avatar.png",
    //     "token": "token"
    // };
    // return

    hd.login = login;
    if (login) {
        hd.userInfo = {
            "user_id": parseInt(user_id),
            "nickname": nickname,
            "avatar": avatar,
            "token": token
        }
    }
    return {}
});

KISSY.add("pkgServices/protocols", function(S) {

    var hbp = {
        "service_type": "HEARTBEAT",
        "service_request": {
            "version": [{
                "serialize_number": 0,
                "service_type": "CORE",
                "version_type": "ROOM",
                "id": ""+hd.roomInfo.id //room_id
            }, {
                "serialize_number": 0,
                "service_type": "MEDIA",
                "version_type": "LIVE",
                "id": "{live_id}" //在麦上的人
            }, {
                "serialize_number": 0,
                "service_type": "ONLINE",
                "version_type": "LIVE",
                "id": "{live_id}" // 在线人数
            }, {
                "serialize_number": 0,
                "service_type": "BLACKBOARD",
                "version_type": "LIVE",
                "id": "{live_id}" // live_id
            }, {
                "serialize_number": 0,
                "service_type": "GROUP_CHAT",
                "version_type": "LIVE",
                "id": "{live_id}" // live_id 聊天
            }, {
                "serialize_number": 0,
                "service_type": "LIVE",
                "version_type": "LIVE",
                "id": "{live_id}" // live_id 是否结束，修改房间信息
            }]
        }
    };

    var heartbeatProtocol = {};

    function generateHeartbeatProtocol(live_id) {
        var s = JSON.stringify(hbp);
        s = s.replace(/\{live_id\}/g, live_id);
        heartbeatProtocol = JSON.parse(s);
        if (hd.login) {
            var obj = {
                "serialize_number": 0,
                "service_type": "LIVE",
                "version_type": "USER",
                "id": hd.userInfo.user_id //查看自己是否被踢
            };
            heartbeatProtocol.service_request.version.push(obj);
        }

        amendProtocol(heartbeatProtocol, {"live_id": live_id});
        return heartbeatProtocol;
    }

    function syncVersion(pubData) {
        var p = heartbeatProtocol;
        if (!(p.service_request && p.service_request.version)) {
            return
        }
        var pv = pubData.version;

        S.each(p.service_request.version, function(v) {
            if (v.service_type == pv.service_type && v.version_type == pv.version_type) {
                v.serialize_number = pv.serialize_number;
            }
        });
    }


    function amendProtocol(protocol, options) {
        protocol.from = {}
        if (hd.login) {
            protocol.from.token = hd.userInfo.token;
            protocol.from.user_id = hd.userInfo.user_id;
        }
        if (hd.joinedRoom) {
            protocol.from.room_id = hd.roomInfo.id
        }

        if (options) {
            protocol.from.live_id = options.live_id
        }

        protocol.seq_num = new Date().getTime();
        return protocol;
    };


    function joinRoom() {
        var protocol = {
            "service_type": "AUTH",
            "service_request": {
                "action_type": "JOIN_ROOM",
                "action_data": {
                    "room_id": hd.roomInfo.id
                }
            }
        };
        return amendProtocol(protocol);
    }

    function fetchLiveList(offset) {
        var protocol = {
            "service_type": "LIVE",
            "service_request": {
                "action_type": "FETCH_LIST",
                "action_data": {
                    "room_id": hd.roomInfo.id,
                    "offset": offset,
                    "limit": 6
                }
            }
        };
        return amendProtocol(protocol);
    }


    function userInfo(user_id) {
        var protocol = {
            "service_type": "CORE",
            "service_request": {
                "action_type": "FETCH_USER_INFO",
                "user_id": user_id
            }
        };
        return amendProtocol(protocol);
    }

    function joinLive(live_id, pwd) {
        var protocol = {
            "service_type": "AUTH",
            "service_request": {
                "action_type": "JOIN_LIVE",
                "action_data": {
                    "live_id": live_id,
                    "password": pwd || ""
                }
            }
        };
        return amendProtocol(protocol);
    }

    function leaveLive(live_id) {
        var protocol = {
            "service_type": "AUTH",
            "service_request": {
                "action_type": "LEAVE_LIVE",
                "action_data": {
                    "live_id": live_id
                }
            }
        };
        return amendProtocol(protocol);
    }


    // function fetchMemberCount() {
    //     var protocol = {
    //         "service_type": "CORE",
    //         "service_request": {
    //             "action_type": "FETCH_MEMBER_COUNT",
    //             "room_id": hd.roomInfo.id
    //         }
    //     };
    //     return amendProtocol(protocol);
    // }

    function sendChat(options) {
        var protocol = {
            "service_type": "GROUP_CHAT",
            "service_request": {
                "action_type": "SEND",
                "action_data": {
                    "group_chat_message": {
                        "user_id": hd.userInfo.user_id,
                        "live_id": options.live_id,
                        "group_chat_message_type": "TEXT",
                        "message": {
                            "data": options.data
                        }
                    }
                }
            }
        };
        return amendProtocol(protocol, options);
    }

    function fetchChat(options) {
        var protocol = {
            "service_type": "GROUP_CHAT",
            "service_request": {
                "action_type": "FETCH",
                "action_data": {
                    "last_group_chat_id": options.last_group_chat_id,
                    "live_id": options.live_id,
                    "is_older": options.is_older,
                    "count": 20
                }
            }
        };
        return amendProtocol(protocol, options);
    }

    function mediaUrl(options) {
        var protocol = {
            "service_type": "MEDIA",
            "service_request": {
                "action_type": "FETCH_AUDIO_URL",
                "live_id": options.live_id
            }
        };
        return amendProtocol(protocol, options);
    }

    function videoUrl(options) {
        var protocol = {
            "service_type": "MEDIA",
            "service_request": {
                "action_type": "FETCH_VIDEO_URL",
                "user_id": options.user_id
            }
        };
        return amendProtocol(protocol, options);
    }


    // function fetchMediaVersion() {
    //     var protocol = {
    //         "service_type": "MEDIA",
    //         "service_request": {
    //             "action_type": "FETCH_VERSION",
    //             "room_id": hd.roomInfo.id
    //         }
    //     };
    //     return amendProtocol(protocol);
    // }

    // function fetchOnlineCount() {
    //     var protocol = {
    //         "service_type": "ONLINE",
    //         "service_request": {
    //             "action_type": "FETCH_ONLINE_USER_NUMBER",
    //             "room_id": hd.roomInfo.id
    //         }
    //     };
    //     return amendProtocol(protocol);
    // }

    function fetchBlackboard(options) {
        var protocol = {
            "service_type": "BLACKBOARD",
            "service_request": {
                "action_type": "FETCH",
                "action_data": {
                    "card_ids": [options.card_id]
                }
            }
        };
        return amendProtocol(protocol, options);
    }

    function fetchHistory(offset) {
        var protocol = {
            "service_type": "HISTORY",
            "service_request": {
                "action_type": "FETCH_LIST",
                "action_data": {
                    "room_id": hd.roomInfo.id,
                    "offset": offset || 0,
                    "limit": 10
                }
            }
        };
        return amendProtocol(protocol);
    }

    function fetchHistoryCount(room_id){
        var protocol = {
            "service_type": "HISTORY",
            "service_request": {
                "action_type": "FETCH_COUNT",
                "action_data": {
                    "room_id": hd.roomInfo.id
                }
            }
        };
        return amendProtocol(protocol);
    }

    function fetchRecordAudio(history_id) {
        var protocol = {
            "service_type": "HISTORY",
            "service_request": {
                "action_type": "RECORD_AUDIO",
                "action_data": {
                    "history_id": history_id
                }
            }
        };
        return amendProtocol(protocol);
    }

    return {
        "generateHeartbeatProtocol": generateHeartbeatProtocol,
        "joinRoom": joinRoom,
        "fetchLiveList": fetchLiveList,
        "userInfo": userInfo,
        "joinLive": joinLive,
        "leaveLive": leaveLive,
        "syncVersion": syncVersion,
        "fetchChat": fetchChat,
        "fetchBlackboard": fetchBlackboard,
        "sendChat": sendChat,
        "mediaUrl": mediaUrl,
        "videoUrl": videoUrl,
        //"fetchMediaVersion": fetchMediaVersion,
        //"fetchOnlineCount": fetchOnlineCount,
        //"fetchMemberCount": fetchMemberCount,
        "fetchHistory": fetchHistory,
        "fetchHistoryCount": fetchHistoryCount,
        "fetchRecordAudio": fetchRecordAudio
    }
}, {
    "requires": ["pkgServices/login"]
});

KISSY.add("pkgServices/emotion", function(S) {

    var emotions = [
        [{
            "name": "[微笑]",
            "classname": "e-smile"
        }, {
            "name": "[亲亲]",
            "classname": "e-kiss"
        }, {
            "name": "[大笑]",
            "classname": "e-grin"
        }, {
            "name": "[可怜]",
            "classname": "e-teary"
        }, {
            "name": "[无语]",
            "classname": "e-grimace"
        }, {
            "name": "[流汗]",
            "classname": "e-sweat"
        }, {
            "name": "[淫笑]",
            "classname": "e-sly"
        }, {
            "name": "[呲牙]",
            "classname": "e-trick"
        }, {
            "name": "[销魂]",
            "classname": "e-shy"
        }, {
            "name": "[流泪]",
            "classname": "e-cry"
        }, {
            "name": "[发怒]",
            "classname": "e-angry"
        }, {
            "name": "[白眼]",
            "classname": "e-slight"
        }, {
            "name": "[惊讶]",
            "classname": "e-toasted"
        }, {
            "name": "[发狂]",
            "classname": "e-more-angry"
        }, {
            "name": "[色色]",
            "classname": "e-drool"
        }, {
            "name": "[晕晕]",
            "classname": "e-dizzy"
        }, {
            "name": "[惶恐]",
            "classname": "e-panic"
        }, {
            "name": "[疑问]",
            "classname": "e-shocked"
        }, {
            "name": "[小猫]",
            "classname": "e-cat"
        }, {
            "name": "[躺下]",
            "classname": "e-lay-down"
        }],
        [{
            "name": "[小花]",
            "classname": "e-flower"
        }, {
            "name": "[桃心]",
            "classname": "e-heart"
        }, {
            "name": "[心碎]",
            "classname": "e-broken-heart"
        }, {
            "name": "[菊花]",
            "classname": "e-c-flower"
        }, {
            "name": "[五毛]",
            "classname": "e-money"
        }, {
            "name": "[香皂]",
            "classname": "e-soap"
        }, {
            "name": "[便便]",
            "classname": "e-shit"
        }, {
            "name": "[坏笑]",
            "classname": "e-sly-2"
        }, {
            "name": "[尴尬]",
            "classname": "e-awkward"
        }, {
            "name": "[可爱]",
            "classname": "e-cute"
        }, {
            "name": "[女子]",
            "classname": "e-woman"
        }, {
            "name": "[啊啊]",
            "classname": "e-ah"
        }, {
            "name": "[阴暗]",
            "classname": "e-live-in-shadow"
        }, {
            "name": "[大叔]",
            "classname": "e-uncle"
        }, {
            "name": "[坏人]",
            "classname": "e-bad-guy"
        }, {
            "name": "[小鸡]",
            "classname": "e-chicken"
        }, {
            "name": "[小猪]",
            "classname": "e-pig"
        }, {
            "name": "[蜡烛]",
            "classname": "e-candle"
        }, {
            "name": "[跪下]",
            "classname": "e-on-knees"
        }, {
            "name": "[站立]",
            "classname": "e-stand-up"
        }],
        [{
            "name": "[e大笑]",
            "classname": "em-laugh"
        }, {
            "name": "[e口罩]",
            "classname": "em-breath-mask"
        }, {
            "name": "[e笑哭]",
            "classname": "em-laugh-to-cry"
        }, {
            "name": "[e鬼脸]",
            "classname": "em-tongue"
        }, {
            "name": "[e晕菜]",
            "classname": "em-dizzy"
        }, {
            "name": "[e发呆]",
            "classname": "em-scowl"
        }, {
            "name": "[e惊悚]",
            "classname": "em-panic"
        }, {
            "name": "[e伤心]",
            "classname": "em-sad"
        }, {
            "name": "[e眨眼]",
            "classname": "em-blink"
        }, {
            "name": "[e微笑]",
            "classname": "em-smile"
        }, {
            "name": "[e生气]",
            "classname": "em-angry"
        }, {
            "name": "[e魔鬼]",
            "classname": "em-monster"
        }, {
            "name": "[e幽灵]",
            "classname": "em-ghost"
        }, {
            "name": "[e爱心]",
            "classname": "em-gift"
        }, {
            "name": "[e拜佛]",
            "classname": "em-buddha"
        }, {
            "name": "[e有力]",
            "classname": "em-muscle"
        }, {
            "name": "[e金钱]",
            "classname": "em-money"
        }, {
            "name": "[e蛋糕]",
            "classname": "em-cake"
        }, {
            "name": "[e庆祝]",
            "classname": "em-celebrate"
        }, {
            "name": "[e礼品]",
            "classname": "em-gif"
        }],
        [{
            "name": "[闪电]",
            "classname": "e-flash"
        },
        {
            "name": "[晚安]",
            "classname": "e-night"
        },
        {
            "name": "[耶耶]",
            "classname": "e-yeah"
        },
        {
            "name": "[好的]",
            "classname": "e-ok"
        },
        {
            "name": "[棒棒]",
            "classname": "e-great"
        },
        {
            "name": "[菜鸟]",
            "classname": "e-suck"
        },
        {
            "name": "[握手]",
            "classname": "e-handshake"
        },
        {
            "name": "[没用]",
            "classname": "e-useless"
        },
        {
            "name": "[鼓气]",
            "classname": "e-fist"
        },
        {
            "name": "[逗逼]",
            "classname": "e-jerk"
        },
        {
            "name": "[呆萌]",
            "classname": "e-logy"
        },
        {
            "name": "[秃顶]",
            "classname": "e-bald"
        },
        {
            "name": "[兔子]",
            "classname": "e-rabbit"
        },
        {
            "name": "[亢奋]",
            "classname": "e-excited"
        },
        {
            "name": "[吐血]",
            "classname": "e-blood"
        },
        {
            "name": "[鸡贼]",
            "classname": "e-weasel"
        },
        {
            "name": "[鸭梨]",
            "classname": "e-pear"
        },
        {
            "name": "[吻吻]",
            "classname": "e-lips"
        },
        {
            "name": "[葫芦]",
            "classname": "e-gourd"
        },
        {
            "name": "[小鱼]",
            "classname": "e-fish"
        }]
    ];

    var allEmotions = [];

    S.each(emotions,function(e){
        allEmotions = allEmotions.concat(e);
    });

    function convertEmotionHtml(html) {
        var numEmotion = 0;

        function isEmotion(match) {
            var obj, _i, _len, _ref;
            _ref = allEmotions;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                obj = _ref[_i];
                if (obj.name === match) {
                    return obj;
                }
            }
            return false;
        };

        return html.replace(/\[e?(..)\]/g, function(match, emotionName, index) {
            var emotion = isEmotion(match);
            if (emotion) {
                numEmotion++;
                return "<span class='ie-sprite " + emotion.classname + "'></span>";
            } else {
                return match;
            }
        });
    }

    return {
        "emotions": emotions,
        "allEmotions": allEmotions,
        "convertEmotionHtml": convertEmotionHtml
    }

}, {
    requires: []
});

KISSY.add("pkgServices/socket", function (S, events, protocols) {
    var socketEvents = ["connect_error", "connect_timeout", "reconnect_attempt", "reconnect_error", "reconnect_failed"];
    var client = null;
    var joinedLive = false;
    var requests = [];

    function createClient() {
		/*
        var l = hd.wsurls.length;
        var i = Math.floor(Math.random() * l);
        client = io.connect(hd.wsurls[i], {
            "force new connection": true
        });
        return client;
		*/
		
		//TODO 自动设置连接到服务器
        client = io.connect("http://192.168.199.222:3000", {
            "force new connection": true
        });
		
        return client;
    }

    function bindSocketEvents(c) {
        S.each(socketEvents, function (e) {
            c.on(e, function (data) {
                console.log("socket_event -> " + e);
                hd.log("socket_event -> " + e);
            })
        })
    }


    var SocketService = S.Base.extend({
        initializer: function () {
            this.refreshClient();
        },

        destructor: function () {
            // 析构函数
        },

        sendRequest: function (protocol) {
            console.log(">>>>>>>>>>>> protocol " + protocol.service_type);
            console.log(JSON.stringify(protocol));
            if (client && client.connected) {
                //requests.push(protocol);
                client.emit("serverMessage", protocol);
                return true;
            }
            return false;
        },

        refreshClient: function () {
            if (client) {
                client.disconnect()
            }
            var c = createClient();
            var self = this;
            bindSocketEvents(c);

            c.on("connect", function (e) {
                self.sendRequest(protocols.joinRoom());
            });

            c.on("disconnect", function () {
                hd.joinedRoom = false;
                joinedLive = false;
                hd.eventEmitter.trigger(events.hdAlert, "网络连接已断开");
            });

            c.on("serverMessage", function (msg) {
                switch (msg.message_type) {
                    case "RESPONSE":
                        S.bind(responseHandler, self, msg)();
                        break;
                    case "PUBLISH":
                        S.bind(publishHandler, self, msg)();
                        break;
                }
            });
        }
    });

    function handleFrequentRequest(data) {
        var service_type = data.service_type;
        var action_type = data.service_response.action_type;
        hd.eventEmitter.trigger("hd_406_st_" + service_type + "_at_" + action_type);
    }

    function responseHandler(data) {
        console.log(">>>>>>>>>>>>>> Response");
        console.log(JSON.stringify(data));
        if (data.response_status == 406) {
            handleFrequentRequest(data);
            return;
        }
        //TODO
        if (data.response_status != 200) {
            return
        }

        var action_data = data.service_response.action_data;
        var action_type = data.service_response.action_type;
        switch (data.service_type) {
            case "AUTH":
                if (action_type == "JOIN_ROOM") {
                    if (data.service_response.error == "BLACKLIST") {
                        hd.eventEmitter.trigger(events.hdShowPopup, "你在该频道的黑名单中");
                    } else {
                        hd.joinedRoom = true;
                        hd.eventEmitter.trigger(events.hdResJoinedRoom);
                    }
                    return
                }
                if (action_type == "JOIN_LIVE") {
                    if (data.service_response.error == "PASSWORD_INVALIDATE") {
                        hd.eventEmitter.trigger(events.hdResJoinLiveFailed);
                    } else {
                        hd.eventEmitter.trigger(events.hdResJoinLiveSuccess);
                    }
                    return
                }
                if (action_type == "LEAVE_LIVE") {
                    hd.eventEmitter.trigger(events.hdResLeaveLiveSuccess, data);
                    return
                }
                break;

            case "LIVE":
                if (action_type == "FETCH_LIST") {
                    hd.eventEmitter.trigger(events.hdResFetchLiveList, action_data);
                }
                break;

            case "CORE":
                if (action_type == "FETCH_USER_INFO") {
                    hd.eventEmitter.trigger(events.hdSaveUserInfo, action_data);
                }
                break;

            case "GROUP_CHAT":
                if (action_type == "SEND") {
                    hd.eventEmitter.trigger(events.hdResSendChatSuccess, data);
                }
                if (action_type == "FETCH") {
                    hd.eventEmitter.trigger(events.hdResFetchGroupChat, data);
                }
                break;

            case "BLACKBOARD":
                if (action_data && action_data.cards && action_data.cards[0]) {
                    var card = action_data.cards[0];
                    if (card.card_type == "IMAGE") {
                        card.data = card.data + "!bb";
                    }
                    hd.eventEmitter.trigger(events.hdResBlackboard, action_data);
                }
                break;

            case "HISTORY":
                if (action_type == "FETCH_LIST") {
                    hd.eventEmitter.trigger(events.hdResHistory, action_data);
                }
                if (action_type == "FETCH_COUNT") {
                    hd.eventEmitter.trigger(events.hdResHistoryCount, action_data);
                }
                if (action_type == "RECORD_AUDIO") {
                    hd.eventEmitter.trigger(events.hdResRecordAudio, action_data);
                }
                break;

            case "MEDIA":
                if (action_type == "FETCH_AUDIO_URL") {
                    hd.eventEmitter.trigger(events.hdResMediaUrl, action_data);
                }
                if (action_type == "FETCH_VIDEO_URL") {
                    hd.eventEmitter.trigger(events.hdResVideoUrl, action_data);
                }
                break;
        }
    }

    function publishHandler(data) {
        console.log(">>>>>>>>>>>>>> Publish");
        console.log(JSON.stringify(data));
        protocols.syncVersion(data);
        var st = data.version.service_type;
        var vt = data.version.version_type;

        switch (st) {
            case "GROUP_CHAT":
                hd.eventEmitter.trigger(events.hdPubNewChat, data);
                break;
            case "CORE":
                if (vt == "ROOM") {
                    hd.adminList = data.version.data.roomUserAdminList;
                    hd.roomInfo = data.version.data.room;
                    var list = data.version.data.roomUserIgnoreList;
                    hd.blackList = [];
                    if (list) {
                        S.each(list, function (obj) {
                            hd.blackList.push(obj.user_id);
                        });
                    }
                    hd.eventEmitter.trigger(events.hdRoomReady);
                }
                break;

            case "BLACKBOARD":
                if (vt == "LIVE") {
                    hd.eventEmitter.trigger(events.hdPubBlackboard, data.version.data)
                }
                break;
            case "MEDIA":
                if (vt == "LIVE") {
                    hd.eventEmitter.trigger(events.hdPubMedia, data.version.data)
                }
                break;
            case "ONLINE":
                if (vt == "LIVE") {
                    hd.eventEmitter.trigger(events.hdPubOnline, data.version)
                }
                break;
            case "LIVE":
                if (vt == "LIVE") {
                    hd.eventEmitter.trigger(events.hdPubUpdateLiveInfo, data.version.data.live_info);
                }
                break;
        }
    }

    var service = new SocketService();
    hd.eventEmitter.bind("hd_406_st_AUTH_at_JOIN_ROOM", function () {
        S.later(function () {
            self.sendRequest(protocols.joinRoom());
        }, 2000)
    });
    return service
}, {
    requires: ["pkgServices/events", "pkgServices/protocols"]
});

KISSY.add("pkgServices/user", function(S, events, protocols, socket) {
    //用户信息半个小时过期
    var userInfoExpireTime = 30 * 60 * 1000;

    //发送更新用户信息请求
    var UserService = S.Base.extend({
        initializer: function() {
            // 构造函数
        },
        destructor: function() {
            // 析构函数
        },
        getUser: function(user_id) {
            var userInfoString = localStorage.getItem(user_id);
            if (userInfoString) {
                var userInfo = JSON.parse(userInfoString)
                if ((!userInfo.expireTime) || (userInfo.expireTime + userInfoExpireTime) < S.now()) {
                    socket.sendRequest(protocols.userInfo(user_id))
                }
                return userInfo;
            } else {
                socket.sendRequest(protocols.userInfo(user_id));
                return {
                    "id": user_id,
                    "nickname": "参会用户",
                    "avatar": hd.defaultUserAvatar
                }
            }
        },
        saveUser: function(userInfo) {
            if(!userInfo){return;}
            if ((typeof userInfo.avatar === "undefined") || userInfo.avatar === "" || userInfo.avatar === "undefined") {
                userInfo.avatar = hd.defaultUserAvatar;
            }
            if ((typeof userInfo.nickname === "undefined") || userInfo.nickname === "" || userInfo.nickname === "undefined") {
                userInfo.nickname = "参会用户";
            }
            if (userInfo.nickname == "NONE" || userInfo.avatar == "NONE" || userInfo.nickname == "(null)" || userInfo.avatar == "(null)") {
                userInfo.nickname = "参会用户";
                userInfo.avatar = hd.defaultUserAvatar;
            }
            //设定写入时间
            userInfo.expireTime = S.now();
            userInfo.avatar = this.transformAvatarSrc(userInfo.avatar);
            try {
                localStorage.setItem(userInfo.id, JSON.stringify(userInfo));
            } catch (e) {
                localStorage.clear();
            }
            hd.eventEmitter.trigger(events.hdUserInfo, userInfo);
        },
        /**
         * 优化头像下载地址
         */
        transformAvatarSrc: function(url) {
            var len = url.length;
            if (url.indexOf("http://wx.qlogo.cn/") === 0 && (url.slice(len - 2) == "/0")) {
                src = url.slice(0, len - 2) + "/132";
            } else if (url.indexOf("http://image-storage.b0.upaiyun.com/") === 0) {
                src = url + "!144";
            } else {
                src = url
            }
            return src;
        }
    });

    var userService = new UserService();

    hd.eventEmitter.bind(events.hdSaveUserInfo , function(data){userService.saveUser(data.user_info)});

    return userService

}, {
    requires: ["pkgServices/events", "pkgServices/protocols", "pkgServices/socket"]
});

KISSY.add("pkgServices/speakers", function(S, events, socket) {
    var user_id_list = [];
    function mergeSpeakers(data) {
        var new_id_list = data.user_id;
		
        if (new_id_list.length === 0) {
            user_id_list = [];
            hd.eventEmitter.trigger(events.hdNoSpeakers);
            return;
        }

        for ( var _i = 0, _len = new_id_list.length; _i < _len; _i++) {
            var new_id = new_id_list[_i];
            if (user_id_list.indexOf(new_id) === -1) {
                user_id_list.push(new_id);
                hd.eventEmitter.trigger(events.hdAddSpeakers, new_id);
            }
        }
        var removableId = [];
        for (var index = 0 , _j = 0, _len1 = user_id_list.length; _j < _len1; index = ++_j) {
            var old_id = user_id_list[index];
            if (new_id_list.indexOf(old_id) === -1) {
                removableId.push(index);
                hd.eventEmitter.trigger(events.hdRemoveSpeaker, old_id);
            }
        }
        while (removableId.length > 0) {
            user_id_list.splice(removableId.pop(), 1);
        }
    };

    hd.eventEmitter.bind(events.hdPubMedia, mergeSpeakers);
    return {}
}, {
    requires: ["pkgServices/events", "pkgServices/socket"]
});


KISSY.add("pkgServices/services", function(S, events, utils, login, protocols, emotion, socket, user, speakers) {
    return {
        "events": events,
        "utils": utils,
        "emotion": emotion,
        "socket": socket,
        "protocols": protocols,
        "user": user
    }
}, {
    requires: ["pkgServices/events", "pkgServices/utils", "pkgServices/login", "pkgServices/protocols", "pkgServices/emotion", "pkgServices/socket", "pkgServices/user","pkgServices/speakers"]
});

KISSY.add("pkgPc/view", function(S, events) {
    //获取当前页面上所有的区域性的view
    var zindex = 10;
    var timer = null;
    var docWidth = S.Node.one(".body").outerWidth() + 10;
    var allviews = S.all(".view");
    var currentView = "channel";

    function showView(selector) {
        if (selector == "channel" || selector == "") {
            return;
        }
        S.Node.one("#" + selector).css("z-index", (++zindex)).removeClass("view-hide");
    }

    function hideView(selector) {
        if (selector == "channel" || selector == "") {
            return;
        }
        S.Node.one("#" + selector).addClass("view-hide");
    }

    //定义view-controller
    var View = S.Base.extend({}, {
        ATTRS: {
            name: {
                value: ''
            },
            liveInfo: {
                value: null
            },
            record:{
                value: null
            }
        }
    });

    var view = new View();
    view.on("afterNameChange", function(e) {
        view.fire(events.hdviewchange, {
            "prevVal": e.prevVal,
            "newVal": e.newVal
        });
        if(e.prevVal == "history" && e.newVal=="history-player"){
            showView("history-player");
            return
        }
        if(e.prevVal == "history-player" && e.newVal=="history"){
            hideView("history-player");
            return
        }
        if(e.newVal == "channel"){
            hideView(e.prevVal);
        }else{
            S.later(hideView, 600, false, null, e.prevVal);
        }
        showView(e.newVal);
        console.log("view: " + e.prevVal + " >>> " + e.newVal);
    });

    function init() {
        var live_id = new S.Uri(location.toString()).getQuery().get("live_id");
        var allviews = S.all(".view");
        var currentView = live_id ? "live-cover" : "channel";
        view.set("name", currentView);
        S.each(allviews, function(n) {
            var id = n.getAttribute("id");
            if (id === currentView) {
                showView(currentView);
            } else {
                hideView(id);
            }
        });
        allviews.removeClass("opacity-0");
        S.later(function() {
            allviews.addClass("view-transition");
        }, 20);
    }

    S.later(init, 50);

    return view;

}, {
    requires: ["pkgServices/events"]
});

KISSY.add("pkgPc/channel", function(S, services, viewManager) {
    var utils = services.utils;
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var userService = services.user;
    var liveList = [];
    var tplChannelLive = S.one("#tpl-channel-live").html();
    var played = false;
    var inChannel = false;
    /**
     * view变化时
     */
    viewManager.on(events.hdviewchange, function(e) {
        if (e.prevVal == "channel") {
            inChannel = false;
            hd.eventEmitter.trigger(events.hdHidePopup);
        }
        if (e.newVal == "channel") {
            inChannel = true;
        }
    });
    /**
     * 获取直播房间的id list
     */
    function fetchLiveList() {
        socket.sendRequest(protocols.fetchLiveList(liveList.length));
    }

    function fetchLiveListResult(data) {
        liveList = data.liveListInfos || [];
        if (liveList.length === 0) {
            S.one("#js-no-live-room").show();
            hd.eventEmitter.trigger(events.hdNoLive);
            return;
        }
        hd.eventEmitter.trigger(events.hdLiveList, liveList);
        S.later(function() {
            hd.eventEmitter.unbind(events.hdResJoinedRoom, joinRoomSuccess);
        }, 10);
        S.one("#js-channel-room-list").show();
        S.one("#js-channel-rooms").delegate("click", ".channel-room", enterRoom);
        renderLiveList();
    }

    function joinLive() {
        if (inChannel) {
            var info = viewManager.get("liveInfo");
            if (info) {
                socket.sendRequest(protocols.joinLive(info.id, info.password));
            }
        }
    }

    /** 进入房间 */
    function enterRoom(e) {
        var currentTarget = e.currentTarget;
        var liveID = currentTarget.getAttribute("data-live-id");
        var liveInfo = null;
        S.each(liveList, function(obj) {
            if (obj.live_info.id == liveID) {
                liveInfo = obj.live_info;
            }
        });
        if (liveInfo) {
            viewManager.set("liveInfo", liveInfo);
            if (liveInfo.locked) {
                viewManager.set("name", "auth");
            } else {
                /**加入live*/
                hd.eventEmitter.trigger(events.hdShowPopup, "正在进入直播间");
                joinLive();
            }
        }
    };

    /**
     * 渲染直播房间信息
     */
    function renderLiveList() {
        var str = "";
        S.each(liveList, function(liveInfo) {
            str += renderSingleOne(liveInfo);
        });
        S.DOM.empty("#js-channel-rooms");
        S.one("#js-channel-rooms").append(str);
    }

    /**
     * 渲染单个房间信息
     */
    function renderSingleOne(obj) {
        var data = obj.live_info;
        data.user_number = obj.user_number + "在线";
        var userInfo = userService.getUser(data.user_id);
        if (userInfo) {
            data.avatar = userInfo.avatar;
        } else {
            data.avatar = hd.defaultUserAvatar;
        }
        if (data.locked) {
            data.lockerClass = "is-locked";
            data.classname = "icon icon-locker";
        } else {
            data.lockerClass = "";
            data.classname = "";
        }
        if (obj.is_live) {
            data.is_live = "channel-is-live";
            data.icon_status = "icon-status-audio-live";
        } else {
            data.is_live = "channel-is-not-live";
            data.icon_status = "icon-status-not-live";
        }
        return S.substitute(tplChannelLive, data);
    }
    hd.eventEmitter.bind(events.hdResHistoryCount, function(action_data) {
        if (action_data.published > 0) {
            S.one("#js-channel-history").show();
            S.one("#js-history-count").text(action_data.published + "个");
        }
    });
    function joinRoomSuccess(){
        fetchLiveList();
        socket.sendRequest(protocols.fetchHistoryCount(hd.roomInfo.id));
    }
    hd.eventEmitter.bind(events.hdResJoinedRoom, joinRoomSuccess);
    hd.eventEmitter.bind(events.hdResFetchLiveList, fetchLiveListResult);
    hd.eventEmitter.bind(events.hdResJoinLiveSuccess, function() {
        if (inChannel) {
            S.later(function() {
                viewManager.set("name", "room");
            }, 10)
        }
    });
    hd.eventEmitter.bind(events.hdResJoinLiveFailed, function() {
        if (inChannel) {
            hd.eventEmitter.trigger(events.hdAlert, "进入房间失败");
        }
    });
    S.one("#js-channel-history").on("click", function() {
        viewManager.set("name", "history");
    });

    function convertRoomDesc() {
        var description = S.escapeHTML(hd.roomInfo.description);
        description = hd.utils.transToEmoji(description);
        S.one("#channel-description").html(description);
    }
    S.later(convertRoomDesc, 100);

    hd.eventEmitter.bind("hd_406_st_AUTH_at_JOIN_LIVE", function() {
        S.later(joinLive, 2000);
    });

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/header", function(S, services, viewManager) {
    var events = services.events;
    var protocols = services.protocols;
    var socket = services.socket;

    var currentView = "";
    var gobackBtn = S.Node.one("#js-go-back-btn");
    var title = S.Node.one("#js-header-title");
    var info = null;

    function viewChange(viewname) {
        currentView = viewname;
        switch (viewname) {
            case "channel":
                title.html("<span>频道</span>");
                gobackBtn.hide();
                break;
            case "live-cover":
                title.html("<span>直播间</span>");
                gobackBtn.hide();
                break;
            case "room":
            case "auth":
                info = viewManager.get("liveInfo");
                title.html("<span>" + S.escapeHTML(info.name) + "</span><span class='title-lowercase'>" + info.user_number + "</span>");
                gobackBtn.show();
                break;
            case "history":
                title.html("<span>节目列表");
                gobackBtn.show();
                break;
            case "history-player":
                title.html("<span>" + viewManager.get("record").name+ "</span>")
                gobackBtn.show();
                break;
        }
    }

    function goback() {
        switch (viewManager.get("name")) {
            case "room":
                leaveLive();
                hd.eventEmitter.trigger(events.hdShowPopup,"正在退出直播间");
                break;
            case "auth":
            case "history":
                viewManager.set("name", "channel");
                break;
            case "history-player":
                viewManager.set("name", "history");
                break;
        }
    }

    gobackBtn.on("click", goback);

    function refreshUserNumber(version){
        if(currentView == "room"){
            title.html("<span>" + S.escapeHTML(info.name) + "</span> <span class='title-lowercase'>" + version.data.online_user_number + "在线</span>");
        }
    }

    function leaveLive() {
        socket.sendRequest(protocols.leaveLive(info.id));
    }

    viewManager.on(services.events.hdviewchange, function(e) {
        viewChange(e.newVal);
    });

    hd.eventEmitter.bind(events.hdResLeaveLiveSuccess, function(data){
        viewManager.set("name", "channel");
        hd.eventEmitter.trigger(events.hdHidePopup);
    });

    hd.eventEmitter.bind("hd_406_st_AUTH_at_LEAVE_LIVE", function(){
        hd.eventEmitter.trigger(events.hdAlert, "网络请求繁忙，退出直播间失败");
    });

    hd.eventEmitter.bind(events.hdPubOnline, refreshUserNumber);

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/live-cover", function(S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var inLiveCover = false;

    viewManager.on(events.hdviewchange, function(e) {
        if (e.newVal == "live-cover") {
            inLiveCover = true;

        }
        if (e.prevVal == "live-cover") {
            inLiveCover = false;
            // S.later(function() {
            //     S.one("#js-cover-input").css("display", "none");
            // }, 1000);
            hd.eventEmitter.trigger(events.hdHidePopup);
        }
    });
    var live_id = new S.Uri(location.toString()).getQuery().get("live_id");
    var liveInfo = null;

    function filterLive(liveList) {
        var obj = null;
        S.each(liveList, function(data) {
            if (data.live_info.id == live_id) {
                obj = data;
            }
        });

        if (obj) {
            if (obj.live_info.closed) {
                renderNoRoom();
            } else {
                liveInfo = obj.live_info;
                liveInfo.user_number = obj.user_number + "在线";
                liveInfo.password = "";
                S.one("#js-live-cover-loading").hide();
                viewManager.set("liveInfo", liveInfo);

                if (liveInfo.locked) {
                    viewManager.set("name", "auth");
                } else {
                    joinLive();
                }

                // S.one("#js-live-cover-inner").show();
                // console.log("liveInfo===");
                // console.log(liveInfo);
                // if (liveInfo.locked) {
                //     S.one("#js-cover-input-wrapper").show();
                //     S.one("#js-cover-input").css("display", "block").on("valuechange", function(e) {
                //         if (e.newVal.length == 4) {
                //             S.one("#js-cover-btn-mask").hide();
                //             liveInfo.password = e.newVal;
                //         } else {
                //             S.one("#js-cover-btn-mask").show();
                //         }
                //         if (e.newVal.length > 4) {
                //             S.one(e.target).val(e.newVal.slice(0, 4));
                //         }
                //     }).on("keyup", function(e) {
                //         if (e.which == 13) {
                //             var v = S.one("#js-cover-input").val();
                //             if(v.length != 4){
                //                 hd.eventEmitter.trigger(events.hdAlert, "密码错误");
                //                 return;
                //             }
                //             liveInfo.password = v;
                //             joinLive();
                //         }
                //     });
                //     S.later(function() {
                //         document.getElementById("js-cover-input").focus();
                //     }, 100);
                //     S.one("#js-cover-btn-mask").show();
                // }
                // if (obj.is_live) {
                //     S.one("#js-cover-live-name").addClass("is-live");
                // }
                // S.one("#js-cover-live-name").text(liveInfo.name);
                // S.one("#js-cover-user-number").text(obj.user_number + " 在线");
                //}
            }

            // S.one("#js-cover-btn").on("click", function() {
            //     joinLive();
            // });

        } else {
            renderNoRoom();
        }
    }

    function renderNoRoom() {
        S.one("#js-live-cover-loading").hide();
        S.one("#js-live-cover-no-room").show();
    }

    if (live_id) {
        hd.eventEmitter.bind(events.hdNoLive, renderNoRoom);
        hd.eventEmitter.bind(events.hdLiveList, filterLive);
        S.one("#js-live-cover-to-channel").on("click", function() {
            viewManager.set("name", "channel");
        });
    } else {
        S.one("#live-cover").hide();
    }

    function joinLive() {
        hd.eventEmitter.trigger(events.hdShowPopup, "正在进入直播间");
        socket.sendRequest(protocols.joinLive(liveInfo.id, liveInfo.password));
    }

    hd.eventEmitter.bind(events.hdResJoinLiveSuccess, function() {
        if (inLiveCover) {
            S.later(function() {
                viewManager.set("name", "room");
            }, 50);
        }
    });

    hd.eventEmitter.bind(events.hdResJoinLiveFailed, function() {
        if (inLiveCover) {
            hd.eventEmitter.trigger(events.hdAlert, "进入房间失败");
        }
    });

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/room-chat", function(S, XTemplate, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var utils = services.utils;
    var protocols = services.protocols;
    var userService = services.user;
    var emotion = services.emotion;

    var scroller = null;
    var inRoom = false;
    var liveInfo = null;

    var firstStarted = true; //初始化聊天室第一次获取聊天记录
    var firstEnded = false;
    var fetchingHistory = false;
    var fetchingNewChats = false;
    var nomoreHistory = false;

    var requests = {}; //所有获取聊天历史的请求记录
    var history_chat_id = 0; //已获取到的聊天的最旧的聊天的id
    var target_chat_id = 0; //需要获取到的最新的聊天id
    var new_chat_id = 0; //已获取到的聊天的最新的聊天的id
    var history_chat_time = 0;
    var new_chat_time = 0;
    var chatList = []; // need max length ???
    var chatWrapper = document.getElementById("chat-wrapper");
    var chatOuter = document.getElementById("chat-outer");
    var chatRecords = document.getElementById("chat-records");
    var tplTime = document.getElementById("time-tpl").innerHTML;
    var tplChat = document.getElementById("template-chat").innerHTML;
    var position = {};
    var ready = false;

    function resetRoom() {
        inRoom = false;
        liveInfo = null;
        firstStarted = true; //初始化聊天室第一次获取聊天记录
        firstEnded = false;
        fetchingHistory = false;
        fetchingNewChats = false;
        requests = {}; //所有获取聊天历史的请求记录
        history_chat_id = 0; //已获取到的聊天的最旧的聊天的id
        history_chat_time = 0;
        new_chat_id = 0; //已获取到的聊天的最新的聊天的id
        new_chat_time = 0;
        target_chat_id = 0; //需要获取到的最新的聊天id
        chatList = []; // need max length ???
        nomoreHistory = false;
        S.one("#chat-records").empty();
        ready = false;
    }

    viewManager.on(events.hdviewchange, function(e) {
        if (e.prevVal == "room") {
            resetRoom();
            S.one("#chat-outer").removeClass("is-bb");
        }
        if (e.newVal == "room") {
            resetRoom();
            inRoom = true;
            liveInfo = viewManager.get("liveInfo");
            initScroller();
        }
    });

    function composeTime(seconds) {
        var tpl;
        tpl = tplTime;
        tpl = tpl.replace("{time}", utils.getTimeString(seconds * 1000));
        return S.DOM.create(tpl);
    }

    /** 当前聊天信息过多时，减少显示的聊天信息数量 */
    function reduceChats() {
        if ((scroller.y - scroller.maxScrollY) < 300 && chatList.length > 100) {
            chatList.splice(0, chatList.length - 20);
            var o = chatList[0];
            history_chat_id = o.group_chat_id;
            history_chat_time = o.timestamp;
            var chats = document.querySelectorAll(".chat-message");
            var len = chats.length;
            var finded = false;
            var removeableElements = [];
            for (var i = 0; i < len; i++) {
                if (!finded) {
                    var el = chats.item(i);
                    var gid = parseInt(el.getAttribute("data-message-id"));
                    if (o.group_chat_id == gid) {
                        finded = true;
                    } else {
                        removeableElements.push(el);
                    }
                }
            }
            while (removeableElements.length > 0) {
                var e = removeableElements.pop();
                e.parentNode.removeChild(e);
            }
            nomoreHistory = false;
            scrollToBottom();
        }
    }
    var bufferedReduceChats = S.buffer(reduceChats, 1000);

    /** 接收聊天信息 */
    function receiveGroupChat(responseData) {
        S.one("#chat-spinner-wrapper").hide();
        var requestObject = requests[responseData.seq_num];
        delete requests[responseData.seq_num];
        if (!requestObject) {
            return
        }
        var receivedChatList = responseData.service_response.action_data.group_chat_message;
        if (!receivedChatList) {
            receivedChatList = [];
        }

        var len = receivedChatList.length;
        if (requestObject.is_older) {
            firstEnded = true;

            if (len === 0) {
                return;
            }
            if (len > 0) {
                chatList = receivedChatList.concat(chatList);
                history_chat_id = receivedChatList[0].group_chat_id;
                if (receivedChatList[len - 1].group_chat_id > new_chat_id) {
                    new_chat_id = receivedChatList[len - 1].group_chat_id;
                }
                if (target_chat_id > new_chat_id) {
                    fetchNewChats();
                }
                renderChatHistory(receivedChatList);
            }

            nomoreHistory = len < 20;
            if (len < 20) {
                nomoreHistory = true;
            }

            setTimeout(function() {
                fetchingHistory = false;
            }, 500);

        } else {
            fetchingNewChats = false
            if (len > 0) {
                chatList = chatList.concat(receivedChatList);
                if (receivedChatList[len - 1].group_chat_id > new_chat_id) {
                    new_chat_id = receivedChatList[len - 1].group_chat_id;
                }
                renderNewChats(receivedChatList);
            }

            if (target_chat_id > new_chat_id) {
                fetchNewChats();
            }
        }

        bufferedReduceChats();
    }

    /** 渲染历史聊天记录 */
    function renderChatHistory(data_list) {
        var len = data_list.length;
        var documentFragment, firstChild;
        firstChild = chatRecords.firstChild;
        documentFragment = createHistoryChatFragment(data_list);
        if (firstChild) {
            chatRecords.insertBefore(documentFragment, firstChild);
            setTimeout(function() {
                scroller.refresh();
                scroller.scrollToElement(firstChild, 0, 0, 0);
            }, 30);
        } else {
            chatRecords.appendChild(documentFragment)
            scrollToBottom();
        }
    }

    function createHistoryChatFragment(data_list) {
        var data;
        var documentFragment = document.createDocumentFragment();
        while (data_list.length > 0) {
            data = data_list.pop();
            if (S.indexOf(data.user_id, hd.blackList) == -1) {
                if ((history_chat_time - data.timestamp) > 120) {
                    if (documentFragment.firstChild) {
                        documentFragment.insertBefore(composeTime(history_chat_time), documentFragment.firstChild)
                    } else {
                        documentFragment.appendChild(composeTime(history_chat_time))
                    }
                }
                history_chat_time = data.timestamp;
                if (documentFragment.firstChild) {
                    documentFragment.insertBefore(composeChat(data), documentFragment.firstChild);
                } else {
                    documentFragment.appendChild(composeChat(data));
                }
            }
        }
        return documentFragment;
    }

    function composeChat(data) {
        var obj = {};
        obj.user_id = data.user_id;
        if (data.user_id == hd.userInfo.user_id) {
            obj.classname = "is-mine";
            obj.color = "red";
        } else {
            obj.classname = "is-not-mine";
            obj.color = "white";
        }
        obj.message_id = data.group_chat_id;

        isMaster = false;
        isAdmin = false;
        var _ref = hd.adminList;
        var _len, _i;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            admin = _ref[_i];
            if (admin.user_id === data.user_id) {
                if (admin.admin_level === 65536) {
                    isMaster = true;
                } else {
                    isAdmin = true;
                }
            }
        }
        if (isMaster) {
            obj.role = "someone";
            obj.charactor = "icon-master";
        } else if (isAdmin) {
            obj.role = "someone";
            obj.charactor = "icon-admin";
        } else {
            obj.role = "nobody";
            obj.charactor = "hide";
        }

        var chatText = S.escapeHTML(data.message.data);
        chatText = emotion.convertEmotionHtml(chatText);
        chatText = utils.transToEmoji(chatText);
        chatText = utils.convertURL(chatText);
        obj.chat = chatText;

        userInfo = userService.getUser(data.user_id);
        obj.avatar = userInfo.avatar;
        obj.nickname = utils.transToEmoji(S.escapeHTML(userInfo.nickname))

        var s = new XTemplate(tplChat).render(obj);
        return S.DOM.create(s);
    }

    /** 渲染最新 聊天记录 */
    function renderNewChats(data_list) {
        var data, group_chat_id, len, _i, _len;
        len = data_list.length;
        if (len === 0) {
            return;
        }
        group_chat_id = data_list[len - 1].group_chat_id;
        var scrollBottomAvaliable = false;
        if (scroller.maxScrollY < 0 && (scroller.maxScrollY - scroller.y) > -300) {
            scrollBottomAvaliable = true;
        }

        for (var i = 0; i < len; i++) {
            data = data_list[i];
            if ((data.timestamp - new_chat_time) > 120) {
                chatRecords.appendChild(composeTime(data.timestamp));
            }
            new_chat_time = data.timestamp;
            chatRecords.appendChild(composeChat(data));
            if (data.user_id == hd.userInfo.user_id) {
                scrollBottomAvaliable = true;
            }
        }
        if (scrollBottomAvaliable) {
            scrollToBottom()
        }
    }

    /**
     * 收到新聊天通知
     */
    function handleChatNotification(data) {
        target_chat_id = data.version.serialize_number;
        if (firstStarted) {
            firstStarted = false;
            fetchChatHistory();
        } else {
            if (firstEnded) {
                fetchNewChats();
            }
        }
    }

    /** 获取新的聊天记录 */
    function fetchNewChats() {
        if (!firstEnded) {
            return
        }
        if (fetchingNewChats) {
            return
        }
        fetchingNewChats = true;
        S.one("#chat-spinner-wrapper").show();
        var protocol = protocols.fetchChat({
            "last_group_chat_id": new_chat_id,
            "is_older": false,
            "live_id": liveInfo.id
        });

        requests[protocol.seq_num] = {
            "is_older": false,
            "protocol": protocol
        };

        socket.sendRequest(protocol);
    }

    /**获取 历史 聊天记录*/
    function fetchChatHistory() {
        if (fetchingHistory || nomoreHistory) {
            return
        }
        fetchingHistory = true;
        S.one("#chat-spinner-wrapper").show();
        var protocol = protocols.fetchChat({
            "last_group_chat_id": history_chat_id,
            "is_older": true,
            "live_id": liveInfo.id
        });

        requests[protocol.seq_num] = {
            "is_older": true,
            "protocol": protocol
        };
        socket.sendRequest(protocol);
    }

    /**
     * 滚动区域的初始化
     */
    function initScroller() {
        if (scroller) {
            return
        }
        scroller = new IScroll("#chat-outer", {
            "preventDefault": false,
            "mouseWheel": true,
            "scrollbars": true,
            "fadeScrollbars": true,
            "interactiveScrollbars": true,
            "resizeScrollbars": true
        });
        scroller.on("scrollEnd", onScrollFn);
        hd.scroller = scroller;
    }

    function onScrollFn() {
        if (this.y > -30) {
            fetchChatHistory();
        }
    }

    function scrollToBottom() {
        setTimeout(function() {
            scroller.refresh();
            scroller.scrollTo(0, scroller.maxScrollY, 100)
        }, 10);
    }

    /** 过滤拉黑人的发言 */
    function filterChatList() {
        S.each(hd.blackList, function(i) {
            S.all(".user-id-" + i).remove();
        });
    }

    hd.eventEmitter.bind(events.hdPubNewChat, handleChatNotification);
    hd.eventEmitter.bind(events.hdResFetchGroupChat, receiveGroupChat);
    hd.eventEmitter.bind(events.hdUserInfo, function(userInfo) {
        S.all(".user-avatar-" + userInfo.id).attr("src", userInfo.avatar);
        S.all(".user-name-" + userInfo.id).html(utils.transToEmoji(S.escapeHTML(userInfo.nickname)));
    });
    hd.eventEmitter.bind(events.hdPubBlackboard, function(data) {
        if (data.current_id === 0) {
            S.one("#chat-outer").removeClass("is-bb");
        } else {
            S.one("#chat-outer").addClass("is-bb");
        }
        scrollToBottom();
    });
    hd.eventEmitter.bind(events.hdRoomReady, function() {
        fetchChatHistory();
        filterChatList();
    });
    hd.eventEmitter.bind("hd_406_st_GROUP_CHAT_at_FETCH", function() {
        firstStarted = false;
        firstEnded = true;
        fetchingHistory = false;
        fetchingNewChats = false;
    });


    return {}
}, {
    requires: ["xtemplate", "pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/room-input", function (S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;

    var liveInfo = null;
    var allEmotions = services.emotion.allEmotions;
    var initialized = false;
    var chatTextarea = document.getElementById("js-chat-textarea");
    var inRoom = false;
    viewManager.on(events.hdviewchange, function (e) {
        if (e.prevVal == "room") {
            inRoom = false;
            S.later(function () {
                S.one("#auth").show();
            }, 300);
        }
        if (e.newVal == "room") {
            inRoom = true;
            liveInfo = viewManager.get("liveInfo");
            init();
            S.later(function () {
                S.one("#auth").hide();
            }, 300);
        }
    });

    function init() {
        if (liveInfo.silence && hd.login && !isAdmin()) {
            chatTextarea.blur();
            S.one("#js-input-login").hide();
            S.one("#js-input-not-login").hide();
            S.one("#js-input-silence").show();
            return;
        }
        S.one("#js-input-silence").hide();
        if (hd.login) {
            S.one("#js-input-login").show();
            S.one("#js-input-not-login").hide();
            S.later(function () {
                chatTextarea.focus();
            }, 300)
        } else {
            S.one("#js-input-login").hide();
            S.one("#js-input-not-login").show();
        }
        if (initialized) {
            return
        }
        initialized = true;
        S.one("#js-not-login-scroller").delegate("click", ".btn", function (e) {
            var currentTarget = e.currentTarget;
            var type = currentTarget.getAttribute("data-btn");
            switch (type) {
                case "qq":
                    qqLogin();
                    break;
                case "wx":
                    wxLogin();
                    break;
                case "cell":
                    showCellInput();
                    break;
                case "goback":
                    hideCellInput();
                    break;
                case "login":
                    login();
                    break;
            }
        });
        renderEmotions();
        S.one("#js-icon-emotion").on("click", function () {
            S.one("#emotion-outer").show().css("z-index", 100);
        });
        S.one("#js-emotion-bg").on("click", function () {
            S.one("#emotion-outer").hide();
        });
        S.one("#js-input-cell").on("keyup", function (e) {
            if (e.which == 13) {
                login();
            }
        });
        S.one("#js-input-password").on("keyup", function (e) {
            if (e.which == 13) {
                login();
            }
        });
        S.one("#js-chat-textarea").on("keyup", function (e) {
            if (e.which == 13) {
                if (S.indexOf(hd.userInfo.user_id, hd.blackList) > -1) {
                    hd.eventEmitter.trigger(events.hdShowPopup, "你在该频道的黑名单中，不能发言");
                    return;
                }
                var data = S.trim(S.one(this).val());
                if (data.length == 0) {
                    hd.eventEmitter.trigger(events.hdAlert, "聊天内容不能为空");
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
                socket.sendRequest(protocols.sendChat({
                    "user_id": hd.userInfo.user_id,
                    "live_id": liveInfo.id,
                    "data": data
                }));
                S.one("#js-chat-textarea").val("");
            }
        });
    }

    function isAdmin() {
        if (!hd.userInfo.user_id) {
            return false;
        }
        var userId = hd.userInfo.user_id;
        for (var key in hd.adminList) {
            if (userId === hd.adminList[key].user_id) {
                return true;
            }
        }
        return false;
    }

    function qqLogin() {
        var callbackUrl = "http://" + location.host + "/login/qq?room=" + hd.roomInfo.webaddr + "&platform=pc"
        var baseUrl = "https://graph.qq.com/oauth2.0/authorize?client_id=101155115&response_type=code&scope=all&redirect_uri=";
        var url = baseUrl + encodeURIComponent(callbackUrl);
        window.open(url, '_blank');
    }

    function wxLogin() {
        var url = "https://open.weixin.qq.com/connect/qrconnect?appid=wx8d9b43adf833faf3&redirect_uri=http://confernce.com/login/weixin&response_type=code&scope=snsapi_login&state=pc_" + hd.roomInfo.webaddr + "#wechat_redirect";
        window.open(url, "_blank");
    }

    function showCellInput() {
        S.one("#js-not-login-scroller").addClass("cell-input-visible");
        document.getElementById("js-input-cell").focus();
    }

    function hideCellInput() {
        S.one("#js-not-login-scroller").removeClass("cell-input-visible");
        document.getElementById("js-input-cell").blur();
        document.getElementById("js-input-password").blur();
    }

    function login() {
        var phoneNumber = S.one("#js-input-cell").val();
        var password = S.one("#js-input-password").val();
        phoneNumber = S.trim(phoneNumber);
        password = S.trim(password);

        if (phoneNumber.length === 0) {
            hd.eventEmitter.trigger(events.hdAlert, "手机号码不能为空");
            return;
        }
        if (password.length === 0) {
            hd.eventEmitter.trigger(events.hdAlert, "密码不能为空");
            return;
        }

        new S.IO({
            "type": "POST",
            "url": "/login/cell",
            "dataType": "json",
            "data": {
                "phoneNumber": phoneNumber,
                "password": password
            },
            "success": function (obj) {
                if (obj) {
                    if (obj.error) {
                        hd.eventEmitter.trigger(events.hdAlert, obj.error);
                        return
                    }
                } else {
                    hd.eventEmitter.trigger(events.hdAlert, "登陆失败");
                    return
                }
                hd.login = true;
                hd.userInfo = obj;
				
				var path = '/',domain = "192.168.199.222";
				
                //TODO set Cookie
                var C = S.Cookie;
                var userid  = hd.userInfo.userId;
				var userName = hd.userInfo.userName;
				var avatar  =  hd.userInfo.avatar;
				var token = hd.userInfo.token;
              
				C.set('userId',userId,12,domain,path);
				C.set('userName',userName,12,domain,path);
				C.set('avatar',avatar,12,domain,path);
				C.set('token',token,12,domain,path);
				
                loginSuccess();
            },
            "error": function () {
                hd.eventEmitter.trigger(events.hdAlert, "登录失败，请检查您的网络连接")
            }
        });
    }

    function loginSuccess() {
        S.one("#js-input-login").show();
        S.one("#js-input-not-login").hide();
        hd.eventEmitter.trigger(events.hdLoginSuccess);
    }

    /** 验证登录结果 */
    window.checkWeixinLogin = function (obj) {
        if (obj.login) {
            hd.login = true;
            hd.userInfo = obj.userInfo;
            loginSuccess();
        } else {
            hd.login = false;
            hd.userInfo = {};
        }
    };

    window.qqLoginCallback = function (response) {
        hd.login = true;
        hd.userInfo = {
            "user_id": response.user.id,
            "nickname": response.user.nickname,
            "avatar": response.user.avatar,
            "token": response.user.token
        }
        loginSuccess();
    }

    /****************** 表情列表 ******************/

    function renderEmotions() {
        var et = document.getElementById("emotion-template").innerHTML;
        var numberEmotion = allEmotions.length;
        var singlePageEmotions = 21;
        var pages = Math.ceil(numberEmotion / singlePageEmotions);

        var ul;
        var uls = [];
        var innerHTML = "";
        var currentEmotionPage = 0;

        for (var i = 0; i < numberEmotion; i++) {
            if (i % singlePageEmotions === 0) {
                ul = S.one(S.DOM.create("<ul>")).addClass("slide");
                innerHTML = "";
                uls.push(ul);
                S.one(S.DOM.create("<span>")).addClass("indicator").attr("data-index", currentEmotionPage).appendTo("#indicator-wrapper");
                currentEmotionPage++;
            }
            var emotion = allEmotions[i];
            var tpl = et;
            innerHTML += tpl.replace("{0}", emotion.name).replace("{1}", emotion.classname);
            ul.html(innerHTML);
        }

        for (var j = 0; j < uls.length; j++) {
            S.one("#emotion-scroller").append(uls[j]);
        }

        S.later(initScroller, 100);
    }

    function activeIndicator(i) {
        var ns = document.querySelectorAll("#indicator-wrapper .indicator");
        S.each(ns, function (n, j) {
            if (i == j) {
                n.setAttribute("class", "indicator active");
            } else {
                n.setAttribute("class", "indicator");
            }
        });
    }

    function initScroller() {
        var emotionScroller = new IScroll('#emotion-wrapper', {
            scrollX: true,
            scrollY: false,
            snap: true
        });
        activeIndicator(0);

        emotionScroller.on("scrollEnd", function (e) {
            activeIndicator(emotionScroller.currentPage.pageX);
        });

        S.all("#indicator-wrapper .indicator").on("click", function (e) {
            var px = parseInt(e.target.getAttribute("data-index"));
            activeIndicator(px);
            emotionScroller.goToPage(px, 0, 200);
        });

        S.all("#emotion-scroller .emotion").on("click", function (e) {
            var v = S.one("#js-chat-textarea").val();
            S.one("#js-chat-textarea").val(v + e.currentTarget.getAttribute("data-name"));
            //hd.eventEmitter.trigger(events.hdSelectEmotion, e.currentTarget.getAttribute("data-name"))
            S.one("#emotion-outer").css("z-index", -1);
            chatTextarea.focus();
        });
    }

    hd.eventEmitter.bind(events.hdLogout, function () {
        S.one("#js-input-login").hide();
        S.one("#js-input-not-login").show();
    });

    hd.eventEmitter.bind(events.hdPubUpdateLiveInfo, function (data) {
        if (!inRoom || liveInfo.id != data.id) {
            return;
        }
        liveInfo = data;
        viewManager.set("liveInfo", data);
        init();
    });

    hd.eventEmitter.bind("hd_406_st_GROUP_CHAT_at_SEND", function () {
        hd.eventEmitter.trigger(events.hdAlert, "网络繁忙，请稍后发言")
    });
    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/player", function (S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var initialized = false;
    var player = null;
    var isLive = false;
    var inRoom = false;
    var liveInfo = {};
    var repeatTimoutID = null;
    //逻辑上是否在视频直播
    var isVideoLive = false;
    //视频主播uid
    var videoUserId = null;
    //flowplayer对象
    var videoPlayer = null;
    //flowplayer中，视频是否正在播放
    var videoStart = false;
    //flowplayer中，是否正在reloading
    var videoReloading = false;
	
	var playerUrl="";
	/*
	var so = new SWFObject("/Player/CuSunPlayerV20_S.swf","ply","980","460","9","#000000");
	   so.addParam("allowfullscreen","true");
	   so.addParam("allowscriptaccess","always");
	   so.addParam("wmode","opaque");
	   so.addParam("quality","high");
	   so.addParam("salign","lt");
*/
    viewManager.on(events.hdviewchange, function (e) {
        if (e.prevVal == "room") {
            inRoom = false;
            liveInfo = {};
            isLive = false;
            if (player) {
                player.stop();
                player.close();
            }
        }
        if (e.newVal == "room") {
            inRoom = true;
            liveInfo = viewManager.get("liveInfo");
        }
    });

    function initPlayer(url) {
        player = $f("player-container", "http://hd-image-cdn.b0.upaiyun.com/assets/swf/flowplayer.swf", {
            wmode: 'direct',
            plugins: {
                httpstreaming: {
                    url: "http://hd-image-cdn.b0.upaiyun.com/assets/swf/flashlsFlowPlayer.swf",
                    hls_debug: true,
                    hls_debug2: true,
                    hls_lowbufferlength: 3,
                    hls_minbufferlength: -1,
                    hls_maxbufferlength: 60,
                    hls_startfromlevel: -1,
                    hls_seekfromlevel: -1,
                    hls_live_flushurlcache: false,
                    hls_seekmode: "KEYFRAME",
                    //hls_seekmode: "KEYFRAME",
                    hls_fragmentloadmaxretry: -1,
                    hls_manifestloadmaxretry: -1,
                    hls_capleveltostage: false,
                    hls_maxlevelcappingmode: "downscale"
                }
            },
            // onLoad: function() {
            //     hd.log("-----d--d-d-----load-");
            // },
            // onUnload: function() {
            //     hd.log("==== player onUnload ==== ");
            // },
            // onMute: function() {
            //     hd.log("==== player onMute ==== ");
            // },
            // onUnmute: function() {
            //     hd.log("==== player onUnmute ==== ");
            // },
            // onPlaylistReplace: function() {
            //     hd.log("==== player onPlaylistReplace ==== ");
            // },
            onError: function (errorCode, errorMessage) {
                _player.load();
            },
            clip: composeClip(url)
        });
    }

    function composeClip(url) {
        var clipEvents = ["onBufferEmpty", "onBufferFull", "onBufferStop", "onNetStreamEvent", "onSeek",
            "onUpdate", "onPause", "onStart", "onStop", "onResume", "onMetaDataChange", "onFinish", "onLastSecond"
        ];

        var clip = {
            url: url,
            urlResolvers: "httpstreaming",
            lang: "en",
            provider: "httpstreaming",
            autoPlay: true,
            autoBuffering: true,
            type: "audio",
            bufferLength: 4
        };

        function bindEvents(c, eventType) {
            console.log("audio clip event ---> " + eventType);
            hd.log("audio clip event ---> " + eventType);
            switch (eventType) {
                case "onFinish":
                case "onBufferStop":
                case "onUpdate":
                    c[eventType] = function () {
                        if (isLive) {
                            player.play();
                        }
                    };
                    break;
            }
        }

        for (var i = 0; i < clipEvents.length; i++) {
            bindEvents(clip, clipEvents[i]);
        }
        return clip;
    }

    function play(url) {
        if (initialized) {
            player.getClip(0).update({
                url: url,
                urlResolvers: "httpstreaming",
                lang: "en",
                provider: "httpstreaming",
                autoPlay: true,
                autoBuffering: true,
                type: "audio",
                bufferLength: 4
            });
            return;
        }
        initPlayer(url);
        initialized = true;
    }
	
    /** 获取播放地址 **/
	
    function fetchMediaUrls() {
        if (isLive) {
            socket.sendRequest(protocols.mediaUrl({
                "live_id": liveInfo.id
            }));
        }
    }

    function fetchMediaUrlSuccess(data) {
        if (data && data.audio_urls) {
            play(data.audio_urls.android);
        } else {
            repeatRequestMediaUrl()
        }
    }

    function repeatRequestMediaUrl() {
        clearTimeout(repeatTimoutID);
        repeatTimoutID = setTimeout(function () {
            fetchMediaUrls();
        }, 2000);
    }

    function fetchVideoUrl(userId) {
        socket.sendRequest(protocols.videoUrl({
            "user_id": videoUserId
        }));
    }

    function fetchVideoUrlSuccess(data) {

        if (data && data.video_urls) {
            var hlsList = data.video_urls.hls_list;
            if (hlsList && hlsList[0].length > 0) {
                var size = hlsList.length;
                var index = Math.floor(Math.random() * size);
                playVideo(hlsList[index]);
            } else if (data.video_urls.hls) {
					playVideo(data.video_urls.hls);
            } else {
                repeatRequestVideoUrl();
            }
        } else {
            repeatRequestVideoUrl();
        }

    }

    function repeatRequestVideoUrl() {
        clearTimeout(repeatTimoutID);
        repeatTimoutID = setTimeout(function () {
            fetchVideoUrl();
        }, 2000);
    }

    function playVideo(videoUrl) {
			/*
		
			<!-- HTML代码参数/Begin -->
			so.addVariable("JcScpServer","rtmp://192.168.199.234/hlsapp"); //注意此处填入了rtmp流媒体服务器地址 
			so.addVariable("JcScpVideoPath","mystream"); 
			so.addVariable("JcScpImg","/player/Images/flashChangfa2.jpg");
			so.addVariable("JcScpFile","/player/CuSunV2Set.asp");
			<!-- HTML代码参数/End -->
			
			so.write('video-player');
			*/
			var vID        = ""; 
			var vWidth     = "100%";
			var vHeight    = 400;
			var vFile      = "CuSunV2setLive.xml";
			var vPlayer    = "player.swf?v=2.5";
			var vPic       = "images/start.jpg";
			var vCssurl    = "images/mini.css";

			//PC端
			var vServer    = "rtmp://192.168.199.234/hlsapp";
			var vMp4url    = "mystream";

			//安卓端,iOS端,wp 
			var vIosurl    = "http://192.168.199.234/hlsapp/mystream.m3u8";
			/*S.later(function(){
				if(window.a&&!window.a.initianize){
					a.initianize = true;
					a.init(S.one('#video-player'));
				}
				
			},1000);*/
		
			
			
			
			
			
      /*  videoPlayer = flowplayer("video-player", "http://hd-image-cdn.b0.upaiyun.com/assets/swf/flowplayer-3.2.18.swf", {
            wmode: 'window',
            plugins: {
                controls: null,
                httpstreaming: {
                    url: 'http://hd-image-cdn.b0.upaiyun.com/assets/swf/flashlsFlowPlayer.swf',
                    hls_debug: false,
                    hls_debug2: false,
                    hls_lowbufferlength: 3,
                    hls_minbufferlength: -1,
                    hls_maxbufferlength: 300,
                    hls_startfromlevel: -1,
                    hls_seekfromlevel: -1,
                    hls_live_flushurlcache: false,
                    hls_seekmode: "ACCURATE",
                    hls_fragmentloadmaxretry: -1,
                    hls_manifestloadmaxretry: -1,
                    hls_capleveltostage: false,
                    hls_maxlevelcappingmode: "downscale"
                }
            },
            clip: {
                accelerated: true,
                url: videoUrl,
                urlResolvers: "httpstreaming",
                lang: "EN",
                provider: "httpstreaming",
                autoPlay: true,
                autoBuffering: true,
                scaling: "fit",
                onBegin: function () {
                    console.log("onBegin");
                    if (!videoReloading) {
                        setTimeout(videoPlayerLoad, 3000);
                    }
                },
                onStart: function () {
                    videoStart = true;
                    console.log("onStart");
                },
                onFinish: function () {
                    if (isVideoLive) {
                        videoPlayer.play();
                    }
                }
            },
            log: {
                level: 'debug',
                filter: 'org.flowplayer.controller.*'
            },
            onError: function (errorCode, errorMessage) {
                console.log("onError", errorCode, errorMessage);
            }
        });*/
		
    }

    function videoPlayerLoad() {
        if (!videoStart) {
            videoReloading = true;
            console.log("videoPlayerLoad");
            videoPlayer.play();
            setTimeout(videoPlayerLoad, 3000);
        } else {
            videoReloading = false;
        }
    }

    hd.eventEmitter.bind(events.hdPubMedia, function (data) {
        if (data.user_id && data.user_id.length > 0) {
            if (!isLive) {
                isLive = true;
                fetchMediaUrls();
            }
        } else {
            isLive = false;
            if (player) {
                player.stop();
                player.close();
            }
        }

        if (data.video_user_id.length > 0) {
            videoUserId = data.video_user_id[0];
            isVideoLive = true;
            fetchVideoUrl();
            S.one('#blackboard').addClass('is-bb');
            S.one('#js-bb-mask').addClass('is-bb');
            S.one('#bb-no-host').hide();
            S.one('#video-wrapper').show();
            hd.isVideoLive = true;
        } else {
            if (videoPlayer) {
                videoPlayer.stop();
            }
            isVideoLive = false;
            videoReloading = false;
            videoStart = false;
            videoUserId = null;
            hd.isVideoLive = false;
            clearTimeout(repeatTimoutID);

            if (!hd.isBlackboard) {
                S.one('#blackboard').removeClass('is-bb');
                S.one('#js-bb-mask').removeClass('is-bb');
            }
            S.one('#video-wrapper').hide();
            if (!isLive) {
                S.one('#bb-no-host').show();
            }
        }
    });

    hd.eventEmitter.bind(events.hdResMediaUrl, fetchMediaUrlSuccess);
    hd.eventEmitter.bind(events.hdResVideoUrl, fetchVideoUrlSuccess);
    hd.eventEmitter.bind("hd_406_st_MEDIA_at_FETCH_AUDIO_URL", repeatRequestMediaUrl);

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/room-blackboard", function (S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var userService = services.user;
    var liveInfo = null;
    var currentCard = null;
    var inRoom = false;
    var blackboardImageTpl = null;
    var oldCard = null;
    var expandedCard = null;
    var speakerTpl = null;
    var blackboardProtocol = null;

    viewManager.on(events.hdviewchange, function (e) {
        if (e.prevVal == "room") {
            inRoom = false;
            liveInfo = null;
            removeBlackboard();
        }
        if (e.newVal == "room") {
            inRoom = true;
            liveInfo = viewManager.get("liveInfo");
        }
    });

    window.liveImageLoaded = function (img) {
        var naturalWidth = img.naturalWidth;
        var naturalHeight = img.naturalHeight;
        var wr = 260 / naturalWidth;
        var hr = 195 / naturalHeight;
        var r = Math.max(wr, hr);
        var w = Math.ceil(naturalWidth * r) + 2;
        var h = Math.ceil(naturalHeight * r) + 2;
        img.setAttribute("style", "width:" + w + "px;height:" + h + "px;margin-left:-" + (w / 2) + "px;margin-top:-" + (h / 2) + "px;");
        img.setAttribute("data-loaded", "yes");
        img.setAttribute("data-mini-width", w);
        img.setAttribute("data-mini-height", h);
        if (currentCard && img.src == currentCard.data) {
            S.one("#bb-notice").hide();
            S.one("#js-live-img-switch").hide();
            S.one("#bb-loading").hide();
            if (oldCard) {
                var tempCard = S.one("#live-img-id-" + oldCard.card_id);
                if (tempCard) {
                    tempCard.hide();
                }
            }
            img.removeAttribute("class");
        } else {
            if (img.parentNode) {
                img.parentNode.removeChild(img);
            }
        }
    };

    /** 刷新 小黑板 **/
    function refreshBlackboard(data) {
        var card = data.cards[0];
        oldCard = currentCard;
        switch (card.card_type) {
            case "TEXT":
                refreshNotice(card.data);
                break;
            case "IMAGE":
                refreshLiveImage(card);
                break;
        }
        currentCard = card;
    }

    function refreshNotice(text) {
        if (currentCard && currentCard.card_type == "IMAGE") {
            S.one("#live-img-id-" + currentCard.card_id).hide();
        }
        S.one("#js-live-img-switch").hide();
        S.one("#bb-loading").hide();
        S.one("#bb-img").hide();
        S.one("#bb-notice").show();
        S.one("#bb-notice-content").text(text);
    }

    function refreshLiveImage(card) {
        var src = card.data;
        var r = S.one("#live-img-id-" + card.card_id);
        S.one("#bb-img").show();
        if (r) {
            if (currentCard && currentCard.card_type == "IMAGE") {
                S.one("#live-img-id-" + currentCard.card_id).hide();
            }
            S.one("#bb-notice").hide();
            r.show();
        } else {
            if (currentCard) {
                S.one("#js-live-img-switch").show();
            }
            appendImage(card);
        }
    }

    function appendImage(card) {
        var tpl = "";
        if (!blackboardImageTpl) {
            blackboardImageTpl = document.getElementById("blackboard-img").innerHTML;
        }
        tpl = blackboardImageTpl;
        tpl = tpl.replace("{src}", card.data).replace("{card_id}", card.card_id);
        S.one("#bb-img").append(S.DOM.create(tpl));
    }

    /**
     * 添加主播头像
     * var speakerTpl = document.getElementById("blackboard-speaker-tpl").innerHTML;
     **/
    function addSpeaker(user_id) {
        S.one("#bb-no-host").hide();
        if (!speakerTpl) {
            speakerTpl = document.getElementById("tpl-host").innerHTML;
        }
        var tpl = speakerTpl;
        var userInfo = userService.getUser(user_id);
        tpl = tpl.replace("{user_id}", user_id);
        tpl = tpl.replace("{user_id}", user_id);
        if (userInfo) {
            tpl = tpl.replace("{avatar}", userInfo.avatar);
        } else {
            tpl = tpl.replace("{avatar}", hd.defaultUserAvatar);
        }
        S.one("#room-info").append(S.DOM.create(tpl));
    }

    function removeSpeaker(user_id) {
        var uavatar = S.one("#host-id-" + user_id);
        if (uavatar) {
            uavatar.remove();
        }
    }

    function noSpeaker() {
        S.one("#room-info").empty();
        S.one("#bb-no-host").show();
    }

    function renderSpeakerAvatar(user) {
        var avatar = S.one("#speaker-avatar-" + user.id);
        if (avatar) {
            avatar.attr("src", user.avatar);
        }
    }

    function removeBlackboard() {
        S.one("#bb-notice").show();
        S.one("#bb-img").empty().hide();
        S.one("#bb-notice-content").empty();
        S.one("#bb-notice").hide();
        if (!hd.isVideoLive) {
            S.one("#blackboard").removeClass("is-bb");
            S.one("#js-bb-mask").removeClass("is-bb");
        }
        S.one("#blackboard").removeClass("bb-show");
        S.one("#js-live-img-switch").hide();
        currentCard = null;
        S.one("#bb-container").hide();
    }

    /** 放大直播图片 或 直播内容=========================== **/
    function expandCard() {
        if (!currentCard) {
            return
        }
        expandedCard = currentCard;
        S.one("#expand-outer").show();
        if (currentCard.card_type == "IMAGE") {
            var img = S.DOM.create("<img>");
            img.setAttribute("src", currentCard.data);
            img.setAttribute("style", getExpandStyle());
            img.setAttribute("id", "expanded-img-" + expandedCard.card_id);
            S.one("#expand-outer").append(img);
        }

        if (currentCard.card_type == "TEXT") {
            S.one("#js-expand-notice").show();
            S.one("#js-outer-notice-text").text(currentCard.data);
        }

    }

    function getExpandStyle() {
        if (expandedCard && expandedCard.card_type == "IMAGE") {
            var miniImg = document.getElementById("live-img-id-" + expandedCard.card_id);
            if (miniImg) {
                var bw = document.body.clientWidth;
                var bh = document.body.clientHeight;
                var iw = miniImg.naturalWidth;
                var ih = miniImg.naturalHeight;
                var w = iw;
                var h = ih;
                if (iw > bw || ih > bh) {
                    var wr = bw / iw * 0.9;
                    var hr = bh / ih * 0.9;
                    var r = Math.min(wr, hr);
                    w = Math.floor(iw * r);
                    h = Math.floor(ih * r);
                }
                return "position:absolute;width:" + w + "px;height:" + h + "px;left:" + ((bw - w) / 2) + "px;top:" + ((bh - h) / 2) + "px;";
            }
        }
    }

    function hideExpandImage() {
        S.all("#expand-outer img").remove();
        S.one("#expand-outer").hide();
    }

    function hideExpandNotice() {
        S.one("#js-expand-notice").hide();
        S.one("#expand-outer").hide();
    }

    function hideBigBoard() {
        expandedCard = null;
        hideExpandImage();
        hideExpandNotice();
    }

    S.one("#icon-expand-close").on("click", hideBigBoard);
    S.one("#expand-bg").on("click", hideBigBoard);
    S.one("#bb-container").on("click", expandCard);

    function resizeExpandedImg() {
        if (!expandedCard || expandedCard.card_type != "IMAGE") {
            return
        }
        var img = document.getElementById("expanded-img-" + expandedCard.card_id);
        img.setAttribute("style", getExpandStyle());
    }

    window.onresize = S.buffer(resizeExpandedImg, 500);

    hd.eventEmitter.bind(events.hdResBlackboard, refreshBlackboard);
    hd.eventEmitter.bind(events.hdAddSpeakers, addSpeaker);
    hd.eventEmitter.bind(events.hdRemoveSpeaker, removeSpeaker);
    hd.eventEmitter.bind(events.hdNoSpeakers, noSpeaker);
    hd.eventEmitter.bind(events.hdUserInfo, renderSpeakerAvatar);

    hd.eventEmitter.bind(events.hdPubBlackboard, function (data) {
        if (!inRoom) {
            return
        }
        if (data.current_id === 0) {
            hd.isBlackboard = false;
            removeBlackboard();
        } else {
            hd.isBlackboard = true;
            blackboardProtocol = protocols.fetchBlackboard({
                "card_id": data.current_id,
                "live_id": liveInfo.id
            });
            socket.sendRequest(blackboardProtocol);
            S.one("#bb-container").show();
            S.one("#blackboard").addClass("is-bb").addClass('bb-show');
            S.one("#js-bb-mask").addClass("is-bb");
        }
    });

    hd.eventEmitter.bind("hd_406_st_BLACKBOARD_at_FETCH", function () {
        S.later(function () {
            if (inRoom) {
                socket.sendRequest(blackboardProtocol);
            }
        }, 2000)
    });

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/room", function(S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var liveInfo = null;
    var heartbeatProtocol = null;
    var hearbeatTimer = null;
    var inRoom = false;

    viewManager.on(events.hdviewchange, function(e) {
        if (e.prevVal == "room") {
            inRoom = false;
            if (hearbeatTimer) {
                hearbeatTimer.cancel();
                hearbeatTimer = null;
            }
            heartbeatProtocol = null;
            liveInfo = null;
            viewManager.set("liveInfo", null);
            return;
        }

        if (e.newVal == "room") {
            inRoom = true;
            liveInfo = viewManager.get("liveInfo");
            sendHeartBeat();
        }
    });

    function sendHeartBeat() {
        if (!inRoom) {
            return
        }
        if (!heartbeatProtocol) {
            heartbeatProtocol = protocols.generateHeartbeatProtocol(liveInfo.id);
        }
        socket.sendRequest(heartbeatProtocol);
        if (hearbeatTimer) {
            hearbeatTimer.cancel();
        }
        hearbeatTimer = S.later(sendHeartBeat, 20000);
    }

    function joinLive() {
        if (inRoom) {
            var info = viewManager.get("liveInfo");
            if (info) {
                socket.sendRequest(protocols.joinLive(info.id, info.password));
            }
        }
    }

    hd.eventEmitter.bind(events.hdResJoinedRoom, joinLive);
    hd.eventEmitter.bind(events.hdResJoinLiveSuccess, function() {
        if (inRoom) {
            sendHeartBeat();
        }
    });
    hd.eventEmitter.bind("hd_406_st_AUTH_at_JOIN_LIVE", function() {
        S.later(joinLive, 2000);
    });
    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view", "pkgPc/room-chat", "pkgPc/room-input", "pkgPc/player", "pkgPc/room-blackboard"]
});

KISSY.add("pkgPc/alert-layer", function(S, events) {
    function hideAlert() {
        S.one("#alert-layer").fadeOut(0.5,function(){
            S.one("#alert-layer").hide();
        });
    }
    var bufferedHideAlert = S.buffer(hideAlert, 1000);
    function showAlert(data) {
        S.one("#js-alert-content").text(data);
        S.one("#alert-layer").show();
        bufferedHideAlert();
    }
    function showPopup(data){
        S.one("#js-alert-content").text(data);
        S.one("#alert-layer").show();
    }
    function hidePopup(){
        hideAlert();
    }
    hd.eventEmitter.bind(events.hdAlert, showAlert);
    hd.eventEmitter.bind(events.hdShowPopup, showPopup);
    hd.eventEmitter.bind(events.hdHidePopup, hidePopup);
    return {}
}, {
    requires: ["pkgServices/events"]
});

KISSY.add("pkgPc/auth", function(S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var input = null;
    var liveInfo = null;
    var initialized = false;
    var inAuth = false;
    /**
     * view变化时
     */
    viewManager.on(events.hdviewchange, function(e) {
        if (e.prevVal == "auth") {
            inAuth = false;
            hd.eventEmitter.trigger(events.hdHidePopup);
            S.one("#js-auth-input").val("");
        }
        if (e.newVal == "auth") {
            inAuth = true;
            liveInfo = viewManager.get("liveInfo");
            if (!input) {
                input = document.getElementById("js-auth-input");
            }
            if (!initialized) {
                initialized = true;
                bindEvents();
            }
            S.later(function() {
                if (viewManager.get("name") == "auth") {
                    input.focus();
                }
            }, 230)
        }
    });

    function bindEvents() {
        S.one("#js-auth-bg").on("click", function() {
            input.focus();
        });
        S.one("#js-auth-input").on("keyup", function(e) {
            if (e.which == 13) {
                joinLive();
            }
        });
        S.one("#js-auth-btn").on("click", joinLive);

        S.one("#js-auth-cancel-btn").on("click", function() {
            viewManager.set("name", "channel");
        });
    }

    function joinLive() {
        var pwd = S.trim(S.one("#js-auth-input").val());
        if (pwd.length == 0) {
            hd.eventEmitter.trigger(events.hdAlert, "密码不能为空");
            return
        }
        liveInfo.password = pwd;
        hd.eventEmitter.trigger(events.hdShowPopup, "正在进入直播间");
        socket.sendRequest(protocols.joinLive(liveInfo.id, pwd));
    }

    hd.eventEmitter.bind(events.hdResJoinLiveSuccess, function() {
        if (inAuth) {
            S.later(function() {
                viewManager.set("name", "room");
            }, 10)
        }
    });

    hd.eventEmitter.bind(events.hdResJoinLiveFailed, function() {
        if (inAuth) {
            hd.eventEmitter.trigger(events.hdAlert, "密码错误");
        }
    });

    hd.eventEmitter.bind("hd_406_st_AUTH_at_JOIN_LIVE", function() {
        S.later(function() {
            if (inAuth) {
                socket.sendRequest(protocols.joinLive(liveInfo.id, liveInfo.password));
            }
        }, 2000);
    });

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/history-player", function(S, services, viewManager) {
    var events = services.events;
    var utils = services.utils;
    var currentRecord = {};
    var historyInfo = null;
    var indicatorX = 0;
    var offsetX = 0;
    var elapsedWidth = 0;
    var proxy = null;
    var indicator = S.one("#js-player-indicator");
    var progressPlay = S.one("#js-record-play-progress");
    var progressLoad = S.one("#js-record-load-progress");
    var pauseBtn = S.one("#iconh-pause-btn");
    var playBtn = S.one("#iconh-play-btn");
    var playerCurrentTime = S.one("#js-player-current-time");
    var playerBG = S.one("#js-iconh-bg");
    var isSeeking = false;
    var duration = 0;
    var w = 438;
    var updateCount = 0;
    var loadingStatus = S.one("#js-player-status");
    var audio = new Audio;
    var records = [];

    //TODO获取真实播放地址
    viewManager.on(events.hdviewchange, function(e) {
        if (e.prevVal == "history-player") {
            records = [];
            currentRecord = {};
            historyInfo = null;
            duration = 0;
            audio.pause();
            resetPlayerStatus();
        }
        if (e.newVal == "history-player") {
            initialize();
        }
    });

    // var records = [{
    //     start: 0,
    //     end: 56000,
    //     url: "http://hd-image-cdn.b0.upaiyun.com/static/1.mp3"
    // }, {
    //     start: 0,
    //     end: 52000,
    //     url: "http://hd-image-cdn.b0.upaiyun.com/static/2.mp3"
    // }, {
    //     start: 0,
    //     end: 50000,
    //     url: "http://hd-image-cdn.b0.upaiyun.com/static/3.mp3"
    // }];

    var eventList = ["canplay", "abort", "durationChange", "emptied", "ended", "error",
        "loadeddata", "loadedmetadata", "loadstart", "pause", "play",
        "playing", "ratechange", "seeked", "seeking", "stalled",
        "suspend", "timeupdate", "volumechange", "waiting"
    ];

    function listener(e) {
        if (e.type != "timeupdate") {
            hd.log("history-player-event = " + e.type);
        }
        switch (e.type) {
            case "loadstart":
                updateCount = 0;
                loadingStatus.show();
                break;
            case "loadedmetadata":
                //setPlayingTime(currentRecord.timebefore);
                break;

            case "emptied":
                // setPlayingTime(currentRecord.timebefore);
                // setBufferedPostion(currentRecord.timebefore);
                break;

            case "loadeddata":
                audio.currentTime = currentRecord.currentTime;
                break;

            case "pause":

                break;

            case "stalled":
                audio.load();
                break;

            case "ended":
                playerEnded();
                break;

            case "canplay":
                audio.play();
                break;

            case "error":
                audio.play();
                break;

            case "timeupdate":
                updateCount++;
                if (updateCount % 2 != 0) {
                    return;
                }

                if (isSeeking) {
                    return;
                }
                if (audio.buffered.length > 0) {
                    setBufferedPostion();
                }
                if ((audio.currentTime + 1) < currentRecord.currentTime) {
                    audio.currentTime = currentRecord.currentTime;
                    return
                }

                loadingStatus.hide();
                timeupdate();
                break;
        }
    }

    for (var j = 0; j < eventList.length; j++) {
        audio.addEventListener(eventList[j], listener);
    }

    function playerEnded() {
        if (currentRecord.index == records.length - 1) {
            resetPlayerStatus();
        } else {
            var index = currentRecord.index;
            var r = records[index];
            currentRecord.before += (r.end - r.start);
            index++;
            r = records[index];
            currentRecord.url = r.url;
            currentRecord.index = index;
            currentRecord.currentTime = 0;
            audio.src = r.url;
            audio.load();
        }
    }


    function resetPlayerStatus() {
        pauseBtn.hide();
        playBtn.css("display", "inline-block");
        playerBG.removeClass("playing");
        loadingStatus.hide();
        currentRecord.url = null;
        indicator.css("left", "0px");
        progressPlay.css("width", "0px");
        progressLoad.css("width", "0px");
        playerCurrentTime.text("00:00");
    }

    function setBufferedPostion() {
        var bt = Math.floor(audio.buffered.end(0) * 1000 + currentRecord.before);
        var left = bt / duration * 438;
        left = Math.min(left, 438);
        progressLoad.css("width", left + "px");
    }

    function timeupdate() {
        var text = utils.getRecordDuration(Math.floor(audio.currentTime * 1000 + currentRecord.before));
        playerCurrentTime.text(text);
        var left = (audio.currentTime * 1000 + currentRecord.before) / duration * 438;
        left = Math.min(Math.ceil(left), 438);
        indicator.css("left", left + "px");
        progressPlay.css("width", left + "px");
    }

    //js-record-indicator
    //js-record-play-progress
    //js-record-load-progress
    //================ 播放、暂停 =====================================
    function initialize() {
        historyInfo = viewManager.get("record");
        records = historyInfo.history_record_audio;
        S.one("#js-history-name").text(historyInfo.name);
        S.one("#js-history-play-times").text(historyInfo.play_count);
        S.each(records, function(r) {
            duration += (r.end - r.start);
        });
        S.one("#js-player-duration").text(utils.getRecordDuration(duration));
    }

    function reformRecord(left) {
        playerBG.addClass("playing");
        var t = duration * left / 438;
        var d = 0;
        var before = 0;
        for (var i = 0; i < records.length; i++) {
            var r = records[i];
            var d2 = (r.end - r.start);
            d += d2;
            if (d > t) {
                currentRecord.currentTime = (d2 - d + t) / 1000;
                playBtn.hide();
                pauseBtn.css("display", "inline-block");
                if (currentRecord.url == r.url) {
                    audio.currentTime = currentRecord.currentTime;
                    audio.play();
                    return;
                }
                currentRecord.url = r.url;
                currentRecord.index = i;
                currentRecord.before = before;
                play();
                return;
            }
            before += d2;
        }
    }

    function play() {
        audio.src = currentRecord.url;
        audio.currentTime = currentRecord.currentTime;
        audio.play();
    }

    playBtn.on("click", function() {
        playerBG.addClass("playing");
        playBtn.hide();
        pauseBtn.css("display", "inline-block");
        if (currentRecord.url) {
            audio.play();
            return;
        } else {
            currentRecord.url = records[0].url;
            currentRecord.currentTime = 0;
            currentRecord.index = 0;
            currentRecord.before = 0;
        }
        play();
    });

    pauseBtn.on("click", function() {
        audio.pause();
        pauseBtn.hide();
        playBtn.css("display", "inline-block");
        playerBG.removeClass("playing");
    });

    indicator.on("mousedown", function(e) {
        if (indicatorX === 0) {
            indicatorX = indicator.css("left");
            indicatorX = indicatorX.slice(0, indicatorX.length - 2);
            indicatorX = parseInt(indicatorX);
        }
        if (!proxy) {
            proxy = S.one("#js-player-indicator-proxy");
            proxy.on("mouseup", function() {
                if (elapsedWidth != 0) {
                    reformRecord(elapsedWidth);
                }
                offsetX = 0;
                indicatorX = 0;
                elapsedWidth = 0;
                proxy.hide();
                isSeeking = false;
            });
            proxy.on("mousemove", function(e) {
                if (offsetX === 0) {
                    offsetX = e.offsetX;
                } else {
                    isSeeking = true;
                    elapsedWidth = indicatorX + e.offsetX - offsetX;
                    indicator.css("left", elapsedWidth + "px");
                    progressPlay.css("width", elapsedWidth + "px");
                }
            });
        }
        proxy.show();
    });

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view"]
});

KISSY.add("pkgPc/history", function(S, services, viewManager) {
    var events = services.events;
    var socket = services.socket;
    var protocols = services.protocols;
    var utils = services.utils;
    var fetched = false;
    var fetchingID = null;
    var offset = 0;
    var historyRecords = [];
    var tplHistory = S.one("#tpl-history").html();
    var inHistory = false;

    viewManager.on(events.hdviewchange, function(e) {
        if (e.prevVal == "history") {
            inHistory = false;
            hd.eventEmitter.trigger(events.hdHidePopup);
        }
        
        if (e.newVal == "history") {
            inHistory = true;
            if (fetched) {
                return
            }
            offset= 0;
            socket.sendRequest(protocols.fetchHistory(offset));
        }
    });

    function renderHistory(data) {
        var records = data.published_record || [];
        var len = records.length;
        historyRecords = historyRecords.concat(records);

        if (historyRecords.length == 0) {
            fetched = true;
            S.one("#js-no-history").show();
            S.one("#js-history-spinner").hide();
            return
        }

        if (len >= 10) {
            offset += len;
            socket.sendRequest(protocols.fetchHistory(offset));
        } else {
            fetched = true;
            var fragment = document.createDocumentFragment();
            S.each(historyRecords, function(r){
                r.duration_text = utils.getRecordDuration(r.end - r.start);
                var s = S.substitute(tplHistory, r);
                fragment.appendChild(S.DOM.create(s));
            });
            S.one("#js-history-spinner").hide();
            S.one("#js-history-list").css("display","inline-block").append(fragment);
        }
    }

    S.one("#js-history-list").delegate("click", ".history-li", function(e) {
        var id = e.currentTarget.getAttribute("id");
        S.each(historyRecords, function(h) {
            if (h.id == id) {
                viewManager.set("record",h);
                if(h.history_record_audio){
                    viewManager.set("name","history-player");
                    return;
                }
                hd.eventEmitter.trigger(events.hdShowPopup,"加载音频地址...");
                socket.sendRequest(protocols.fetchRecordAudio(id));
            }
        })
    });
    
    hd.eventEmitter.bind(events.hdResRecordAudio, function(action_data){
        var record = viewManager.get("record");
        record.history_record_audio = action_data.history_record_audio;
        viewManager.set("name","history-player");
    });

    hd.eventEmitter.bind(events.hdResHistory, renderHistory);

    hd.eventEmitter.bind("hd_406_st_HISTORY_at_FETCH_LIST",function(){
        S.later(function(){
            socket.sendRequest(protocols.fetchHistory(offset));
        },2000)
    });

    return {}
}, {
    requires: ["pkgServices/services", "pkgPc/view", "pkgPc/history-player"]
});

var MicroEvent = function() {};

MicroEvent.prototype = {
    _events: {},
    bind: function(eventName, fct) {
        if (!this._events[eventName]) {
            this._events[eventName] = [];
        }
        this._events[eventName].push(fct);
    },
    unbind: function(eventName, fct) {
        if (!this._events[eventName]) {
            return
        }
        if (fct) {
            this._events[eventName].splice(this._events[eventName].indexOf(fct), 1);
        } else {
            delete this._events[eventName]
        }
    },
    trigger: function(eventName) {
        if (!this._events[eventName]) {
            return
        }
        for (var i = 0; i < this._events[eventName].length; i++) {
            this._events[eventName][i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    }
};
hd.eventEmitter = new MicroEvent();

hd.preventDefault = function(e) {
    e.preventDefault();
}

KISSY.ready(function() {
    KISSY.add("pkgPc/pc", function(S) {
        function transToEmoji(orgStr) {
            var decodeStr = punycode.ucs2.decode(orgStr);
            var ret = "";
            for (var key in decodeStr) {
                var code = decodeStr[key];
                if (code == 0x3001) {
                    ret += "、"
                } else if (code == 0x3002) {
                    ret += "。"
                } else if (code >= 0x1F000 || code >= 0x2702 && code <= 0x27B0 || code >= 0x2122 && code <= 0x3299) {
                    ret += trans(code);
                } else {
                    ret += punycode.ucs2.encode([code]);
                }
            }
            return ret;
        }

        function trans(code) {
            var transCode = code.toString(16);
            return "<span class='emoji emoji" + transCode + "'></span>"
        }

        hd.utils.transToEmoji = transToEmoji;

        return {}
    }, {
        requires: ["pkgPc/channel", "pkgPc/header", "pkgPc/live-cover", "pkgPc/room", "pkgPc/alert-layer", "pkgPc/auth", "pkgPc/history"]
    });


    KISSY.use("base,node,cookie,path,promise,uri,io,json,pkgPc/pc", function(S) {
        var $ = S.one;
        var timeoutID = null;
        var initialized = false;

        function showAvatar() {
            $("#hd-user").css("display", "inline-block");
            $("#top-avatar").attr("src", hd.userInfo.avatar);

            if(initialized){
                return;
            }
            initialized = true;

            S.one("#hd-user").on("mouseenter", function() {
                clearTimeout(timeoutID);
                $("#hd-user").addClass("active");
                $("#logout").css("display", "inline-block");
            }).on("mouseleave", function() {
                clearTimeout(timeoutID);
                timeoutID = setTimeout(function() {
                    $("#hd-user").removeClass("active");
                    $("#logout").hide();
                }, 1000)
            });

            $("#logout").on("mouseenter", function() {
                clearTimeout(timeoutID);
                $("#hd-user").addClass("active");
            }).on("mouseleave", function() {
                clearTimeout(timeoutID);
                timeoutID = setTimeout(function() {
                    $("#hd-user").removeClass("active");
                    $("#logout").hide();
                }, 1000)
            }).on("click", function() {
                var options = {
                    path: '/',
                    domain: "192.168.199.222"
                };
                S.Cookie.remove("user_id", ".confernce.com", "/");
                S.Cookie.remove("nickname", ".confernce.com", "/");
                S.Cookie.remove("userId", ".confernce.com", "/");
                S.Cookie.remove("userName", ".confernce.com", "/");
                S.Cookie.remove("avatar", ".confernce.com", "/");
                S.Cookie.remove("token", ".confernce.com", "/");
                S.Cookie.remove("qq_avatar", ".confernce.com", "/");
                S.Cookie.remove("qq_login_result", ".confernce.com", "/");
                $("#hd-user").removeClass("active").hide();
                $("#logout").hide();
                hd.login = false;
                hd.userInfo = {};
                hd.eventEmitter.trigger(hd.events.hdLogout);
            });

        }

        function init() {
			
            if (hd.login) {
                showAvatar();
            }
			/*
            $("#hd-logo").on("click", function() {
                window.open("http://www.confernce.com", "_blank");
            });*/

            var link = document.getElementById("link-embed");
            link.setAttribute("href", "http://www.confernce.com/hd/embed?webaddr=" + encodeURIComponent(hd.roomInfo.webaddr) + "&roomname=" + encodeURIComponent(hd.roomInfo.name));
            var l = document.getElementById("link-feedback");
            l.setAttribute("href", "http://www.confernce.com/hd/feedback?webaddr=" + encodeURIComponent(hd.roomInfo.webaddr) + "&roomname=" + encodeURIComponent(hd.roomInfo.name));

            hd.eventEmitter.bind(hd.events.hdLoginSuccess, showAvatar);
        }

        if (hd.inIframe) {
			
		} else {
            S.all(".not-in-iframe-el").show();
            S.one("#hd-logo").css("display", "none");
            S.one("#help-wrapper").css("display", "none");
            init();
        }
    });
});

