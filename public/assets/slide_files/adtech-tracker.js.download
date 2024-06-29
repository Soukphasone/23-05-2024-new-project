console.log("⌛️ TM in initiating...");

if (window.adtechGlobalVarCheck) {
} else {
    window.adtechGlobalVarCheck = true;
    adTechGetIpAddress();
    store_fbclid();

    document.addEventListener("DOMContentLoaded", function() {
      adTechCreateDebugPanel();
    });
}

var adTechAuth = false;
var adTechBaseUrl = "https://app.adtechthai.com";
var debugMode = false;
var pixelList = {};
var userData = {};
var adTechDomains = [];
var adtechFunctionCallCount = 0;
var initFacebookCalled = false;
var fbp = getFbp();
var fbc = getFbc();
var globalFbp = false;
var globalFbc = false;
var fbcRaw;
var ipAddress;
var autoSendCompleted = [];
var standardEvents = ['AddPaymentInfo', 'AddToCart', 'AddToWishlist', 'CompleteRegistration', 'Contact', 'CustomizeProduct', 'Donate', 'FindLocation', 'InitiateCheckout', 'Lead', 'PageView', 'Purchase', 'Schedule', 'Search', 'StartTrial', 'SubmitApplication', 'Subscribe', 'ViewContent'];
var eventsWithValue = ["Purchase", "AddToCart", "InitiateCheckout", "Lead", "CompleteRegistration", "trackCustom"];
var eventsWithoutValue = ["PageView", "Search", "Contact", "CustomizeProduct", "Donate", "FindLocation", "Schedule", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent", "ContactAchievement"];
var pixelInited = [];
var hasTmfire = false;
var hasPxfire = false;
var browserEventsSentCompleted = {};
var serverEventsSentCompleted = {};

if (window.location.href.indexOf("localhost") > -1
    || window.location.href.indexOf("127.0.0.1") > -1 ) {
    adTechBaseUrl = "http://127.0.0.1";
}
if (window.location.href.indexOf("localhost:8000") > -1
    || window.location.href.indexOf("127.0.0.1:8000") > -1) {
    adTechBaseUrl = "http://127.0.0.1:8000";
}
if (window.location.href.indexOf("uat.") > -1) {
    adTechBaseUrl = "https://uat.adtechthai.com";
}
if (window.location.href.indexOf("debug") > -1) {
    debugMode = true;
}
// var adTechDomain = null;

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

async function getData(url = '') {
        
    const response = await fetch(url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    return response.json();
}

async function adTechTrackerInit(publicKey) {
    const firstFiveDigitsOfpublicKey = publicKey.substring(0, 5);

    try {
        const data = await getData(`${adTechBaseUrl}/api/tracker/domain/${publicKey}`);

        if (data.success) {
            console.log("✅ " + firstFiveDigitsOfpublicKey + " is successfully loaded");

            adTechDomains[publicKey] = data.data;
            pixelList[publicKey] = data.data.pixel.pixel_number;

            if (!hasTmfire) {
                await installFacebookPixelTag(data.data.pixel.pixel_number);
                await bindEventAction(publicKey, data.data);
            }
        } else {
            switch (data.errorType) {
                case 'trialOrPackage':
                    console.error("❌ " + firstFiveDigitsOfpublicKey + " has an invalid trial or package");
                    break;
                default:
                    console.error("❌ " + firstFiveDigitsOfpublicKey + " is not found or other error");
                    break;
            }
        }
    } catch (error) {
        console.error("❌ " + firstFiveDigitsOfpublicKey + " encountered an error:", error);
    }
}


async function adTechGetIpAddress() {

    // if global variable ipAddress is not null, return ipAddress
    if (ipAddress != undefined && ipAddress) {
        return ipAddress;
    }

    return await getData(`https://monk.adtechthai.com`)
    .then((data) => {
        if (data.ip != undefined) {
            ipAddress = data.ip;
            return data.ip
        }
        return null
    });
}

var AdTechEventListenerList = {};
var AdTechEventTriggeredThisPage = {};
var AdTechDataEventList = {};
var AdTechPublicKey = {};

var pageviewBrowserSent = [];

async function bindEventAction(publicKey, adTechDomain) {
    if (adTechDomain) {

        adtechlog("BINDING EVENTS: "+publicKey);

        // var AdTechEventListenerList = []
        // var AdTechDataEventList = []
        if (AdTechPublicKey[publicKey] != undefined) {
            adtechlog("%c duplicate public key call", "color: red;")
            return;
        }
        AdTechEventListenerList[publicKey] = [];
        AdTechEventTriggeredThisPage[publicKey] = [];
        AdTechDataEventList[publicKey] = [];
        AdTechPublicKey[publicKey] = publicKey;

        var dateNow = getDateNow();
        let curUrl = window.location.href.split('?')[0];
        if (curUrl.charAt(curUrl.length - 1) === '/')
          curUrl = curUrl.slice(0, -1);
        curUrl = decodeURIComponent(curUrl);
        // console.log(curUrl);

        // if( !ipAddress )
        //     ipAddress = await adTechGetIpAddress();

        // console.log("fbc  : ", fbc);
        // console.log("fbp  : ", fbp);

        // justSendBrowserPageview(adTechDomain.pixel.pixel_number);
        
        // console.log("🏆 "+adTechDomain.pixel.pixel_number);
        autoSendGetParameterEvent(publicKey, ipAddress);

        for (let indEvtTrig = 0; indEvtTrig < adTechDomain.event_trigger.length; indEvtTrig++) {
            const elmEvtTrig = adTechDomain.event_trigger[indEvtTrig];
            adtechlog('elmEvtTrig at:', indEvtTrig);

            AdTechEventListenerList[publicKey].push(null);
            AdTechEventTriggeredThisPage[publicKey].push(null);

            // console.log(elmEvtTrig.is_enabled);
            if (!elmEvtTrig.is_enabled) {
                // console.log("in if !elmEvtTrig.is_enabled");
                continue;
            }

            var trigCond = JSON.parse(elmEvtTrig.trigger_conditions);
            // console.table(trigCond)
            // encode URL
            var findUrlCond = trigCond.find(x => {
              let url = x.url;
              if (url.charAt(url.length - 1) === '/') {
                url = url.slice(0, -1);
              }
              return (x.filter_type == "url_contains" && curUrl.indexOf(decodeURIComponent(url)) >= 0) || (x.filter_type == "url_match" && decodeURIComponent(url) == curUrl);
            });

            // console.table("findUrlCond", findUrlCond);
            
            if (!findUrlCond && trigCond.length > 0) {
                adtechlog("%c url is not contains", "color: red;")
                continue;
            }
            adtechlog("%c url is contains", "color: green;")

            // = modify for trackCustom
            if( elmEvtTrig.event_type == "trackCustom" ) {
                var event_name_to_insert = elmEvtTrig.custom_event_name;
            } else {
                var event_name_to_insert = elmEvtTrig.event_type;
            }

            var eventData = JSON.parse(elmEvtTrig.event_data)
            // generate 5 digits random number
            var eventId = "event.id." + dateNow + Math.floor(10000 + Math.random() * 90000);

            // AdTechDataEventList[publicKey].push({
            AdTechDataEventList[publicKey][indEvtTrig] = {
                "event_name": event_name_to_insert,
                "event_time": dateNow,
                "event_id": eventId,
                "event_source_url": curUrl,
                "action_source": "website",
                "user_data": {
                    "client_ip_address": ipAddress ? ipAddress : "11.22.33.44",
                    "client_user_agent": navigator.userAgent
                },
                "opt_out": false,
                "event_trig_id": elmEvtTrig.id,
                "pixel_id": adTechDomain.pixel.pixel_number
            };

            // console.log("🎈 fbc:", fbc);
            // console.log("🎈 fbp:", fbp);
            
            if( fbc )
                AdTechDataEventList[publicKey][indEvtTrig]["user_data"]["fbc"] = fbc;
            if( fbp )
                AdTechDataEventList[publicKey][indEvtTrig]["user_data"]["fbp"] = fbp;

            var customData = null;
            AdTechDataEventList[publicKey][indEvtTrig]["custom_data"] = {};
            
            // == inject custom data if is set
            // check if elmEvtTrig.event_type is not in eventsWithoutValue
            if( eventsWithoutValue.indexOf(elmEvtTrig.event_type) < 0
                && eventData.value) {
            // if( elmEvtTrig.event_type == "Purchase" && eventData.value ) {
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["value"] = parseInt(eventData.value);
            } else {
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["value"] = 0;
            }

            if( eventsWithoutValue.indexOf(elmEvtTrig.event_type) < 0
            && eventData.currency ) {
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["currency"] = eventData.currency;
            } else {
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["currency"] = "THB";
            }

            if( eventsWithoutValue.indexOf(elmEvtTrig.event_type) < 0
            && eventData.content_ids )
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["content_ids"] = eventData.content_ids;

            if( eventsWithoutValue.indexOf(elmEvtTrig.event_type) < 0
            && eventData.content_type )
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["content_type"] = eventData.content_type;

            if( eventsWithoutValue.indexOf(elmEvtTrig.event_type) < 0
            && eventData.content_name )
                AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]["content_name"] = eventData.content_name;

            if (customData != undefined) {
                if (customData) {
                    AdTechDataEventList[publicKey][indEvtTrig]["custom_data"] = customData;
                }
            }

            if ( isEmpty(AdTechDataEventList[publicKey][indEvtTrig]["custom_data"]) ) {
                delete AdTechDataEventList[publicKey][indEvtTrig].custom_data;
            }

            // = now receive custom data from pre-defined variables, if set

            if(AdTechDataEventList[publicKey][indEvtTrig] && !await checkFreqSession(AdTechDataEventList[publicKey][indEvtTrig], elmEvtTrig)) {
                continue
            }

            /****
             * [1] On page visit
             */
            if (elmEvtTrig.trigger_type == 'on_page_visit') {
                
                setTimeout(async() => {
                    butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);
                    await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                }, (parseInt(elmEvtTrig.trigger_object) * 1000));
            }

            /****
             * [2] On link clicked
            */
            if (elmEvtTrig.trigger_type == 'on_link_clicked') {
                // AdTechEventListenerList[publicKey][indEvtTrig] = document.getElementsByTagName('a').find(x => {x.href == elmEvtTrig.trigger_object})
                // AdTechEventListenerList[publicKey][indEvtTrig] = document.getElementsByTagName(`a[href='${elmEvtTrig.trigger_object}']`)
                AdTechEventListenerList[publicKey][indEvtTrig] = document.querySelectorAll(`a[href='${elmEvtTrig.trigger_object}']`)
                if (AdTechEventListenerList[publicKey][indEvtTrig]) {
                    for (var idxClass = 0; idxClass < AdTechEventListenerList[publicKey][indEvtTrig].length; idxClass++) {
                        AdTechEventListenerList[publicKey][indEvtTrig][idxClass].addEventListener('click', async function() {
                            butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);
                            await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                        });
                    }
                }
            }

            /****
             * [3] On CSS selector clicked
            */  
            if (elmEvtTrig.trigger_type == 'on_css_selector_clicked') {
                if (String(elmEvtTrig.trigger_object).indexOf('#') == 0) {
                    AdTechEventListenerList[publicKey][indEvtTrig] = document.getElementById(String(elmEvtTrig.trigger_object).replace('#', ''))
                    AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = false;
                    if (AdTechEventListenerList[publicKey][indEvtTrig]) {
                        AdTechEventListenerList[publicKey][indEvtTrig].addEventListener('click', async function() {
                            if( !AdTechEventTriggeredThisPage[publicKey][indEvtTrig] ) {
                                AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = true; 
                                butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);                           
                                await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                            }
                        });
                    }
                }
                if (String(elmEvtTrig.trigger_object).indexOf('.') == 0) {
                    AdTechEventListenerList[publicKey][indEvtTrig] = document.getElementsByClassName(String(elmEvtTrig.trigger_object).replace('.', ''))
                    AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = false;
                    if (AdTechEventListenerList[publicKey][indEvtTrig]) {
                        for (var idxClass = 0; idxClass < AdTechEventListenerList[publicKey][indEvtTrig].length; idxClass++) {
                            AdTechEventListenerList[publicKey][indEvtTrig][idxClass].addEventListener('click', async function() {
                                if( !AdTechEventTriggeredThisPage[publicKey][indEvtTrig] ) {
                                    AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = true;    
                                    butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);
                                    await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                                }
                            });
                        }
                    }
                }
            }

            /****
             * [4] On CSS selector mousehover
             */
            if (elmEvtTrig.trigger_type == 'on_css_selector_mousehover') {
                if (String(elmEvtTrig.trigger_object).indexOf('#') == 0) {
                    AdTechEventListenerList[publicKey][indEvtTrig] = document.getElementById(String(elmEvtTrig.trigger_object).replace('#', ''))
                    AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = false;

                    if (AdTechEventListenerList[publicKey][indEvtTrig]) {
                        AdTechEventListenerList[publicKey][indEvtTrig].addEventListener('mouseover', async function() {
                            if( !AdTechEventTriggeredThisPage[publicKey][indEvtTrig] ) {
                                AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = true;
                                butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);
                                await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                            }
                        });
                    }
                }
                if (String(elmEvtTrig.trigger_object).indexOf('.') == 0) {
                    AdTechEventListenerList[publicKey][indEvtTrig] = document.getElementsByClassName(String(elmEvtTrig.trigger_object).replace('.', ''))
                    AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = false;

                    if (AdTechEventListenerList[publicKey][indEvtTrig]) {
                        for (var idxClass = 0; idxClass < AdTechEventListenerList[publicKey][indEvtTrig].length; idxClass++) {
                            AdTechEventListenerList[publicKey][indEvtTrig][idxClass].addEventListener('mouseover', async function() {
                                if( !AdTechEventTriggeredThisPage[publicKey][indEvtTrig] ) {
                                    AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = true;
                                    butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);
                                    await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                                }
                            });
                        }
                    }
                }
            }

            /****
             * [5] on Scroll Depth
             */
            if (elmEvtTrig.trigger_type == 'on_page_scroll_depth') {
                AdTechEventListenerList[publicKey][indEvtTrig] = false;
                AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = false;

                document.addEventListener('scroll', async function(e) {

                    var scrollYvar = window.scrollY + window.innerHeight + 20;
                    var windowHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight || 0);

                    var scrollPercent = (scrollYvar / windowHeight) * 100;
                  
                    if (!AdTechEventListenerList[publicKey][indEvtTrig]
                        && parseInt(elmEvtTrig.trigger_object) <= scrollPercent
                        && !AdTechEventTriggeredThisPage[publicKey][indEvtTrig]) {
                        AdTechEventTriggeredThisPage[publicKey][indEvtTrig] = true;
                        butFirst_sendBrowserEvent(AdTechDataEventList[publicKey][indEvtTrig], pixelList[publicKey]);
                        await saveTrackerEvent(AdTechPublicKey[publicKey], AdTechDataEventList[publicKey][indEvtTrig]);
                        AdTechEventListenerList[publicKey][indEvtTrig] = true;
                    }
                });
            }
        }
    }
}

