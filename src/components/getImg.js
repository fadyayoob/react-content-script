export default function getImg(Img) {
    if (window.chrome) {
      return window.chrome.runtime.getURL(Img);
    }
  
     return Img;
  }
  