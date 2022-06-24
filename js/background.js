let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);

    chrome.contextMenus.create({
        "id": "DBHSearchBaiduContextMenu",
        title: '使用百度搜索：%s', // %s表示选中的文字
        contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
        // onclick: function(params)
        // {
        //     console.debug('search baidu');
        //     // 注意不能使用location.href，因为location是属于background的window对象
        //     chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
        // }
    });

    chrome.contextMenus.onClicked.addListener(
        function(params)
        {
            console.debug('search baidu');
            // 注意不能使用location.href，因为location是属于background的window对象
            chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
        }
    );
});


// async function getCurrentTab() {/* ... */}
// let tab = await getCurrentTab();

// chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['jquery.slim.min.js,context-menus.js']
// });





// var bp = chrome.extension.getBackgroundPage();
// var showImage;
// $(".j_block_img").click(function() {
//     chrome.storage.sync.get({showImage: true}, function(items) {
//         bp.showImage = !items.showImage;
//         if (bp.showImage) {
//             $(".j_block_img").text("屏蔽图片");
//         } else {
//             $(".j_block_img").text("显示图片");
//         }
//         var showText = bp.showImage ? "显示图片" : "屏蔽图片";
//         sendMessageToContentScript({cmd:'reload', value:'你好，' + showText}, function(response)
//         {
//             console.log('来自content的回复：'+response);
//         });
//
//         chrome.storage.sync.set({showImage: !items.showImage});
//     });
// });
//
// chrome.storage.sync.get({showImage: true}, function(items) {
//     showImage = items.showImage;
//     bp.showImage = items.showImage;
//     if (bp.showImage) {
//         $(".j_block_img").text("屏蔽图片");
//     } else {
//         $(".j_block_img").text("显示图片");
//     }
// });

// 发送到浏览器
// function sendMessageToContentScript(message, callback)
// {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
//     {
//         chrome.tabs.sendMessage(tabs[0].id, message, function(response)
//         {
//             if(callback) callback(response);
//         });
//     });
// }
// chrome.notifications.onClicked.addListener(function(notificationId, byUser) {
//     chrome.tabs.create({url: notificationId});
// });
// web请求监听，最后一个参数表示阻塞式，需单独声明权限：webRequestBlocking
// chrome.webRequest.onBeforeRequest.addListener(details => {
    // cancel 表示取消本次请求
    // if(!showImage && details.type == 'image') return {cancel: true};
    // 简单的音视频检测
    // 大部分网站视频的type并不是media，且视频做了防下载处理，所以这里仅仅是为了演示效果，无实际意义
    // if(details.type == 'media') {
    //     chrome.notifications.create(details.url, {
    //         type: 'basic',
    //         isClickable: true,
    //         iconUrl: 'img/icon.png',
    //         title: '检测到音视频',
    //         message: '音视频地址：' + details.url,
    //     });
    // }
// }, {urls: ["<all_urls>"]}, ["blocking"]);