async function checkFreqSession(dataEvent, evtTrig) {
    adtechlog(dataEvent);
    var dateNowEventTime = parseInt(dataEvent.event_time)
    var event = JSON.parse(localStorage.getItem("tack_man_event_" + dataEvent.event_trig_id));

    // is_frequency_enabled --is enable
    // freq_trigger_limit --limit count
    // freq_time_value --time hour
    if (event) {
        if (!Array.isArray(event)) {
            return true
        }
        if (evtTrig.is_frequency_enabled) {
            // event = JSON.parse(event)
            var filterEventInTime = event.filter(x => dateNowEventTime - parseInt(x.event_time) <= (evtTrig.freq_time_value * 3600))
            if (filterEventInTime.length >= evtTrig.freq_trigger_limit) {
                return false
            }
            return true
        } else {
            return true
        }
    } else {
        return true
    }
}

async function saveFreqSession(dataEvent, eventTrigId) {
    var event = JSON.parse(localStorage.getItem("tack_man_event_" + eventTrigId));
    if (event) {
        if (!Array.isArray(event)) {
            return
        }
        event.push(dataEvent)
        localStorage.setItem("tack_man_event_" + eventTrigId, JSON.stringify(event));
    } else {
        localStorage.setItem("tack_man_event_" + eventTrigId, JSON.stringify([dataEvent]));
    }
}

