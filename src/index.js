import './styles/style.scss';
import * as animationData from './scripts/animation.json';
// console.log(animationData.default)
const params = {
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: animationData.default
};

const anim = lottie.loadAnimation(params);
setTimeout(() => {
  anim.play()
  anim.onComplete = () => {
      anim.playSegments([120, 200], false);
  }
}, 2000)