// if('serviceWorker' in navigator){
//     console.log('SW available');
// }

if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js');
}