async function saveTrackerEvent(publicKey, dataEvent) {

    const firstFiveDigitsOfpublicKey = publicKey.substring(0, 5);
    if ( dataEvent['pixel_id'] )
        var pixel_id = dataEvent['pixel_id'];
    else
        var pixel_id = pixelList[publicKey];

    dataEvent.event_time = String(parseInt(Date.now()/1000))
    var eventTrigId = dataEvent.event_trig_id
    delete dataEvent['event_trig_id'];
    delete dataEvent['pixel_id'];

    if(!globalFbp)
        thisFbp = await getFbp();
    else
        thisFbp = globalFbp;

    if(!globalFbc)
        thisFbc = await getFbc();
    else
        thisFbc = globalFbc;

    if (userData)
        dataEvent['user_data'] = userData;
    else
        dataEvent['user_data'] = {};

    dataEvent['user_data']['fbc'] = thisFbc;
    dataEvent['user_data']['fbp'] = thisFbp;
    dataEvent['user_data']['client_user_agent'] = navigator.userAgent;
    dataEvent['user_data']['client_ip_address'] = await adTechGetIpAddress();

    // console.log("[c]", thisFbc);
    // console.log("[p]", thisFbp);

    //= modify for custom event
    // if( dataEvent['event_name'] == "trackCustom" ) {
    //     dataEvent['event_name'] = dataEvent['custom_event_name'];
    // }
    // delete dataEvent['custom_event_name'];

    // = modify its time again, for more precision
    var dateNow = getDateNow();
    dataEvent['event_time'] = dateNow;

    // skip if this event is already sent, checked by pixel ID
    var tm_event_name = dataEvent.event_name;
    // if serverEventsSentCompleted[pixel_id] contains value of tm_event_name, then skip
    if( serverEventsSentCompleted[pixel_id] && serverEventsSentCompleted[pixel_id].includes(tm_event_name) ) {
        console.log("🥚 [Server][%c" + pixel_id + "%c] %c" + dataEvent.event_name + "%c is already sent, skipped", "color:green", "color:default", "color:orange", "color:default")
        return;
    }

    // push obj.event_name into serverEventsSentCompleted[pixel_id]
    if( !serverEventsSentCompleted[pixel_id] ) {
        serverEventsSentCompleted[pixel_id] = [];
    }
    serverEventsSentCompleted[pixel_id].push(tm_event_name);

    await postData(`${adTechBaseUrl}/api/tracker/domain/${publicKey}/fb`, { data: dataEvent })
    .then((data) => {
        if(data.success) {

            if( dataEvent?.custom_data?.value ) {
                console.log("%c🙋🏻‍♀️ [Server][%c" + firstFiveDigitsOfpublicKey + "%c][%c" + pixel_id + "%c]%c " + dataEvent.event_name + "%c is successfully sent with value: " + dataEvent.custom_data.value + " " + dataEvent.custom_data.currency, "color:inherit;", "color:pink;font-weight:bold;", "color:inherit;", "color:green;font-weight:bold;", "color:inherit;", "color:orange;", "color:inherit;");

            } else {
                console.log("%c🙋🏻‍♀️ [Server][%c" + firstFiveDigitsOfpublicKey + "%c][%c" + pixel_id + "%c]%c " + dataEvent.event_name + " is successfully sent", "color:inherit;", "color:pink;font-weight:bold;", "color:inherit;", "color:green;font-weight:bold;", "color:inherit;", "color:inherit;");
            }

            saveFreqSession(dataEvent, eventTrigId);
            // setTimeout(function(){
                // (just a slight delay to make sure that the server event reach the destination first, so Facebook will be prefer the serer event over browser event)
                // alsoSendBrowserEvent(dataEvent, pixel_id);
            // }, 800);
        } else {
        }
    });
}

