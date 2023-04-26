const wrapper = document.querySelector('.parallax');
const layers = document.querySelectorAll('.parallax__layer');

const handleParallax = (evt) => {
 //размер области просмотра
  const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
  const parallaxTopOffset = wrapper.getBoundingClientRect().top;

  // координаты центра экрана
  const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
  const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;
    
  layers.forEach((layer)=>{
    const layerSpeed = layer.dataset.speed;
    const x = - (coordX * layerSpeed).toFixed(5);
    const y = - (coordY * layerSpeed).toFixed(5);
    layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
  });
};

const reset = () => {
  layers.forEach((layer)=>{
      layer.removeAttribute('style');
  });
}
 
wrapper.addEventListener('mousemove', handleParallax);
wrapper.addEventListener('mouseout', reset);


function viewDiv(){
  document.getElementById("more-text-interesting").style.display='block';
  document.getElementsByClassName("button").style.display='none';
}