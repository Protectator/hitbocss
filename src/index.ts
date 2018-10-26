function renderImage (url) {
    const image = new Image();
    image.onload = () => {
      const style = `
        display: block !important;
        margin: 10px 0;
        font-size: ${image.height}px;
        padding: ${Math.floor(image.height/2)}px ${Math.floor(image.width/2)}px;
        background: url(${url});
        background-size: ${image.width}px ${image.height}px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      `
      console.log('%c', style)
    }
   
    image.src = url
  }
   
  console.image = renderImage

function getDimensions(element: HTMLElement) {

}

export function display(element: HTMLElement) {
  
}