async function savePixelPageEvent(pixel_page_id, pixel_number, dataEvent) {
    console.log("savePixelPageEvent");
    console.log("pixel_page_id", pixel_page_id);
    console.log("pixel_number", pixel_number);
    console.log("dataEvent", dataEvent);

    if ( dataEvent['pixel_id'] )
        var pixel_id = dataEvent['pixel_id'];
    else
        var pixel_id = pixel_number;

    dataEvent.event_time = String(parseInt(Date.now()/1000))
    var eventTrigId = dataEvent.event_trig_id
    delete dataEvent['event_trig_id'];
    delete dataEvent['pixel_id'];

    if(!globalFbp)
        thisFbp = await getFbp();
    else
        thisFbp = globalFbp;

    if(!globalFbc)
        thisFbc = await getFbc();
    else
        thisFbc = globalFbc;

    if (userData)
        dataEvent['user_data'] = userData;
    else
        dataEvent['user_data'] = {};

    dataEvent['user_data']['fbc'] = thisFbc;
    dataEvent['user_data']['fbp'] = thisFbp;
    dataEvent['user_data']['client_user_agent'] = navigator.userAgent;
    dataEvent['user_data']['client_ip_address'] = await adTechGetIpAddress();

    // = modify its time again, for more precision
    var dateNow = getDateNow();
    dataEvent['event_time'] = dateNow;

    // skip if this event is already sent, checked by pixel ID
    var tm_event_name = dataEvent.event_name;
    // if serverEventsSentCompleted[pixel_id] contains value of tm_event_name, then skip
    if( serverEventsSentCompleted[pixel_id] && serverEventsSentCompleted[pixel_id].includes(tm_event_name) ) {
        console.log("🥚 [Server][%c" + pixel_id + "%c] %c" + dataEvent.event_name + "%c is already sent, skipped", "color:green", "color:default", "color:orange", "color:default")
        return;
    }

    // push obj.event_name into serverEventsSentCompleted[pixel_id]
    if( !serverEventsSentCompleted[pixel_id] ) {
        serverEventsSentCompleted[pixel_id] = [];
    }
    serverEventsSentCompleted[pixel_id].push(tm_event_name);

    await postData(`${adTechBaseUrl}/api/pixelpage/save/${pixel_page_id}/${pixel_number}`, { data: dataEvent })
    .then((data) => {
        if(data.success) {

            if( dataEvent?.custom_data?.value ) {
                console.log("%c🙋🏻‍♀️ [Server][%c" + pixel_id + "%c]%c " + dataEvent.event_name + "%c is successfully sent with value: " + dataEvent.custom_data.value + " " + dataEvent.custom_data.currency, "color:inherit;", "color:pink;font-weight:bold;", "color:inherit;", "color:green;font-weight:bold;", "color:inherit;", "color:orange;", "color:inherit;");

            } else {
                console.log("%c🙋🏻‍♀️ [Server][%c" + pixel_id + "%c]%c " + dataEvent.event_name + " is successfully sent", "color:inherit;", "color:pink;font-weight:bold;", "color:inherit;", "color:green;font-weight:bold;", "color:inherit;", "color:inherit;");
            }

            saveFreqSession(dataEvent, eventTrigId);
            // setTimeout(function(){
                // (just a slight delay to make sure that the server event reach the destination first, so Facebook will be prefer the serer event over browser event)
                // alsoSendBrowserEvent(dataEvent, pixel_id);
            // }, 800);
        } else {
        }
    });
}

async function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();

    return "";
}

function getCookieNoneAsync(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();

    return "";
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function adtechlog(foo, bar = false) {
    if(!debugMode) return;
    if( bar ) console.log(foo, bar);
    else console.log(foo);
}

async function tmfire(publicKey, customObj) {

    console.log("📌 [ T M F I R E ] QUEUED: ", customObj);

    hasTmfire = true;

    const firstFiveDigitsOfpublicKey = publicKey.substring(0, 5);
    console.log("✅ "+firstFiveDigitsOfpublicKey+" is successfully loaded");

    await getData(`${adTechBaseUrl}/api/tracker/domain/${publicKey}`)
    .then((data) => {

        if(data.success) {
            adTechDomains[publicKey] = data.data;
            pixelList[publicKey] = data.data.pixel.pixel_number;
            installFacebookPixelTag(data.data.pixel.pixel_number, customObj)
            .then(async function(){
                var dateNow = getDateNow();
                const curUrl = window.location.href.split('?')[0];

                // = prepare event obj
                var localEventObj = customObj;
                var random8Digits = Math.floor(10000000 + Math.random() * 90000000);
                localEventObj["event_time"] = dateNow;
                localEventObj["event_id"] = "event.id." + dateNow + '.' + random8Digits;
                localEventObj["event_source_url"] = curUrl;
                localEventObj["action_source"] = "website";
                localEventObj["opt_out"] = false;

                if( !localEventObj["user_data"] ) {
                    localEventObj["user_data"] = {};
                }
                localEventObj["user_data"]["client_ip_address"] = ipAddress ? ipAddress : "11.22.33.44";
                localEventObj["user_data"]["client_user_agent"] = navigator.userAgent;

                if( fbc )
                    localEventObj["user_data"]["fbc"] = fbc;
                else {
                    var fbcRaw = await getFbc();
                    fbc = fbcRaw;
                    localEventObj["user_data"]["fbc"] = fbcRaw;
                }

                if( fbp )
                    localEventObj["user_data"]["fbp"] = await getFbp();

                // if localEventObj["event_name"] is null, set it to "Purchase"
                if( !localEventObj["event_name"] ) {
                    localEventObj["event_name"] = "Purchase";
                }

                if( !localEventObj["custom_data"] ) {
                    localEventObj["custom_data"] = {};
                }

                // if localEventObj["custom_data"]['value'] is null AND localEventObj is in array eventsWithValue, set it to 0
                if( !localEventObj["custom_data"]['value'] && eventsWithValue.includes(localEventObj["event_name"]) ) {
                    localEventObj["custom_data"]['value'] = 0;
                }
                // if localEventObj["custom_data"]['currency'] is null AND localEventObj['event_name'] is in array eventsWithValue, set it to 'thb'
                if( !localEventObj["custom_data"]['currency'] && eventsWithValue.includes(localEventObj["event_name"])) {
                    localEventObj["custom_data"]['currency'] = "THB";
                }

                console.log("🚀 T M F I R E D: ", localEventObj);

                // = fire
                butFirst_sendBrowserEvent(localEventObj, pixelList[publicKey]);
                saveTrackerEvent(publicKey, localEventObj);

                await bindEventAction(publicKey, data.data);
            });
        } else {
            // adTechDomain = null;
            console.error("❌ "+firstFiveDigitsOfpublicKey+" is not found");
            return false;
        }
    });
}

window.pxfire = async function(pixel_page_id, customObj) {

    console.log("📌 [ P X F I R E ] QUEUED: ", customObj);

    hasPxfire = true;

    // const firstFiveDigitsOfpublicKey = publicKey.substring(0, 5);
    // console.log("✅ "+firstFiveDigitsOfpublicKey+" is successfully loaded");

    await getData(`${adTechBaseUrl}/api/pixelpage/get_pixels/${pixel_page_id}`)
    .then((data) => {

        if(data.success) {

            // loop through data.pixels, and installFacebookPixelTag for each pixel
            // data.pixels is json, key as pixel_number, value as access token
            for (const [index, value] of Object.entries(data.pixels)) {
                // get array key index name
                const pixel_number = value.pixel_id;
                const access_token = value.access_token;
                // console.log('pixel_number', pixel_number);
                // console.log('access_token', access_token);
                // get array key index value
                installFacebookPixelTag(pixel_number, customObj)
                .then(async function(){
                    var dateNow = getDateNow();
                    const curUrl = window.location.href.split('?')[0];

                    // = prepare event obj
                    var localEventObj = customObj;
                    var random8Digits = Math.floor(10000000 + Math.random() * 90000000);
                    localEventObj["event_time"] = dateNow;
                    localEventObj["event_id"] = "event.id." + dateNow + '.' + random8Digits;
                    localEventObj["event_source_url"] = curUrl;
                    localEventObj["action_source"] = "website";
                    localEventObj["opt_out"] = false;

                    if( !localEventObj["user_data"] ) {
                        localEventObj["user_data"] = {};
                    }
                    localEventObj["user_data"]["client_ip_address"] = ipAddress ? ipAddress : "11.22.33.44";
                    localEventObj["user_data"]["client_user_agent"] = navigator.userAgent;

                    if( fbc )
                        localEventObj["user_data"]["fbc"] = fbc;
                    else {
                        var fbcRaw = await getFbc();
                        fbc = fbcRaw;
                        localEventObj["user_data"]["fbc"] = fbcRaw;
                    }

                    if( fbp )
                        localEventObj["user_data"]["fbp"] = await getFbp();

                    // if localEventObj["event_name"] is null, set it to "Purchase"
                    if( !localEventObj["event_name"] ) {
                        localEventObj["event_name"] = "Purchase";
                    }

                    if( !localEventObj["custom_data"] ) {
                        localEventObj["custom_data"] = {};
                    }

                    // if localEventObj["custom_data"]['value'] is null AND localEventObj is in array eventsWithValue, set it to 0
                    if( !localEventObj["custom_data"]['value'] && eventsWithValue.includes(localEventObj["event_name"]) ) {
                        localEventObj["custom_data"]['value'] = 0;
                    }
                    // if localEventObj["custom_data"]['currency'] is null AND localEventObj['event_name'] is in array eventsWithValue, set it to 'thb'
                    if( !localEventObj["custom_data"]['currency'] && eventsWithValue.includes(localEventObj["event_name"])) {
                        localEventObj["custom_data"]['currency'] = "THB";
                    }

                    console.log("🚀 P X F I R E D: ", localEventObj);

                    // = fire
                    butFirst_sendBrowserEvent(localEventObj, pixel_number);
                    await savePixelPageEvent(pixel_page_id, pixel_number, localEventObj);
                }); // end then
            }
        } else {
            // adTechDomain = null;
            // console.error("❌ "+firstFiveDigitsOfpublicKey+" is not found");
            // return false;
        }
    });
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function autoSendGetParameterEvent(publicKey, ipAddress) {

    var firstFiveDigitsOfpublicKey = publicKey.substring(0, 5);

    if( !findGetParameter('tm_event_name')
    && !findGetParameter('tm')
    && !findGetParameter('value')
    && !findGetParameter('purchase')
    )
        return false;

    if( findGetParameter('tm_event_name') ) {
        var tm_event_name = findGetParameter('tm_event_name');
        tm_event_name = correctEventNames(tm_event_name);
    }

    // if cookie name "tm_autosend_completed" is existed, skip
    if (getCookieNoneAsync("tm_autosend_completed_" + firstFiveDigitsOfpublicKey) && !findGetParameter('debug') ) {
        console.log("😋 skipping autoSendGetParameterEvent with publicKey "+publicKey+", already sent");
        return;
    }

    if (typeof autoSendCompleted[publicKey] !== 'undefined') {
        adtechlog("skiping autoSendGetParameterEvent with publicKey"+publicKey+", already sent");
        return;
    }

    // if there's GET parameter named 'value' or 'purchase'
    // for example, https://www.example.com/?value=1000
    // or https://www.example.com/?purchase=1000
    // make it a 'Purchase' event with that value
    if( findGetParameter('value') || findGetParameter('purchase') ) {
        var tm_event_name = 'Purchase';
        var tm_custom_value = findGetParameter('purchase') ? findGetParameter('purchase') : findGetParameter('value');
    }

    // GET parameter 'tm' will be a format like this
    // <tm_event_name>/<tm_event_value>/<param1>/<param2>/<param3>/ .. and so on ..
    // extract the 1st parameter to pass into tm_event_name
    // extract the 2nd parameter to pass into tm_event_value, if null, use 0
    // for the rest, store in variable tm_remaining
    if( findGetParameter('tm') ) {
        var tm = findGetParameter('tm');
        var tmArr = tm.split('/');

        if( tmArr.length < 2 )
            return false;

        var tm_event_name = correctEventNames(tmArr[0]);
        var tm_event_value = tmArr[1] ? tmArr[1] : 0;
        var tm_remaining = tmArr.slice(2);
    }

    var extracted_params = extractMagicLink(tm_remaining);
    if( extracted_params )
        console.log("🚀 extracted_params: ", extracted_params);

    // console.log("browserEventsSentCompleted", browserEventsSentCompleted);
    // console.log("Object.keys(browserEventsSentCompleted).length", Object.keys(browserEventsSentCompleted).length);
    // console.log("pixelList", pixelList);
    // console.log("pixelList[publicKey]", pixelList[publicKey]);
    // console.log("browserEventsSentCompleted[pixelList[publicKey]]", browserEventsSentCompleted[pixelList[publicKey]]);
    // if( browserEventsSentCompleted has key of pixelList[publicKey], and if value is the same as tm_event_name, skip

    setTimeout(function(){
        // = prepare
        var dateNow = getDateNow();
        const curUrl = window.location.href.split('?')[0];
        const random8Digits = Math.floor(10000000 + Math.random() * 90000000);

        var localEventObj = {};
        localEventObj["event_time"] = dateNow;
        localEventObj["event_id"] = "event.id." + dateNow + '.' + random8Digits;
        localEventObj["event_source_url"] = curUrl;
        localEventObj["action_source"] = "website";
        localEventObj["opt_out"] = false;

        localEventObj["user_data"] = {};
        localEventObj["user_data"]["client_user_agent"] = navigator.userAgent;
        localEventObj["user_data"]["client_ip_address"] = ipAddress;

        if(globalFbc)
            localEventObj["user_data"]["fbc"] = globalFbc;
        if(globalFbp)
            localEventObj["user_data"]["fbp"] = globalFbp;

        // = GET
        localEventObj['event_name'] = tm_event_name;

        // if tm_event_value is not null, and not 0, and contains only digit, set it to extracted_params['tm_custom_value']
        if( tm_event_value && tm_event_value != 0 && /^\d+$/.test(tm_event_value))
            extracted_params['tm_custom_value'] = tm_event_value;

        var loopForCustomParameters = {
            value: 'tm_custom_value',
            currency: 'tm_custom_currency',
            content_ids: 'tm_custom_content_ids',
            content_type: 'tm_custom_content_type',
            content_name: 'tm_custom_content_name'
        };
        localEventObj["custom_data"] = {};
        for (var key in loopForCustomParameters) {
            // console.log(findGetParameter(loopForCustomParameters[key]));
            if( findGetParameter(loopForCustomParameters[key] ) )
                localEventObj["custom_data"][key] = findGetParameter( loopForCustomParameters[key] );
            // also if extracted_params[value] is not null, set it to localEventObj["custom_data"][key]
            if( extracted_params?.[loopForCustomParameters?.[key]] )
                localEventObj["custom_data"][key] = extracted_params[loopForCustomParameters[key]];
        }

        if( tm_event_name == "Purchase") {
            if( !findGetParameter('tm_custom_currency') )
                localEventObj["custom_data"]["currency"] = "THB";
            else {
                localEventObj["custom_data"]["currency"] = findGetParameter('tm_custom_currency');
                // also if extracted_params['tm_custom_currency'] is not null, set it to localEventObj["custom_data"][key]
                if( extracted_params['tm_custom_currency'] )
                    localEventObj["custom_data"]["currency"] = extracted_params['tm_custom_currency'];
                
            }
            if( !localEventObj["custom_data"]['value']
            && !extracted_params?.['tm_custom_value'] )
                localEventObj["custom_data"]['value'] = 0;

            if (typeof tm_custom_value !== 'undefined' && tm_custom_value !== null)
                localEventObj["custom_data"]['value'] = tm_custom_value

        }

        if( localEventObj["custom_data"] == {} || localEventObj["custom_data"].length <= 0 )
            delete localEventObj["custom_data"];

        if( localEventObj["custom_data"] != {}
            && localEventObj["custom_data"]["value"]
            && !localEventObj["custom_data"]["currency"] )
        {
            localEventObj["custom_data"]["currency"] = "THB";
        }

        var loopForUserParameters = {
            em: 'tm_user_em',
            ph: 'tm_user_ph',
            fn: 'tm_user_fn',
            ln: 'tm_user_ln',
            db: 'tm_user_db',
            ge: 'tm_user_ge',
            ct: 'tm_user_ct',
            st: 'tm_user_st',
            zp: 'tm_user_zp',
            country: 'tm_user_country',
        };

        dont_send_user_data_by_these_events = ["PageView", "ViewContent"];

        for (var key in loopForUserParameters) {
            if( findGetParameter(loopForUserParameters[key])
                && dont_send_user_data_by_these_events.indexOf(tm_event_name) == -1 )
                localEventObj["user_data"][key] = findGetParameter( loopForUserParameters[key] );
                // also if extracted_params[value] is not null, set it to localEventObj["user_data"][key]
            if( extracted_params?.[loopForUserParameters[key]] ) {
                localEventObj["user_data"][key] = extracted_params[loopForUserParameters[key]];
            }
        }

        var pixel_number = pixelList[publicKey];
        localEventObj['pixel_id'] = pixel_number;

        console.log("🚀 autoSendGetParameterEvent ", localEventObj);

        // console.log("publicKey", publicKey);
        // console.log("pixelList", pixelList);
        // console.log("pixelList[publicKey]", pixelList[publicKey]);

        saveTrackerEvent(publicKey, localEventObj);
        butFirst_sendBrowserEvent(localEventObj, pixelList[publicKey]);        

        // autoSendCompleted[publicKey] = true;

        // set cookie name tm_autosend_completed to true for 30 minutes, using document.cookie
        var expirationTime = new Date(Date.now() + 30 * 60 * 1000); // Set the expiration time to 30 minutes from now
        document.cookie = 'tm_autosend_completed_' + firstFiveDigitsOfpublicKey +'=true; expires=' + expirationTime.toUTCString() + '; path=/'; // Set the cookie with an expiration time and path

    }, 1500);
}

async function store_fbclid() {
    var fbclid = findGetParameter('fbclid');
    // check if browser cookied named "_fbclid" is already set
    var fbclidCookie = await getCookie('_fbclid');
    if( fbclid && !fbclidCookie ) {
        setABrowserCookie('_fbclid', fbclid, 30);
        setABrowserCookie('_tmfbclid', fbclid, 30);
        console.log("✨ fbclid is stored", fbclid);
    }
    return fbclid;
}

function setABrowserCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

async function getFbc() {

    let cookieValue = false;

    // loop 10 times (200ms pause) to read cookie named '_fbc'
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Pause for 400ms before trying again
        cookieValue = document.cookie.match('(^|[^;]+)\\s*_fbc\\s*=\\s*([^;]+)');
        if (cookieValue !== null && cookieValue !== undefined) {
            cookieValue = cookieValue[2]; // Get the value of the cookie
            // if dom with id='fbc' is existed, insert the cookieValue as innerHTML
            globalFbc = cookieValue;
            var fbcDom = document.getElementById('fbc');
            if( fbcDom ) {
                fbcDom.innerHTML = cookieValue;
            }
            return cookieValue;
            break; // Stop the loop if the cookie value is found
        }
    }

    return cookieValue;
}

function butFirst_sendBrowserEvent(obj, pixel_id) {

    if (typeof fbq == 'function') {

        var dataToSendBrowserEvent = {};

        var indexToLoop = ['value', 'currency', 'content_ids', 'content_name', 'content_type'];

        // loop through obj[custom_data][indexToLoop], if it's not null, then add to dataToSendBrowserEvent
        for (var i = 0; i < indexToLoop.length; i++) {
            if (obj.custom_data[indexToLoop[i]] != null) {
                dataToSendBrowserEvent[indexToLoop[i]] = obj.custom_data[indexToLoop[i]];
            }
        }

        delete dataToSendBrowserEvent['client_ip_address'];
        delete dataToSendBrowserEvent['client_user_agent'];
        delete dataToSendBrowserEvent['fbc'];
        delete dataToSendBrowserEvent['fbp'];
        delete dataToSendBrowserEvent['user_data'];

        // console.log("🚀 Sending browser event ["+obj.event_name+"]: ", dataToSendBrowserEvent);

        // console.log('dataArray', dataArray);
        // console.log('dataToSendBrowserEvent', dataToSendBrowserEvent);

        // skip if this event is already sent, checked by pixel ID
        var tm_event_name = obj.event_name;
        if( browserEventsSentCompleted[pixel_id] && browserEventsSentCompleted[pixel_id].includes(tm_event_name) ) {
            console.log("🥚 [Browser][%c" + pixel_id + "%c] %c" + obj.event_name + "%c is already sent, skipped", "color:green", "color:default", "color:orange", "color:default")
            return;
        }

        var custom_event_indicator = '';
        if (standardEvents.indexOf(obj.event_name) !== -1) {
            fbq('trackSingle', pixel_id, obj.event_name, dataToSendBrowserEvent, { "eventID": obj.event_id });
            custom_event_indicator = '';
        } else {
            fbq('trackSingleCustom', pixel_id, obj.event_name, dataToSendBrowserEvent, { "eventID": obj.event_id });
            custom_event_indicator = '(custom event)';
        }

        // push obj.event_name into browserEventsSentCompleted[pixel_id]
        if( !browserEventsSentCompleted[pixel_id] ) {
            browserEventsSentCompleted[pixel_id] = [];
        }
        browserEventsSentCompleted[pixel_id].push(obj.event_name);

        if (obj?.custom_data?.value) {
            console.log("🙋🏻‍♂️ [Browser][%c" + pixel_id + "%c] %c" + obj.event_name + "%c is successfully sent " + custom_event_indicator + " with value: " + obj.custom_data.value + " " + obj.custom_data.currency, "color:green;", "color:inherit;", "color:orange;", "color:inherit;");

        } else {
            console.log("🙋🏻‍♂️ [Browser][%c" + pixel_id + "%c] %c" + obj.event_name + "%c is successfully sent " + custom_event_indicator, "color:green;", "color:inherit;", "color:orange;", "color:inherit;");
        }

        if( obj.custom_data.value )
            addDebugEvent(obj.event_name, obj.custom_data.value);
        else
            addDebugEvent(obj.event_name);
    }
}

function alsoSendBrowserEvent(obj, pixel_id) {
    // console.log("🚀 Sending browser event: ", obj);

    if( typeof fbq == 'function' ) {
        // send fbq() event using obj as parameter
        // fbq('setPixelId', "1184932339052354");
        // fbq('trackCustom', obj.event_name, obj.custom_data);

        var dataToSendBrowserEvent = {};
        var dataArray = [{
            "value": obj.custom_data.value,
            "currency": obj.custom_data.currency,
            "content_ids": obj.custom_data.content_ids,
            "content_name": obj.custom_data.content_name,
            "content_type": obj.custom_data.content_type
        }];
        // loop through dataArray and add to dataToSendBrowserEvent
        for (var i = 0; i < dataArray.length; i++) {
            for (var key in dataArray[i]) {
                if (dataArray[i].hasOwnProperty(key) && dataArray[i][key] != undefined) {
                    dataToSendBrowserEvent[key] = dataArray[i][key];
                }
            }
        }

        // console.log(obj);
        // console.log(dataToSendBrowserEvent);

        var custom_event_indicator = '';
        if (standardEvents.indexOf(obj.event_name) !== -1) {
            fbq('trackSingle', pixel_id, obj.event_name, dataToSendBrowserEvent, { "eventID": obj.event_id });
            custom_event_indicator = '';
        } else {
            fbq('trackSingleCustom', pixel_id, obj.event_name, dataToSendBrowserEvent, { "eventID": obj.event_id });
            custom_event_indicator = '(custom event)';
        }

        if( obj?.custom_data?.value ) {
            console.log("🙋🏻‍♂️ [Browser][%c" + pixel_id + "%c] %c" + obj.event_name + "%c is successfully sent "+custom_event_indicator+" with value: " + obj.custom_data.value + " " + obj.custom_data.currency, "color:green;", "color:inherit;", "color:orange;", "color:inherit;");

        } else {
            console.log("🙋🏻‍♂️ [Browser][%c" + pixel_id + "%c] %c" + obj.event_name + "%c is successfully sent " + custom_event_indicator, "color:green;", "color:inherit;", "color:orange;", "color:inherit;");
        }

        if( obj.custom_data.value )
            addDebugEvent(obj.event_name, obj.custom_data.value);
        else
            addDebugEvent(obj.event_name);
    }
}

function getDateNow() {
    return String(parseInt(Date.now() / 1000));
    // var localDate = Math.floor(Date.parse(new Date().toISOString() )/1000);
    // return localDate;
}

async function getFbp() {
    let cookieValue = null;
    for (let i = 0; i < 10; i++) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Pause for 400ms before trying again
            cookieValue = document.cookie.match('(^|[^;]+)\\s*fbp\\s*=\\s*([^;]+)');
            if (cookieValue !== null && cookieValue !== undefined) {
                cookieValue = cookieValue[2]; // Get the value of the cookie
                globalFbp = cookieValue;
                break; // Stop the loop if the cookie value is found
            }
    }
    // if there's DOM with id='fbp', change the innerHTML to the cookie
    if( document.getElementById('fbp') ) {
        document.getElementById('fbp').innerHTML = cookieValue;
    }
    return cookieValue;
}

// a function to wait fot 'ipAddress' global variable to be set (not undefined)
// wait for maximum 5 seconds, if it still undefined, return false
async function adtechWaitForIpAddress() {
    var waitTime = 0;
    while (typeof ipAddress == 'undefined' && waitTime < 5000) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Pause for 100ms before trying again
        waitTime += 100;
    }
    if( typeof ipAddress != 'undefined' ) {
        return ipAddress;
    } else {
        console.log("ipAddress is still undefined");
        return false;
    }
}

async function installFacebookPixelTag(pixel_number, customObj = null) {
    if( typeof fbq != 'function' ) {
        console.log("installing FB tag");
          // install Facebook Pixel tag
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        console.log("DONE");
    } else {
        console.log("NOT installing FB tag");
    }

    // search the whole document, both head and body, for string "fbq('init', pixel_number');"
    // if found, return
    // else, run fbq('init', pixel_number);
    var stringToSearch = "fbq('init', " + pixel_number;
    var wholeDocument = document.documentElement.innerHTML;
    if (wholeDocument.indexOf(stringToSearch) > -1) {
        console.log("❌ Pixel " + pixel_number + " is already initialized, skipping ...");
        return;
    } else {
        console.log("✅ Pixel " + pixel_number + " is not initialized, initializing ...");
        fbq('init', pixel_number);
        fbq('track', 'PageView');
    }

    // prepare userData
    userData = {
        client_user_agent: navigator.userAgent,
        client_ip_address: await adtechWaitForIpAddress()
    }

    var loopForUserParameters = {
        em: 'tm_user_em',
        ph: 'tm_user_ph',
        fn: 'tm_user_fn',
        ln: 'tm_user_ln',
        db: 'tm_user_db',
        ge: 'tm_user_ge',
        ct: 'tm_user_ct',
        st: 'tm_user_st',
        zp: 'tm_user_zp',
        country: 'tm_user_country',
    };

    for (var key in loopForUserParameters) {
        var value = findGetParameter(loopForUserParameters[key]);
        if( value ) {
            userData[key] = value;
        }
    }

    // override if got customObj
    var loopFromCustomObj = {
        fn: 'fn',
        ln: 'ln',
        em: 'em',
        ph: 'ph',
        ct: 'ct',
        st: 'st',
        zp: 'zp',
        country: 'country'
    };

    // if customObj[user_data] is defined and not null, then override user_data
    // console.log("customObj", customObj);
    if( typeof(customObj) != 'undefined'
    && typeof(customObj?.['user_data']) != 'undefined') {
        for (var key in loopFromCustomObj) {
            var value = customObj['user_data'][loopFromCustomObj[key]];
            if( value ) {
                userData[key] = value;
            }
        }
    }

    if( findGetParameter('tm') ) {
        // pass tm to extractMagicLink function
        var tm_array = findGetParameter('tm').split('/');
        var extracted_params = extractMagicLink(tm_array);
        // console.log("initial extracted_params", extracted_params);

        for (var key in loopForUserParameters) {
            var value = extracted_params[loopForUserParameters[key]];
            if( value ) {
                userData[key] = value;
            }
        }
    }

    // console.log("global fbp:", fbp);
    // console.log("global fbc:", fbc);
    var userDataToSend = {...userData};
    delete userDataToSend['fbc'];
    delete userDataToSend['fbp'];
    delete userDataToSend['client_user_agent'];
    delete userDataToSend['client_ip_address'];
    console.log("global userData:", userData);
    console.log("userDataToSend (browser):", userDataToSend);

    fbq('init', pixel_number, userDataToSend);
    // console.log("installFacebookPixelTag DONE");

    return true;
}

function majorCurrencies() {
    var majorCurrencies = {
        'USD': 'United States Dollar',
        'EUR': 'Euro',
        'JPY': 'Japanese Yen',
        'GBP': 'British Pound Sterling',
        'AUD': 'Australian Dollar',
        'CAD': 'Canadian Dollar',
        'CHF': 'Swiss Franc',
        'CNY': 'Chinese Yuan',
        'SEK': 'Swedish Krona',
        'NZD': 'New Zealand Dollar',
        'MXN': 'Mexican Peso',
        'SGD': 'Singapore Dollar',
        'HKD': 'Hong Kong Dollar',
        'NOK': 'Norwegian Krone',
        'KRW': 'South Korean Won',
        'TRY': 'Turkish Lira',
        'INR': 'Indian Rupee',
        'RUB': 'Russian Ruble',
        'BRL': 'Brazilian Real',
        'THB': 'Thai Baht',
        'ZAR': 'South African Rand'
    };

    return majorCurrencies;
}

function extractMagicLink(url) {
    // split / to array
    if( !url ) return;
    var params = url;

    var returns = {};

    // if params if not empty
    params.forEach(function(param) {
        // [1] if param consists of 5 digits, then it's a zip code
        if(param.length === 5 && !isNaN(param)) {
            returns['tm_user_zp'] = param;
        }

        // [2] if params is one of these: m,f,w,ชาย,หญิง,ช,ญ then it's a gender
        if(['m','f','w','ชาย','หญิง','ช','ญ'].includes(param)) {
            // if it's ชาย,ช, convert to m
            if(['ชาย','ช'].includes(param)) param = 'm';
            // if it's w,หญิง,ญ, convert to f
            if(['w', 'หญิง','ญ'].includes(param)) param = 'f';
            returns['tm_user_ge'] = param;
        }

        // [3] if param contains @, then it's an email
        if(param.indexOf('@') !== -1) {
            returns['tm_user_em'] = param;
        }

        // [4] if param contains +66, or it starts with '08','09','06' it's the phone number
        if(param.indexOf('+66') !== -1 || ['08','09','06'].includes(param.substring(0, 2))) {
            returns['tm_user_ph'] = param;
        }

        // [5] if param contains more than 4 characters, and not a digit, and does not have '@', then it's a full name
        if(param.length > 4 && isNaN(param) && param.indexOf('@') === -1) {
            var fullName = param;
            // replace '+' with space in fullName
            // all the strings before the first space, is first name
            // the remainings are last name
            var fullNameArray = fullName.split(' ');
            returns['tm_user_fn'] = fullNameArray[0];

            if(fullNameArray.length > 1) {   
                var lastName = '';
                for(var i = 1; i < fullNameArray.length; i++) {
                    lastName += fullNameArray[i] + ' ';
                }
                returns['tm_user_ln'] = lastName.trim();
            }
        }

        // [6] if param is 3 characters and is in major_currencies (case-insensitive), then it's a currency
        var major_currencies = majorCurrencies();
        if(param.length === 3 && Object.keys(major_currencies).includes(param.toUpperCase())) {
            returns['tm_custom_currency'] = param;
        }
    });

    return returns;
}

function correctEventNames(value) {
    const validValues = [
      'AddPaymentInfo', 'AddToCart', 'AddToWishlist', 'CompleteRegistration', 'Contact', 'CustomizeProduct',
      'Donate', 'FindLocation', 'InitiateCheckout', 'Lead', 'PageView', 'Purchase', 'Schedule',
      'Search', 'StartTrial', 'SubmitApplication', 'Subscribe', 'ViewContent'
    ];
  
    const lowercaseValue = value.toLowerCase();
  
    for (const validValue of validValues) {
      if (lowercaseValue === validValue.toLowerCase()) {
        return validValue;
      }
    }
  
    return value; // Return the original value if no correction is needed
  }

  function adTechCreateDebugPanel() {
    // Get current URL
    const currentUrl = new URL(window.location.href);
    
    // Check if ?debug GET parameter exists
    if (currentUrl.searchParams.has('debug')) {
      // Create a new <div> element
      const debugPanel = document.createElement('div');
      
      // Assign an id
      debugPanel.id = 'adtech_debug_panel';
      
      // Apply styles
      debugPanel.style.position = 'fixed';
      debugPanel.style.zIndex = '1000';
      debugPanel.style.backgroundColor = 'violet';
      debugPanel.style.color = 'white';
      debugPanel.style.left = '0px';
      debugPanel.style.bottom = '0px';
      debugPanel.style.fontSize = '10px';
      debugPanel.style.fontFamily = 'monospace';
      
      // Append the debug panel to the body
      document.body.appendChild(debugPanel);
    }
  }

  function addDebugEvent(eventName, eventValue) {

    // if there's no DOM with ID: adtech_debug_panel,
    // and there's no ?debug, return false
    if( !document.getElementById('adtech_debug_panel') && !findGetParameter('debug') )
        return false;

    // Get the debug panel by id
    const debugPanel = document.getElementById('adtech_debug_panel');
    
    // Check if the debug panel exists
    if (debugPanel) {
      // Create a new text node for the event name
      const eventTextNode = document.createTextNode(eventName);
      
      // Create a new <div> element to hold the event information
      const eventDiv = document.createElement('div');
      
      // Append the event name text node to the new div
      eventDiv.appendChild(eventTextNode);
      
      // Check if the optional eventValue exists and add it to the div
      if (eventValue !== undefined && eventValue !== null) {
        const valueTextNode = document.createTextNode(`: ${eventValue}`);
        eventDiv.appendChild(valueTextNode);
      }
      
      // Append the new event div to the debug panel
      debugPanel.appendChild(eventDiv);
      playBeep();
    }
  }

  function playBeep() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.2);
  }